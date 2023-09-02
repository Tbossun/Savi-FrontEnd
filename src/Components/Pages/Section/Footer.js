import React from "react";
import SaviWhiteLogo from "../../../Assests/svg/White_Logo.svg";
import Image from "react-bootstrap/Image";
import Twitter from "../../../Assests/svg/Twitter.svg";
import Instagram from "../../../Assests/svg/Instagram.svg";
import Youtube from "../../../Assests/svg/Youtube.svg";

export const FooterComp = () => {
  return (
    <div style={{ backgroundColor: "#b5179e", paddingTop: "3px" }}>
      <div className="container text-center">
        <div>
          <Image
            src={SaviWhiteLogo}
            alt="logo"
            style={{ width: "71px", height: "45px" }}
          />
        </div>
        <h6 className="mt-3" style={{ color: "white" }}>
          For more enquiries: <span>helpsupport@easylend.com</span>
        </h6>
        <hr/>
        <div className="mt-3 d-flex justify-content-center">
          <Image className="mx-2" src={Instagram} alt="Instagram_Logo" />
          <Image className=" mx-2" src={Twitter} alt="Twitter_Logo" />
          <Image className="mx-2" src={Youtube} alt="Youtube_Logo" />
        </div>
        <h6 className="mt-3 mb-2 pb-2" style={{ color: "white" }}>
          © 2023 EasyLend. All rights reserved
        </h6>
      </div>
    </div>
  );
};
