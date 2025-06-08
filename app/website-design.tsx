import type { NextPage } from "next";
import Component1 from "../components/component1";
import Root1 from "../components/root1";
import GrmeNavbarOn from "../components/grme-navbar-on";
import Root from "../components/root";
import Website from "../components/website";
import Website1 from "../components/website1";
import Frame2461 from "../components/frame246";
import Root2 from "../components/root2";
import Root3 from "./root3/root3"
import Referanslarmz from "../components/referanslarmz";
import MesajGnder from "../components/mesaj-gnder";
import Footer from "../components/footer";
import Page1 from "../components/page1";
const WebsiteDesign: NextPage = () => {
  return (
     <>
    <GrmeNavbarOn />
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <Component1 />
    
    </div>
     <Root />
     <Website />
   <Website1 />
         <Root1/>
<Frame2461 />
<Root2 />
<Root3 />
<Referanslarmz />
<MesajGnder />
<Page1 />
<Footer />
    </>
  );
};

export default WebsiteDesign;
