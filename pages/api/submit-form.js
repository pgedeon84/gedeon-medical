import fetch from "node-fetch";
import FormData from "form-data";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { formData, screenshot } = req.body;

    // 1. First submit form data to FormSubmit with proper structure
    const formPayload = {
      // Include all form fields explicitly
      "Patient Name": formData.Patient_Name,
      "Date of Birth": formData.Date_Of_Birth,
      "Mobile Number": formData.Mobile_Number,
      "Consent Status": formData.Consent_Status,
      Signature: formData.Signature,
      Date: formData.Date,
      _subject: "New SMS Consent Form - Gedeon Medical Center",
      _template: "table", // Makes email more readable
      _autoresponse: "Thank you for submitting your consent form", // Optional auto-reply
      _replyto: "no-reply@gedeonmedicalcenter.com", // Optional reply-to address
      _cc: "pgedeon84@gmail.com", // CC to yourself
    };

    const formResponse = await fetch(
      "https://formsubmit.co/ajax/pgedeon84@gmail.com",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formPayload),
      }
    );

    if (!formResponse.ok) {
      const errorText = await formResponse.text();
      console.error("FormSubmit error response:", errorText);
      throw new Error("Form submission failed");
    }

    // 2. If screenshot exists, upload to ImgBB
    let screenshotUrl = null;
    if (screenshot) {
      const form = new FormData();
      form.append("image", screenshot.split(",")[1]);

      const imgbbResponse = await fetch(
        "https://api.imgbb.com/1/upload?key=e1e695eb2ff00aec6123c1f03f34a7f4",
        { method: "POST", body: form }
      );

      const imgbbData = await imgbbResponse.json();
      if (!imgbbData.success) {
        console.warn("Screenshot upload failed, continuing without it");
      } else {
        screenshotUrl = imgbbData.data.url;

        // 3. Send screenshot link separately
        await fetch("https://formsubmit.co/ajax/pgedeon84@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _subject: "SMS Consent Form Screenshot",
            _template: "table",
            "Patient Name": formData.Patient_Name,
            "Screenshot URL": screenshotUrl,
            Message: `Form screenshot for ${formData.Patient_Name}`,
          }),
        });
      }
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
