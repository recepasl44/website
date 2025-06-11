'use client';
import { useState } from 'react';

const modules = [
  {
    title: 'Ön Kayıt',
    content: 'Öğrenci adaylarının ön kayıt süreçlerini, randevu ve görüşme yönetimini kolayca takip edin.',
  },
  {
    title: 'Yoklama Yönetimi',
    content: 'Sınıf, yemek, etüt ve personel yoklamalarını eksiksiz ve düzenli şekilde yönetin.',
  },
  {
    title: 'Ders Defteri',
    content: 'Öğretmenlerin ders kayıtlarını dijital ortamda doldurmasını ve takibini sağlayın.',
  },
  {
    title: 'Soru Havuzu',
    content: 'Kişiye özel soru bankası oluşturun, çevrimiçi ya da basılı sınavlar hazırlayın.',
  },
  {
    title: 'Ödev Takip',
    content: 'Ödev planlamalarını yapın, tamamlanma durumlarını izleyin ve raporlayın.',
  },
  {
    title: 'Sınav Analiz',
    content: 'Sınav sonuçlarını detaylı inceleyin, başarı durumlarını ve eksik kazanımları tespit edin.',
  },
  {
    title: 'Çevrimiçi Sınav',
    content: 'Dijital sınavlar oluşturun, gerçek zamanlı takip edin ve sonuçları anında paylaşın.',
  },
  {
    title: 'Bursluluk Yönetimi',
    content: 'Bursluluk sınav başvurularını, oturum planlarını ve sonuçlarını yönetin.',
  },
  {
    title: 'Rehberlik Takip',
    content: 'Öğrencilerin akademik ve sosyal gelişimlerini, görüşmeleri ve ödevlerini kaydedin.',
  },
  {
    title: 'Finans ve Muhasebe',
    content: 'Gelir gider takibi, ödeme işlemleri ve finansal raporlamaları tek merkezden yönetin.',
  },
  {
    title: 'Yetkilendirme',
    content: 'Kullanıcı rolleri için modül ve sayfa erişim yetkilerini kolayca düzenleyin.',
  },
  {
    title: 'Liste Yönetimi',
    content: 'Sınıf, etüt, yemekhane ve servis listelerini dijital ortamda oluşturun ve takip edin.',
  },
  {
    title: 'Müfredat',
    content: 'Okul türü ve sınıf seviyesine göre müfredat içeriklerini görüntüleyin ve planlayın.',
  },
  {
    title: 'Ders ve Nöbet Programı',
    content: 'Ders ve nöbet çizelgelerini dijital olarak hazırlayıp öğretmenlerle paylaşın.',
  },
  {
    title: 'Servis Ulaşım',
    content: 'Servis araçları ve rotalarını planlayın, öğrenci takibini ve ödemeleri yönetin.',
  },
  {
    title: 'Etkinlik Yönetimi',
    content: 'Kurum içi etkinlikleri planlayın, katılımcıları takip edin ve medya dokümanlarını yönetin.',
  },
];

export default function ModulesPage() {
  const [active, setActive] = useState(modules[0].title);
  const activeContent = modules.find(m => m.title === active)?.content;

  return (
    <div className="w-full">
      <div className="px-4 py-2 text-sm text-[#5c67f7]">
        <a href="#" className="hover:underline">← EBTEX'i keşfet e geri dön</a>
      </div>
      <h2 className="px-4 font-semibold">Modullerimiz</h2>
      <div className="flex w-[1920px] h-[1000px] items-center flex-shrink-0 px-4">
        <div className="w-1/4 flex flex-col gap-1 overflow-y-auto h-full">
          {modules.map((m) => (
            <button
              key={m.title}
              onClick={() => setActive(m.title)}
              className={`text-left p-2 rounded ${active === m.title ? 'bg-[rgba(92,103,247,0.15)]' : 'bg-[rgba(255,255,255,1)]'}`}
            >
              {m.title}
            </button>
          ))}
        </div>
        <div className="w-3/4 p-4 overflow-y-auto h-full">
          <h3 className="text-xl font-semibold mb-2">{active}</h3>
          <p className="whitespace-pre-line">{activeContent}</p>
        </div>
      </div>
    </div>
  );
}
