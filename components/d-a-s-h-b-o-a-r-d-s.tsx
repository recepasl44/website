import type { NextPage } from "next";

export type DASHBOARDSType = {
  className?: string;
};

const DASHBOARDS: NextPage<DASHBOARDSType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1712px] h-[308.2px] flex flex-row items-start justify-start !pt-[19px] !pb-[18.3px] !pl-[217px] !pr-[216.3px] box-border relative z-[2] text-center text-[19.3px] text-[#000] font-[Poppins] ${className}`}
    >
      <section className="h-[227.4px] w-full !!m-[0 important] absolute top-[40px] right-[0px] left-[0px] flex flex-row items-center justify-between gap-0 z-[0] text-center text-[14.2px] text-[#000] font-[Poppins]">
        <div className="h-[227.4px] w-[430px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[2.2px] bg-[#fff] flex flex-col items-center justify-center !pt-[5.5px] !pb-[15.5px] !pl-[5.5px] !pr-[5.5px] box-border gap-[15.5px]">
          <div className="self-stretch h-[169.3px] relative hidden" />
          <div className="relative font-medium">Veli</div>
        </div>
        <div className="w-[430px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[2.2px] bg-[#fff] flex flex-col items-center justify-center !pt-[5.5px] !pb-[15.5px] !pl-[5.5px] !pr-[5.5px] box-border gap-[15.5px]">
          <div className="self-stretch h-[169.4px] relative hidden" />
          <div className="relative font-medium">Servis Şoförü</div>
        </div>
      </section>
      <section className="h-[270.9px] w-[1278.7px] flex flex-row items-center justify-between gap-0 z-[1] text-center text-[16.9px] text-[#000] font-[Poppins]">
        <div className="h-[270.9px] w-[512.5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[2.6px] bg-[#fff] flex flex-col items-center justify-center !pt-[6.6px] !pb-[18.5px] !pl-[6.6px] !pr-[6.6px] box-border gap-[18.5px]">
          <div className="self-stretch h-[201.9px] relative hidden" />
          <div className="relative font-medium">Öğrenci</div>
        </div>
        <div className="h-[270.9px] w-[512.5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[2.6px] bg-[#fff] flex flex-col items-center justify-center !pt-[6.6px] !pb-[18.5px] !pl-[6.6px] !pr-[6.6px] box-border gap-[18.5px]">
          <div className="self-stretch h-[201.9px] relative hidden" />
          <div className="relative font-medium">Rehberlik</div>
        </div>
      </section>
      <div className="h-full w-[583.1px] !!m-[0 important] absolute top-[0px] bottom-[0px] left-[564px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[3px] bg-[#fff] flex flex-col items-center justify-center !pt-[7.5px] !pb-[21.1px] !pl-[7.5px] !pr-[7.5px] box-border gap-[21.1px] z-[2]">
        <div className="self-stretch h-[229.7px] relative hidden" />
        <div className="relative font-medium">Öğretmen</div>
      </div>
    </section>
  );
};

export default DASHBOARDS;
