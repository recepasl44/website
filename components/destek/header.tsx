import type { NextPage } from "next";
import Image from "next/image";
import SecondaryNavButton from "./secondary-nav-button";
import styles from "./header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <Image
            className={styles.headerebtexMaviLogoIcon}
            loading="lazy"
            width={32}
            height={32}
            sizes="100vw"
            alt=""
            src="/headerebtexmavilogo.svg"
          />
          <Image
            className={styles.ebtexBeyazTextIcon}
            loading="lazy"
            width={90}
            height={20}
            sizes="100vw"
            alt=""
            src="/ebtexbeyaztext.svg"
          />
        </div>
      </div>
      <div className={styles.navigationLinksWrapper}>
        <div className={styles.navigationLinks}>
          <div className={styles.anasayfa}>Anasayfa</div>
          <div className={styles.anasayfa}>Kurumsal</div>
          <div className={styles.anasayfa}>Çözümler</div>
          <div className={styles.anasayfa}>Ücretlendirme</div>
          <div className={styles.anasayfa}>Referanslarımız</div>
          <div className={styles.anasayfa}>SSS</div>
          <div className={styles.anasayfa}>Bize Ulaşın</div>
        </div>
      </div>
      <div className={styles.secondaryNav}>
        <SecondaryNavButton property1="default" tEXT="Giriş" />
        <SecondaryNavButton property1="default" tEXT="Demo" />
      </div>
    </header>
  );
};

export default Header;
