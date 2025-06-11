import type { NextPage } from "next";
import Image from "next/image";
import Arkaplan from "./arkaplan";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  onBack?: () => void;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "", onBack }) => {
  return (
    <section className={[styles.backButtonParent, className].join(" ")}>
      <div className={styles.backButton} onClick={onBack}>
        <Image
          className={styles.okIcon}
          loading="lazy"
          width={17.7}
          height={13.3}
          sizes="100vw"
          alt=""
          src="/ok@2x.png"
        />
        <h3 className={styles.ebtexiKefeteGeri}>EBTEX’i Keşfet’e geri dön</h3>
      </div>
      <div className={styles.arkaplanParent}>
        <Arkaplan />
        <div className={styles.modllerimizWrapper}>
          <h1 className={styles.modllerimiz}>Modüllerimiz</h1>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
