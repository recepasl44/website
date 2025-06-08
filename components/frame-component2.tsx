import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent21Type = {
  className?: string;
  group53: string;
  soruHavuzu?: string;
  group531: string;
  devTakip?: string;
  group532: string;
  yoklamaYnetim?: string;
  group533: string;
  burslulukYnetim?: string;
};

const FrameComponent21: NextPage<FrameComponent21Type> = ({
  className = "",
  group53,
  soruHavuzu,
  group531,
  devTakip,
  group532,
  yoklamaYnetim,
  
  group533,
  burslulukYnetim,
}) => {
  return (
    <section
      className={`self-stretch flex-1 flex flex-row items-center justify-center gap-5 max-w-full text-center text-base text-[#27313c] font-[Poppins] ${className}`}
    >
      <div className="h-[164px] w-[400px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-[#fff] border-[#e6eff3] border-solid border-[2px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center !p-2.5 gap-2.5 max-w-full">
        <Image
          className="w-[72px] h-[72px] relative"
          loading="lazy"
          width={72}
          height={72}
          sizes="100vw"
          alt=""
          src={group53}
        />
        <div className="relative font-semibold">{soruHavuzu}</div>
      </div>
      <div className="h-[164px] w-[400px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-[#fff] border-[#e6eff3] border-solid border-[2px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center !p-2.5 gap-2.5 max-w-full">
        <Image
          className="w-[72px] h-[72px] relative"
          loading="lazy"
          width={72}
          height={72}
          sizes="100vw"
          alt=""
          src={group531}
        />
        <div className="relative font-semibold">{devTakip}</div>
      </div>
      <div className="h-[164px] w-[400px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-[#fff] border-[#e6eff3] border-solid border-[2px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center !p-2.5 gap-2.5 max-w-full">
        <Image
          className="w-[72px] h-[72px] relative"
          loading="lazy"
          width={72}
          height={72}
          sizes="100vw"
          alt=""
          src={group532}
        />
        <div className="relative font-semibold">{yoklamaYnetim}</div>
      </div>
      <div className="h-[164px] w-[400px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-[#fff] border-[#e6eff3] border-solid border-[2px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center !p-2.5 gap-2.5 max-w-full">
        <Image
          className="w-[72px] h-[72px] relative"
          loading="lazy"
          width={72}
          height={72}
          sizes="100vw"
          alt=""
          src={group533}
        />
        <div className="relative font-semibold">{burslulukYnetim}</div>
      </div>
    </section>
  );
};

export default FrameComponent21;
