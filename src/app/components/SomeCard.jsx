
import React from "react";

const SomeCard = ({ data, index }) => {
  return (
    <div className="col-md-6">
      <div className="text-start">
        <h2>{data.title}</h2>
        {index === 0 && (
          <div>
            <div className="spacer-single mt-2"></div>
          </div>
        )}
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default SomeCard;
