// pages/api/verify-captcha.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        success: false,
        "error-codes": ["missing-input-response"],
      });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY is missing");
      return res.status(500).json({
        success: false,
        "error-codes": ["missing-secret-key"],
      });
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    const response = await fetch(verifyUrl, { method: "POST" });
    const data = await response.json();

    if (!data.success) {
      console.error("reCAPTCHA verification failed:", data["error-codes"]);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return res.status(500).json({
      success: false,
      "error-codes": ["internal-error"],
    });
  }
}
