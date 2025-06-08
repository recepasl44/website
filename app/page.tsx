import type { NextPage } from "next";
import Image from "next/image";

// Component 1 with inline styles
export type Component1Type = {
  className?: string;
  /** Variant props */
  property1?: 2;
};

const Component1: NextPage<Component1Type> = ({ className = "", property1 = 1 }) => {
  return (
    <div className={`component40 ${className}`} data-property1={property1}>
      <div className="featuresContainer">
        <Image
          className="planlananDevlerIcon"
          loading="lazy"
          width={47}
          height={47}
          sizes="100vw"
          alt=""
          src="/planlanan-devler.svg"
        />
        <div className="processContainer">
          <h3 className="tmSrelerTek">Tüm Süreçler Tek Platformda</h3>
        </div>
      </div>
      <style jsx>{`
        .planlananDevlerIcon {
          width: 2.938rem;
          height: 2.938rem;
          position: relative;
          border-radius: 122.5px;
        }
        .tmSrelerTek {
          margin: 0;
          position: relative;
          font-size: inherit;
          font-weight: 600;
          font-family: inherit;
        }
        .processContainer {
          justify-content: flex-start;
        }
        .component40,
        .featuresContainer,
        .processContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .featuresContainer {
          align-self: stretch;
          justify-content: flex-start;
          gap: var(--gap-20);
        }
        .component40 {
          height: 8.313rem;
          width: 24.125rem;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: var(--br-10);
          background-color: var(--color-darkorchid);
          justify-content: center;
          padding: var(--padding-20) 0;
          box-sizing: border-box;
          text-align: left;
          font-size: var(--font-size-24);
          color: var(--color-white);
          font-family: var(--font-poppins);
        }
        @media screen and (max-width: 1200px) {
          .tmSrelerTek {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

// Component 2 with inline styles
export type Component2Type = {
  className?: string;
  /** Variant props */
  property1?: 1;
};

const Component2: NextPage<Component2Type> = ({ className = "", property1 = 1 }) => {
  return (
    <div className={`component39 ${className}`} data-property1={property1}>
      <div className="planlananDevlerParent">
        <Image
          className="planlananDevlerIcon"
          loading="lazy"
          width={47}
          height={47}
          sizes="100vw"
          alt=""
          src="/planlanan-devler-1.svg"
        />
        <div className="akllAnalizLlebilirBaWrapper">
          <h3 className="akllAnalizLlebilir">Akıllı Analiz, Ölçülebilir Başarı</h3>
        </div>
      </div>
      <style jsx>{`
        .planlananDevlerIcon {
          width: 2.938rem;
          height: 2.938rem;
          position: relative;
          border-radius: 122.5px;
        }
        .akllAnalizLlebilir {
          margin: 0;
          position: relative;
          font-size: inherit;
          font-weight: 600;
          font-family: inherit;
        }
        .akllAnalizLlebilirBaWrapper {
          justify-content: flex-start;
        }
        .akllAnalizLlebilirBaWrapper,
        .component39,
        .planlananDevlerParent {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .planlananDevlerParent {
          align-self: stretch;
          justify-content: flex-start;
          gap: var(--gap-20);
        }
        .component39 {
          width: 24.125rem;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: var(--br-10);
          background-color: var(--color-salmon-200);
          justify-content: center;
          padding: var(--padding-15) 0;
          box-sizing: border-box;
          text-align: left;
          font-size: var(--font-size-24);
          color: var(--color-salmon-100);
          font-family: var(--font-poppins);
        }
        @media screen and (max-width: 1200px) {
          .akllAnalizLlebilir {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

// Component 3 with inline styles
export type Component3Type = {
  className?: string;
  /** Variant props */
  property1?: 1;
};

const Component3: NextPage<Component3Type> = ({ className = "", property1 = 1 }) => {
  return (
    <div className={`component38 ${className}`} data-property1={property1}>
      <div className="planlananDevlerParent">
        <Image
          className="planlananDevlerIcon"
          loading="lazy"
          width={47}
          height={47}
          sizes="100vw"
          alt=""
          src="/planlanan-devler-2.svg"
        />
        <div className="uyumluGvenliVeModernWrapper">
          <h3 className="uyumluGvenliVe">Uyumlu, Güvenli ve Modern</h3>
        </div>
      </div>
      <style jsx>{`
        .planlananDevlerIcon {
          width: 2.938rem;
          height: 2.938rem;
          position: relative;
          border-radius: 122.5px;
        }
        .uyumluGvenliVe {
          margin: 0;
          position: relative;
          font-size: inherit;
          font-weight: 600;
          font-family: inherit;
        }
        .uyumluGvenliVeModernWrapper {
          justify-content: flex-start;
        }
        .component38,
        .planlananDevlerParent,
        .uyumluGvenliVeModernWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .planlananDevlerParent {
          align-self: stretch;
          justify-content: flex-start;
          gap: var(--gap-20);
        }
        .component38 {
          width: 24.125rem;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: var(--br-10);
          background-color: var(--color-mediumslateblue-200);
          justify-content: center;
          padding: var(--padding-15) 0;
          box-sizing: border-box;
          text-align: left;
          font-size: var(--font-size-24);
          color: var(--color-mediumslateblue-100);
          font-family: var(--font-poppins);
        }
        @media screen and (max-width: 1200px) {
          .uyumluGvenliVe {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

// Main page component with inline styles
const Page: NextPage = () => {
  return (
    <div className="page">
      <section className="submitCancelBackground">
        <Component1 property1={2} />
        <Component2 property1={1} />
        <Component3 property1={1} />
      </section>
      <section className="kurumunuzuZirveyeTayanGWrapper">
        <div className="kurumunuzuZirveyeTayanContainer">
          <p className="kurumunuzuZirveyeTayan">
            Kurumunuzu Zirveye Taşıyan Güçlü Çözümler!
          </p>
          <p className="kurumunuzuZirveyeTayan">&nbsp;</p>
          <p className="kurumunuzuZirveyeTayan">
            EBTEX, günlük operasyonlarınızı kolaylaştırarak zamandan ve maliyetten
            tasarruf etmenizi sağlar. Karmaşık idari süreçleri basitleştirir,
            sınav hazırlıklarından veri analizine kadar her aşamada size destek
            olur. Sistemimiz, iş akışlarınızı optimize ederek öğretmenler,
            öğrenciler ve yöneticiler için daha verimli bir çalışma ortamı
            yaratır.
          </p>
          <p className="kurumunuzuZirveyeTayan">&nbsp;</p>
          <ul className="kolaylatrlmYnetimRe">
            <li className="kurumunuzuZirveyeTayan">
              <span className="kolaylatrlmYnetim">Kolaylaştırılmış Yönetim:</span>
              <span>
                {" "}Öğrenci kayıtları, sınav planlamaları, ödev takipleri ve
                finansal süreçler gibi operasyonları otomatikleştirerek
                süreçlerinizi hızlandırır.
              </span>
            </li>
            <p className="kurumunuzuZirveyeTayan">
              <span className="kolaylatrlmYnetim">Etkili İletişim:</span>
              <span className="kolaylatrlmYnetim">
                {" "}Öğrenciler, öğretmenler ve veliler arasında hızlı bilgi
                akışını sağlayarak iş birliğini artırır. Bildirimler,
                toplantılar ve duyurular gibi süreçleri dijitalleştirir.
              </span>
            </p>
            <p className="kurumunuzuZirveyeTayan">
              <span className="kolaylatrlmYnetim">Süreçlerin Optimize Edilmesi:</span>
              <span>
                {" "}İdari iş yükünü azaltarak öğretmenlerin eğitime daha fazla
                odaklanmasını sağlar.
              </span>
            </p>
          </ul>
          <p className="kurumunuzuZirveyeTayan">&nbsp;</p>
          <p className="kurumunuzuZirveyeTayan">EBTEX ile:</p>
          <ul className="kolaylatrlmYnetimRe">
            <li className="kurumunuzuZirveyeTayan">
              <span>Eğitim kurumunuzun tüm işleyişini tek bir platformda yönetin.</span>
            </li>
            <p className="haftalkAylkVe">
              Haftalık, aylık ve yıllık eğitim akışlarını kolayca planlayın.
            </p>
            <p className="haftalkAylkVe">
              Zaman ve kaynak tasarrufu yaparak eğitim kalitesini artırın.
            </p>
          </ul>
        </div>
      </section>
      <style jsx>{`
        .submitCancelBackground {
          width: 85.938rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 0;
        }
        .kurumunuzuZirveyeTayan {
          margin: 0;
        }
        .kolaylatrlmYnetim {
          font-family: var(--font-poppins);
        }
        .kolaylatrlmYnetimRe {
          margin: 0;
          font-size: inherit;
          padding-left: var(--padding-32);
        }
        .haftalkAylkVe {
          margin: 0;
          font-family: var(--font-poppins);
        }
        .kurumunuzuZirveyeTayanContainer {
          width: 82.75rem;
          position: relative;
          display: inline-block;
          flex-shrink: 0;
        }
        .kurumunuzuZirveyeTayanGWrapper,
        .page {
          border-radius: var(--br-10);
          display: flex;
          align-items: center;
        }
        .kurumunuzuZirveyeTayanGWrapper {
          border: 2px solid var(--color-aliceblue);
          flex-direction: row;
          justify-content: center;
          padding: 0.75rem 1.437rem;
          text-align: left;
          font-size: var(--font-size-24);
          color: var(--color-darkslategray);
          font-family: var(--font-poppins);
        }
        .page {
          width: 100%;
          position: relative;
          background-color: var(--color-white);
          flex-direction: column;
          justify-content: flex-start;
          padding: 1.562rem 0;
          box-sizing: border-box;
          gap: 2.187rem;
          line-height: normal;
          letter-spacing: normal;
        }
        @media screen and (max-width: 1415px) {
          .kurumunuzuZirveyeTayanGWrapper {
            width: calc(100% - 40px);
          }
        }
        @media screen and (max-width: 825px) {
          .page {
            gap: 1.063rem;
          }
        }
        @media screen and (max-width: 450px) {
          .kurumunuzuZirveyeTayanContainer {
            font-size: 1.188rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
