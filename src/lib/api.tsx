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

/* */
export const getLockedDates = async (date: string) => {
  return await fetch("/api/getDates", {
    method: "POST",
    body: JSON.stringify(date),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const getProductsList = async () => {
  return await fetch("/api/getProducts", {
    method: "POST",
  });
};

export const getBookingInfo = async (data: {
  name: string;
  email: string;
  number: string;
  justDate: string;
  dateTime: string;
  product: string | null | undefined;
}) => {
  return await fetch("/api/bookDate", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
