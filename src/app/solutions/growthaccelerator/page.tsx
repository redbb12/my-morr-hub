"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // ✅ Navbar 추가
import Footer from "@/components/Sections/footer"; // Footer 컴포넌트 임포트

const GrowthAcceleratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ 네비게이션 바 추가 */}
      <Navbar />

      <div className="container mx-auto py-16 px-6 flex-grow mt-[80px]">
        {/* 제목 및 설명 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#B5002B]">
          GrowthAccelerator
        </h1>
        <p className="text-lg md:text-xl text-gray-900 mb-8">
          Supercharge your performance marketing with{" "}
          <span className="font-semibold text-[#B5002B]">GrowthAccelerator</span>. Designed for teams obsessed with results, 
          this solution offers automated bid management, cross-platform spend optimization, and real-time analytics. 
          Watch your return on ad spend (ROAS) soar while reducing manual workload. 
          With AI-driven insights and seamless integration across ad networks, GrowthAccelerator turns data into dollars.
        </p>

        <hr className="border-t border-gray-300 my-8" />

        {/* Purpose Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-4">
            Purpose
          </h2>
          <p className="text-lg text-gray-900">
            For performance marketing teams focused on ROI.
          </p>
        </section>

        <hr className="border-t border-gray-300 my-8" />

        {/* Key Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-4">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-900">
            <li>Automated budget allocation across channels.</li>
            <li>Real-time performance tracking with AI recommendations.</li>
            <li>Seamless integration with Meta, Google, and more.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-300 my-8" />

        {/* Ideal For Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-4">
            Ideal For
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-900">
            <li>Performance marketing teams.</li>
            <li>Businesses focused on maximizing ROI.</li>
            <li>Teams managing large-scale campaigns.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-300 my-8" />

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-[#8f0020] transition duration-300"
          >
            Get Started with GrowthAccelerator
          </a>
        </div>
      </div>
      
      {/* ✅ Footer 컴포넌트 추가 */}
      <Footer />
    </div>
  );
};

export default GrowthAcceleratorPage;
