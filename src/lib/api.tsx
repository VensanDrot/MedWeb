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

/* */
export const getLockedDates = async (date: string) => {
  console.log(date);
  return await fetch("/api/getDates", {
    method: "POST",
    body: JSON.stringify(date),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const getBookingInfo = async (data: {
  name: string;
  email: string;
  number: string;
  justDate: string;
  dateTime: string;
}) => {
  console.log(data);
  return await fetch("/api/bookDate", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
