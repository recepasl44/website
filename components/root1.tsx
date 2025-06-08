import type { NextPage } from "next";
import Image from "next/image";

export type Root1Type = {
  className?: string;
};

const Root1: NextPage<Root1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] h-[696px] bg-[#f9fafc] max-w-full overflow-hidden flex flex-col items-center justify-start !pt-[70px] !pb-[70px] !pl-5 !pr-5 box-border gap-[50px] leading-[normal] tracking-[normal] text-center text-base text-[#5c67f7] font-[Poppins] ${className}`}
    >
      <div className="flex flex-row items-start justify-start !pt-0 !pb-0 !pl-[155px] !pr-[155px] box-border max-w-full">
        <div className="self-stretch flex flex-col items-end justify-start gap-2.5 max-w-full">
          <div className="flex flex-row items-start justify-end !pt-0 !pb-0 !pl-[268px] !pr-[267px] mq450:!pl-5 mq450:!pr-5 mq450:box-border">
            <div className="h-6 flex flex-col items-center justify-center">
              <div className="self-stretch relative border-[#5c67f7] border-solid border-t-[2px] box-border h-0.5" />
              <div className="relative font-semibold">EBTEX’i Keşfedin</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start text-2xl text-[#27313c]">
            <h3 className="!m-0 flex-1 relative text-[length:inherit] font-medium font-[inherit] mq450:text-[19px]">
              Eğitimde Dijital Çözümünüz: EBTEX
            </h3>
            <div className="w-[667px] relative text-sm font-medium text-[#6e829f] inline-block">
              Tüm paydaşları bir araya getirerek eğitim süreçlerindeki başarıyı
              daha etkili bir şekilde izleyin
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#7f92ff] overflow-hidden flex flex-row items-start justify-start !pt-[134px] !pb-0 !pl-0 !pr-0 box-border max-w-full text-center text-[25.1px] text-[#6e829f] font-[Inter] mq450:!pt-[87px] mq450:box-border">
        <div className="flex-1 [background:linear-gradient(180deg,_rgba(127,_146,_255,_0),_#000)] flex flex-row items-start justify-start !pt-[163px] !pb-10 !pl-10 !pr-10 box-border max-w-full">
          <div className="h-[281px] w-[978px] relative [background:linear-gradient(180deg,_rgba(127,_146,_255,_0),_#000)] hidden max-w-full" />
          <div className="h-[78px] flex-1 flex flex-col items-start justify-start gap-[34px] max-w-full mq450:gap-[17px]">
            <div className="self-stretch flex flex-row items-center justify-between gap-0">
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="h-11 w-11 relative overflow-hidden flex items-center justify-center">
                  <Image
                    className="h-full w-full object-cover absolute left-[6px] top-[0px] [transform:scale(1)]"
                    loading="lazy"
                    width={44}
                    height={44}
                    sizes="100vw"
                    alt=""
                    src="/polygon-1.svg"
                  />
                </div>
                <b className="relative mq450:text-xl">0:00</b>
              </div>
              <div className="flex flex-row items-center justify-start gap-[54px]">
                <Image
                  className="w-11 relative max-h-full overflow-hidden shrink-0"
                  loading="lazy"
                  width={44}
                  height={44}
                  sizes="100vw"
                  alt=""
                  src="/fluentspeaker224filled.svg"
                />
                <Image
                  className="w-11 relative max-h-full overflow-hidden shrink-0"
                  loading="lazy"
                  width={44}
                  height={44}
                  sizes="100vw"
                  alt=""
                  src="/materialsymbolsfullscreenrounded.svg"
                />
                <Image
                  className="w-11 relative max-h-full overflow-hidden shrink-0"
                  loading="lazy"
                  width={44}
                  height={44}
                  sizes="100vw"
                  alt=""
                  src="/nimbusellipsis.svg"
                />
              </div>
            </div>
            <Image
              className="self-stretch h-2.5 relative max-w-full overflow-hidden max-h-full"
              loading="lazy"
              width={898}
              height={10}
              sizes="100vw"
              alt=""
              src="/line-2.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Root1;
