"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import MesajGnder from "./mesaj-gnder";
import SecondaryNavButton from "./secondary-nav-button";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <>
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
        <a href="#anasayfa" className="relative font-semibold">Anasayfa</a>
        <a href="#kurumsal" className="relative font-semibold">Kurumsal</a>
        <a href="#cozumler" className="relative font-semibold">Çözümler</a>
        <a href="#ucretlendirme" className="relative font-semibold">Ücretlendirme</a>
        <a href="#referanslar" className="relative font-semibold">Referanslarımız</a>
        <a href="#sss" className="relative font-semibold">SSS</a>
        <a href="#iletisim" className="relative font-semibold">Bize Ulaşın</a>
      </div>
      <div className="flex flex-row items-center justify-center gap-2.5 text-center text-[13px] text-[#9e5cf7] mq450:hidden">
        <a href="https://panel.ebtex.com.tr" target="_blank" rel="noopener noreferrer">
          <SecondaryNavButton property1="default" tEXT="Giriş" />
        </a>
        <button onClick={() => setDemoOpen(true)}>
          <SecondaryNavButton property1="default" tEXT="Demo" />
        </button>
      </div>
      <button className="hidden mq450:block" onClick={() => setOpen(!open)}>
        <Image width={24} height={24} alt="menu" src="/hamburger.svg" />
      </button>
      {open && (
        <div className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg p-5 flex flex-col gap-4 mq450:flex">
          <button className="self-end mb-2" onClick={() => setOpen(false)}>
            ✕
          </button>
          <a href="#anasayfa" className="font-semibold" onClick={() => setOpen(false)}>Anasayfa</a>
          <a href="#kurumsal" className="font-semibold" onClick={() => setOpen(false)}>Kurumsal</a>
          <a href="#cozumler" className="font-semibold" onClick={() => setOpen(false)}>Çözümler</a>
          <a href="#ucretlendirme" className="font-semibold" onClick={() => setOpen(false)}>Ücretlendirme</a>
          <a href="#referanslar" className="font-semibold" onClick={() => setOpen(false)}>Referanslarımız</a>
          <a href="#sss" className="font-semibold" onClick={() => setOpen(false)}>SSS</a>
          <a href="#iletisim" className="font-semibold" onClick={() => setOpen(false)}>Bize Ulaşın</a>
          <div className="flex flex-row items-center justify-start gap-2.5 text-[13px] text-[#9e5cf7]">
            <a href="https://panel.ebtex.com.tr" target="_blank" rel="noopener noreferrer">
              <SecondaryNavButton property1="default" tEXT="Giriş" />
            </a>
            <button onClick={() => { setDemoOpen(true); setOpen(false); }}>
              <SecondaryNavButton property1="default" tEXT="Demo" />
            </button>
          </div>
        </div>
      )}
    </div>
    {demoOpen && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-4 max-w-full overflow-auto">
          <button className="self-end mb-2" onClick={() => setDemoOpen(false)}>
            ✕
          </button>
          <MesajGnder />
        </div>
      </div>
    )}
    </>
  );
};

export default Header;
