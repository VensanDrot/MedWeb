import React, { useState } from "react";
import Calendar from "react-calendar";
import styles from "./index.module.css";
import add from "date-fns/add";
import format from "date-fns/format";
import { WorkTime } from "@/components/Data";

interface DateTime {
  justDate: Date | null;
  dateTime: Date | null;
}

const BookingPage = () => {
  const [date, setDate] = useState<DateTime>({
    justDate: null,
    dateTime: null,
  });

  console.log(date);

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;
    const beginning = add(justDate, { hours: WorkTime.Open });
    const end = add(justDate, { hours: WorkTime.Close });
    const interval = 1;

    const times = [];
    for (let i = beginning; i <= end; i = add(i, { hours: WorkTime.interval })) {
      times.push(i);
    }

    return times;
  };

  const times = getTimes();

  const checkEnvironment = () => {
    let base_url = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://example.com"; // https://v2ds.netlify.app

    return base_url;
  };

  const getInfo = async () => {
    const res = await fetch(checkEnvironment().concat("/api/getDates"));
    return res.text();
  };

  const data = getInfo();
  console.log(data);

  return (
    <div className="spacer">
      {date.justDate ? (
        <div>
          {times?.map((time, i) => (
            <div key={`time-${i}`}>
              <button type="button" onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}>
                {format(time, "kk:mm")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <Calendar
          minDate={new Date()}
          view="month"
          className={`REACT-CALENDAR spacer`}
          onClickDay={(date) => {
            setDate((prev) => ({ ...prev, justDate: date }));
          }}
        />
      )}
    </div>
  );
};

export default BookingPage;
