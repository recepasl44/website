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
      className={`h-20 w-full max-w-[120rem] mx-auto shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-[#fff] flex flex-col items-start justify-start !pt-[1.188rem] !pb-[1.188rem] !pl-[4.688rem] !pr-[4.688rem] box-border gap-2 text-left text-base text-[#27313c] font-[Poppins] ${className}`}
    >
      <div className="w-full flex flex-row items-center justify-between gap-[0.313rem]">
        <div className="flex flex-row items-center justify-start gap-[0.313rem]">
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
            className="h-5 w-[5.625rem] relative"
            loading="lazy"
            width={90}
            height={20}
            sizes="100vw"
            alt=""
            src="/ebtexbeyaztext.svg"
          />
        </div>
        <div className="hidden mq450:flex" onClick={() => setOpen(!open)}>
          <Image src="/hamburger.svg" alt="menu" width={24} height={24} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0.938rem] mq450:hidden">
        <div className="relative font-semibold">Anasayfa</div>
        <div className="relative font-semibold">Kurumsal</div>
        <div className="relative font-semibold">Çözümler</div>
        <div className="relative font-semibold">Ücretlendirme</div>
        <div className="relative font-semibold">Referanslarımız</div>
        <div className="relative font-semibold">SSS</div>
        <div className="relative font-semibold">Bize Ulaşın</div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2.5 text-center text-[0.813rem] text-[#9e5cf7] mq450:hidden">
        <SecondaryNavButton property1="default" tEXT="Giriş" />
        <SecondaryNavButton property1="default" tEXT="Demo" />
      </div>
      {open && (
        <div className="mt-2 w-full flex-col items-start justify-start gap-2.5 text-[#27313c] mq450:flex hidden">
          <div className="flex flex-col items-start gap-2.5 w-full">
            <div className="relative font-semibold">Anasayfa</div>
            <div className="relative font-semibold">Kurumsal</div>
            <div className="relative font-semibold">Çözümler</div>
            <div className="relative font-semibold">Ücretlendirme</div>
            <div className="relative font-semibold">Referanslarımız</div>
            <div className="relative font-semibold">SSS</div>
            <div className="relative font-semibold">Bize Ulaşın</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-2.5 text-[0.813rem] text-[#9e5cf7] mt-2">
            <SecondaryNavButton property1="default" tEXT="Giriş" />
            <SecondaryNavButton property1="default" tEXT="Demo" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
