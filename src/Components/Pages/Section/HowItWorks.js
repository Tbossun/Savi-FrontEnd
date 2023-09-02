import React from "react";
import howItWorksPhoto from "../../../Assests/images/HowItWorksPhoto.png";

const HowSaviWorks = ({ number, title, description }) => {
    return (
        <section className="howSaviWorks-content d-flex align-items-start mb-3">
        <div style={{ color: "#b5179e" }} className="integer-container border-radius-100px me-3">
          <h1 className="integer-holder font-weight-bold text-white text-center py-2 px-3 m-0">
            {number}
          </h1>
        </div>
        <div className="body-container d-flex flex-column">
          <h3 className="body-title font-weight-bold mb-2">{title}</h3>
          <div className="description-container">
            <h3 className="description-number font-weight-normal m-0">{number}</h3>
            <h6 className="description-body font-weight-light m-0">{description}</h6>
          </div>
        </div>
      </section>
    );
  };

const HowItWorksSection = () => {
  const features = [
    {
      number: "1",
      title: "Sign Up in Seconds",
      description: "Create account with Savi and start saving.",
    },
    {
      number: "2",
      title: "Join or Create Thrift Groups",
      description:
        "Create your account quickly and start your savings journey within moments.",
    },
    {
      number: "3",
      title: "Automated Contributions",
      description:
        "Schedule automatic transfers from your wallet to your savings group for hassle-free saving.",
    },
    {
      number: "4",
      title: "Track and Celebrate",
      description:
        "Monitor your savings growth, view contributions, and celebrate milestones on our user-friendly dashboard.",
    },
  ];
  return (
    <section className="how-it-works-section text-center bg-light py-5">
      <div className="container align-item-center">
        <div className="row">
          <div className="col-lg-6">
          <div className="how-it-works-content  ">
              <h3 style={{ color: "#b5179e" }}>How It Works</h3>
              <div className="item-container  justify-content-center align-item-center ">
                {features.map((feature, index) => (
                  
                  <HowSaviWorks
                    number={index + 1}
                    key={feature.number}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="how-it-works-content-image-container">
              <img
                src={howItWorksPhoto}
                alt="HowItWorksPhoto.png"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
