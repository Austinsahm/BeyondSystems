import React from "react";
import Card from "./Card";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Mobile App Development",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
    {
      id: 2,
      title: "Data Analysis",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
    {
      id: 3,
      title: "Web App Development",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
    {
      id: 4,
      title: "Cloud Solution",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    },
  ];
  return (
    <div className="mt-24 mb-6 mx-10 lg:mx-24">
      <div className="flex justify-center items-center">
        <div className="bg-titleColor p-3 text-white rounded-lg font-semibold">
          Our Services
        </div>
      </div>
      <div className="mt-10 text-left">
        Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {services.map((service) => {
          return (
            <Card
              key={service.id}
              title={service.title}
              content={service.content}
            />
          );
        })}
      </div>
    </div>
  );
}
