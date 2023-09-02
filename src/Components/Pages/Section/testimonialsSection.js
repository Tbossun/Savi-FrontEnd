import React from "react";
import reviewerPhoto from "../../../Assests/images/Ellipse 4.png";
import Review from "./review";

const TestimonialSection = () => {
  const reviews = [
    {
      reviewerPhoto: reviewerPhoto,
      name: "Aderemirekun Ayomide",
      title: "Widower Association",
      testimony:
        "Savi has transformed the way I save money. Being part of a thrift group has made it easier to stay motivated and accountable. With Savi, I've achieved my savings goals faster than ever before!",
    },
    {
      reviewerPhoto: reviewerPhoto,
      name: "Aderemirekun Ayomide",
      title: "Widower Association",
      testimony:
        "Savi has transformed the way I save money. Being part of a thrift group has made it easier to stay motivated and accountable. With Savi, I've achieved my savings goals faster than ever before!",
    },
    {
      reviewerPhoto: reviewerPhoto,
      name: "Aderemirekun Ayomide",
      title: "Widower Association",
      testimony:
        "Savi has transformed the way I save money. Being part of a thrift group has made it easier to stay motivated and accountable. With Savi, I've achieved my savings goals faster than ever before!",
    },
  ];
  return (
    <section className="testimonial-section feature card flex-column align-items-center p-2 w-30">
    <h2 className="text-center mb-4">What our users say?</h2>
    <div className="container">
      <h6 className="row justify-content-center font-weight-light ">
        {reviews.map((review, index) => (
          <div key={index} className="col-md-3 mb-4">
            <Review
              reviewerPhoto={review.reviewerPhoto}
              name={review.name}
              title={review.title}
              testimony={review.testimony}
            />
          </div>
        ))}
      </h6>
    </div>
  </section>
  );
};

export default TestimonialSection;