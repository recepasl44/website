import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "./frame-component";

export type Component1Type = {
  className?: string;
};

const Component1: NextPage<Component1Type> = ({ className = "" }) => {
  return (
    <main
      className={`h-[62.5rem] flex-1 relative bg-[#595dec] overflow-hidden max-w-full text-left text-[3rem] text-[#cdcffa] font-[Poppins] ${className}`}
    >
      <div className="absolute top-[-14.475rem] left-[17.769rem] w-[42.869rem] h-[34.413rem] overflow-hidden flex items-center justify-center">
        <Image
          className="w-full h-full object-cover absolute left-[1.125rem] top-[4.063rem] [transform:scale(1)]"
          width={685.9}
          height={550.6}
          sizes="100vw"
          alt=""
          src="/ellipse-6.svg"
        />
      </div>
      <div className="absolute top-[-42.812rem] left-[-31.937rem] w-[79.5rem] h-[78.619rem] z-[1] overflow-hidden flex items-center justify-center">
        <Image
          className="w-full h-full z-[1] object-cover absolute left-[12.125rem] top-[17.188rem] [transform:scale(1)]"
          width={1272}
          height={1257.9}
          sizes="100vw"
          alt=""
          src="/ellipse-5.svg"
        />
      </div>
      <div className="absolute top-[-6.875rem] left-[87rem] [filter:blur(17.6px)] rounded-[50%] [background:linear-gradient(90deg,_rgba(158,_92,_247,_0.4),_rgba(14,_165,_232,_0.4))] border-[rgba(158,92,247,0.5)] border-solid border-[0rem] box-border w-[27.75rem] h-[27.75rem] z-[1]" />
      <div className="absolute top-[14.313rem] left-[79.625rem] [filter:blur(33.4px)] rounded-[50%] bg-[rgba(255,255,255,0.08)] border-[#9e5cf7] border-solid border-[0rem] box-border w-[34.125rem] h-[34.125rem] z-[2]" />
      <div className="absolute top-[43.294rem] left-[73.388rem] w-[58.813rem] h-[24.894rem] z-[3] overflow-hidden flex items-center justify-center">
        <Image
          className="w-full h-full z-[3] object-cover absolute left-[-0.187rem] top-[-0.187rem] [transform:scale(1.142)]"
          loading="lazy"
          width={941}
          height={398.3}
          sizes="100vw"
          alt=""
          src="/vector-3.svg"
        />
      </div>
      <FrameComponent />
      <main className="absolute top-[2.625rem] left-[66.063rem] w-[53.938rem] flex flex-row items-start justify-start !pt-[0rem] !pb-[41.625rem] !pl-[0rem] !pr-[0rem] box-border gap-[2rem] max-w-full mq450:flex-wrap">
        <div className="h-[18.25rem] flex flex-col items-start justify-start !pt-[7.75rem] !pb-[0rem] !pl-[0rem] !pr-[0rem] box-border max-w-full mq450:flex-1 mq450:min-w-full">
          <div className="w-[41.813rem] h-[55.688rem] flex flex-col items-start justify-start gap-[1.75rem] shrink-0 max-w-full">
            <Image
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[4]"
              width={669}
              height={669}
              sizes="100vw"
              alt=""
              src="/adasd.svg"
            />
            <div className="w-[31.5rem] h-[12.125rem] flex flex-row items-start justify-start !pt-[0rem] !pb-[0rem] !pl-[9.687rem] !pr-[9.687rem] box-border max-w-full">
              <div className="self-stretch flex-1 relative [filter:blur(19.9px)] rounded-[50%] bg-[rgba(92,103,247,0.44)] border-[rgba(92,103,247,0.7)] border-solid border-[0rem]" />
            </div>
          </div>
        </div>
        <div className="h-[18.25rem] relative [filter:blur(19.9px)] rounded-[50%] bg-[rgba(92,103,247,0.74)] border-[#5c67f7] border-solid border-[0rem] box-border min-w-[18.25rem] shrink-0 mq450:flex-1" />
      </main>
    </main>
  );
};

export default Component1;
