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

const WebsiteDesign: NextPage = () => {
  return (
    <>
      <GrmeNavbarOn />
      <section id="anasayfa" className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
        <Component1 />

      </section>
      <section id="kurumsal">
        <Root />
      </section>
      <section id="cozumler">
        <Website />
        <Website1 />
        <Root1 />
      </section>
      <section id="kullanici-merkezi">
        <Frame2461 />
      </section>
      <section id="ucretlendirme">
        <Root2 />
      </section>
      <section id="sss">
        <Root3 />
      </section>
      <section id="referanslar">
        <Referanslarmz />
      </section>
      <section id="iletisim">
        <MesajGnder />
      </section>

      <Footer />
    </>
  );
};

export default WebsiteDesign;
