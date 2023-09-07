import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq",
      img: "/asset/pic1.jpg",
      // Image size 250px*250px
    },
    {
      id: 2,
      name: "Clara Moe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq",
      img: "/asset/pic2.jpg",
      // Image size 250px*250px
    },
    {
      id: 3,
      name: "Smith Cat",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq",
      img: "/asset/pic3.jpg",
      // Image size 250px*250px
    },
    {
      id: 4,
      name: "Maria Ahmad",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq",
      img: "/asset/pic4.jpg",
      // Image size 250px*250px
    },
    {
      id: 5,
      name: "Dennis Wood",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq",
      img: "/asset/pic5.jpg",
      // Image size 250px*250px
    },
    {
      id: 6,
      name: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq",
      img: "/asset/pic6.jpg",
      // Image size 250px*250px
    },
  ];
  return (
    <div className="mt-24 mb-10 mx-10 lg:mx-24">
      <div className="flex justify-center items-center">
        <div className="bg-titleColor p-3 text-white rounded-lg font-semibold">
          Testimonial
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => {
          return (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              content={testimonial.content}
              img={testimonial.img}
            />
          );
        })}
      </div>
    </div>
  );
}
