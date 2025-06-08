"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Component11Type = {
  className?: string;
  tEXT?: string;

  /** Variant props */
  property1?: "default" | "static";

  /** Style props */
  component1AlignSelf?: CSSProperties["alignSelf"];
};

const Component11: NextPage<Component11Type> = ({
  className = "",
  property1 = "default",
  component1AlignSelf,
  tEXT,
}) => {
  const component1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: component1AlignSelf,
    };
  }, [component1AlignSelf]);

  return (
    <div
      className={`w-[173px] rounded-md bg-[rgba(158,92,247,0.15)] overflow-hidden shrink-0 flex flex-row items-center justify-center !p-2.5 box-border text-left text-[15px] text-[#9e5cf7] font-[Poppins] data-[property1='static']:bg-[#9e5cf7] data-[property1='static']:[&_.text]:text-[#fff] ${className}`}
      data-property1={property1}
      style={component1Style}
    >
      <div className="text relative font-semibold">{tEXT}</div>
    </div>
  );
};

export default Component11;
