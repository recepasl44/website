import type { NextPage } from "next";

export type SType = {
  className?: string;
  adSoyad?: string;
  adSoyadnzGiriniz?: string;
};

const S: NextPage<SType> = ({ className = "", adSoyad, adSoyadnzGiriniz }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center gap-[0.188rem] text-right text-[0.813rem] text-[#686f77] font-[Poppins] ${className}`}
    >
      <header className="self-stretch relative text-[0.938rem] font-medium font-[Poppins] text-[#27313c] text-left">
        {adSoyad}
      </header>
      <div className="self-stretch h-10 rounded-[0.625rem] bg-[#f8f9f9] border-[#e6eff3] border-solid border-[0.063rem] box-border flex flex-col items-start justify-center !pt-0 !pb-0 !pl-2.5 !pr-2.5">
        <div className="relative">{adSoyadnzGiriniz}</div>
      </div>
    </div>
  );
};

export default S;
