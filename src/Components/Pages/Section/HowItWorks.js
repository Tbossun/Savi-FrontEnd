import React from "react";
import howItWorksPhoto from "../../../Assests/images/HowItWorksPhoto.png";

const HowSaviWorks = ({ number, title, description }) => {
    return (
        <section className="d-flex align-items-center mb-3">
        <div style={{ color: "#b5179e" }} className=" border-radius-100px me-3">
          <h1  style={{ color: "#b5179e" }}>
            {number}
          </h1>
        </div>
        <div className="align-items-center d-flex flex-column">
          <h3 className="body-title font-weight-bold mb-2 ">{title}</h3>
            <h6 className="font-weight-light m-0">{description}</h6>
          
        </div>
      </section>
    );
  };

const HowItWorksSection = () => {
  const features = [
    {
      title: "Sign up in seconds",
      description:
        "Create your account quickly and start your savings journey within moments.",
    },
    {
      title: "Join or Create Thrift Groups",
      description:
        "Create your account quickly and start your savings journey within moments.",
    },
    {
      title: "Automated Contributions",
      description:
        "Schedule automatic transfers from your wallet to your savings group for hassle-free saving.",
    },
    {
      title: "Track and Celebrate",
      description:
        "Monitor your savings growth, view contributions, and celebrate milestones on our user-friendly dashboard.",
    },
  ];
  return (
    <section className="text-center bg-light py-5">
      <div className="container align-item-center">
        <div className="row">
          <div className="col-lg-6">
          <div>
              <h3 style={{ color: "#b5179e" }}>How It Works</h3>
              <div className="item-container  justify-content-center align-item-center ">
                {features.map((feature, index) => (
                  
                  <HowSaviWorks
                    number={index + 1}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
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
