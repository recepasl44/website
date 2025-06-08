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
      <details className="self-stretch rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden">
        <summary className="flex flex-row items-center justify-between gap-0 cursor-pointer !p-[1.062rem_1.562rem] list-none">
          <span className="font-medium">7.  Ebtex diğer sistemlerle entegre olabilir mi?</span>
          <Image className="h-[2.063rem] w-[2.063rem]" width={33} height={33} alt="" src="/ekle2.svg" />
        </summary>
        <p className="p-2 text-[0.813rem]">Cevap yakında.</p>
      </details>
      <details className="self-stretch rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden">
        <summary className="flex flex-row items-center justify-between gap-0 cursor-pointer !p-[1.062rem_1.562rem] list-none">
          <span className="font-medium">8.  Ebtex güvenli mi, bilgilerim kaybolur mu?</span>
          <Image className="h-[2.063rem] w-[2.063rem]" width={33} height={33} alt="" src="/ekle2.svg" />
        </summary>
        <p className="p-2 text-[0.813rem]">Cevap yakında.</p>
      </details>
      <details className="self-stretch rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden">
        <summary className="flex flex-row items-center justify-between gap-0 cursor-pointer !p-[1.062rem_1.562rem] list-none">
          <span className="font-medium">9. Kullanıcıların sistemdeki yetkileri kontrol edilebilir mi?</span>
          <Image className="h-[2.063rem] w-[2.063rem]" width={33} height={33} alt="" src="/ekle2.svg" />
        </summary>
        <p className="p-2 text-[0.813rem]">Cevap yakında.</p>
      </details>
      <details className="self-stretch rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden">
        <summary className="flex flex-row items-center justify-between gap-0 cursor-pointer !p-[1.062rem_1.562rem] list-none">
          <span className="font-medium">10.  Çok şubeli kurumlarda tüm şubeleri yönetebilir miyim?</span>
          <Image className="h-[2.063rem] w-[2.063rem]" width={33} height={33} alt="" src="/ekle2.svg" />
        </summary>
        <p className="p-2 text-[0.813rem]">Cevap yakında.</p>
      </details>
      <details className="self-stretch rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden">
        <summary className="flex flex-row items-center justify-between gap-0 cursor-pointer !p-[1.062rem_1.562rem] list-none">
          <span className="font-medium">11.  Ebtex’i mobil cihazlarda kullanabilir miyim?</span>
          <Image className="h-[2.063rem] w-[2.063rem]" width={33} height={33} alt="" src="/ekle2.svg" />
        </summary>
        <p className="p-2 text-[0.813rem]">Cevap yakında.</p>
      </details>
      <details className="self-stretch rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border overflow-hidden">
        <summary className="flex flex-row items-center justify-between gap-0 cursor-pointer !p-[1.062rem_1.562rem] list-none">
          <span className="font-medium">12. Ebtex’in diğer eğitim yazılımlarından farkı nedir?</span>
          <Image className="h-[2.063rem] w-[2.063rem]" width={33} height={33} alt="" src="/ekle2.svg" />
        </summary>
        <p className="p-2 text-[0.813rem]">Cevap yakında.</p>
      </details>
    </section>
  );
};

export default Soru1;
