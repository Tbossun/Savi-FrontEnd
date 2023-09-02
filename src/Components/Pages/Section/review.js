import React from "react";
import { Image, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Triangle from "../../../Assests/svg/triangle.svg";

const Review = ({ reviewerPhoto, name, title, testimony }) => {
  return (
    <Card className="testimonies-card border-0 mb-4">
    <Card.Body className="testimony-body bg-white border-top position-relative">
      <div className="testimony-mssg-object">
        <p className="testimony-message">{testimony}</p>
      </div>
      <img src={Triangle} className="triangle" alt="triangle" />
    </Card.Body>
    <Card.Footer className="reviewer-container d-flex align-items-center">
      <div className="reviewer-photo">
        <Image
          src={reviewerPhoto}
          className="img-fluid rounded-circle"
          alt="reviewerPhoto"
        />
      </div>
      <div className="reviewer-body ms-3">
        <h2 className="font-weight-bold m-0">{name}</h2>
        <h3 className="text-muted m-0">{title}</h3>
      </div>
    </Card.Footer>
  </Card>
  );
};

export default Review;