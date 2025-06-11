import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import styles from "./dashboard-slider.module.css";

export type DASHBOARDSType = {
  className?: string;
};

const roles = ["Veli", "Servis Şoförü", "Öğrenci", "Rehberlik", "Öğretmen"];

const DASHBOARDS: NextPage<DASHBOARDSType> = ({ className = "" }) => {
  const sliderRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animateScroll = (target: number) => {
      const duration = 350;
      const from = slider.scrollLeft;
      const change = target - from;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        slider.scrollLeft = from + change * easeOut(progress);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const snapToCard = () => {
      const card = slider.querySelector(`.${styles.card}`) as HTMLElement | null;
      if (!card) return;
      const style = getComputedStyle(slider);
      const gap = parseInt(style.gap) || 0;
      const cardWidth = card.offsetWidth + gap;
      const index = Math.round(slider.scrollLeft / cardWidth);
      animateScroll(index * cardWidth);
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      slider.setPointerCapture(e.pointerId);
      startX = e.clientX;
      scrollStart = slider.scrollLeft;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      slider.scrollLeft = scrollStart - dx;
    };

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      snapToCard();
    };

    slider.addEventListener("pointerdown", handlePointerDown);
    slider.addEventListener("pointermove", handlePointerMove);
    slider.addEventListener("pointerup", endDrag);
    slider.addEventListener("pointercancel", endDrag);
    slider.addEventListener("pointerleave", endDrag);

    return () => {
      slider.removeEventListener("pointerdown", handlePointerDown);
      slider.removeEventListener("pointermove", handlePointerMove);
      slider.removeEventListener("pointerup", endDrag);
      slider.removeEventListener("pointercancel", endDrag);
      slider.removeEventListener("pointerleave", endDrag);
    };
  }, []);

  return (
    <section
      className={`w-[107rem] h-[19.263rem] flex flex-row items-start justify-start !pt-[1.188rem] !pb-[1.144rem] !pl-[13.563rem] !pr-[13.519rem] box-border relative z-[2] text-center text-[1.206rem] text-[#000] font-[Poppins] mq450:flex-col ${className}`}
    >
      <div className={styles.sliderContainer}>
        <ul className={styles.slider} ref={sliderRef}>
          {roles.map((role) => (
            <li key={role} className={styles.card}>
              {role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DASHBOARDS;
