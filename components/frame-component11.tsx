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
      className={`w-[513px] rounded-[10px] border-[#6e78ed] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center text-left text-xl text-[#fff] font-[Poppins] ${className}`}
    >
      <div className="self-stretch h-[220px] bg-[#5e69ec] overflow-hidden shrink-0 flex flex-row items-start justify-start !pt-[45px] !pb-[45px] !pl-[25px] !pr-[25px] box-border">
        <div
          className="h-[78px] w-[463px] flex flex-col items-start justify-start"
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
            className="w-[463px] relative inline-block shrink-0 z-[1] !mt-[-18px]"
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
      <div className="self-stretch h-[93px] bg-[#6e79ef] overflow-hidden shrink-0 flex flex-row items-center justify-start !pt-[30px] !pb-[30px] !pl-[25px] !pr-[25px] box-border gap-6">
        <div className="w-[52px] relative rounded-[50%] bg-[#fff] h-[52px]" />
        <div className="w-[228px] flex flex-col items-start justify-start">
          <h3 className="!m-0 relative text-[length:inherit] font-semibold font-[inherit]">
            {mehmetKaya}
          </h3>
          <div
            className="self-stretch relative text-[15px] font-medium text-[#e2e4fb]"
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
