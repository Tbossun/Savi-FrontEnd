import React from "react";
import users from "../../../Assests/icons/usersIcon.svg";
import moneyIcon from "../../../Assests/icons/money-withdrawal.svg";
import shieldIcon from "../../../Assests/icons/shield-alt.svg";
import walletIcon from "../../../Assests/icons/Wallet.svg";
// import AddFeature from "./AddFeatures";
import arrowIcon from "../../../Assests/icons/Arrow.svg";

const AddFeatures = ({ icon, title, description, marginRight }) => {
    return (
        <div
        className="feature card flex-column align-items-center p-2 w-40"
        style={{
          marginRight: marginRight,
          border: "none",
          
        }}
      >
        <div className="d-flex align-items-center justify-content-center card-icon-container">
          <img src={icon} className="card-icon w-10 h-10" alt={title} />
        </div>
        <h2 className="card-title font-weight-normal text-dark mt-3">{title}</h2>
        <h6 className="card-description font-weight-light text-center text-dark w-75 mx-auto">
          {description}
        </h6>
        <a>
        <div className="learnMore-container d-flex align-items-center mt-1 cursor-pointer">
          <h5 style={{ color: "#b5179e" }}>Learn more</h5>
            <div className="px-2 mb-3">
                <img src={arrowIcon} alt="arrowIcon" />
            </div>
        </div>
        </a>       
      </div>
    );
  };


const FeatureSection = () => {
  const cardDetails = [
    {
      icon: users,
      title: "Join Thrift Groups",
      description:
        "Save collectively with rotating lump sum payouts, eliminating risks of traditional methods.",
    },
    {
      icon: moneyIcon,
      title: "Hassle-Free",
      description:
        "Enjoy rotating lump sum payouts, ensuring fair distribution among group members",
    },
    {
      icon: shieldIcon,
      title: "Secure and Convenient",
      description:
        "Enjoy peace of mind with robust security measures and user-friendly wallet management.",
    },
    {
      icon: walletIcon,
      title: "Easy Wallet Management",
      description:
        "Seamlessly manage your funds, add money, and withdraw when you need it.",
    },
  ];

  return (
    <section className="features-section bg-white py-5">
      <div className="container d-flex flex-wrap justify-content-center">
        {cardDetails.map((cardDetail, index) => (
          <div
            key={index}
            className="flex-grow-1 p-2"
            style={{ maxWidth: "300px", flexBasis: "300px" }}
          >
            <AddFeatures
              icon={cardDetail.icon}
              title={cardDetail.title}
              description={cardDetail.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
