import type { NextPage } from "next";
import Header from "../components/header";
import FrameComponent from "../components/frame-component";
import PrimaryNavButton from "../components/primary-nav-button";

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
