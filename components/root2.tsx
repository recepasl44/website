import type { NextPage } from "next";
import Image from "next/image";
import Component11 from "./component11";
import FrameComponent1 from "./frame-component1";

export type Root2Type = {
  className?: string;

  /** Variant props */
  property1?: 10;
};

const Root2: NextPage<Root2Type> = ({ className = "", property1 = 10 }) => {
  return (
    <div
      className={`w-full max-w-[120rem] mx-auto h-[43.688rem] bg-[#e9ecfb] overflow-hidden flex flex-col items-end justify-start !pt-[4.375rem] !pb-[4.375rem] !pl-[22.938rem] !pr-[22.938rem] box-border gap-10 text-center text-base text-[#5c67f7] font-[Poppins] ${className}`}
      data-property1={property1}
    >
      <div className="w-[53.75rem] h-[4.375rem] flex flex-row items-start justify-end !pt-0 !pb-0 !pl-0 !pr-[20.25rem] box-border">
        <div className="h-[4.375rem] w-[33.5rem] flex flex-col items-start justify-start gap-2.5">
          <div className="w-[20.375rem] h-6 flex flex-row items-start justify-start !pt-0 !pb-0 !pl-[13.063rem] !pr-0 box-border">
            <div className="flex flex-col items-center justify-center">
              <div className="self-stretch relative border-[#5c67f7] border-solid border-t-[0.125rem] box-border h-0.5" />
              <div className="relative font-semibold">Ücretlendirme</div>
            </div>
          </div>
          <h3 className="!m-0 w-[33.5rem] relative text-2xl font-medium font-[inherit] text-[#27313c] inline-block">
            EBTEX İle Her Kuruma Uygun Esnek Çözümler
          </h3>
        </div>
      </div>
      <main className="w-[74.125rem] h-[28.063rem] flex flex-col items-start justify-start gap-5">
        <div className="w-[50.438rem] h-[2.688rem] flex flex-row items-start justify-start !pt-0 !pb-0 !pl-[23.625rem] !pr-0 box-border">
          <div className="flex flex-row items-center justify-center gap-[5.188rem]">
            <Component11
              property1="static"
              component1AlignSelf="stretch"
              tEXT="Kurumsal (Okul)"
            />
            <Component11 property1="default" tEXT="Kurumsal (Kurs)" />
          </div>
        </div>
        <section className="w-[74.125rem] h-[24.125rem] flex flex-row items-start justify-start gap-20 text-right text-[2rem] text-[#fff] font-[Poppins]">
          <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[1.875rem] bg-[#5c67f7] overflow-hidden flex flex-col items-start justify-start !pt-[1.688rem] !pb-[1.688rem] !pl-[1.813rem] !pr-[1.813rem] gap-[1.563rem]">
            <h1 className="!m-0 relative text-[length:inherit] font-semibold font-[inherit]">
              Ücret Hesapla
            </h1>
            <div className="w-[30.938rem] flex flex-col items-start justify-start gap-[1.563rem] text-[0.813rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch flex flex-row items-center justify-between gap-0">
                  <div className="w-[15.563rem] flex flex-row items-center justify-start gap-[0.563rem]">
                    <Image
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      width={20}
                      height={20}
                      sizes="100vw"
                      alt=""
                      src="/frame-205.svg"
                    />
                    <div className="relative font-medium">
                      Anaokulu Öğrenci Sayısı
                    </div>
                  </div>
                  <div className="h-10 rounded-[0.625rem] bg-[#f8f9f9] flex flex-col items-start justify-center !pt-0 !pb-0 !pl-2.5 !pr-2.5 box-border text-[#686f77]">
                    <div className="relative">Öğrenci Sayısı Giriniz</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-0 text-left">
                  <div className="w-[15.563rem] flex flex-row items-center justify-start gap-[0.563rem]">
                    <Image
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      width={20}
                      height={20}
                      sizes="100vw"
                      alt=""
                      src="/frame-205.svg"
                    />
                    <div className="relative font-medium">
                      İlkokul Öğrenci Sayısı
                    </div>
                  </div>
                  <div className="h-10 rounded-[0.625rem] bg-[#f8f9f9] flex flex-col items-start justify-center !pt-0 !pb-0 !pl-2.5 !pr-2.5 box-border text-right text-[#686f77]">
                    <div className="relative">Öğrenci Sayısı Giriniz</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-0">
                  <div className="w-[15.563rem] flex flex-row items-center justify-start gap-[0.563rem]">
                    <Image
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      width={20}
                      height={20}
                      sizes="100vw"
                      alt=""
                      src="/frame-205.svg"
                    />
                    <div className="relative font-medium">
                      Ortaokul Öğrenci Sayısı
                    </div>
                  </div>
                  <div className="h-10 w-[9.813rem] rounded-[0.625rem] bg-[#f8f9f9] flex flex-col items-start justify-center !pt-0 !pb-0 !pl-2.5 !pr-2.5 box-border text-[0.938rem] text-[#27313c]">
                    <div className="relative">100</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-0 text-left">
                  <div className="w-[15.563rem] flex flex-row items-center justify-start gap-[0.563rem]">
                    <Image
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      width={20}
                      height={20}
                      sizes="100vw"
                      alt=""
                      src="/frame-205.svg"
                    />
                    <div className="relative font-medium">
                      Lise Öğrenci Sayısı
                    </div>
                  </div>
                  <div className="h-10 w-[9.813rem] rounded-[0.625rem] bg-[#f8f9f9] flex flex-col items-start justify-center !pt-0 !pb-0 !pl-2.5 !pr-2.5 box-border text-right text-[0.938rem] text-[#27313c]">
                    <div className="relative">250</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch" />
            </div>
          </div>
          <FrameComponent1 />
        </section>
      </main>
    </div>
  );
};

export default Root2;
