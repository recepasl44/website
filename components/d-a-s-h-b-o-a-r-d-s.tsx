import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import styles from "./dashboard-slider.module.css";

export type DASHBOARDSType = {
  className?: string;
};

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
      const card = slider.querySelector(`.${styles.slide}`) as HTMLElement | null;
      if (!card) return;
      const gap = parseInt(getComputedStyle(slider).gap) || 0;
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
          <li className={styles.slide}>
            <div className="h-[14.213rem] w-[26.875rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.138rem] bg-[#fff] flex flex-col items-center justify-center !pt-[0.344rem] !pb-[0.969rem] !pl-[0.344rem] !pr-[0.344rem] box-border gap-[0.969rem]">
              <div className="self-stretch h-[10.581rem] relative hidden" />
              <div className="relative font-medium">Veli</div>
            </div>
          </li>
          <li className={styles.slide}>
            <div className="w-[26.875rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.138rem] bg-[#fff] flex flex-col items-center justify-center !pt-[0.344rem] !pb-[0.969rem] !pl-[0.344rem] !pr-[0.344rem] box-border gap-[0.969rem]">
              <div className="self-stretch h-[10.588rem] relative hidden" />
              <div className="relative font-medium">Servis Şoförü</div>
            </div>
          </li>
          <li className={styles.slide}>
            <div className="h-[16.931rem] w-[32.031rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.163rem] bg-[#fff] flex flex-col items-center justify-center !pt-[0.413rem] !pb-[1.156rem] !pl-[0.413rem] !pr-[0.413rem] box-border gap-[1.156rem]">
              <div className="self-stretch h-[12.619rem] relative hidden" />
              <div className="relative font-medium">Öğrenci</div>
            </div>
          </li>
          <li className={styles.slide}>
            <div className="h-[16.931rem] w-[32.031rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.163rem] bg-[#fff] flex flex-col items-center justify-center !pt-[0.413rem] !pb-[1.156rem] !pl-[0.413rem] !pr-[0.413rem] box-border gap-[1.156rem]">
              <div className="self-stretch h-[12.619rem] relative hidden" />
              <div className="relative font-medium">Rehberlik</div>
            </div>
          </li>
          <li className={styles.slide}>
            <div className="h-full w-[36.444rem] !!m-[0 important] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.188rem] bg-[#fff] flex flex-col items-center justify-center !pt-[0.469rem] !pb-[1.319rem] !pl-[0.469rem] !pr-[0.469rem] box-border gap-[1.319rem]">
              <div className="self-stretch h-[14.356rem] relative hidden" />
              <div className="relative font-medium">Öğretmen</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DASHBOARDS;
