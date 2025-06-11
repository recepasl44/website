import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[12.5rem] left-[6.25rem] w-[53.75rem] h-[50rem] flex flex-col items-start justify-start !pt-[0rem] !pb-[25rem] !pl-[0rem] !pr-[0rem] box-border gap-[5.312rem] max-w-full text-left text-[3rem] text-[#cdcffa] font-[Poppins] mq450:static mq450:p-5 ${className}`}
    >
      <div className="flex flex-col items-start justify-start !pt-[0rem] !pb-[0rem] !pl-[0rem] !pr-[1.25rem] box-border gap-[0.375rem] shrink-0 max-w-full">
        <h1 className="!m-0 relative text-[length:inherit] font-semibold font-[inherit] inline-block max-w-full z-[2] mq450:text-[2.375rem]">
          {`Eğitimi Teknolojiyle Yönet: `}EBTEX
        </h1>
        <div className="relative text-[1.5rem] font-semibold z-[2]">
          <p className="!m-0">
            EBTEX (Eğitim Bilişim Teknolojileri Experi) eğitim kurumlarının
          </p>
          <p className="!m-0">
            kayıt, yoklama, sınav, rehberlik, finans, iletişim ve servis
            süreçlerini
          </p>
          <p className="!m-0">
            tek platformda yönetir. Öğrenciye özel analizler, kişiselleştirilmiş
          </p>
          <p className="!m-0">
            kitaplar, testler ve ödevlerle başarıyı artırır; kurumunuzun
          </p>
          <p className="!m-0">operasyonlarını hızlandırır ve kolaylaştırır.</p>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start !pt-[0rem] !pb-[3.75rem] !pl-[1.5rem] !pr-[1.5rem] box-border max-w-full">
        <div className="flex flex-row items-start justify-start gap-[1.375rem] shrink-0 max-w-full">
          <Button
            className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] !pt-[0.937rem] !pb-[0.937rem] !pl-[1.875rem] !pr-[1.875rem]"
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          />
          <Button
            className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] !pt-[0.937rem] !pb-[0.937rem] !pl-[1.875rem] !pr-[1.875rem]"
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          />
        </div>
      </div>
      <div className="self-stretch h-[37.125rem] flex flex-row items-start justify-end max-w-full">
        <div className="h-[37.125rem] w-full relative shrink-0 max-w-full overflow-hidden flex items-center justify-center">
          <Image
            className="h-full w-full shrink-0 object-cover absolute left-[0rem] top-[0rem] [transform:scale(1.122)]"
            loading="lazy"
            width={546}
            height={594}
            sizes="100vw"
            alt=""
            src="/ellipse-3.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
