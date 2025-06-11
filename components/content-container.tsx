import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import Kart11 from "./kart1";

export type ContentContainerType = {
  className?: string;
};

const ContentContainer: NextPage<ContentContainerType> = ({
  className = "",
}) => {
  return (
    <main
      className={`self-stretch flex flex-row items-center justify-center gap-[1.875rem] z-[1] mq450:flex-col ${className}`}
    >
      <section className="h-[19.438rem] flex-[0.9113] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[0.625rem] bg-[#fff] overflow-hidden flex flex-row items-start justify-start !pt-[2.781rem] !pb-[2.781rem] !pl-16 !pr-16 box-border min-w-[26.188rem] text-left text-2xl text-[#000] font-[Poppins] mq450:flex-1">
        <div className="flex flex-col items-center justify-start gap-[1.875rem]">
          <div className="self-stretch flex flex-col items-center justify-start gap-5">
            <Image
              className="w-[2.938rem] h-[2.938rem] relative rounded-[7.656rem]"
              loading="lazy"
              width={47}
              height={47}
              sizes="100vw"
              alt=""
              src="/planlanan-devler.svg"
            />
            <div className="flex flex-col items-center justify-start gap-[0.313rem]">
              <h3 className="!m-0 relative text-[length:inherit] font-semibold font-[inherit] mq450:text-[1.188rem]">
                Tüm Süreçler Tek Platformda
              </h3>
              <div className="relative text-[0.938rem] text-[#6e829f] text-center">
                <p className="!m-0">
                  Eğitim süreçlerinizi hızlandırarak zamandan ve maliyetten
                </p>
                <p className="!m-0">tasarruf edin.</p>
              </div>
            </div>
          </div>
          <Button
            className="!pt-[0.469rem] !pb-[0.469rem] !pl-[0.938rem] !pr-[0.938rem]"
            disableElevation
            color="primary"
            variant="outlined"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          />
        </div>
      </section>
      <Kart11
        planlananDevler="/planlanan-devler-1.svg"
        akllAnalizLlebilirBaar="Akıllı Analiz, Ölçülebilir Başarı"
        herRencininBireyselIhtiyalar="Her öğrencinin bireysel ihtiyaçlarını karşılayarak başarıyı artırın."
      />
      <Kart11
        kart02Flex="0.9831"
        kart02Padding="56px 47px"
        planlananDevler="/planlanan-devler-2.svg"
        akllAnalizLlebilirBaar="Uyumlu, Güvenli ve Modern"
        herRencininBireyselIhtiyalar="Hassas verilerinizi koruyan, her ölçekte uyarlanabilir bir sistem."
      />
    </main>
  );
};

export default ContentContainer;
