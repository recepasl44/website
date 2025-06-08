import type { NextPage } from "next";
import Image from "next/image";

export type BilgilerType = {
  className?: string;
};

const Bilgiler: NextPage<BilgilerType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[421.5px] rounded-tl-[10px] rounded-tr-none rounded-br-none rounded-bl-[10px] bg-[#5c67f7] max-w-full flex flex-col items-center justify-start !pt-5 !pb-5 !pl-10 !pr-10 box-border gap-5 leading-[normal] tracking-[normal] text-center text-2xl text-[#fff] font-[Poppins] ${className}`}
    >
      <h3 className="!m-0 relative text-[length:inherit] font-medium font-[inherit]">
        İletişim Bilgilerimiz
      </h3>
      <section className="w-[345px] flex flex-col items-start justify-start gap-[15px] text-right text-[13px] text-[#fff] font-[Poppins]">
        <div className="flex flex-row items-center justify-start gap-[5px]">
          <Image
            className="w-6 relative max-h-full overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/gridiconslocation.svg"
          />
          <div className="relative">
            <span>Adres:</span>
            <span> Kurumun Açık Adresi (şehir / semt dahil)</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[5px]">
          <Image
            className="w-6 relative max-h-full overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/icroundphone.svg"
          />
          <div className="relative">
            <span>Telefon:</span>
            <span> +90 5xx xxx xx xx</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[5px]">
          <Image
            className="w-6 relative max-h-full overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/fluentmail24filled.svg"
          />
          <div className="relative">
            <span>E-Posta:</span>
            <span> info@kurumadi.com</span>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
          <Image
            className="w-6 relative max-h-full overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/tablerclockhour4filled.svg"
          />
          <div className="relative">
            <span>Çalışma Saatleri:</span>
            <span> Pazartesi - Cuma, 09:00 - 18:00</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bilgiler;
