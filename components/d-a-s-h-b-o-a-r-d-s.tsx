"use client";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";

export type DASHBOARDSType = {
  className?: string;
};

const useSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

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
      const card = slider.querySelector<HTMLElement>(".card");
      if (!card) return;
      const gap = parseInt(getComputedStyle(slider).gap || "0", 10);
      const cardWidth = card.offsetWidth + gap;
      const index = Math.round(slider.scrollLeft / cardWidth);
      animateScroll(index * cardWidth);
    };

    const pointerDown = (e: PointerEvent) => {
      isDragging = true;
      slider.setPointerCapture(e.pointerId);
      startX = e.clientX;
      scrollStart = slider.scrollLeft;
    };

    const pointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      slider.scrollLeft = scrollStart - dx;
    };

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      snapToCard();
    };

    slider.addEventListener("pointerdown", pointerDown);
    slider.addEventListener("pointermove", pointerMove);
    slider.addEventListener("pointerup", endDrag);
    slider.addEventListener("pointercancel", endDrag);
    slider.addEventListener("pointerleave", endDrag);

    return () => {
      slider.removeEventListener("pointerdown", pointerDown);
      slider.removeEventListener("pointermove", pointerMove);
      slider.removeEventListener("pointerup", endDrag);
      slider.removeEventListener("pointercancel", endDrag);
      slider.removeEventListener("pointerleave", endDrag);
    };
  }, []);

  return sliderRef;
};

const DASHBOARDS: NextPage<DASHBOARDSType> = ({ className = "" }) => {
  const sliderRef = useSlider();

  return (
    <div
      ref={sliderRef}
      className={`w-full overflow-x-auto scroll-smooth snap-x snap-mandatory flex flex-row items-start justify-start !pt-[1.188rem] !pb-[1.144rem] !pl-[13.563rem] !pr-[13.519rem] box-border gap-4 text-center text-[1.206rem] text-[#000] font-[Poppins] mq450:flex-col ${className}`}
      style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="card h-[14.213rem] w-[26.875rem] flex-none shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.138rem] bg-[#fff] flex flex-col items-center justify-center pt-[0.344rem] pb-[0.969rem] px-[0.344rem] box-border gap-[0.969rem] snap-center">
        <div className="self-stretch h-[10.581rem] relative hidden" />
        <div className="relative font-medium">Veli</div>
      </div>
      <div className="card h-[14.213rem] w-[26.875rem] flex-none shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.138rem] bg-[#fff] flex flex-col items-center justify-center pt-[0.344rem] pb-[0.969rem] px-[0.344rem] box-border gap-[0.969rem] snap-center">
        <div className="self-stretch h-[10.588rem] relative hidden" />
        <div className="relative font-medium">Servis Şoförü</div>
      </div>
      <div className="card h-[16.931rem] w-[32.031rem] flex-none shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.163rem] bg-[#fff] flex flex-col items-center justify-center pt-[0.413rem] pb-[1.156rem] px-[0.413rem] box-border gap-[1.156rem] snap-center">
        <div className="self-stretch h-[12.619rem] relative hidden" />
        <div className="relative font-medium">Öğrenci</div>
      </div>
      <div className="card h-[16.931rem] w-[32.031rem] flex-none shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.163rem] bg-[#fff] flex flex-col items-center justify-center pt-[0.413rem] pb-[1.156rem] px-[0.413rem] box-border gap-[1.156rem] snap-center">
        <div className="self-stretch h-[12.619rem] relative hidden" />
        <div className="relative font-medium">Rehberlik</div>
      </div>
      <div className="card h-[19.263rem] w-[36.444rem] flex-none shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.188rem] bg-[#fff] flex flex-col items-center justify-center pt-[0.469rem] pb-[1.319rem] px-[0.469rem] box-border gap-[1.319rem] snap-center">
        <div className="self-stretch h-[14.356rem] relative hidden" />
        <div className="relative font-medium">Öğretmen</div>
      </div>
    </div>
  );
};

export default DASHBOARDS;
