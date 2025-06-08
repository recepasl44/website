"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useMemo, type CSSProperties } from "react";
import headerStyles from "../components/header.module.css";
import secondaryNavButtonStyles from "../components/secondary-nav-button.module.css";
import frameComponentStyles from "../components/frame-component.module.css";
import arkaplanStyles from "../components/arkaplan.module.css";
import primaryNavButtonStyles from "../components/primary-nav-button.module.css";

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
    <button
      className={[secondaryNavButtonStyles.secondaryNavButton, className].join(" ")}
      data-property1={property1}
    >
      <div className={secondaryNavButtonStyles.text}>{tEXT}</div>
    </button>
  );
};

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[headerStyles.header, className].join(" ")}>
      <div className={headerStyles.logoWrapper}>
        <div className={headerStyles.logo}>
          <Image
            className={headerStyles.headerebtexMaviLogoIcon}
            loading="lazy"
            width={32}
            height={32}
            sizes="100vw"
            alt=""
            src="/headerebtexmavilogo.svg"
          />
          <Image
            className={headerStyles.ebtexBeyazTextIcon}
            loading="lazy"
            width={90}
            height={20}
            sizes="100vw"
            alt=""
            src="/ebtexbeyaztext.svg"
          />
        </div>
      </div>
      <div className={headerStyles.navigationLinksWrapper}>
        <div className={headerStyles.navigationLinks}>
          <div className={headerStyles.anasayfa}>Anasayfa</div>
          <div className={headerStyles.anasayfa}>Kurumsal</div>
          <div className={headerStyles.anasayfa}>Çözümler</div>
          <div className={headerStyles.anasayfa}>Ücretlendirme</div>
          <div className={headerStyles.anasayfa}>Referanslarımız</div>
          <div className={headerStyles.anasayfa}>SSS</div>
          <div className={headerStyles.anasayfa}>Bize Ulaşın</div>
        </div>
      </div>
      <div className={headerStyles.secondaryNav}>
        <SecondaryNavButton property1="default" tEXT="Giriş" />
        <SecondaryNavButton property1="default" tEXT="Demo" />
      </div>
    </header>
  );
};

export type ArkaplanType = {
  className?: string;
};

