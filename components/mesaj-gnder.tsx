import type { NextPage } from "next";
import S from "./s";
import Bilgiler from "./bilgiler";

export type MesajGnderType = {
  className?: string;
};

const MesajGnder: NextPage<MesajGnderType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[60.25rem] shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-[0.625rem] bg-[#fff] border-[#e6eff3] border-solid border-[0.063rem] box-border max-w-full overflow-hidden flex flex-row items-center justify-center !pt-[1.125rem] !pb-[1.125rem] !pl-[2.438rem] !pr-[2.438rem] gap-5 leading-[normal] tracking-[normal] text-center text-2xl text-[#27313c] font-[Poppins] ${className}`}
    >
      <Bilgiler />
      <div className="flex flex-col items-center justify-center flex-1 gap-5">
        <h3 className="!m-0 relative text-[length:inherit] font-medium font-[inherit] mq450:text-[1.188rem]">
          Mesaj Gönderin
        </h3>
        <section className="self-stretch flex flex-col items-start justify-start gap-2.5 text-left text-[0.938rem] text-[#27313c] font-[Poppins]">
          <S adSoyad="Ad Soyad" adSoyadnzGiriniz="Ad soyadınızı Giriniz" />
          <S adSoyad="E-Posta" adSoyadnzGiriniz="E-Postanızı Giriniz" />
          <S adSoyad="Telefon" adSoyadnzGiriniz="Telefon Numaranızı Giriniz" />
          <S adSoyad="Kurum Adı" adSoyadnzGiriniz="Kurum Adını Giriniz" />
          <div className="self-stretch flex flex-col items-start justify-center gap-[0.188rem]">
            <div className="self-stretch relative font-medium">Mesaj</div>
            <div className="self-stretch h-20 rounded-[0.625rem] bg-[#f8f9f9] border-[#e6eff3] border-solid border-[0.063rem] box-border flex flex-col items-start justify-start !p-2.5 text-right text-[0.813rem] text-[#686f77]">
              <div className="relative">Mesajınızı Giriniz</div>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-col items-end justify-center text-left text-[0.938rem] text-[#fff]">
          <div className="rounded-md bg-[#5c67f7] flex flex-row items-center justify-center !pt-[0.469rem] !pb-[0.469rem] !pl-[0.938rem] !pr-[0.938rem]">
            <div className="relative font-semibold">Mesajı Gönder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesajGnder;
