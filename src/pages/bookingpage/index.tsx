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
import icon3 from "../../img/Spin.svg";

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
  product: string | null | undefined;
}

interface lockedDates {
  id: number;
  name: string;
  email: string;
  number: string;
  date: string;
  time: string;
}

interface responseData {
  date: string;
  hours: string;
  message: string;
}

const BookingPage = () => {
  //variables
  const [serverRes, setServerRes] = useState<responseData>();
  const [lockedDates, setLockedDates] = useState<lockedDates[]>();
  const [error, setError] = useState("");
  const [data, setData] = useState<DateTime>({
    justDate: null,
    dateTime: null,
  });
  // queries for data on the page
  const searchParams = useSearchParams();
  const product = searchParams?.get("product");
  const description = searchParams?.get("description");
  const icon = searchParams?.get("icon");
  const price = searchParams?.get("price");
  const type = searchParams?.get("type");
  const [active, setActive] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [customer, setCustomer] = useState<Customer>({
    name: "",
    email: "",
    number: "",
    justDate: "",
    dateTime: "",
    product: product,
  });

  //console.log(customer);

  //handling calendar data
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
          setLockedDates(json);
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

  //check if time is free and if it's not expired
  const CheckIfAvailable = (time: Date) => {
    const now = new Date();
    let hoursPassed = now.getHours() + ":" + now.getMinutes();

    let res = false;
    if (lockedDates?.length !== 0 && lockedDates) {
      lockedDates.map((e) => {
        if (e.time == format(time, "kk:mm")) {
          res = true;
        }
      });
    }
    if (format(time, "yyyy-MMMM-dd") === format(now, "yyyy-MMMM-dd")) {
      if (format(time, "kk:mm") <= hoursPassed) res = true;
    }
    return res;
  };

  // check if time is active
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
    setCustomer((prev) => ({ ...prev, product: searchParams?.get("product") }));
    setLoading(true);

    if (
      !customer ||
      !customer.name ||
      !customer.dateTime ||
      !customer.email ||
      !customer.justDate ||
      !customer.number ||
      !customer.product
    ) {
      setLoading(false);
      return setError("Some data is missing");
    } else {
      setError("");
      try {
        await getBookingInfo(customer)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setServerRes(data);
          });
      } catch (error) {
        console.log(error);
      }

      setActive(null);
      setCustomer({
        name: "",
        email: "",
        number: "",
        justDate: "",
        dateTime: "",
        product: product,
      });
      setData({
        justDate: null,
        dateTime: null,
      });

      await getInfo(customer.justDate);
      setLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      {/* Product description */}
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
      <h1 className="error text_center">{error}</h1>
      {serverRes ? (
        <div className={styles.response}>
          <h1 className={serverRes.message !== "You are successfully booked!" ? "error" : ""}>{serverRes.message}</h1>
          <h3 hidden={serverRes.message !== "You are successfully booked!"}>
            Reservation date: {serverRes.date} at {serverRes.hours}
          </h3>

          <p hidden={serverRes.message !== "You are successfully booked!"}>
            We will contact you shortly to confirm your reservation
          </p>
          <p hidden={serverRes.message !== "You are successfully booked!"}>Thank you for chosing us!</p>
        </div>
      ) : (
        ""
      )}
      <form
        action=""
        onSubmit={(e) => {
          sendHandler(e);
        }}
        className={styles.main_block}
      >
        {/* Customer data inputs */}
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

        {/* Chosing date */}

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
        {/* Time chose box */}

        {data.justDate && lockedDates ? (
          <div className={styles.time_box}>
            {times?.map((time, i) => (
              <div className={styles.date_buttons} key={`time-${i}`}>
                <button
                  type="button"
                  className={`${CheckIfAvailable(time) ? "disabled" : ""} yellow  ${checkifActive(i)} `}
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
        {/* Loading icon */}
        {data.justDate && !lockedDates ? <Image src={icon3} alt="loading" height={100} /> : ""}
        <button type="submit" className={` ${loading ? "disabled button_disabled" : "yellow"}`}>
          {loading ? <Image src={icon3} height={100} alt="loading" /> : "Confirm booking"}
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
