import type { NextPage } from "next";
import Image from "next/image";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full max-w-[120rem] mx-auto h-[34.438rem] bg-[#192038] overflow-hidden flex flex-col items-start justify-start !pt-[4.625rem] !pb-[1.563rem] !pl-[9.813rem] !pr-[9.813rem] box-border gap-[11.5rem] text-left text-base font-[Poppins] ${className}`}
    >
      <section className="w-[81.625rem] h-[15.25rem] flex flex-row items-start justify-start gap-[6.688rem] text-left text-xl text-[#fff] font-[Poppins]">
        <div className="w-[28.688rem] flex flex-col items-start justify-start gap-[1.313rem] text-base text-[#a3a6af]">
          <div className="flex flex-row items-center justify-start gap-[0.313rem]">
            <Image
              className="h-8 w-8 relative"
              loading="lazy"
              width={32}
              height={32}
              sizes="100vw"
              alt=""
              src="/headerebtexmavilogo.svg"
            />
            <Image
              className="h-5 w-[5.625rem] relative"
              loading="lazy"
              width={90}
              height={20}
              sizes="100vw"
              alt=""
              src="/ebtexbeyaztext1.svg"
            />
          </div>
          <div className="self-stretch relative tracking-[-0.001rem] font-medium">
            EBTEX, eğitim süreçlerinizi dijitalleştirerek size pratik ve başarı
            odaklı çözümler sunar. Modern teknolojilerle eğitimi
            kolaylaştırıyor, geleceğe hazır hale gelmenize yardımcı oluyoruz.
            Eğitimde dijital dönüşümü yakalamak ve daha fazla bilgi almak için
            bizimle iletişime geçin.
          </div>
        </div>
        <div className="h-[15.25rem] w-[27.813rem] flex flex-row items-start justify-start !pt-0 !pb-0 !pl-0 !pr-9 box-border gap-[7.813rem]">
          <div className="flex flex-col items-start justify-start gap-[0.938rem]">
            <h3 className="!m-0 relative text-[length:inherit] font-medium font-[inherit]">
              Sayfalar
            </h3>
            <div className="flex flex-col items-start justify-start gap-[0.688rem] text-base text-[#a3a6af]">
              <div className="relative font-medium">Anasayfa</div>
              <div className="relative font-medium">Çözümler</div>
              <div className="relative font-medium">Ücretlendirme</div>
              <div className="relative font-medium">Referanslarımız</div>
              <div className="relative font-medium">Sık Sorulan Sorular</div>
              <div className="relative font-medium">Bize Ulaşın</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.938rem]">
            <h3 className="!m-0 relative text-[length:inherit] font-medium font-[inherit]">
              Bilgi
            </h3>
            <div className="flex flex-col items-start justify-start gap-[0.688rem] text-base text-[#a3a6af]">
              <div className="relative font-medium">Neden EBTEX</div>
              <div className="relative font-medium">Hakkımızda</div>
              <div className="relative font-medium">EBTEX’i Keşfedin</div>
              <div className="relative font-medium">Kullanıcı Merkezi</div>
              <div className="relative font-medium">Modüllerimiz</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.938rem]">
          <h3 className="!m-0 relative text-[length:inherit] font-medium font-[inherit]">
            İletişim
          </h3>
          <div className="flex flex-col items-start justify-start gap-[1.875rem] text-base text-[#a3a6af]">
            <div className="flex flex-col items-start justify-start gap-[0.688rem]">
              <div className="flex flex-row items-center justify-center gap-2.5">
                <Image
                  className="w-6 relative max-h-full overflow-hidden shrink-0"
                  loading="lazy"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/typcnhome.svg"
                />
                <div className="relative font-medium">Malatya Teknokent</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-2.5">
                <Image
                  className="w-6 relative max-h-full overflow-hidden shrink-0"
                  loading="lazy"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/fluentmail24filled.svg"
                />
                <div className="relative font-medium">ebtex@gmail.com</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-2.5">
                <Image
                  className="w-6 relative max-h-full overflow-hidden shrink-0"
                  loading="lazy"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/icroundphone.svg"
                />
                <div className="relative font-medium">0 (552) 000 07 19</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.688rem] text-[#fff]">
              <div className="relative font-medium">Bizi Takip Edin</div>
              <div className="flex flex-row items-center justify-start gap-[0.313rem]">
                <Image
                  className="h-[2.188rem] w-[2.188rem] relative rounded-[0.313rem] overflow-hidden shrink-0"
                  loading="lazy"
                  width={35}
                  height={35}
                  sizes="100vw"
                  alt=""
                  src="/utilitiescolorsbackgroundcolors.svg"
                />
                <Image
                  className="h-[2.188rem] w-[2.188rem] relative rounded-[0.313rem] overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  width={35}
                  height={35}
                  sizes="100vw"
                  alt=""
                  src="/utilitiescolorsbackgroundcolors-1@2x.png"
                />
                <Image
                  className="h-[2.188rem] w-[2.188rem] relative rounded-[0.313rem] overflow-hidden shrink-0"
                  loading="lazy"
                  width={35}
                  height={35}
                  sizes="100vw"
                  alt=""
                  src="/utilitiescolorsbackgroundcolors-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[73.25rem] h-6 flex flex-row items-start justify-start !pt-0 !pb-0 !pl-[27.188rem] !pr-0 box-border">
        <div className="w-[46.063rem] relative font-medium inline-block">
          {`© 2025 `}
          <span className="[text-decoration:underline]">EBTEX</span>
          {` | `}
          <span className="[text-decoration:underline]">
            TAK Eğitim Teknolojileri
          </span>{" "}
          Tic. San. LTD. ŞTİ. bünyesinde faaliyet göstermektedir.
        </div>
      </div>
    </div>
  );
};

export default Footer;
