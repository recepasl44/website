import type { NextPage } from "next";
import Header from "./header";

export type GrmeNavbarOnType = {
  className?: string;
};

const GrmeNavbarOn: NextPage<GrmeNavbarOnType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] h-20 max-w-full flex flex-row items-start justify-start ${className}`}
    >
      <section className="h-20 w-[1920px] flex flex-row items-start justify-start">
        <div className="h-20 w-[1920px] flex flex-row items-start justify-start">
          <Header />
        </div>
      </section>
    </div>
  );
};

export default GrmeNavbarOn;
