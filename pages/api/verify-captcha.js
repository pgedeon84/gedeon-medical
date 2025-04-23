export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Development-only test token
  if (
    process.env.NODE_ENV !== "production" &&
    req.body.token === "TEST_TOKEN"
  ) {
    console.warn("Using test token - DEVELOPMENT ONLY");
    return res.status(200).json({
      success: true,
      score: 0.9,
      action: req.body.action || "test",
      isTest: true,
    });
  }

  try {
    const { token, action } = req.body;
    if (!token) {
      return res.status(400).json({ error: "Token missing" });
    }

    // Log verification attempt
    console.log("reCAPTCHA verification request from:", {
      ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
      action: action || "unknown",
    });

    const assessmentUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/${process.env.RECAPTCHA_PROJECT_ID}/assessments?key=${process.env.RECAPTCHA_ENTERPRISE_API_KEY}`;

    const response = await fetch(assessmentUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: {
          token,
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          expectedAction: action || "submit_form",
        },
      }),
    });

    const data = await response.json();

    // Enhanced error logging
    if (!data.tokenProperties?.valid) {
      console.error("reCAPTCHA validation failed:", {
        reason: data.tokenProperties?.invalidReason,
        ip: req.headers["x-forwarded-for"],
        userAgent: req.headers["user-agent"],
      });
      return res.status(400).json({
        success: false,
        error: data.tokenProperties?.invalidReason || "Invalid token",
      });
    }

    // Score-based logging
    const score = data.riskAnalysis?.score || 0;
    if (score < 0.3) {
      console.warn("Low reCAPTCHA score detected:", {
        score,
        action: data.tokenProperties?.action,
        ip: req.headers["x-forwarded-for"],
      });
    }

    return res.status(200).json({
      success: true,
      score: score,
      action: data.tokenProperties?.action,
    });
  } catch (error) {
    console.error("reCAPTCHA verification error:", {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });
    return res.status(500).json({
      error: "Internal server error",
      reference: `ERR-${Date.now()}`,
    });
  }
}
