"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./primary-nav-button.module.css";

export type PrimaryNavButtonType = {
  className?: string;
  tEXT?: string;

  /** Variant props */
  property1?: "default" | "click";

  /** Style props */
  primaryNavButtonAlignSelf?: CSSProperties["alignSelf"];
  primaryNavButtonWidth?: CSSProperties["width"];
};

const PrimaryNavButton: NextPage<PrimaryNavButtonType> = ({
  className = "",
  property1 = "default",
  primaryNavButtonAlignSelf,
  primaryNavButtonWidth,
  tEXT,
}) => {
  const primaryNavButtonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: primaryNavButtonAlignSelf,
      width: primaryNavButtonWidth,
    };
  }, [primaryNavButtonAlignSelf, primaryNavButtonWidth]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-property1={property1}
      style={primaryNavButtonStyle}
    >
      <div className={styles.text}>{tEXT}</div>
    </div>
  );
};

export default PrimaryNavButton;
