import type { NextPage } from "next";
import FrameComponent21 from "./frame-component2";

export type Website1Type = {
  className?: string;
};

const Website1: NextPage<Website1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-full max-w-[120rem] mx-auto h-[53.813rem] bg-[#f9fafc] overflow-hidden flex flex-col items-center justify-start !pt-[4.375rem] !pb-[4.375rem] !pl-5 !pr-5 box-border gap-[3.125rem] leading-[normal] tracking-[normal] text-center text-base text-[#5c67f7] font-[Poppins] ${className}`}
    >
      <div className="flex flex-row items-start justify-start !pt-0 !pb-0 !pl-[33.938rem] !pr-[33.938rem] box-border max-w-full mq450:!pl-5 mq450:!pr-5 mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full">
          <div className="flex flex-row items-start justify-start !pt-0 !pb-0 !pl-[14.625rem] !pr-[14.625rem] mq450:!pl-5 mq450:!pr-5 mq450:box-border">
            <div className="h-6 flex flex-col items-center justify-center">
              <div className="self-stretch relative border-[#5c67f7] border-solid border-t-[0.125rem] box-border h-0.5" />
              <div className="relative font-semibold">Modüllerimiz</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start max-w-full text-2xl text-[#27313c]">
            <h3 className="!m-0 flex-1 relative text-[length:inherit] font-medium font-[inherit] mq450:text-[1.188rem]">
              EBTEX: Eğitim Kurumları İçin Kapsamlı Çözümler
            </h3>
            <div className="w-[32.5rem] relative text-sm font-medium text-[#6e829f] inline-block">
              Tüm eğitim süreçlerinizi kolayca yönetin, başarıyı artırın ve
              optimize edin
            </div>
          </div>
        </div>
      </div>
      <main className="flex flex-col items-start justify-start gap-[1.875rem] max-w-full text-left text-[0.938rem] text-[#fff] font-[Poppins]">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2.5 max-w-full">
          <FrameComponent21
            className="mq450:flex-col"
            group53="/group-53.svg"
            soruHavuzu="Soru Havuzu"
            group531="/group-53-1.svg"
            devTakip="Ödev Takip"
            group532="/group-53-2.svg"
            yoklamaYnetim="Yoklama Yönetim"
            group533="/group-53-3.svg"
            burslulukYnetim="Bursluluk Yönetim"
          />
          <FrameComponent21
            className="mq450:flex-col"
            group53="/group-53-4.svg"
            soruHavuzu="Sınav Analiz"
            group531="/group-53-5.svg"
            devTakip="Çevrimiçi Sınav"
            group532="/group-53-6.svg"
            yoklamaYnetim="Servis Ulaşım"
            group533="/group-53-7.svg"
            burslulukYnetim="Finans ve Muhasebe"
          />
          <FrameComponent21
            className="mq450:flex-col"
            group53="/group-53-8.svg"
            soruHavuzu="Ders Defteri"
            group531="/group-53-9.svg"
            devTakip="Ders ve Nöbet Programı"
            group532="/group-53-10.svg"
            yoklamaYnetim="Etkinlik Yönetimi"
            group533="/group-53-11.svg"
            burslulukYnetim="Rehberlik Takip"
          />
        </div>
        <div className="flex flex-row items-start justify-start !pt-0 !pb-0 !pl-[45.875rem] !pr-[45.875rem] mq450:!pl-5 mq450:!pr-5 mq450:box-border">
          <div className="rounded-md bg-[#5c67f7] flex flex-row items-center justify-center !pt-[0.469rem] !pb-[0.469rem] !pl-[0.938rem] !pr-[0.938rem]">
            <div className="relative font-semibold">Tüm Modülleri Keşfet</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Website1;
