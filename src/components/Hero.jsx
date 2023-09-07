import React from "react";

export default function Hero() {
  return (
    <div id="#hero" className="my-4 mx-10 lg:mx-24">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-4">
        <div className="flex justify-center items-center">
          <div>
            <div className="">
              <div className="text-4xl lg:text-7xl text-left">We are</div>
              <div className="text-5xl lg:text-8xl text-left font-bold">
                IT Solution Provider
              </div>
            </div>
            <div className="text-left mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo conseq
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-full w-full bg-gray-300">
            <div style={{ paddingTop: "100%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
