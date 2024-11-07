import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="/assets/images/kaputas/WhiteLogo.png"
          type="image/gif"
          sizes="16x16"
        />
        <title>Kaputaş İnşaat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Kaputaş İnşaat, Antalya'nın lider inşaat firması olarak, lüks konutlar ve endüstriyel yapılar inşa ediyor. Yenilikçi, sürdürülebilir ve estetik çözümlerle yüksek yaşam standartları hedefliyoruz. Müşteri memnuniyeti odaklı projelerle sektördeki liderliğimizi pekiştiriyoruz."
        />

        <meta
          name="keywords"
          content="Kaputaş İnşaat, Antalya inşaat, lüks konutlar, endüstriyel yapılar, inşaat firması Antalya, modern konutlar, ticari yapılar, restorasyon projeleri, sürdürülebilir inşaat, estetik yapılar, yüksek mühendislik standartları, çevre dostu inşaat"
        />

        <meta name="author" content="Yiğit Yüceer" />

        <link
          href="/assets/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
          id="bootstrap"
        />
        <link href="/assets/css/plugins.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/color.css" rel="stylesheet" type="text/css" />

        <link
          rel="stylesheet"
          href="/assets/css/colors/blue-3.css"
          type="text/css"
          id="colors"
        />

        <link
          rel="stylesheet"
          href="/assets/revolution/css/settings.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="/assets/revolution/css/layers.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="/assets/revolution/css/navigation.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="/assets/css/rev-settings.css"
          type="text/css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/font-style-2.css"
          type="text/css"
        />
      </head>
      <body id="homepage" className="de_light">
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>

        {/* Javascript Files */}
        <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
        <Script src="/assets/js/designesia.js" strategy="beforeInteractive" />
        <Script
          src="/assets/js/jquery.event.move.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/jquery.twentytwenty.js"
          strategy="beforeInteractive"
        />

        {/* RS5.0 Core JS Files */}
        <Script
          src="/assets/revolution/js/jquery.themepunch.tools.min.js?rev=5.0"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/revolution/js/jquery.themepunch.revolution.min.js?rev=5.0"
          strategy="beforeInteractive"
        />

        {/* RS5.0 Extensions Files */}
        <Script
          src="/assets/revolution/js/extensions/revolution.extension.video.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/revolution/js/extensions/revolution.extension.slideanims.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/revolution/js/extensions/revolution.extension.layeranimation.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/revolution/js/extensions/revolution.extension.navigation.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/revolution/js/extensions/revolution.extension.actions.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/revolution/js/extensions/revolution.extension.kenburn.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/revolution/js/extensions/revolution.extension.migration.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/revolution/js/extensions/revolution.extension.parallax.min.js"
          strategy="beforeInteractive"
        />

        <Script src="/assets/js/rev-slider.js" strategy="beforeInteractive" />
        <Script src="/assets/js/twenty-init.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
