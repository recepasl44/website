import type { NextPage } from "next";
import Image from "next/image";
import styles from "./component3.module.css";

export type Component3Type = {
  className?: string;

  /** Variant props */
  property1?: 1;
};

const Component3: NextPage<Component3Type> = ({
  className = "",
  property1 = 1,
}) => {
  return (
    <div
      className={[styles.component38, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.planlananDevlerParent}>
        <Image
          className={styles.planlananDevlerIcon}
          loading="lazy"
          width={47}
          height={47}
          sizes="100vw"
          alt=""
          src="/planlanan-devler-2.svg"
        />
        <div className={styles.uyumluGvenliVeModernWrapper}>
          <h3 className={styles.uyumluGvenliVe}>Uyumlu, Güvenli ve Modern</h3>
        </div>
      </div>
    </div>
  );
};

export default Component3;