const Arkaplan: NextPage<ArkaplanType> = ({ className = "" }) => {
  return (
    <div className={[arkaplanStyles.arkaplan, className].join(" ")}>
      <div className={arkaplanStyles.pattern}>
        <div className={arkaplanStyles.x}>
          <div className={arkaplanStyles.wrapperFrame244}>
            <Image
              className={arkaplanStyles.wrapperFrame244Child}
              width={29.5}
              height={29.5}
              sizes="100vw"
              alt=""
              src="/frame-244.svg"
            />
          </div>
          <div className={arkaplanStyles.wrapperFrame244}>
            <Image
              className={arkaplanStyles.wrapperFrame62Child}
              loading="lazy"
              width={29.5}
              height={29.5}
              sizes="100vw"
              alt=""
              src="/frame-244.svg"
            />
          </div>
          <div className={arkaplanStyles.wrapperFrame244}>
            <Image
              className={arkaplanStyles.wrapperFrame245Child}
              loading="lazy"
              width={29.5}
              height={29.5}
              sizes="100vw"
              alt=""
              src="/frame-244.svg"
            />
          </div>
          <div className={arkaplanStyles.wrapperFrame244}>
            <Image
              className={arkaplanStyles.wrapperFrame245Child}
              loading="lazy"
              width={29.5}
              height={29.5}
              sizes="100vw"
              alt=""
              src="/frame-244.svg"
            />
          </div>
          <div className={arkaplanStyles.wrapperFrame244}>
            <Image
              className={arkaplanStyles.wrapperFrame245Child}
              loading="lazy"
              width={29.5}
              height={29.5}
              sizes="100vw"
              alt=""
              src="/frame-244.svg"
            />
          </div>
        </div>
        <Image
          className={arkaplanStyles.patternChild}
          width={233}
          height={234.8}
          sizes="100vw"
          alt=""
          src="/vector-12.svg"
        />
        <div className={arkaplanStyles.shapeContainersParent}>
          <div className={arkaplanStyles.shapeContainers}>
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
          </div>
          <div className={arkaplanStyles.shapeContainers}>
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
          </div>
          <div className={arkaplanStyles.shapeContainers}>
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
          </div>
          <div className={arkaplanStyles.shapeContainers}>
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
          </div>
          <div className={arkaplanStyles.shapeContainers}>
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
          </div>
          <div className={arkaplanStyles.shapeContainers}>
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
          </div>
          <div className={arkaplanStyles.shapeContainers}>
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
            <div className={arkaplanStyles.shapeContainersChild} />
          </div>
        </div>
        <Image
          className={arkaplanStyles.patternItem}
          width={351.4}
          height={324.6}
          sizes="100vw"
          alt=""
          src="/frame-62-1@2x.png"
        />
        <div className={arkaplanStyles.wrapperVector13}>
          <Image
            className={arkaplanStyles.wrapperVector13Child}
            width={355.2}
            height={355.2}
            sizes="100vw"
            alt=""
            src="/vector-13.svg"
          />
        </div>
        <Image
          className={arkaplanStyles.patternInner}
          width={603}
          height={603}
          sizes="100vw"
          alt=""
          src="/vector-15.svg"
        />
        <Image
          className={arkaplanStyles.vectorIcon}
          width={603}
          height={603}
          sizes="100vw"
          alt=""
          src="/vector-16.svg"
        />
        <div className={arkaplanStyles.patternChild1} />
        <div className={arkaplanStyles.wrapperCircles}>
          <Image
            className={arkaplanStyles.circlesIcon}
            width={438.8}
            height={438.8}
            sizes="100vw"
            alt=""
            src="/circles.svg"
          />
        </div>
        <Image
          className={arkaplanStyles.patternChild2}
          width={257}
          height={257}
          sizes="100vw"
          alt=""
          src="/vector-19.svg"
        />
        <div className={arkaplanStyles.frameParent}>
          <div className={arkaplanStyles.frameGroup}>
            <div className={arkaplanStyles.overlayElementsWrapper}>
              <div className={arkaplanStyles.overlayElements}>
                <div className={arkaplanStyles.wrapperVector17}>
                  <Image
                    className={arkaplanStyles.wrapperVector17Child}
                    width={71.5}
                    height={71.5}
                    sizes="100vw"
                    alt=""
                    src="/vector-17.svg"
                  />
                </div>
                <div className={arkaplanStyles.wrapperVector17Wrapper}>
                  <div className={arkaplanStyles.wrapperVector171}>
                    <Image
                      className={arkaplanStyles.wrapperVector17Item}
                      width={241}
                      height={241}
                      sizes="100vw"
                      alt=""
                      src="/vector-17-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={arkaplanStyles.wrapperVector18Wrapper}>
              <div className={arkaplanStyles.wrapperVector18}>
                <Image
                  className={arkaplanStyles.wrapperVector18Child}
                  width={432}
                  height={381.5}
                  sizes="100vw"
                  alt=""
                  src="/vector-18.svg"
                />
              </div>
            </div>
            <div className={arkaplanStyles.wrapperVector20}>
              <Image
                className={arkaplanStyles.wrapperVector20Child}
                width={312}
                height={312}
                sizes="100vw"
                alt=""
                src="/vector-20.svg"
              />
            </div>
          </div>
          <div className={arkaplanStyles.wrapperVector14Wrapper}>
            <div className={arkaplanStyles.wrapperVector14}>
              <Image
                className={arkaplanStyles.wrapperVector14Child}
                loading="lazy"
                width={534.7}
                height={401}
                sizes="100vw"
                alt=""
                src="/vector-14.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[frameComponentStyles.backButtonParent, className].join(" ")}>
      <div className={frameComponentStyles.backButton}>
        <Image
          className={frameComponentStyles.okIcon}
          loading="lazy"
          width={17.7}
          height={13.3}
          sizes="100vw"
          alt=""
          src="/ok@2x.png"
        />
        <h3 className={frameComponentStyles.ebtexiKefeteGeri}>EBTEX’i Keşfet’e geri dön</h3>
      </div>
      <div className={frameComponentStyles.arkaplanParent}>
        <Arkaplan />
        <div className={frameComponentStyles.modllerimizWrapper}>
          <h1 className={frameComponentStyles.modllerimiz}>Modüllerimiz</h1>
        </div>
      </div>
    </section>
  );
};

