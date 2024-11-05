
import React from "react";

const Card = ({ data }) => {
  return (
    <div>
      <section
        id="section-service-3"
        className={
          data.isRight ? "side-bg no-padding" : "side-bg no-padding de_light"
        }
        {...(data.isRight ? { "data-bgcolor": "#E6EBF1" } : {})}
      >
        <div
          className={
            data.isRight
              ? "image-container wow zoomIn col-lg-6 offset-lg-6 col-md-12 pull-right"
              : "image-container wow zoomIn col-lg-6 col-md-12 pull-left"
          }
          data-delay="0"
        >
          <div
            className="background-image"
            data-bgimage={`url(${data.image})`}
          ></div>
        </div>

        <div className="container">
          <div className="row">
            <div className="inner-padding">
              <div
                className={
                  data.isRight
                    ? "col-lg-5 col-md-12 wow fadeInLeft"
                    : "col-lg-5  offset-lg-7 col-md-12 wow fadeInRight"
                }
                data-wow-delay=".5s"
              >
                <h3>{data.title}</h3>
                {data.content}
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
