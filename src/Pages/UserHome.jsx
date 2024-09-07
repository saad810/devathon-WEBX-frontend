import React from "react";
import CourseCard from "../Components/CourseCard";
import CourseDetailsPage from "./CourseDetailsPage";

const UserHome = () => {
  const course = {
    category: "WEB DEVELOPMENT",
    title: "React for Beginners",
    instructor: "John Doe",
    imageUrl: "https://via.placeholder.com/150",
    price: "$99",
    description:
      "Learn the basics of React, a popular JavaScript library for building user interfaces.",
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
    esse expedita quia assumenda enim suscipit ipsam asperiores vitae fuga
    laborum neque nulla, iste beatae voluptas, aliquid similique qui
    perferendis. Necessitatibus expedita asperiores tempore nulla
    veritatis, explicabo quisquam ipsum ratione quibusdam repudiandae fuga
    ducimus consequatur adipisci consectetur illo quo nam saepe. Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Itaque eum earum
    aliquam id vero ipsum vel sit explicabo. Ab ullam hic sit
    reprehenderit, vel possimus suscipit, omnis sunt numquam voluptatem
    accusamus! Natus, dolor ab dolorem rerum ad dolores accusantium
    laboriosam repudiandae quos fugiat quod esse in dolore labore quae
    obcaecati.`,
    features: [
      {
        heading: "Comprehensive Coverage",
        details: "Covers all the basics of React, including components, state, and props."
      },
      {
        heading: "Hands-on Projects",
        details: "Includes real-world projects to help you practice and solidify your skills."
      },
      {
        heading: "Expert Instructor",
        details: "Taught by an industry expert with years of experience in React."
      },
      {
        heading: "Lifetime Access",
        details: "Get lifetime access to course materials, so you can revisit the content anytime."
      },
      {
        heading: "Certificate of Completion",
        details: "Receive a certificate after completing the course, validating your skills."
      },
    ],
  };
  return (
    <div>
      {/* <CourseCard /> */}
      <CourseDetailsPage course={course} />
    </div>
  );
};

export default UserHome;
