import type { NextPage } from "next";

export type ContainerType = {
  className?: string;
};

const Container: NextPage<ContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center leading-[normal] tracking-[normal] text-center text-base text-[#5c67f7] font-[Poppins] ${className}`}
    >
      <div className="self-stretch h-0.5 relative border-[#5c67f7] border-solid border-t-[2px] box-border" />
      <div className="relative font-semibold">Bize Ulaşın</div>
    </div>
  );
};

export default Container;
