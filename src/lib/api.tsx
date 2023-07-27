export const sendContactForm = async (data: {
  name: string;
  subject: string;
  email: string;
  number: string;
  message: string;
}) => {
  return await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
