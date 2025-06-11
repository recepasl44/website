import type { NextPage } from "next";

export type SecondaryNavButtonType = {
  className?: string;
  tEXT?: string;

  /** Variant props */
  property1?: string;
};

const SecondaryNavButton: NextPage<SecondaryNavButtonType> = ({
  className = "",
  property1 = "default",
  tEXT,
}) => {
  return (
    <div
      className={`h-[2.625rem] w-[7.625rem] rounded-[0.313rem] bg-[rgba(158,92,247,0.15)] flex flex-row items-center justify-center !pt-0 !pb-0 !pl-10 !pr-10 box-border text-center text-[0.813rem] text-[#9e5cf7] font-[Poppins] ${className}`}
      data-property1={property1}
    >
      <div className="relative font-semibold">{tEXT}</div>
    </div>
  );
};

export default SecondaryNavButton;
