// pages/api/verify-captcha.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { token, action } = req.body;

    if (!token) {
      return res.status(400).json({
        success: false,
        "error-codes": ["missing-input-response"],
      });
    }

    const apiKey = process.env.RECAPTCHA_ENTERPRISE_API_KEY;
    if (!apiKey) {
      console.error("RECAPTCHA_ENTERPRISE_API_KEY is missing");
      return res.status(500).json({
        success: false,
        "error-codes": ["missing-api-key"],
      });
    }

    const assessmentUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/${process.env.RECAPTCHA_PROJECT_ID}/assessments?key=${apiKey}`;

    const response = await fetch(assessmentUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: {
          token,
          expectedAction: action || "submit",
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
      }),
    });

    const data = await response.json();

    if (!data.tokenProperties?.valid) {
      console.error("reCAPTCHA Enterprise verification failed:", data);
      return res.status(200).json({
        success: false,
        score: data.riskAnalysis?.score || 0,
        "error-codes": ["invalid-token"],
      });
    }

    return res.status(200).json({
      success: true,
      score: data.riskAnalysis?.score || 0.9, // Default high score if missing
      action: data.tokenProperties?.action,
    });
  } catch (error) {
    console.error("reCAPTCHA Enterprise verification error:", error);
    return res.status(500).json({
      success: false,
      "error-codes": ["internal-error"],
    });
  }
}
