
import React from "react";
import SomeCard from "./SomeCard";
import SomeCardData from "@/Data/SomeCardData";

const SomeCardSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          {SomeCardData.SomeCardData.map((data, index) => (
            <SomeCard key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SomeCardSection;
