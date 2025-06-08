import type { NextPage } from "next";
import Image from "next/image";

export type WebsiteType = {
  className?: string;
};

const Website: NextPage<WebsiteType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full max-w-[120rem] mx-auto h-[39.5rem] bg-[#e9ecfb] flex flex-col items-center justify-start !pt-[4.375rem] !pb-[6.063rem] !pl-5 !pr-[1.313rem] box-border gap-[1.875rem] leading-[normal] tracking-[normal] text-center text-base text-[#5c67f7] font-[Poppins] ${className}`}
    >
      <div className="flex flex-row items-start justify-end !pt-0 !pb-0 !pl-[22.938rem] !pr-[22.813rem] box-border max-w-full mq450:!pl-5 mq450:!pr-5 mq450:box-border">
        <div className="h-6 flex flex-col items-center justify-center">
          <div className="self-stretch relative border-[#5c67f7] border-solid border-t-[0.125rem] box-border h-0.5" />
          <div className="relative font-medium">Hakkımızda</div>
        </div>
      </div>
      <section className="w-[51.688rem] flex flex-col items-start justify-start max-w-full z-[1] text-left text-2xl text-[#27313c] font-[Poppins]">
        <div className="flex flex-col items-start justify-start gap-2.5">
          <h3 className="!m-0 relative text-[length:inherit] font-medium font-[inherit] mq450:text-[1.188rem]">
            Eğitimde Güvenilir ve Yenilikçi Çözüm Ortağınız
          </h3>
          <div className="relative text-[0.938rem]">
            <p className="!m-0">
              EBTEX, TAK Eğitim Teknolojileri Şirketi bünyesinde eğitim
              kurumlarının süreçlerini kolaylaştırmak ve öğrenci
            </p>
            <p className="!m-0">
              başarısını artırmak amacıyla geliştirilen yenilikçi bir eğitim
              yönetim sistemidir. Kurucumuzun 30 yılı aşkın eğitim
            </p>
            <p className="!m-0">
              sektörü deneyimi ve uluslararası uzman yazılım ekibimizle küresel
              standartlarda rekabet eden bir platform
            </p>
            <p className="!m-0">sunuyoruz”.</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start justify-start gap-2.5 max-w-full text-left text-2xl text-[#27313c] font-[Poppins]">
        <h3 className="!m-0 self-stretch relative text-[length:inherit] font-medium font-[inherit] mq450:text-[1.188rem]">
          Değerlerimiz ve Yaklaşımlarımız
        </h3>
        <div className="w-[51.625rem] flex flex-row items-end justify-start gap-0.5 text-[0.938rem]">
          <div className="flex flex-col items-start justify-end !pt-0 !pb-px !pl-0 !pr-0">
            <div className="flex flex-col items-start justify-start gap-[2.375rem]">
              <Image
                className="w-5 h-5 relative"
                loading="lazy"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/group-46.svg"
              />
              <Image
                className="w-5 h-5 relative"
                loading="lazy"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/group-47.svg"
              />
              <Image
                className="w-5 h-5 relative"
                loading="lazy"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/group-48.svg"
              />
              <Image
                className="w-5 h-5 relative"
                loading="lazy"
                width={20}
                height={20}
                sizes="100vw"
                alt=""
                src="/group-49.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-3">
              <div className="w-[49.688rem] relative inline-block">
                <p className="!m-0">
                  <span className="font-[Poppins]">
                    Güvenilirlik ve Gizlilik:
                  </span>
                  <span>
                    {" "}
                    Verilerinizi uluslararası güvenlik standartlarıyla korur,
                    eğitim süreçlerinde gizliliğe her
                  </span>
                </p>
                <p className="!m-0">zaman önem veririz.</p>
              </div>
              <div className="w-[49.625rem] relative inline-block">
                <p className="!m-0">
                  <span className="font-[Poppins]">{`Yenilikçilik ve Kalite: `}</span>
                  <span>
                    Eğitim teknolojilerindeki yenilikleri sürekli takip ederek,
                    kurumunuza modern ve yüksek
                  </span>
                </p>
                <p className="!m-0">kaliteli çözümler sunuyoruz.</p>
              </div>
              <div className="w-[50.25rem] relative inline-block">
                <p className="!m-0">
                  <span className="font-[Poppins]">{`Kullanıcı Dostu Çözümler: `}</span>
                  <span>
                    Tüm kullanıcılarımızın sisteme kolayca adapte olması için
                    basit, anlaşılır ve pratik
                  </span>
                </p>
                <p className="!m-0">arayüzler geliştiriyoruz.</p>
              </div>
              <div className="w-[46.563rem] relative inline-block">
                <span>{`7/24 Destek: `}</span>
                <span>
                  Yıl boyunca her an yanınızda olan uzman ekibimizle, hızlı ve
                  kesintisiz destek sağlıyoruz.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Website;
