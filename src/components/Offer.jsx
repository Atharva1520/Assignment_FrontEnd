import React from "react";
import {
  faRocket,
  faShieldAlt,
  faCogs,
  faBuilding,
  faHandshake,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhatWeOffer = () => {
  const services = [
    {
      title: "Explore AI Opportunities for Your Enterprise",
      description:
        "Unlock the potential of generative AI by identifying tailored opportunities for integration with " +
        "your organization, ensuring a strategic and efficient approach to AI implementation.",
      icon: faBuilding,
    },
    {
      title: "Design AI Trust Layer",
      description:
        "Prioritize data security and build trust in generative AI applications with a dedicated trust " +
        "layer, emphasizing privacy-focused solutions that safeguard both organizational and " +
        "customer data.",
      icon: faHandshake,
    },
    {
      title: "Scalability-Focused Solutions",
      description:
        "Streamline and optimize business processes with comprehensive workflow automation, " +
        "ensuring seamless integration of AI technologies from inception to execution for increased " +
        "efficiency and productivity.",
      icon: faRocket,
    },
    {
      title: "End to end Workflow automation",
      description:
        "Implement cutting-edge, scalable generative AI solutions that not only meet current " +
        "organizational needs but also adapt and grow with the evolving demands of your enterprise, " +
        "providing a future-proof approach to AI integration.",
      icon: faArrowAltCircleUp,
    },
  ];

  return (
    <section className="container mx-auto my-16 pl-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center w-70% py-10 flex flex-col transition-transform transform hover:-translate-y-4"
          >
            <i className={`text-2xl mb-2 text-gray-500`}>
              <FontAwesomeIcon icon={service.icon} />
            </i>
            <h3 className="text-xl font-bold mb-4 text-black">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WhatWeOffer;
