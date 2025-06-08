import type { NextPage } from "next";
import Image from "next/image";

export type WebsiteType = {
  className?: string;
};

const Website: NextPage<WebsiteType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] h-[632px] bg-[#e9ecfb] max-w-full flex flex-col items-center justify-start !pt-[70px] !pb-[97px] !pl-5 !pr-[21px] box-border gap-[30px] leading-[normal] tracking-[normal] text-center text-base text-[#5c67f7] font-[Poppins] ${className}`}
    >
      <div className="flex flex-row items-start justify-end !pt-0 !pb-0 !pl-[367px] !pr-[365px] box-border max-w-full mq450:!pl-5 mq450:!pr-5 mq450:box-border">
        <div className="h-6 flex flex-col items-center justify-center">
          <div className="self-stretch relative border-[#5c67f7] border-solid border-t-[2px] box-border h-0.5" />
          <div className="relative font-medium">Hakkımızda</div>
        </div>
      </div>
      <section className="w-[827px] flex flex-col items-start justify-start max-w-full z-[1] text-left text-2xl text-[#27313c] font-[Poppins]">
        <div className="flex flex-col items-start justify-start gap-2.5">
          <h3 className="!m-0 relative text-[length:inherit] font-medium font-[inherit] mq450:text-[19px]">
            Eğitimde Güvenilir ve Yenilikçi Çözüm Ortağınız
          </h3>
          <div className="relative text-[15px]">
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
        <h3 className="!m-0 self-stretch relative text-[length:inherit] font-medium font-[inherit] mq450:text-[19px]">
          Değerlerimiz ve Yaklaşımlarımız
        </h3>
        <div className="w-[826px] flex flex-row items-end justify-start gap-0.5 text-[15px]">
          <div className="flex flex-col items-start justify-end !pt-0 !pb-px !pl-0 !pr-0">
            <div className="flex flex-col items-start justify-start gap-[38px]">
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
              <div className="w-[795px] relative inline-block">
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
              <div className="w-[794px] relative inline-block">
                <p className="!m-0">
                  <span className="font-[Poppins]">{`Yenilikçilik ve Kalite: `}</span>
                  <span>
                    Eğitim teknolojilerindeki yenilikleri sürekli takip ederek,
                    kurumunuza modern ve yüksek
                  </span>
                </p>
                <p className="!m-0">kaliteli çözümler sunuyoruz.</p>
              </div>
              <div className="w-[804px] relative inline-block">
                <p className="!m-0">
                  <span className="font-[Poppins]">{`Kullanıcı Dostu Çözümler: `}</span>
                  <span>
                    Tüm kullanıcılarımızın sisteme kolayca adapte olması için
                    basit, anlaşılır ve pratik
                  </span>
                </p>
                <p className="!m-0">arayüzler geliştiriyoruz.</p>
              </div>
              <div className="w-[745px] relative inline-block">
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
