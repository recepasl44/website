import type { NextPage } from "next";
import Image from "next/image";
import SecondaryNavButton from "./secondary-nav-button";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`h-20 w-full max-w-[1920px] mx-auto shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-[#fff] flex flex-row items-start justify-start !pt-[19px] !pb-[19px] !pl-[75px] !pr-[75px] box-border gap-[286px] text-left text-base text-[#27313c] font-[Poppins] ${className}`}
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
      <div className="flex flex-row items-center justify-center gap-[15px]">
        <div className="relative font-semibold">Anasayfa</div>
        <div className="relative font-semibold">Kurumsal</div>
        <div className="relative font-semibold">Çözümler</div>
        <div className="relative font-semibold">Ücretlendirme</div>
        <div className="relative font-semibold">Referanslarımız</div>
        <div className="relative font-semibold">SSS</div>
        <div className="relative font-semibold">Bize Ulaşın</div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2.5 text-center text-[13px] text-[#9e5cf7]">
        <SecondaryNavButton property1="default" tEXT="Giriş" />
        <SecondaryNavButton property1="default" tEXT="Demo" />
      </div>
    </div>
  );
};

export default Header;
