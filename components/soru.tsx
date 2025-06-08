import type { NextPage } from "next";
import Image from "next/image";

export type SoruType = {
  className?: string;

  /** Variant props */
  property1?: 0;
};

const Soru: NextPage<SoruType> = ({ className = "", property1 = 0 }) => {
  return (
    <section
      className={`w-[48.75rem] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[0.625rem] text-left text-[0.938rem] text-[#27313c] font-[Poppins] ${className}`}
      data-property1={property1}
    >
      <div className="self-stretch h-[3.125rem] rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between !pt-[1.062rem] !pb-[1.062rem] !pl-[1.562rem] !pr-[1.562rem] gap-[0rem]">
        <div className="relative font-medium">
          1.  Ebtex’i kullanabilmek için hangi cihazlara ihtiyacım var?
        </div>
        <Image
          className="h-[2.063rem] w-[2.063rem] relative rounded-[1.031rem]"
          loading="lazy"
          width={33}
          height={33}
          sizes="100vw"
          alt=""
          src="/ekle2.svg"
        />
      </div>
      <div className="self-stretch h-[3.125rem] rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between !pt-[1.062rem] !pb-[1.062rem] !pl-[1.562rem] !pr-[1.562rem] gap-[0rem]">
        <div className="relative font-medium">
          2.  Ebtex kullanımını nasıl öğrenebilirim?
        </div>
        <Image
          className="h-[2.063rem] w-[2.063rem] relative rounded-[1.031rem]"
          loading="lazy"
          width={33}
          height={33}
          sizes="100vw"
          alt=""
          src="/ekle2.svg"
        />
      </div>
      <div className="self-stretch h-[3.125rem] rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between !pt-[1.062rem] !pb-[1.062rem] !pl-[1.562rem] !pr-[1.562rem] gap-[0rem]">
        <div className="relative font-medium">
          3.  Ebtex için ödediğim ücretle sistemi mi satın alıyorum?
        </div>
        <Image
          className="h-[2.063rem] w-[2.063rem] relative rounded-[1.031rem]"
          loading="lazy"
          width={33}
          height={33}
          sizes="100vw"
          alt=""
          src="/ekle2.svg"
        />
      </div>
      <div className="self-stretch h-[3.125rem] rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between !pt-[1.062rem] !pb-[1.062rem] !pl-[1.562rem] !pr-[1.562rem] gap-[0rem]">
        <div className="relative font-medium">
          4.  Ebtex güncelleniyor mu, bunun için ek ücret ödemem gerekir mi?
        </div>
        <Image
          className="h-[2.063rem] w-[2.063rem] relative rounded-[1.031rem]"
          loading="lazy"
          width={33}
          height={33}
          sizes="100vw"
          alt=""
          src="/ekle2.svg"
        />
      </div>
      <div className="self-stretch h-[3.125rem] rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between !pt-[1.062rem] !pb-[1.062rem] !pl-[1.562rem] !pr-[1.562rem] gap-[0rem]">
        <div className="relative font-medium">
          5.  Ebtex’te kaç kullanıcı ekleyebilirim?
        </div>
        <Image
          className="h-[2.063rem] w-[2.063rem] relative rounded-[1.031rem]"
          loading="lazy"
          width={33}
          height={33}
          sizes="100vw"
          alt=""
          src="/ekle2.svg"
        />
      </div>
      <div className="self-stretch h-[3.125rem] rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between !pt-[1.062rem] !pb-[1.062rem] !pl-[1.562rem] !pr-[1.562rem] gap-[0rem]">
        <div className="relative font-medium">
          6.  Ebtex kullanırken destek alabilir miyim?
        </div>
        <Image
          className="h-[2.063rem] w-[2.063rem] relative rounded-[1.031rem]"
          loading="lazy"
          width={33}
          height={33}
          sizes="100vw"
          alt=""
          src="/ekle2.svg"
        />
      </div>
    </section>
  );
};

export default Soru;
