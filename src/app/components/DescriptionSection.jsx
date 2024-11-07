"use client";

import React from "react";
import styles from "../custom.module.css";

const DescriptionSection = () => {
  return (
    <section
      id="section-testimonial"
      data-bgimage="url(/assets/images/foto/kaputas_description_bg.webp) fixed"
      aria-label="section"
    >
      <div className="container">
        <div className="row text-center ">
          <h2 className="text-white">
            Kaputaş&apos;ın İnşaat – Antalya&apos;nın Lider İnşaat Şirketi
          </h2>
          <p></p>
        </div>
        <div className="row text-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <h4 className={styles.description}>
              Kaputaş İnşaat, Antalya’nın hızla gelişen inşaat sektöründe
              kendine sağlam bir yer edinmiş, lüks konutlar ve endüstriyel
              yapılar konusunda uzmanlaşmış prestijli bir inşaat firmasıdır.
              <div className="spacer-single"></div>
              Antalya’nın benzersiz doğası, iklim koşulları ve coğrafi
              özelliklerine uyum sağlayarak inşa ettiğimiz projeler, sadece
              estetik açıdan değil, fonksiyonel olarak da yüksek yaşam
              standartlarını hedeflemektedir. Müşteri memnuniyetini her zaman ön
              planda tutarak, her bir projemizi titizlikle planlıyor ve hayata
              geçiriyoruz.
              <div className="spacer-single"></div>
              Antalya ve çevresindeki bölgelerde, yenilikçi ve sürdürülebilir
              inşaat çözümleri sunarak, lüks yaşam alanları ve endüstriyel
              yapılar konusunda sektördeki liderliğimizi pekiştirmektir. Kaputaş
              İnşaat olarak, her projede müşteri memnuniyetini en üst düzeyde
              tutmayı ve her zaman güvenilir, kaliteli işlere imza atmayı
              hedefliyoruz.
            </h4>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <h4 className={styles.description}>
              Amacımız, inşaat sektöründe kalite, estetik ve sürdürülebilirlik
              ilkelerine sadık kalarak, modern konutlar ve endüstriyel yapılar
              inşa etmektir. Yüksek mühendislik standartlarını, çevre dostu
              malzemeleri ve ileri teknolojiye dayalı inşaat yöntemlerini
              kullanarak, yaşam alanlarını değerli kılmak ve şehrin modern
              yüzünü yansıtan projeler üretmektir.
              <div className="spacer-single"></div>
              Kaputaş İnşaat olarak sunduğumuz hizmetler, konutlardan ticari
              yapılara, endüstriyel yapılardan restorasyon projelerine kadar
              geniş bir yelpazeye yayılmaktadır. Her projede titizlikle
              uyguladığımız mühendislik çözümleri ve modern tasarımlar ile
              sektördeki farkımızı ortaya koyuyoruz.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
