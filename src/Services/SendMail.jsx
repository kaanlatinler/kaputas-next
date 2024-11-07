import api from "@/services/api/api";

const SendMail = async ({ formData }) => {
  try {
    const res = await api.post("/contacts/sendMailKaputas", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.success) {
      return { success: true, message: res.data.message }; // Returning an object with success and message
    } else {
      return { success: false, message: res.data.message }; // Returning an object with success and message
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, message: "Error submitting form" }; // Returning an object in case of error
  }
};

export default SendMail;
