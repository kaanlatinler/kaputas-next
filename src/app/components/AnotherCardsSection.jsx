
import React from "react";
import AnotherCardData from "@/Data/AnotherCardData";
import AnotherCard from "./AnotherCard";

const AnotherCardsSection = () => {
  return (
    <section id="section-offer" className="no-top no-bottom">
      <div className="container-fluid">
        <div className="row g-2 py-2">
          {AnotherCardData.AnotherCardData.map((data, index) => (
            <AnotherCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnotherCardsSection;
