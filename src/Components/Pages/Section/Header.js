import React from "react";
import { ButtonComp } from "../../Common/Button";
import hero from "../../../Assests/svg/hero-image.svg"

export const HeaderComp = () => {
  const handleSendInstructions = () => {
    // Perform any necessary actions here

    // Navigate to ResetPassword2
    // navigate("/sign-up");
  };

  return (
    <div className="header bg-light py-5 mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="header__container--title mb-4">
              Achieve Financial Success with{" "}
              <span style={{ color: "#b5179e" }}>Savi: </span> The
              Future of <span className="header__container--purple">Smart Savings</span>.
            </h1>
            <h6 className="header__container--subtitle font-weight-light mb-4">
              Experience the convenience of secure group savings and personalized
              savings plans with Savi. Take control of your finances and unlock a
              brighter financial future.
            </h6>
            <ButtonComp label="Get Started" width="161px" onClick={handleSendInstructions} />
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <img src={hero} alt="Hero" className="img-fluid mt-2 mb-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
