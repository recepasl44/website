import type { NextPage } from "next";
import Image from "next/image";
import styles from "./component2.module.css";

export type Component2Type = {
  className?: string;

  /** Variant props */
  property1?: 1;
};

const Component2: NextPage<Component2Type> = ({
  className = "",
  property1 = 1,
}) => {
  return (
    <div
      className={[styles.component39, className].join(" ")}
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
          src="/planlanan-devler-1.svg"
        />
        <div className={styles.akllAnalizLlebilirBaWrapper}>
          <h3 className={styles.akllAnalizLlebilir}>
            Akıllı Analiz, Ölçülebilir Başarı
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Component2;
