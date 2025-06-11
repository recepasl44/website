"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component2.module.css";

export type FrameComponentType = {
  className?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  itemsContainerHeight?: CSSProperties["height"];
  sorularnzInBuradayzWidth?: CSSProperties["width"];
  sorularnzInBuradayzDisplay?: CSSProperties["display"];
  bizimleLetiimeGeinWidth?: CSSProperties["width"];
  bizimleLetiimeGeinDisplay?: CSSProperties["display"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  frameDivWidth,
  frameDivAlignSelf,
  itemsContainerHeight,
  sorularnzInBuradayzWidth,
  sorularnzInBuradayzDisplay,
  bizimleLetiimeGeinWidth,
  bizimleLetiimeGeinDisplay,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivWidth, frameDivAlignSelf]);

  const itemsContainerStyle: CSSProperties = useMemo(() => {
    return {
      height: itemsContainerHeight,
    };
  }, [itemsContainerHeight]);

  const sorularnzInBuradayzStyle: CSSProperties = useMemo(() => {
    return {
      width: sorularnzInBuradayzWidth,
      display: sorularnzInBuradayzDisplay,
    };
  }, [sorularnzInBuradayzWidth, sorularnzInBuradayzDisplay]);

  const bizimleLetiimeGeinStyle: CSSProperties = useMemo(() => {
    return {
      width: bizimleLetiimeGeinWidth,
      display: bizimleLetiimeGeinDisplay,
    };
  }, [bizimleLetiimeGeinWidth, bizimleLetiimeGeinDisplay]);

  return (
    <div className={[styles.inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.itemsContainerWrapper} style={frameDiv1Style}>
          <div className={styles.itemsContainer} style={itemsContainerStyle}>
            <div className={styles.card} />
            <div className={styles.bizeUlan}>Bize Ulaşın</div>
          </div>
        </div>
        <div className={styles.bodyTitlesDescriptionParent}>
          <div className={styles.bodyTitlesDescription}>
            <h3
              className={styles.sorularnzInBuradayz}
              style={sorularnzInBuradayzStyle}
            >
              Sorularınız İçin Buradayız!
            </h3>
          </div>
          <div
            className={styles.bizimleLetiimeGein}
            style={bizimleLetiimeGeinStyle}
          >
            Bizimle İletişime Geçin, Sorularınızı Hızla Yanıtlayıp Çözümler
            Üretelim!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
