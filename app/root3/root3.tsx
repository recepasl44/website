import type { NextPage } from "next";
import Soru from "../../components/soru";
import Soru1 from "../../components/soru1";

const Root3: NextPage = () => {
  return (
    <div className="w-full relative bg-[#f9fafc] overflow-hidden flex flex-col items-center justify-start !pt-[4.375rem] !pb-[4.375rem] !pl-[1.25rem] !pr-[1.25rem] box-border gap-[1.875rem] leading-[normal] tracking-[normal] text-center text-[1rem] text-[#5c67f7] font-[Poppins]">
      <div className="w-[41.688rem] flex flex-col items-center justify-start gap-[1.25rem]">
        <div className="flex flex-col items-center justify-center">
          <div className="self-stretch relative border-[#5c67f7] border-solid border-t-[0.125rem] box-border h-[0.125rem]" />
          <div className="relative font-semibold">SSS’ler</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[0.625rem] text-[1.5rem] text-[#27313c]">
          <h3 className="!m-0 self-stretch relative text-[length:inherit] font-medium font-[inherit] mq450:text-[1.188rem]">
            Sıkça Sorulan Sorular
          </h3>
          <div className="self-stretch relative text-[0.875rem] font-medium text-[#6e829f]">
            EBTEX Hakkında En Çok Merak Edilen Sorulara Yanıtlarımız Burada!
          </div>
        </div>
      </div>
      <main className="w-[101rem] flex flex-row items-start justify-center gap-[3.437rem] max-w-full">
        <Soru property1={0} />
        <Soru1 property1={0} />
      </main>
    </div>
  );
};

export default Root3;
