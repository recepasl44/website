import type { NextPage } from "next";
import Image from "next/image";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] h-[551px] bg-[#192038] max-w-full overflow-hidden flex flex-col items-start justify-start !pt-[74px] !pb-[25px] !pl-[157px] !pr-[157px] box-border gap-[184px] text-left text-base font-[Poppins] ${className}`}
    >
      <section className="w-[1306px] h-[244px] flex flex-row items-start justify-start gap-[107px] text-left text-xl text-[#fff] font-[Poppins]">
        <div className="w-[459px] flex flex-col items-start justify-start gap-[21px] text-base text-[#a3a6af]">
          <div className="flex flex-row items-center justify-start gap-[5px]">
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
              className="h-5 w-[90px] relative"
              loading="lazy"
              width={90}
              height={20}
              sizes="100vw"
              alt=""
              src="/ebtexbeyaztext1.svg"
            />
          </div>
          <div className="self-stretch relative tracking-[-0.01px] font-medium">
            EBTEX, eğitim süreçlerinizi dijitalleştirerek size pratik ve başarı
            odaklı çözümler sunar. Modern teknolojilerle eğitimi
            kolaylaştırıyor, geleceğe hazır hale gelmenize yardımcı oluyoruz.
            Eğitimde dijital dönüşümü yakalamak ve daha fazla bilgi almak için
            bizimle iletişime geçin.
          </div>
        </div>
        <div className="h-[244px] w-[445px] flex flex-row items-start justify-start !pt-0 !pb-0 !pl-0 !pr-9 box-border gap-[125px]">
          <div className="flex flex-col items-start justify-start gap-[15px]">
            <h3 className="!m-0 relative text-[length:inherit] font-medium font-[inherit]">
              Sayfalar
            </h3>
            <div className="flex flex-col items-start justify-start gap-[11px] text-base text-[#a3a6af]">
              <div className="relative font-medium">Anasayfa</div>
              <div className="relative font-medium">Çözümler</div>
              <div className="relative font-medium">Ücretlendirme</div>
              <div className="relative font-medium">Referanslarımız</div>
              <div className="relative font-medium">Sık Sorulan Sorular</div>
              <div className="relative font-medium">Bize Ulaşın</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[15px]">
            <h3 className="!m-0 relative text-[length:inherit] font-medium font-[inherit]">
              Bilgi
            </h3>
            <div className="flex flex-col items-start justify-start gap-[11px] text-base text-[#a3a6af]">
              <div className="relative font-medium">Neden EBTEX</div>
              <div className="relative font-medium">Hakkımızda</div>
              <div className="relative font-medium">EBTEX’i Keşfedin</div>
              <div className="relative font-medium">Kullanıcı Merkezi</div>
              <div className="relative font-medium">Modüllerimiz</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[15px]">
          <h3 className="!m-0 relative text-[length:inherit] font-medium font-[inherit]">
            İletişim
          </h3>
          <div className="flex flex-col items-start justify-start gap-[30px] text-base text-[#a3a6af]">
            <div className="flex flex-col items-start justify-start gap-[11px]">
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
            <div className="flex flex-col items-start justify-start gap-[11px] text-[#fff]">
              <div className="relative font-medium">Bizi Takip Edin</div>
              <div className="flex flex-row items-center justify-start gap-[5px]">
                <Image
                  className="h-[35px] w-[35px] relative rounded-[5px] overflow-hidden shrink-0"
                  loading="lazy"
                  width={35}
                  height={35}
                  sizes="100vw"
                  alt=""
                  src="/utilitiescolorsbackgroundcolors.svg"
                />
                <Image
                  className="h-[35px] w-[35px] relative rounded-[5px] overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  width={35}
                  height={35}
                  sizes="100vw"
                  alt=""
                  src="/utilitiescolorsbackgroundcolors-1@2x.png"
                />
                <Image
                  className="h-[35px] w-[35px] relative rounded-[5px] overflow-hidden shrink-0"
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
      <div className="w-[1172px] h-6 flex flex-row items-start justify-start !pt-0 !pb-0 !pl-[435px] !pr-0 box-border">
        <div className="w-[737px] relative font-medium inline-block">
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
