import type { NextPage } from "next";
import Image from "next/image";
import styles from "./component1.module.css";

export type Component1Type = {
  className?: string;

  /** Variant props */
  property1?: 2;
};

const Component1: NextPage<Component1Type> = ({
  className = "",
  property1 = 1,
}) => {
  return (
    <div
      className={[styles.component40, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.featuresContainer}>
        <Image
          className={styles.planlananDevlerIcon}
          loading="lazy"
          width={47}
          height={47}
          sizes="100vw"
          alt=""
          src="/planlanan-devler.svg"
        />
        <div className={styles.processContainer}>
          <h3 className={styles.tmSrelerTek}>Tüm Süreçler Tek Platformda</h3>
        </div>
      </div>
    </div>
  );
};

export default Component1;
