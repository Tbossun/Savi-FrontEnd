import React from "react";
import { ButtonComp } from "../../Common/Button";
import hero from "../../../Assests/svg/hero-image.svg"
import { useNavigate } from "react-router-dom";

export const HeaderComp = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    // Perform any necessary actions here

    // Navigate to ResetPassword2
     navigate("/signup");
  };

  return (
    <div className="header bg-light py-5 mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className=" mb-4">
              Achieve Financial Success with{" "}
              <span style={{ color: "#b5179e" }}>Savi: </span> The
              Future of <span style={{ color: "#b5179e" }}>Smart Savings</span>.
            </h1>
            <h6 className="font-weight-light mb-4">
              Experience the convenience of secure group savings and personalized
              savings plans with Savi. Take control of your finances and unlock a
              brighter financial future.
            </h6>
            <ButtonComp label="Get Started" width="161px" onClick={handleSignUp} />
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <img src={hero} alt="Hero" className="img-fluid mt-2 mb-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
