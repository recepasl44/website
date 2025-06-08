import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[386px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[30px] bg-[#fff] overflow-hidden flex flex-col items-start justify-start !pt-[27px] !pb-[27px] !pl-[29px] !pr-[29px] box-border gap-[25px] text-left text-[32px] text-[#27313c] font-[Poppins] ${className}`}
    >
      <div className="w-[183px] h-12 flex flex-row items-end justify-start !pt-0 !pb-px !pl-0 !pr-0 box-border text-right font-[Inter]">
        <h2 className="!m-0 w-[140px] relative text-[length:inherit] inline-block shrink-0 z-[1] font-[inherit]">
          <span>₺</span>
          <span className="font-[Poppins]">25.000</span>
        </h2>
        <div className="h-[31px] w-[46px] flex flex-col items-start justify-end !pt-0 !pb-3 !pl-0 !pr-0 box-border z-[2] !ml-[-3px] relative text-base">
          <div className="w-[46px] relative font-medium inline-block shrink-0">
            / Yıllık
          </div>
        </div>
      </div>
      <div className="w-[495px] h-[210px] flex flex-col items-start justify-start text-[13px] text-[#6e829f]">
        <div className="self-stretch relative font-medium">
          <p className="!m-0">
            Detaylı bilgi ve özel teklifler için bölge bayimizle veya sistem
            yönetim merkezimizle iletişime geçebilirsiniz.
          </p>
          <p className="!m-0">&nbsp;</p>
          <p className="!m-0">Telefon: 0555 123 45 67</p>
        </div>
      </div>
      <div className="w-[495px] h-[38px] flex flex-col items-end justify-center text-[15px] text-[#fff]">
        <div className="rounded-md bg-[#5c67f7] flex flex-row items-center justify-center !pt-[7.5px] !pb-[7.5px] !pl-[15px] !pr-[15px]">
          <div className="relative font-semibold">Satın Al</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
