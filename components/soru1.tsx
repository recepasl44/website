import type { NextPage } from "next";
import Image from "next/image";

export type Soru1Type = {
  className?: string;

  /** Variant props */
  property1?: 0;
};

const Soru1: NextPage<Soru1Type> = ({ className = "", property1 = 0 }) => {
  return (
    <section
      className={`w-[48.75rem] flex flex-col items-center justify-center gap-[0.625rem] text-left text-[0.938rem] text-[#27313c] font-[Poppins] ${className}`}
      data-property1={property1}
    >
      <div className="self-stretch h-[3.125rem] rounded-[10px] bg-[#fff] border-[#e6eff3] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between !pt-[1.062rem] !pb-[1.062rem] !pl-[1.562rem] !pr-[1.562rem] gap-[0rem]">
        <div className="relative font-medium">
          7.  Ebtex diğer sistemlerle entegre olabilir mi?
        </div>
        <Image
          className="h-[2.063rem] w-[2.063rem] relative rounded-[16.5px]"
          loading="lazy"
          width={33}
          height={33}
          sizes="100vw"
          alt=""
          src="/ekle2.svg"
        />
      </div>
      <div className="self-stretch h-[3.125rem] rounded-[10px] bg-[#fff] border-[#e6eff3] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between !pt-[1.062rem] !pb-[1.062rem] !pl-[1.562rem] !pr-[1.562rem] gap-[0rem]">
        <div className="relative font-medium">
          8.  Ebtex güvenli mi, bilgilerim kaybolur mu?
        </div>
        <Image
          className="h-[2.063rem] w-[2.063rem] relative rounded-[16.5px]"
          loading="lazy"
          width={33}
          height={33}
          sizes="100vw"
          alt=""
          src="/ekle2.svg"
        />
      </div>
      <div className="self-stretch h-[3.125rem] rounded-[10px] bg-[#fff] border-[#e6eff3] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between !pt-[1.062rem] !pb-[1.062rem] !pl-[1.562rem] !pr-[1.562rem] gap-[0rem]">
        <div className="relative font-medium">
          9. Kullanıcıların sistemdeki yetkileri kontrol edilebilir mi?
        </div>
        <Image
          className="h-[2.063rem] w-[2.063rem] relative rounded-[16.5px]"
          loading="lazy"
          width={33}
          height={33}
          sizes="100vw"
          alt=""
          src="/ekle2.svg"
        />
      </div>
      <div className="self-stretch h-[3.125rem] rounded-[10px] bg-[#fff] border-[#e6eff3] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between !pt-[1.062rem] !pb-[1.062rem] !pl-[1.562rem] !pr-[1.562rem] gap-[0rem]">
        <div className="relative font-medium">
          10.  Çok şubeli kurumlarda tüm şubeleri yönetebilir miyim?
        </div>
        <Image
          className="h-[2.063rem] w-[2.063rem] relative rounded-[16.5px]"
          loading="lazy"
          width={33}
          height={33}
          sizes="100vw"
          alt=""
          src="/ekle2.svg"
        />
      </div>
      <div className="self-stretch h-[3.125rem] rounded-[10px] bg-[#fff] border-[#e6eff3] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between !pt-[1.062rem] !pb-[1.062rem] !pl-[1.562rem] !pr-[1.562rem] gap-[0rem]">
        <div className="relative font-medium">
          11.  Ebtex’i mobil cihazlarda kullanabilir miyim?
        </div>
        <Image
          className="h-[2.063rem] w-[2.063rem] relative rounded-[16.5px]"
          loading="lazy"
          width={33}
          height={33}
          sizes="100vw"
          alt=""
          src="/ekle2.svg"
        />
      </div>
      <div className="self-stretch h-[3.125rem] rounded-[10px] bg-[#fff] border-[#e6eff3] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between !pt-[1.062rem] !pb-[1.062rem] !pl-[1.562rem] !pr-[1.562rem] gap-[0rem]">
        <div className="relative font-medium">
          12. Ebtex’in diğer eğitim yazılımlarından farkı nedir?
        </div>
        <Image
          className="h-[2.063rem] w-[2.063rem] relative rounded-[16.5px]"
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

export default Soru1;
