import React, { useState } from "react";

export default function TestimonialCard(props) {
  return (
    <div className="bg-white p-8 rounded-xl mb-16">
      <div className="relative">
        <div className="text-left text-base">{props.content}</div>
        <div className="font-bold text-3xl text-left mt-5 mb-8">
          {props.name}
        </div>

        <div className="absolute -bottom-15 left-0">
          <img src={props.img} alt="" className="h-24 w-24 rounded-full drop-shadow-md" />
        </div>
      </div>
    </div>
  );
}

