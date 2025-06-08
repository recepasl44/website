import Image from "next/image";
import React from "react";

const ContactSection: React.FC = () => (
  <section className="bilgilerWrapper">
    <div className="bilgiler">
      <h3 className="letiimBilgilerimiz">İletişim Bilgilerimiz</h3>
      <div className="addressInfo">
        <div className="gridiconslocationParent">
          <Image
            className="gridiconslocation"
            loading="lazy"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/gridiconslocation.svg"
          />
          <div className="adresKurumunAkContainer">
            <span>Adres:</span>
            <span> Kurumun Açık Adresi (şehir / semt dahil)</span>
          </div>
        </div>
        <div className="gridiconslocationParent">
          <Image
            className="gridiconslocation"
            loading="lazy"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/icroundphone.svg"
          />
          <div className="adresKurumunAkContainer">
            <span>Telefon:</span>
            <span> +90 5xx xxx xx xx</span>
          </div>
        </div>
        <div className="gridiconslocationParent">
          <Image
            className="gridiconslocation"
            loading="lazy"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/fluentmail24filled.svg"
          />
          <div className="adresKurumunAkContainer">
            <span>E-Posta:</span>
            <span> info@kurumadi.com</span>
          </div>
        </div>
        <div className="tablerclockHour4FilledParent">
          <Image
            className="gridiconslocation"
            loading="lazy"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src="/tablerclockhour4filled.svg"
          />
          <div className="adresKurumunAkContainer">
            <span>Çalışma Saatleri:</span>
            <span> Pazartesi - Cuma, 09:00 - 18:00</span>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .letiimBilgilerimiz {
        margin: 0;
        position: relative;
        font-size: inherit;
        font-weight: 500;
        font-family: inherit;
      }
      .gridiconslocation {
        width: 1.5rem;
        position: relative;
        max-height: 100%;
        overflow: hidden;
        flex-shrink: 0;
      }
      .adresKurumunAkContainer {
        position: relative;
      }
      .gridiconslocationParent,
      .tablerclockHour4FilledParent {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: var(--gap-5);
      }
      .tablerclockHour4FilledParent {
        align-self: stretch;
      }
      .addressInfo {
        width: 21.563rem;
        align-items: flex-start;
        gap: var(--gap-15);
        text-align: right;
        font-size: 0.813rem;
      }
      .addressInfo,
      .bilgiler,
      .bilgilerWrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
      .bilgiler {
        align-self: stretch;
        height: 26.344rem;
        border-radius: var(--br-10) 0 0 var(--br-10);
        background-color: var(--color-mediumslateblue-200);
        align-items: center;
        padding: var(--padding-20) var(--padding-40);
        box-sizing: border-box;
        gap: var(--gap-20);
      }
      .bilgilerWrapper {
        height: 30.794rem;
        align-items: flex-start;
        max-width: 100%;
        text-align: center;
        font-size: var(--font-size-24);
        color: var(--color-white);
        font-family: var(--font-poppins);
      }
      @media screen and (max-width: 1650px) {
        .bilgilerWrapper {
          flex: 1;
        }
      }
      @media screen and (max-width: 1275px) {
        .bilgilerWrapper {
          min-width: 100%;
        }
      }
      @media screen and (max-width: 450px) {
        .letiimBilgilerimiz {
          font-size: var(--font-size-19);
        }
      }
    `}</style>
  </section>
);

export default ContactSection;
