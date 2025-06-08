import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[24.125rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[1.875rem] bg-[#fff] overflow-hidden flex flex-col items-start justify-start !pt-[1.688rem] !pb-[1.688rem] !pl-[1.813rem] !pr-[1.813rem] box-border gap-[1.563rem] text-left text-[2rem] text-[#27313c] font-[Poppins] ${className}`}
    >
      <div className="w-[11.438rem] h-12 flex flex-row items-end justify-start !pt-0 !pb-px !pl-0 !pr-0 box-border text-right font-[Inter]">
        <h2 className="!m-0 w-[8.75rem] relative text-[length:inherit] inline-block shrink-0 z-[1] font-[inherit]">
          <span>₺</span>
          <span className="font-[Poppins]">25.000</span>
        </h2>
        <div className="h-[1.938rem] w-[2.875rem] flex flex-col items-start justify-end !pt-0 !pb-3 !pl-0 !pr-0 box-border z-[2] !ml-[-0.187rem] relative text-base">
          <div className="w-[2.875rem] relative font-medium inline-block shrink-0">
            / Yıllık
          </div>
        </div>
      </div>
      <div className="w-[30.938rem] h-[13.125rem] flex flex-col items-start justify-start text-[0.813rem] text-[#6e829f]">
        <div className="self-stretch relative font-medium">
          <p className="!m-0">
            Detaylı bilgi ve özel teklifler için bölge bayimizle veya sistem
            yönetim merkezimizle iletişime geçebilirsiniz.
          </p>
          <p className="!m-0">&nbsp;</p>
          <p className="!m-0">Telefon: 0555 123 45 67</p>
        </div>
      </div>
      <div className="w-[30.938rem] h-[2.375rem] flex flex-col items-end justify-center text-[0.938rem] text-[#fff]">
        <div className="rounded-md bg-[#5c67f7] flex flex-row items-center justify-center !pt-[0.469rem] !pb-[0.469rem] !pl-[0.938rem] !pr-[0.938rem]">
          <div className="relative font-semibold">Satın Al</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
