import Link from "next/link";
import styles from "./index.module.css";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  var email = process.env.NEXT_PUBLIC_EMAIL;
  var pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

  return (
    <div>
      <section className={styles.main_section}>
        <div className={styles.main_text_box}>
          {email} , {pass}
          <h1>Wellness, Infused</h1>
          <p>
            At HydratioNation IV, our customized IV vitamin infusions deeply nourish and replenish for immediate
            results.
          </p>
          <Link href="#" className="yellow">
            BOOK NOW
          </Link>
        </div>
      </section>
      <GetStarted />
    </div>
  );
}
