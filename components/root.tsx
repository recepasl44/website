import type { NextPage } from "next";
import ContentContainer from "./content-container";

export type RootType = {
  className?: string;
};

const Root: NextPage<RootType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full max-w-[120rem] mx-auto bg-[#f9fafc] overflow-hidden flex flex-col items-start justify-start !pt-[4.375rem] !pb-[5.313rem] !pl-[5.688rem] !pr-[5.688rem] box-border gap-[3.125rem] leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="flex flex-row items-start justify-start !pt-0 !pb-0 !pl-[33.313rem] !pr-[33.313rem] box-border max-w-full text-center text-base text-[#5c67f7] font-[Poppins] mq450:!pl-5 mq450:!pr-5 mq450:box-border">
        <div className="self-stretch flex flex-col items-end justify-start gap-2.5 max-w-full">
          <div className="flex flex-row items-start justify-end !pt-0 !pb-0 !pl-[16.938rem] !pr-[16.938rem] box-border max-w-full mq450:!pl-5 mq450:!pr-5 mq450:box-border">
            <div className="h-6 flex flex-col items-center justify-center">
              <div className="self-stretch relative border-[#5c67f7] border-solid border-t-[0.125rem] box-border h-0.5" />
              <div className="relative font-semibold">Neden Ebtex</div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-center justify-start text-2xl text-[#27313c]">
            <h3 className="!m-0 self-stretch flex-1 relative text-[length:inherit] font-medium font-[inherit] mq450:text-[1.188rem]">
              EBTEX, Başarınızı Artırır ve Marka Değerinizi Güçlendirir!
            </h3>
            <div className="self-stretch relative text-sm font-medium text-[#6e829f]">
              Eğitim süreçlerinizi dijitalleştirerek verimliliği artırın ve
              kurumunuzu geleceğe taşıyın
            </div>
          </div>
        </div>
      </section>
      <ContentContainer />
    </div>
  );
};

export default Root;
