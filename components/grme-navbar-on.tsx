import type { NextPage } from "next";
import Header from "./header";

export type GrmeNavbarOnType = {
  className?: string;
};

const GrmeNavbarOn: NextPage<GrmeNavbarOnType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full max-w-[120rem] mx-auto h-20 flex flex-row items-start justify-start ${className}`}
    >
      <section className="h-20 w-full max-w-[120rem] flex flex-row items-start justify-start">
        <div className="h-20 w-full max-w-[120rem] flex flex-row items-start justify-start">
          <Header />
        </div>
      </section>
    </div>
  );
};

export default GrmeNavbarOn;
