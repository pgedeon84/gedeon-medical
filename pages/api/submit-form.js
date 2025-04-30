import fetch from "node-fetch";
import FormData from "form-data";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { formData, screenshot } = req.body;

    // Construct the complete message as specified
    const consentMessage = `"By providing my consent below, I, ${formData.Patient_Name}, authorize Gedeon Medical Center to send SMS text messages to the phone number I have provided regarding my healthcare, including but not limited to appointment reminders, treatment information, and administrative updates. I understand that my consent authorizes the use of an automated messaging system, and that my consent is voluntary and not a condition for receiving medical treatment. This authorization applies to communications submitted via gedeonmedicalcenter.com."`;

    // 1. Submit form data to FormSubmit with all required fields
    const formPayload = {
      "Patient Name": formData.Patient_Name,
      "Date of Birth": formData.Date_Of_Birth,
      "Mobile Number": formData.Mobile_Number,
      "Consent Status": formData.Consent_Status,
      Signature: formData.Signature,
      Date: formData.Date,
      Message: consentMessage, // Your complete message included here
      _subject: "New SMS Consent Form - Gedeon Medical Center",
      _template: "table",
      _autoresponse: "Thank you for submitting your consent form",
      _replyto: "no-reply@gedeonmedicalcenter.com",
      _cc: "pgedeon84@gmail.com",
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

    // 2. Handle screenshot upload
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

        // 3. Send screenshot notification with patient reference
        await fetch("https://formsubmit.co/ajax/pgedeon84@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _subject: `SMS Consent Screenshot - ${formData.Patient_Name}`,
            _template: "table",
            "Patient Name": formData.Patient_Name,
            "Screenshot URL": screenshotUrl,
            Message: `Form screenshot for ${
              formData.Patient_Name
            } - ${consentMessage.substring(0, 50)}...`,
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
