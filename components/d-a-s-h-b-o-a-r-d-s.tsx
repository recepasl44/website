"use client";

import { FC, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import {
  Navigation,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
} from "swiper/modules";

export interface RoleCard {
  id: number;
  label: string;
  image: string;
}

const roles: RoleCard[] = [
  { id: 1, label: "Veli",          image: "/image 15.png"   },
  { id: 2, label: "Öğrenci",       image: "/Frame 257.png"  },
  { id: 3, label: "Öğretmen",      image: "/Frame 260.png"  },
  { id: 4, label: "Rehberlik",     image: "/image 15 (2).png" },
  { id: 5, label: "Servis Şoförü", image: "/image 15 (1).png" },
];

const DASBOARDS: FC = () => {
  const [fullscreen, setFullscreen] = useState<RoleCard | null>(null);

  /* ESC ile modal kapat */
  const escClose = useCallback(
    (e: KeyboardEvent) => e.key === "Escape" && setFullscreen(null),
    []
  );
  useEffect(() => {
    document.addEventListener("keydown", escClose);
    return () => document.removeEventListener("keydown", escClose);
  }, [escClose]);

  return (
    <>
      <Swiper
        modules={[Navigation, Mousewheel, Keyboard, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,       // dönmesin
          stretch: 0,
          depth: 220,      // Z-mesafesi
          modifier: 1,
          scale: 0.85,     // merkez dışı kartların boyu
          slideShadows: false,
        }}
        centeredSlides
        slidesPerView="auto"
        spaceBetween={40}
        grabCursor
        mousewheel
        keyboard={{ enabled: true }}
        navigation
        className="w-full max-w-[110rem] h-[24rem] px-8 overflow-visible"
      >
        {roles.map((role) => (
          <SwiperSlide key={role.id} className="!w-[28rem]">
            <button
              type="button"
              onClick={() => setFullscreen(role)}
              className="dash-card w-full h-full rounded-md flex flex-col items-center justify-center gap-6 focus:outline-none"
            >
              <Image
                src={role.image}
                alt={role.label}
                width={220}
                height={220}
                className="object-contain"
              />
              <span className="text-xl font-medium text-black">
                {role.label}
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --------- FULLSCREEN MODAL --------- */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center"
          onClick={() => setFullscreen(null)}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-[90vw] max-h-[90vh] w-[42rem] h-[28rem] flex flex-col items-center justify-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fullscreen.image}
              alt={fullscreen.label}
              width={320}
              height={320}
              className="object-contain"
            />
            <span className="text-3xl font-semibold text-black">
              {fullscreen.label}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default DASBOARDS;
