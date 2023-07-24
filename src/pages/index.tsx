import Link from "next/link";
import styles from "./index.module.css";
import GetStarted from "@/components/GetStarted";
import FeelBetter from "@/components/FeelBetter";

export default function Home() {
  return (
    <div>
      <section className={styles.main_section}>
        <div className={styles.main_text_box}>
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
      <FeelBetter />
      <GetStarted />
    </div>
  );
}
