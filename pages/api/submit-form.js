import fetch from "node-fetch";
import FormData from "form-data";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { formData, screenshot } = req.body;

    // 1. Submit form data to FormSubmit
    const formResponse = await fetch(
      "https://formsubmit.co/ajax/pgedeon84@gmail.com",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: "New SMS Consent Form - Gedeon Medical Center",
          _screenshotStatus: screenshot ? "Processing" : "Not included",
        }),
      }
    );

    if (!formResponse.ok) throw new Error("FormSubmit request failed");

    // 2. Upload screenshot to ImgBB if exists
    let screenshotUrl = null;
    if (screenshot) {
      const form = new FormData();
      form.append("image", screenshot.split(",")[1]);

      const imgbbResponse = await fetch(
        "https://api.imgbb.com/1/upload?key=e1e695eb2ff00aec6123c1f03f34a7f4",
        { method: "POST", body: form }
      );

      const imgbbData = await imgbbResponse.json();
      if (!imgbbData.success) throw new Error("Screenshot upload failed");
      screenshotUrl = imgbbData.data.url;

      // 3. Send screenshot link
      await fetch("https://formsubmit.co/ajax/pgedeon84@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "SMS Consent Form Screenshot",
          message: `Screenshot for ${formData.Patient_Name}'s form: ${screenshotUrl}`,
        }),
      });
    }

    res.status(200).json({ success: true, screenshotUrl });
  } catch (error) {
    console.error("Submission error:", error);
    res.status(500).json({
      error: error.message,
      fullError:
        process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
}
