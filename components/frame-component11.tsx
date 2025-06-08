"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponent2Type = {
  className?: string;
  mehmetKaya?: string;
  yneticiABCEitimKurumlar?: string;

  /** Style props */
  groupDivWidth?: CSSProperties["width"];
  eBTEXIleHerContainerWidth?: CSSProperties["width"];
  yneticiABCEitimAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  groupDivWidth,
  eBTEXIleHerContainerWidth,
  mehmetKaya,
  yneticiABCEitimKurumlar,
  yneticiABCEitimAlignSelf,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: groupDivWidth,
    };
  }, [groupDivWidth]);

  const eBTEXIleHerContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: eBTEXIleHerContainerWidth,
    };
  }, [eBTEXIleHerContainerWidth]);

  const yneticiABCEitimStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: yneticiABCEitimAlignSelf,
    };
  }, [yneticiABCEitimAlignSelf]);

  return (
    <section
      className={`w-[32.063rem] rounded-[0.625rem] border-[#6e78ed] border-solid border-[0.063rem] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center text-left text-xl text-[#fff] font-[Poppins] ${className}`}
    >
      <div className="self-stretch h-[13.75rem] bg-[#5e69ec] overflow-hidden shrink-0 flex flex-row items-start justify-start !pt-[2.813rem] !pb-[2.813rem] !pl-[1.563rem] !pr-[1.563rem] box-border">
        <div
          className="h-[4.875rem] w-[28.938rem] flex flex-col items-start justify-start"
          style={groupDivStyle}
        >
          <Image
            className="w-9 relative max-h-full overflow-hidden shrink-0 z-[2]"
            loading="lazy"
            width={36}
            height={36}
            sizes="100vw"
            alt=""
            src="/bxsquoteleft.svg"
          />
          <div
            className="w-[28.938rem] relative inline-block shrink-0 z-[1] !mt-[-1.125rem]"
            style={eBTEXIleHerContainerStyle}
          >
            <p className="!m-0 whitespace-pre-wrap">
              {" "}
              EBTEX ile her işlem çok daha hızlı ve “kolay.
            </p>
            <p className="!m-0">Tüm ekibimiz çok memnun</p>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[5.813rem] bg-[#6e79ef] overflow-hidden shrink-0 flex flex-row items-center justify-start !pt-[1.875rem] !pb-[1.875rem] !pl-[1.563rem] !pr-[1.563rem] box-border gap-6">
        <div className="w-[3.25rem] relative rounded-[50%] bg-[#fff] h-[3.25rem]" />
        <div className="w-[14.25rem] flex flex-col items-start justify-start">
          <h3 className="!m-0 relative text-[length:inherit] font-semibold font-[inherit]">
            {mehmetKaya}
          </h3>
          <div
            className="self-stretch relative text-[0.938rem] font-medium text-[#e2e4fb]"
            style={yneticiABCEitimStyle}
          >
            {yneticiABCEitimKurumlar}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
