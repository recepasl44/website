import type { NextPage } from "next";
import Component1 from "../components/component1";
import Component2 from "../components/component2";
import Component3 from "../components/component3";
import styles from "./page.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.submitCancelBackground}>
        <Component1 property1={2} />
        <Component2 property1={1} />
        <Component3 property1={1} />
      </section>
      <section className={styles.kurumunuzuZirveyeTayanGWrapper}>
        <div className={styles.kurumunuzuZirveyeTayanContainer}>
          <p className={styles.kurumunuzuZirveyeTayan}>
            Kurumunuzu Zirveye Taşıyan Güçlü Çözümler!
          </p>
          <p className={styles.kurumunuzuZirveyeTayan}>&nbsp;</p>
          <p className={styles.kurumunuzuZirveyeTayan}>
            EBTEX, günlük operasyonlarınızı kolaylaştırarak zamandan ve
            maliyetten tasarruf etmenizi sağlar. Karmaşık idari süreçleri
            basitleştirir, sınav hazırlıklarından veri analizine kadar her
            aşamada size destek olur. Sistemimiz, iş akışlarınızı optimize
            ederek öğretmenler, öğrenciler ve yöneticiler için daha verimli bir
            çalışma ortamı yaratır.
          </p>
          <p className={styles.kurumunuzuZirveyeTayan}>&nbsp;</p>
          <ul className={styles.kolaylatrlmYnetimRe}>
            <li className={styles.kurumunuzuZirveyeTayan}>
              <span className={styles.kolaylatrlmYnetim}>
                Kolaylaştırılmış Yönetim:
              </span>
              <span>
                {" "}
                Öğrenci kayıtları, sınav planlamaları, ödev takipleri ve
                finansal süreçler gibi operasyonları otomatikleştirerek
                süreçlerinizi hızlandırır.
              </span>
            </li>
            <p className={styles.kurumunuzuZirveyeTayan}>
              <span className={styles.kolaylatrlmYnetim}>Etkili İletişim:</span>
              <span className={styles.kolaylatrlmYnetim}>
                {" "}
                Öğrenciler, öğretmenler ve veliler arasında hızlı bilgi akışını
                sağlayarak iş birl’!iğini artırır. Bildirimler, toplantılar ve
                duyurular gibi süreçleri dijitalleştirir.
              </span>
            </p>
            <p className={styles.kurumunuzuZirveyeTayan}>
              <span className={styles.kolaylatrlmYnetim}>
                Süreçlerin Optimize Edilmesi:
              </span>
              <span>
                {" "}
                İdari iş yükünü azaltarak öğretmenlerin eğitime daha fazla
                odaklanmasını sağlar.
              </span>
            </p>
          </ul>
          <p className={styles.kurumunuzuZirveyeTayan}>&nbsp;</p>
          <p className={styles.kurumunuzuZirveyeTayan}>EBTEX ile:</p>
          <ul className={styles.kolaylatrlmYnetimRe}>
            <li className={styles.kurumunuzuZirveyeTayan}>
              <span>
                Eğitim kurumunuzun tüm işleyişini tek bir platformda yönetin.
              </span>
            </li>
            <p className={styles.haftalkAylkVe}>
              Haftalık, aylık ve yıllık eğitim akışlarını kolayca planlayın.
            </p>
            <p className={styles.haftalkAylkVe}>
              Zaman ve kaynak tasarrufu yaparak eğitim kalitesini artırın.
            </p>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page;
