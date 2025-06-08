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
      className={`h-[19.438rem] flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.625rem] bg-[#fff] overflow-hidden flex flex-row items-start justify-start !pt-14 !pb-14 !pl-[2.688rem] !pr-[2.688rem] box-border min-w-[26.188rem] text-left text-2xl text-[#000] font-[Poppins] ${className}`}
      style={kart02Style}
    >
      <div className="flex flex-col items-center justify-start gap-[1.875rem]">
        <div className="self-stretch flex flex-col items-center justify-start gap-5">
          <Image
            className="w-[2.938rem] h-[2.938rem] relative rounded-[7.656rem]"
            loading="lazy"
            width={47}
            height={47}
            sizes="100vw"
            alt=""
            src={planlananDevler}
          />
          <div className="flex flex-col items-center justify-start gap-[0.313rem]">
            <h3 className="!m-0 relative text-[length:inherit] font-semibold font-[inherit] mq450:text-[1.188rem]">
              {akllAnalizLlebilirBaar}
            </h3>
            <div className="relative text-[0.938rem] text-[#6e829f] text-center">
              {herRencininBireyselIhtiyalar}
            </div>
          </div>
        </div>
        <Button
          className="!pt-[0.469rem] !pb-[0.469rem] !pl-[0.938rem] !pr-[0.938rem]"
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
