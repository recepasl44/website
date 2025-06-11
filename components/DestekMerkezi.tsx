"use client";
import type { NextPage } from "next";
import FrameComponent from "./destek/frame-component";
import PrimaryNavButton from "./destek/primary-nav-button";
import styles from "./destek/destek-merkezi.module.css";

const DestekMerkezi: NextPage = () => {
  return (
    <div className={styles.destekMerkezi}>
      <main className={styles.destekMerkeziInner}>
        <section className={styles.frameParent}>
          <FrameComponent />
          <div className={styles.frame}>
            <div className={styles.anaFrame}>
              <section className={styles.butonScroll}>
                <div className={styles.butonlar}>
                  <PrimaryNavButton property1="default" tEXT="Soru Havuzu" />
                  <PrimaryNavButton property1="default" tEXT="Ödev Takip" />
                  <PrimaryNavButton property1="default" tEXT="Yoklama Yönetimi" />
                  <PrimaryNavButton property1="default" tEXT="Çevrimiçi Sınav" />
                  <PrimaryNavButton property1="default" tEXT="Servis Ulaşım" />
                  <PrimaryNavButton property1="default" tEXT="Ders Defteri" />
                  <PrimaryNavButton property1="default" tEXT="Etkinlik Yönetimi" />
                  <PrimaryNavButton property1="default" tEXT="Rehberlik Takip" />
                  <PrimaryNavButton property1="default" tEXT="Müfredat" />
                  <PrimaryNavButton property1="default" tEXT="İletişim Paneli" />
                  <PrimaryNavButton property1="default" tEXT="Yemek Menü" />
                  <PrimaryNavButton property1="click" tEXT="Destek Merkezi" />
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
                  <PrimaryNavButton property1="default" tEXT="Sınav Analiz" />
                  <PrimaryNavButton property1="default" tEXT="Bursluluk Yönetim" />
                  <PrimaryNavButton property1="default" tEXT="Finans ve Muhasebe" />
                  <PrimaryNavButton property1="default" tEXT="Yetkilendirme" />
                  <PrimaryNavButton property1="default" tEXT="Liste Yönetimi" />
                  <PrimaryNavButton property1="default" tEXT="Ders ve Nöbet Programı" />
                  <PrimaryNavButton property1="default" tEXT="Raporlamalar" />
                  <PrimaryNavButton property1="default" tEXT="Kütüphane Yönetimi" />
                </div>
              </section>
              <div className={styles.erik}>
                <div className={styles.destekMerkeziEbtexContainer}>
                  <p className={styles.blankLine}>
                    <span className={styles.canlDestek}>Destek Merkezi</span>
                  </p>
                  <p className={styles.blankLine}>
                    <span>&nbsp;</span>
                  </p>
                  <p className={styles.blankLine}>
                    <span>
                      EBTEX Destek Merkezi Modülü, kullanıcıların sistem kullanımı sırasında
                      karşılaştığı sorunları hızlıca bildirmelerini ve etkili çözümler
                      sunulmasını sağlar.
                    </span>
                  </p>
                  <p className={styles.blankLine}>
                    <span>&nbsp;</span>
                  </p>
                  <ul className={styles.canlDestekKullanclarnA}>
                    <li className={styles.blankLine}>
                      <span className={styles.canlDestek}>Canlı Destek:</span>
                      <span className={styles.canlDestek}>
                        {" "}Kullanıcıların anlık sorunlarına hızlı yanıt almak için sistem
                        yöneticileriyle gerçek zamanlı sohbet etmesini sağlar.
                      </span>
                    </li>
                    <p className={styles.blankLine}>
                      <span className={styles.canlDestek}>Destek Talebi Yönetimi:</span>
                      <span className={styles.canlDestek}>
                        {" "}Kullanıcılar, yaşadıkları teknik sorunları, ödeme problemlerini veya
                        kurslarla ilgili sorularını destek talepleri olarak iletir, bu talepler
                        sistematik olarak kayıt altına alınır ve takip edilir.
                      </span>
                    </p>
                    <p className={styles.blankLine}>
                      <span className={styles.canlDestek}>Uzman Yönlendirme:</span>
                      <span className={styles.canlDestek}>
                        {" "}Destek talepleri, konuya göre kategorize edilerek ilgili uzmanlara
                        otomatik olarak yönlendirilir ve hızlı çözüm sağlanır.
                      </span>
                    </p>
                    <p className={styles.blankLine}>
                      <span className={styles.canlDestek}>Dosya ve Eklenti Yönetimi:</span>
                      <span className={styles.canlDestek}>
                        {" "}Kullanıcılar destek taleplerine sorunlarını açıklayan belgeler,
                        görseller veya diğer dosyaları ekleyerek sorunun daha hızlı
                        anlaşılmasını sağlar.
                      </span>
                    </p>
                    <p className={styles.blankLine}>
                      <span className={styles.canlDestek}>Talep Durumu Takibi:</span>
                      <span className={styles.canlDestek}>
                        {" "}Kullanıcılar, destek taleplerinin güncel durumunu (incelemede,
                        çözüldü, beklemede gibi) sistem üzerinden takip edebilir.
                      </span>
                    </p>
                    <p className={styles.blankLine}>
                      <span className={styles.canlDestek}>Bildirim ve Güncellemeler:</span>
                      <span className={styles.canlDestek}>
                        {" "}Kullanıcılar, destek taleplerinin durumu değiştiğinde veya
                        cevaplandığında otomatik olarak bilgilendirilir.
                      </span>
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DestekMerkezi;
