export const sendContactForm = async (data: any) => {
  return await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const sendDateRequest = async () => {
  return await fetch("/api/getDates");
};
