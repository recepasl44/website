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
      <details className="self-stretch rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden">
        <summary className="flex flex-row items-center justify-between gap-0 cursor-pointer !p-[1.062rem_1.562rem] list-none">
          <span className="font-medium">1.  Ebtex’i kullanabilmek için hangi cihazlara ihtiyacım var?</span>
          <Image className="h-[2.063rem] w-[2.063rem]" width={33} height={33} alt="" src="/ekle2.svg" />
        </summary>
        <p className="p-2 text-[0.813rem]">Cevap yakında.</p>
      </details>
      <details className="self-stretch rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden">
        <summary className="flex flex-row items-center justify-between gap-0 cursor-pointer !p-[1.062rem_1.562rem] list-none">
          <span className="font-medium">2.  Ebtex kullanımını nasıl öğrenebilirim?</span>
          <Image className="h-[2.063rem] w-[2.063rem]" width={33} height={33} alt="" src="/ekle2.svg" />
        </summary>
        <p className="p-2 text-[0.813rem]">Cevap yakında.</p>
      </details>
      <details className="self-stretch rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden">
        <summary className="flex flex-row items-center justify-between gap-0 cursor-pointer !p-[1.062rem_1.562rem] list-none">
          <span className="font-medium">3.  Ebtex için ödediğim ücretle sistemi mi satın alıyorum?</span>
          <Image className="h-[2.063rem] w-[2.063rem]" width={33} height={33} alt="" src="/ekle2.svg" />
        </summary>
        <p className="p-2 text-[0.813rem]">Cevap yakında.</p>
      </details>
      <details className="self-stretch rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden">
        <summary className="flex flex-row items-center justify-between gap-0 cursor-pointer !p-[1.062rem_1.562rem] list-none">
          <span className="font-medium">4.  Ebtex güncelleniyor mu, bunun için ek ücret ödemem gerekir mi?</span>
          <Image className="h-[2.063rem] w-[2.063rem]" width={33} height={33} alt="" src="/ekle2.svg" />
        </summary>
        <p className="p-2 text-[0.813rem]">Cevap yakında.</p>
      </details>
      <details className="self-stretch rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden">
        <summary className="flex flex-row items-center justify-between gap-0 cursor-pointer !p-[1.062rem_1.562rem] list-none">
          <span className="font-medium">5.  Ebtex’te kaç kullanıcı ekleyebilirim?</span>
          <Image className="h-[2.063rem] w-[2.063rem]" width={33} height={33} alt="" src="/ekle2.svg" />
        </summary>
        <p className="p-2 text-[0.813rem]">Cevap yakında.</p>
      </details>
      <details className="self-stretch rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden">
        <summary className="flex flex-row items-center justify-between gap-0 cursor-pointer !p-[1.062rem_1.562rem] list-none">
          <span className="font-medium">6.  Ebtex kullanırken destek alabilir miyim?</span>
          <Image className="h-[2.063rem] w-[2.063rem]" width={33} height={33} alt="" src="/ekle2.svg" />
        </summary>
        <p className="p-2 text-[0.813rem]">Cevap yakında.</p>
      </details>
    </section>
  );
};

export default Soru;
