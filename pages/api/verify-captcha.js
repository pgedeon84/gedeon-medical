export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({
        success: false,
        error: "Missing reCAPTCHA token",
      });
    }

    // UPDATE THIS LINE WITH YOUR SECRET KEY:
    const verification = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY=${token}`,
      { method: "POST" }
    );

    const verificationData = await verification.json();

    if (!verificationData.success) {
      return res.status(400).json({
        success: false,
        score: verificationData.score || 0,
        error:
          verificationData["error-codes"]?.join(", ") || "Verification failed",
      });
    }

    return res.json({
      success: true,
      score: verificationData.score,
    });
  } catch (error) {
    console.error("CAPTCHA verification error:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}
