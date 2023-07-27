`use client`;

import React, { useState } from "react";
import Calendar from "react-calendar";
import styles from "./index.module.css";
import add from "date-fns/add";
import format from "date-fns/format";
import { WorkTime } from "@/components/Data";
import { getLockedDates } from "@/lib/api";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { getBookingInfo } from "@/lib/api";
import icon1 from "../../img/IVTherapyHydrationServices.svg";
import icon2 from "../../img/InjectionTherapyHydrationServices.svg";
import { json } from "stream/consumers";

interface DateTime {
  justDate: Date | null;
  dateTime: Date | null;
}

interface Customer {
  name: string;
  email: string;
  number: string;
  justDate: string;
  dateTime: string;
}

interface lockedDates {
  id: number;
  name: string;
  email: string;
  number: string;
  date: string;
  time: string;
}

const BookingPage = () => {
  const [lockedDates, setLockedDates] = useState<lockedDates[]>();
  const [data, setData] = useState<DateTime>({
    justDate: null,
    dateTime: null,
  });
  const [active, setActive] = useState<number | null>(null);

  const [customer, setCustomer] = useState<Customer>({
    name: "",
    email: "",
    number: "",
    justDate: "",
    dateTime: "",
  });

  const searchParams = useSearchParams();
  const product = searchParams?.get("product");
  const description = searchParams?.get("description");
  const icon = searchParams?.get("icon");
  const price = searchParams?.get("price");
  const type = searchParams?.get("type");

  const getTimes = () => {
    if (!data.justDate) return;

    const { justDate } = data;
    const beginning = add(justDate, { hours: WorkTime.Open });
    const end = add(justDate, { hours: WorkTime.Close });

    const times = [];
    for (let i = beginning; i <= end; i = add(i, { hours: WorkTime.interval })) {
      times.push(i);
    }

    return times;
  };

  const times = getTimes();

  //form Handler

  // get booked days and hours
  const getInfo = async (date: string) => {
    try {
      await getLockedDates(date)
        .then((res) => res.json())
        .then((json) => {
          console.log(json.data);
          setLockedDates(json.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // handle calendare choise
  const HandleDate = (date: Date) => {
    let finish = format(date, "yyyy-MMMM-dd");
    getInfo(finish);
    setCustomer((prev) => ({ ...prev, justDate: finish }));
    setData((prev) => ({ ...prev, justDate: date }));
  };

  /*check if time*/
  const CheckIfAvailable = (time: Date) => {
    /* let res = false;
    if (lockedDates) {
      lockedDates.map((e) => {
        if (e.time == format(time, "kk:mm")) {
          res = true;
        }
      });
    }
    return res;*/
  };

  const checkifActive = (i: number) => {
    if (i === active) {
      return "active";
    } else {
      return "";
    }
  };

  //form send handler

  const sendHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await getBookingInfo(customer)
        .then((res) => {
          res.json();
          console.log(res);
        })
        .then((json) => {
          console.log(json);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.product_container}>
        <Image src={icon === "true" ? icon1 : icon2} alt="Icon" />
        <div className={styles.product_description}>
          <h1>{product}</h1>
          <div>
            <h3>{type}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
          </div>
        </div>
      </div>
      <form
        action=""
        onSubmit={(e) => {
          sendHandler(e);
        }}
        className={styles.main_block}
      >
        <div className={styles.input_container}>
          <label htmlFor="input">Name:</label>
          <input
            type="text"
            value={customer.name}
            onChange={(e) => {
              setCustomer((prev) => ({ ...prev, name: e.target.value }));
            }}
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="input">Email:</label>
          <input
            type="email"
            value={customer.email}
            onChange={(e) => {
              setCustomer((prev) => ({ ...prev, email: e.target.value }));
            }}
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="input">Number:</label>
          <input
            type="text"
            value={customer.number}
            onChange={(e) => {
              setCustomer((prev) => ({ ...prev, number: e.target.value }));
            }}
            placeholder="Number"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            minLength={9}
            maxLength={10}
            required
          />
        </div>
        <Calendar
          minDate={new Date()}
          view="month"
          className={`REACT-CALENDAR`}
          onClickDay={(date) => {
            setActive(null);
            HandleDate(date);
          }}
          value={data.justDate}
        />
        {data.justDate && lockedDates ? (
          <div className={styles.time_box}>
            {times?.map((time, i) => (
              <div className={styles.date_buttons} key={`time-${i}`}>
                <button
                  type="button"
                  className={`${/*CheckIfAvailable(time) ? "disabled" : "" */} yellow  ${checkifActive(i)} `}
                  onClick={() => {
                    let ftime = format(time, "kk:mm");
                    setCustomer((prev) => ({ ...prev, dateTime: ftime }));
                    setActive(i);
                    setData((prev) => ({ ...prev, dateTime: time }));
                  }}
                >
                  {format(time, "kk:mm")}
                </button>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <button type="submit" className="yellow">
          Confirm booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