export type PrimaryNavButtonType = {
  className?: string;
  tEXT?: string;

  /** Variant props */
  property1?: "default" | "click";

  /** Style props */
  primaryNavButtonAlignSelf?: CSSProperties["alignSelf"];
  primaryNavButtonWidth?: CSSProperties["width"];
};

const PrimaryNavButton: NextPage<PrimaryNavButtonType> = ({
  className = "",
  property1 = "default",
  primaryNavButtonAlignSelf,
  primaryNavButtonWidth,
  tEXT,
}) => {
  const primaryNavButtonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: primaryNavButtonAlignSelf,
      width: primaryNavButtonWidth,
    };
  }, [primaryNavButtonAlignSelf, primaryNavButtonWidth]);

  return (
    <div
      className={[primaryNavButtonStyles.root, className].join(" ")}
      data-property1={property1}
      style={primaryNavButtonStyle}
    >
      <div className={primaryNavButtonStyles.text}>{tEXT}</div>
    </div>
  );
};

const DestekMerkezi: NextPage = () => {
  return (
    <div className="destekMerkezi">
      <Header />
      <main className="destekMerkeziInner">
        <section className="frameParent">
          <FrameComponent />
          <div className="frame">
            <div className="anaFrame">
              <section className="butonScroll">
                <div className="butonlar">
                  <PrimaryNavButton property1="default" tEXT="Soru Havuzu" />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Ödev Takip"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Yoklama Yönetimi"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Çevrimiçi Sınav"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Servis Ulaşım"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Ders Defteri"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Etkinlik Yönetimi"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Rehberlik Takip"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Müfredat"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="İletişim Paneli"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Yemek Menü"
                  />
                  <PrimaryNavButton
                    property1="click"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Destek Merkezi"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="unset"
                    primaryNavButtonWidth="12.5rem"
                    tEXT="Ön Kayıt"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="unset"
                    primaryNavButtonWidth="12.5rem"
                    tEXT="Kayıt"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Sınav Analiz"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Bursluluk Yönetim"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Finans ve Muhasebe"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Yetkilendirme"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Liste Yönetimi"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Ders ve Nöbet Programı"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Raporlamalar"
                  />
                  <PrimaryNavButton
                    property1="default"
                    primaryNavButtonAlignSelf="stretch"
                    primaryNavButtonWidth="unset"
                    tEXT="Kütüphane Yönetimi"
                  />
                </div>
              </section>
              <div className="erik">
                <div className="destekMerkeziEbtexContainer">
                  <p className="blankLine">
                    <span className="canlDestek">Destek Merkezi</span>
                  </p>
                  <p className="blankLine">
                    <span>&nbsp;</span>
                  </p>
                  <p className="blankLine">
                    <span>
                      EBTEX Destek Merkezi Modülü, kullanıcıların sistem
                      kullanımı sırasında karşılaştığı sorunları hızlıca
                      bildirmelerini ve etkili çözümler sunulmasını sağlar.
                    </span>
                  </p>
                  <p className="blankLine">
                    <span>&nbsp;</span>
                  </p>
                  <ul className="canlDestekKullanclarnA">
                    <li className="blankLine">
                      <span className="canlDestek">Canlı Destek:</span>
                      <span className="canlDestek">
                        {" "}
                        Kullanıcıların anlık sorunlarına hızlı yanıt almak için
                        sistem yöneticileriyle gerçek zamanlı sohbet etmesini
                        sağlar.
                      </span>
                    </li>
                    <p className="blankLine">
                      <span className="canlDestek">
                        Destek Talebi Yönetimi:
                      </span>
                      <span className="canlDestek">
                        {" "}
                        Kullanıcılar, yaşadıkları teknik sorunları, ödeme
                        problemlerini veya kurslarla ilgili sorularını destek
                        talepleri olarak iletir, bu talepler sistematik olarak
                        kayıt altına alınır ve takip edilir. 
                      </span>
                    </p>
                    <p className="blankLine">
                      <span className="canlDestek">
                        Uzman Yönlendirme:
                      </span>
                      <span className="canlDestek">
                        {" "}
                        Destek talepleri, konuya göre kategorize edilerek ilgili
                        uzmanlara otomatik olarak yönlendirilir ve hızlı çözüm
                        sağlanır. 
                      </span>
                    </p>
                    <p className="blankLine">
                      <span className="canlDestek">
                        Dosya ve Eklenti Yönetimi:
                      </span>
                      <span className="canlDestek">
                        {" "}
                        Kullanıcılar destek taleplerine sorunlarını açıklayan
                        belgeler, görseller veya diğer dosyaları ekleyerek
                        sorunun daha hızlı anlaşılmasını sağlar. 
                      </span>
                    </p>
                    <p className="blankLine">
                      <span className="canlDestek">
                        Talep Durumu Takibi:
                      </span>
                      <span className="canlDestek">
                        {" "}
                        Kullanıcılar, destek taleplerinin güncel durumunu
                        (incelemede, çözüldü, beklemede gibi) sistem üzerinden
                        takip edebilir. 
                      </span>
                    </p>
                    <p className="blankLine">
                      <span className="canlDestek">
                        Bildirim ve Güncellemeler:
                      </span>
                      <span className="canlDestek">
                        {" "}
                        Kullanıcılar, destek taleplerinin durumu değiştiğinde
                        veya cevaplandığında otomatik olarak bilgilendirilir.
                      </span>
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    <style jsx>{`
      .butonlar {
        height: 72.438rem;
        width: 12.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: var(--gap-10);
      }
      .butonScroll {
        height: 45.875rem;
        overflow-y: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
      }
      .blankLine {
        margin: 0;
      }
      .canlDestek {
        font-family: var(--font-poppins);
      }
      .canlDestekKullanclarnA {
        margin: 0;
        font-size: inherit;
        padding-left: 1.35rem;
      }
      .destekMerkeziEbtexContainer {
        width: 82.75rem;
        position: relative;
        display: inline-block;
        flex-shrink: 0;
      }
      .anaFrame,
      .erik {
        border-radius: var(--br-10);
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        box-sizing: border-box;
        max-width: 100%;
      }
      .erik {
        height: 43.688rem;
        border: 2px solid var(--color-aliceblue);
        padding: var(--padding-15) 1.437rem;
      }
      .anaFrame {
        align-self: stretch;
        flex: 1;
        background-color: var(--color-white);
        padding: 1.562rem 2.812rem 0;
        gap: 2.187rem;
      }
      .frame {
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
      }
      .destekMerkeziInner,
      .frame,
      .frameParent {
        align-self: stretch;
        display: flex;
        align-items: flex-start;
        max-width: 100%;
      }
      .frameParent {
        flex-direction: column;
        justify-content: flex-start;
        gap: var(--gap-15);
        text-align: left;
        font-size: 1.25rem;
        font-family: var(--font-poppins);
      }
      .destekMerkeziInner {
        flex-direction: row;
        justify-content: center;
        padding: 0 var(--padding-20) 0 1.312rem;
        box-sizing: border-box;
      }
      .destekMerkezi {
        width: 100%;
        position: relative;
        background-color: var(--color-whitesmoke);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 0 0 3.125rem;
        box-sizing: border-box;
        gap: 3.125rem;
        line-height: normal;
        letter-spacing: normal;
      }
      @media screen and (max-width: 1650px) {
        .anaFrame {
          flex-wrap: wrap;
        }
      }
      @media screen and (max-width: 1300px) {
        .anaFrame {
          padding-left: var(--padding-22);
          padding-right: var(--padding-22);
          box-sizing: border-box;
        }
      }
      @media screen and (max-width: 900px) {
        .anaFrame {
          gap: 1.063rem;
        }
        .destekMerkezi {
          gap: 1.563rem;
        }
      }
      @media screen and (max-width: 450px) {
        .destekMerkeziEbtexContainer {
          font-size: var(--font-size-16);
        }
      }
    `}</style>
    </div>
  );
};

export default DestekMerkezi;
