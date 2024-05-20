import React from "react";
import "../../App.css";

function FeatureCard({
  image,
  amount,
  requestType,
  valuation,
  valuationImg,
  date,
}) {
  return (
    <div className="featureCard">
      <div className="featureContainer">
        {/* image */}
        <div className="card-img">
          <img src={image} alt="" />
        </div>
        <div className="otherCard-Feature">
          {/* amount */}
          <p className="card-amount">{amount}</p>
          <p className="card-request">{requestType}</p>
          {/* <br /> */}
          <div className="card-valuation">
            <img src={valuationImg} alt="" />
            <div className="valuation-text">{valuation}</div>
            <div className="card-date">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
