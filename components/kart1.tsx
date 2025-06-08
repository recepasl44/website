"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import Image from "next/image";

export type Kart11Type = {
  className?: string;
  planlananDevler: string;
  akllAnalizLlebilirBaar?: string;
  herRencininBireyselIhtiyalar?: string;

  /** Style props */
  kart02Flex?: CSSProperties["flex"];
  kart02Padding?: CSSProperties["padding"];
};

const Kart11: NextPage<Kart11Type> = ({
  className = "",
  kart02Flex,
  kart02Padding,
  planlananDevler,
  akllAnalizLlebilirBaar,
  herRencininBireyselIhtiyalar,
}) => {
  const kart02Style: CSSProperties = useMemo(() => {
    return {
      flex: kart02Flex,
      padding: kart02Padding,
    };
  }, [kart02Flex, kart02Padding]);

  return (
    <section
      className={`h-[311px] flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-[#fff] overflow-hidden flex flex-row items-start justify-start !pt-14 !pb-14 !pl-[43px] !pr-[43px] box-border min-w-[419px] text-left text-2xl text-[#000] font-[Poppins] ${className}`}
      style={kart02Style}
    >
      <div className="flex flex-col items-center justify-start gap-[30px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-5">
          <Image
            className="w-[47px] h-[47px] relative rounded-[122.5px]"
            loading="lazy"
            width={47}
            height={47}
            sizes="100vw"
            alt=""
            src={planlananDevler}
          />
          <div className="flex flex-col items-center justify-start gap-[5px]">
            <h3 className="!m-0 relative text-[length:inherit] font-semibold font-[inherit] mq450:text-[19px]">
              {akllAnalizLlebilirBaar}
            </h3>
            <div className="relative text-[15px] text-[#6e829f] text-center">
              {herRencininBireyselIhtiyalar}
            </div>
          </div>
        </div>
        <Button
          className="!pt-[7.5px] !pb-[7.5px] !pl-[15px] !pr-[15px]"
          disableElevation
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px" }}
        />
      </div>
    </section>
  );
};

export default Kart11;
