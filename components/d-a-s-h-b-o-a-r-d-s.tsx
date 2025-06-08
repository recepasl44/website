import type { NextPage } from "next";

export type DASHBOARDSType = {
  className?: string;
};

const DASHBOARDS: NextPage<DASHBOARDSType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[107rem] h-[19.263rem] flex flex-row items-start justify-start !pt-[1.188rem] !pb-[1.144rem] !pl-[13.563rem] !pr-[13.519rem] box-border relative z-[2] text-center text-[1.206rem] text-[#000] font-[Poppins] mq450:flex-col ${className}`}
    >
      <section className="h-[14.213rem] w-full !!m-[0 important] absolute top-[2.5rem] right-[0rem] left-[0rem] flex flex-row items-center justify-between gap-0 z-[0] text-center text-[0.888rem] text-[#000] font-[Poppins] mq450:static mq450:flex-col mq450:items-center">
        <div className="h-[14.213rem] w-[26.875rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.138rem] bg-[#fff] flex flex-col items-center justify-center !pt-[0.344rem] !pb-[0.969rem] !pl-[0.344rem] !pr-[0.344rem] box-border gap-[0.969rem]">
          <div className="self-stretch h-[10.581rem] relative hidden" />
          <div className="relative font-medium">Veli</div>
        </div>
        <div className="w-[26.875rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.138rem] bg-[#fff] flex flex-col items-center justify-center !pt-[0.344rem] !pb-[0.969rem] !pl-[0.344rem] !pr-[0.344rem] box-border gap-[0.969rem]">
          <div className="self-stretch h-[10.588rem] relative hidden" />
          <div className="relative font-medium">Servis Şoförü</div>
        </div>
      </section>
      <section className="h-[16.931rem] w-[79.919rem] flex flex-row items-center justify-between gap-0 z-[1] text-center text-[1.056rem] text-[#000] font-[Poppins] mq450:flex-col mq450:items-center">
        <div className="h-[16.931rem] w-[32.031rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.163rem] bg-[#fff] flex flex-col items-center justify-center !pt-[0.413rem] !pb-[1.156rem] !pl-[0.413rem] !pr-[0.413rem] box-border gap-[1.156rem]">
          <div className="self-stretch h-[12.619rem] relative hidden" />
          <div className="relative font-medium">Öğrenci</div>
        </div>
        <div className="h-[16.931rem] w-[32.031rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.163rem] bg-[#fff] flex flex-col items-center justify-center !pt-[0.413rem] !pb-[1.156rem] !pl-[0.413rem] !pr-[0.413rem] box-border gap-[1.156rem]">
          <div className="self-stretch h-[12.619rem] relative hidden" />
          <div className="relative font-medium">Rehberlik</div>
        </div>
      </section>
      <div className="h-full w-[36.444rem] !!m-[0 important] absolute top-[0rem] bottom-[0rem] left-[35.25rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.188rem] bg-[#fff] flex flex-col items-center justify-center !pt-[0.469rem] !pb-[1.319rem] !pl-[0.469rem] !pr-[0.469rem] box-border gap-[1.319rem] z-[2]">
        <div className="self-stretch h-[14.356rem] relative hidden" />
        <div className="relative font-medium">Öğretmen</div>
      </div>
    </section>
  );
};

export default DASHBOARDS;
