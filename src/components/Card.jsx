import React, { useState } from "react";

export default function Card(props) {
  const [showFullContent, setShowFullContent] = useState(false);

  const content = showFullContent
    ? props.content // Display full content when showFullContent is true
    : props.content.slice(0, 150); // Display first 100 characters when showFullContent is false

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="bg-white p-8 rounded-xl">
      <div className="font-bold text-3xl text-left">{props.title}</div>
      <div className="text-left mt-5">
        {content}
      </div>
      <div className="flex justify-start mt-5">
        <button
          onClick={toggleContent}
          className="py-3 px-6 bg-titleColor text-white rounded-md text-sm"
        >
          {!showFullContent ? "Read More" : "Read Less"}
        </button>
      </div>
    </div>
  );
}
