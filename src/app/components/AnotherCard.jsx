import React from "react";

const AnotherCard = ({ data }) => {
  return (
    <div
      className="col-xxl-4 col-xl-6 col-lg-6 mt-5 mt-sm-1  text-middle wow fadeInRight"
      data-wow-delay="0"
    >
      <div
        className="padding60"
        style={{ minHeight: "400px", maxHeight: "400px" }}
        data-bgcolor="rgba(156, 176, 203,.25)"
      >
        <h3>
          <i className="fa fa-tree id-color mr10"></i> {data.title}
        </h3>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default AnotherCard;
