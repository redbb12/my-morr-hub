"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // ✅ Navbar 추가
import Footer from "@/components/Sections/footer"; // ✅ Footer 추가

const AgencyHubPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ 네비게이션 바 추가 */}
      <Navbar />

      <div className="container mx-auto py-16 px-6 flex-grow mt-[80px]">
        {/* 제목 및 설명 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#B5002B]">
          AgencyHub
        </h1>
        <p className="text-lg md:text-xl text-gray-900 mb-8">
          Streamline your agency's operations with{" "}
          <span className="font-semibold text-[#B5002B]">AgencyHub</span>.   
          Manage multiple clients, orchestrate cross-platform campaigns, and generate 
          detailed performance reports—all from a single, intuitive dashboard.  
          Our AI infrastructure scales with your agency, ensuring top-tier results for 
          every client, every time.  
          AgencyHub is the ultimate tool for agencies looking to deliver more value with less effort.
        </p>

        <hr className="border-t border-gray-300 my-8" />

        {/* Purpose Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-4">
            Purpose
          </h2>
          <p className="text-lg text-gray-900">
            For marketing agencies managing multiple clients.
          </p>
        </section>

        <hr className="border-t border-gray-300 my-8" />

        {/* Key Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-4">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-900">
            <li>Multi-client management with role-based access.</li>
            <li>Cross-platform campaign orchestration for seamless execution.</li>
            <li>Automated client reporting with AI-driven insights.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-300 my-8" />

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-[#8f0020] transition duration-300"
          >
            Get Started with AgencyHub
          </a>
        </div>
      </div>

      {/* ✅ Footer 추가 */}
      <Footer />
    </div>
  );
};

export default AgencyHubPage;
