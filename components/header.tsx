"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import SecondaryNavButton from "./secondary-nav-button";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`h-20 w-full shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-[#fff] flex flex-row items-center justify-between !pt-[19px] !pb-[19px] !pl-[75px] !pr-[75px] box-border gap-8 text-left text-base text-[#27313c] font-[Poppins] ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[5px]">
        <Image
          className="h-8 w-8 relative"
          loading="lazy"
          width={32}
          height={32}
          sizes="100vw"
          alt=""
          src="/headerebtexmavilogo.svg"
        />
        <Image
          className="h-5 w-[90px] relative"
          loading="lazy"
          width={90}
          height={20}
          sizes="100vw"
          alt=""
          src="/ebtexbeyaztext.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-[15px] mq450:hidden">
        <div className="relative font-semibold">Anasayfa</div>
        <div className="relative font-semibold">Kurumsal</div>
        <div className="relative font-semibold">Çözümler</div>
        <div className="relative font-semibold">Ücretlendirme</div>
        <div className="relative font-semibold">Referanslarımız</div>
        <div className="relative font-semibold">SSS</div>
        <div className="relative font-semibold">Bize Ulaşın</div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2.5 text-center text-[13px] text-[#9e5cf7] mq450:hidden">
        <SecondaryNavButton property1="default" tEXT="Giriş" />
        <SecondaryNavButton property1="default" tEXT="Demo" />
      </div>
      <button className="hidden mq450:block" onClick={() => setOpen(!open)}>
        <Image width={24} height={24} alt="menu" src="/hamburger.svg" />
      </button>
      {open && (
        <div className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg p-5 flex flex-col gap-4 mq450:flex">
          <button className="self-end mb-2" onClick={() => setOpen(false)}>
            ✕
          </button>
          <a className="font-semibold">Anasayfa</a>
          <a className="font-semibold">Kurumsal</a>
          <a className="font-semibold">Çözümler</a>
          <a className="font-semibold">Ücretlendirme</a>
          <a className="font-semibold">Referanslarımız</a>
          <a className="font-semibold">SSS</a>
          <a className="font-semibold">Bize Ulaşın</a>
          <div className="flex flex-row items-center justify-start gap-2.5 text-[13px] text-[#9e5cf7]">
            <SecondaryNavButton property1="default" tEXT="Giriş" />
            <SecondaryNavButton property1="default" tEXT="Demo" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
