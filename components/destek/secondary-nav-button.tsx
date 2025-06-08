import type { NextPage } from "next";
import styles from "./secondary-nav-button.module.css";

export type SecondaryNavButtonType = {
  className?: string;
  tEXT?: string;

  /** Variant props */
  property1?: string;
};

const SecondaryNavButton: NextPage<SecondaryNavButtonType> = ({
  className = "",
  property1 = "default",
  tEXT,
}) => {
  return (
    <button
      className={[styles.secondaryNavButton, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.text}>{tEXT}</div>
    </button>
  );
};

export default SecondaryNavButton;
