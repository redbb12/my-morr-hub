"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaPalette, FaChartLine } from "react-icons/fa";

const services = [
  {
    title: "Targeting AI",
    description:
      "Identify your ideal customers with precision using advanced clustering and predictive analytics.",
    technical:
      "Powered by DBSCAN and neural networks for real-time audience segmentation.",
    icon: <FaBullseye className="text-primary-500 text-3xl" />,
  },
  {
    title: "Creative AI",
    description:
      "Generate personalized, high-impact content in seconds with generative AI.",
    technical:
      "Leverages GANs and stable diffusion for visually stunning assets.",
    icon: <FaPalette className="text-primary-500 text-3xl" />,
  },
  {
    title: "Performance AI",
    description:
      "Optimize your ad spend and maximize ROI with real-time, AI-driven adjustments.",
    technical:
      "Uses reinforcement learning to adapt to market changes instantly.",
    icon: <FaChartLine className="text-primary-500 text-3xl" />,
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-primary-50 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our AI-Powered Services</h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg">
            <button
              className="w-full flex justify-between items-center p-5 text-lg font-semibold border-b"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center space-x-4">
                {service.icon}
                <span>{service.title}</span>
              </div>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            <motion.div
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="p-5 bg-gray-100">
                <p className="text-gray-700">{service.description}</p>
                <p className="text-sm text-gray-500 mt-2">{service.technical}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
