"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

export type DASHBOARDSType = {
  className?: string;
};

const items = [
  { title: "Veli", img: "/group-53-1.svg" },
  { title: "Servis Şoförü", img: "/group-53-2.svg" },
  { title: "Öğrenci", img: "/group-53-3.svg" },
  { title: "Rehberlik", img: "/group-53-4.svg" },
  { title: "Öğretmen", img: "/group-53-5.svg" },
];

const DASHBOARDS: NextPage<DASHBOARDSType> = ({ className = "" }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + items.length) % items.length);
  const next = () => setIndex((index + 1) % items.length);

  return (
    <section
      className={`w-full max-w-[107rem] mx-auto h-[19.263rem] flex flex-col items-center justify-center relative z-[2] text-center text-[#000] font-[Poppins] ${className}`}
    >
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map(({ title, img }) => (
            <div
              key={title}
              className="min-w-full flex flex-col items-center justify-center gap-4 px-4"
            >
              <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-white flex flex-col items-center justify-center gap-4 p-4">
                <Image src={img} alt="" width={72} height={72} />
                <div className="font-medium text-lg">{title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#5c67f7] text-white rounded-full w-8 h-8 flex items-center justify-center"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#5c67f7] text-white rounded-full w-8 h-8 flex items-center justify-center"
        aria-label="Next"
      >
        ›
      </button>
    </section>
  );
};

export default DASHBOARDS;
