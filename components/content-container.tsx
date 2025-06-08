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
      className={`self-stretch flex flex-row items-center justify-center gap-[30px] z-[1] ${className}`}
    >
      <section className="h-[311px] flex-[0.9113] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-[#fff] overflow-hidden flex flex-row items-start justify-start !pt-[44.5px] !pb-[44.5px] !pl-16 !pr-16 box-border min-w-[419px] text-left text-2xl text-[#000] font-[Poppins] mq450:flex-1">
        <div className="flex flex-col items-center justify-start gap-[30px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-5">
            <Image
              className="w-[47px] h-[47px] relative rounded-[122.5px]"
              loading="lazy"
              width={47}
              height={47}
              sizes="100vw"
              alt=""
              src="/planlanan-devler.svg"
            />
            <div className="flex flex-col items-center justify-start gap-[5px]">
              <h3 className="!m-0 relative text-[length:inherit] font-semibold font-[inherit] mq450:text-[19px]">
                Tüm Süreçler Tek Platformda
              </h3>
              <div className="relative text-[15px] text-[#6e829f] text-center">
                <p className="!m-0">
                  Eğitim süreçlerinizi hızlandırarak zamandan ve maliyetten
                </p>
                <p className="!m-0">tasarruf edin.</p>
              </div>
            </div>
          </div>
          <Button
            className="!pt-[7.5px] !pb-[7.5px] !pl-[15px] !pr-[15px]"
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
