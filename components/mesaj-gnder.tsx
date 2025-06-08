import type { NextPage } from "next";
import S from "./s";

export type MesajGnderType = {
  className?: string;
};

const MesajGnder: NextPage<MesajGnderType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[964px] shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-[#fff] border-[#e6eff3] border-solid border-[1px] box-border max-w-full overflow-hidden flex flex-col items-center justify-center !pt-[18px] !pb-[18px] !pl-[39px] !pr-[39px] gap-5 leading-[normal] tracking-[normal] text-center text-2xl text-[#27313c] font-[Poppins] ${className}`}
    >
      <h3 className="!m-0 relative text-[length:inherit] font-medium font-[inherit] mq450:text-[19px]">
        Mesaj Gönderin
      </h3>
      <section className="self-stretch flex flex-col items-start justify-start gap-2.5 text-left text-[15px] text-[#27313c] font-[Poppins]">
        <S adSoyad="Ad Soyad" adSoyadnzGiriniz="Ad soyadınızı Giriniz" />
        <S adSoyad="E-Posta" adSoyadnzGiriniz="E-Postanızı Giriniz" />
        <S adSoyad="Telefon" adSoyadnzGiriniz="Telefon Numaranızı Giriniz" />
        <S adSoyad="Kurum Adı" adSoyadnzGiriniz="Kurum Adını Giriniz" />
        <div className="self-stretch flex flex-col items-start justify-center gap-[3px]">
          <div className="self-stretch relative font-medium">Mesaj</div>
          <div className="self-stretch h-20 rounded-[10px] bg-[#f8f9f9] border-[#e6eff3] border-solid border-[1px] box-border flex flex-col items-start justify-start !p-2.5 text-right text-[13px] text-[#686f77]">
            <div className="relative">Mesajınızı Giriniz</div>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-col items-end justify-center text-left text-[15px] text-[#fff]">
        <div className="rounded-md bg-[#5c67f7] flex flex-row items-center justify-center !pt-[7.5px] !pb-[7.5px] !pl-[15px] !pr-[15px]">
          <div className="relative font-semibold">Mesajı Gönder</div>
        </div>
      </div>
    </div>
  );
};

export default MesajGnder;
