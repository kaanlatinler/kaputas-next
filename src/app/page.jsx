import AnotherCardsSection from "./components/AnotherCardsSection";
import Card from "./components/Card";
import ContactSection from "./components/ContactSection";
import DescriptionSection from "./components/DescriptionSection";
import SlidingAnim from "./components/SlidingAnim";
import SomeCardSection from "./components/SomeCardSection";
import WelcomeSection from "./components/WelcomeSection";
import CardData from "@/Data/CardData";

export default function Home() {
  return (
    <div id="content" className="no-bottom no-top">
      <WelcomeSection />
      <SlidingAnim />
      <div id="cardSection">
        {CardData.CardData.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>
      <DescriptionSection />
      <AnotherCardsSection />
      <SomeCardSection />
      <ContactSection />
    </div>
  );
}
