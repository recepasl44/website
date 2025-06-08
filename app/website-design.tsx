"use client";
import type { NextPage } from "next";
import Component1 from "../components/component1";
import Root1 from "../components/root1";
import GrmeNavbarOn from "../components/grme-navbar-on";
import Root from "../components/root";
import Website from "../components/website";
import Website1 from "../components/website1";
import Frame2461 from "../components/frame246";
import Root2 from "../components/root2";
import Root3 from "./root3/root3";
import Referanslarmz from "../components/referanslarmz";
import MesajGnder from "../components/mesaj-gnder";
import Footer from "../components/footer";
import { useState } from "react";
const WebsiteDesign: NextPage = () => {
  const [showDestek, setShowDestek] = useState(false);
  return (
    <>
      <GrmeNavbarOn />
      <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
        <Component1 />

      </div>
      <Root />
      <Website />
      <Website1 onModuleClick={() => setShowDestek(true)} />
      <Root1 />
      <Frame2461 />
      <Root2 />
      <Root3 />
      <Referanslarmz />
      <MesajGnder />
   
      <Footer />
    </>
  );
};

export default WebsiteDesign;
