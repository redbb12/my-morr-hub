"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // ✅ Navbar 추가
import Footer from "@/components/Sections/footer"; // ✅ Footer 추가

const CreativeStudioPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ 네비게이션 바 추가 */}
      <Navbar />

      <div className="container mx-auto py-16 px-6 flex-grow mt-[80px]">
        {/* 제목 및 설명 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#B5002B]">
          CreativeStudio
        </h1>
        <p className="text-lg md:text-xl text-gray-900 mb-8">
          Elevate your creative output with{" "}
          <span className="font-semibold text-[#B5002B]">CreativeStudio</span>. 
          Tailored for designers, writers, and content creators, this solution provides 
          AI-powered tools for generating, testing, and optimizing visuals and copy at scale. 
          With performance-based recommendations and automated asset rotation, 
          you'll always deliver the right message to the right audience.
          <br />
          CreativeStudio is where creativity meets data.
        </p>

        <hr className="border-t border-gray-300 my-8" />

        {/* Purpose Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-4">
            Purpose
          </h2>
          <p className="text-lg text-gray-900">
            For creative teams seeking AI-powered content tools.
          </p>
        </section>

        <hr className="border-t border-gray-300 my-8" />

        {/* Key Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-4">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-900">
            <li>Generative AI for persona-specific content.</li>
            <li>A/B testing for creative performance optimization.</li>
            <li>Automated creative fatigue monitoring</li>
          </ul>
        </section>

        <hr className="border-t border-gray-300 my-8" />

        {/* Ideal For Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-4">
            Ideal For
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-900">
            <li>Creative teams in enterprises.</li>
            <li>Content creators seeking efficiency.</li>
            <li>Brands focused on engagement.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-300 my-8" />

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-[#8f0020] transition duration-300"
          >
            Get Started with CreativeStudio
          </a>
        </div>
      </div>

      {/* ✅ Footer 추가 */}
      <Footer />
    </div>
  );
};

export default CreativeStudioPage;
