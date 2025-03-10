"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // ✅ Navbar 추가
import Footer from "@/components/Sections/footer"; // ✅ Footer 추가

const SMBBoostPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ 네비게이션 바 추가 */}
      <Navbar />

      <div className="container mx-auto py-16 px-6 flex-grow mt-[80px]">
        {/* 제목 및 설명 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#B5002B]">
          SMBBoost
        </h1>
        <p className="text-lg md:text-xl text-gray-900 mb-8">
          Level the playing field with{" "}
          <span className="font-semibold text-[#B5002B]">SMBBoost</span>.   
          Our solution brings enterprise-grade AI marketing to small businesses,  
          without the complexity or cost.  
          With easy setup, affordable pricing, and a user-friendly interface,  
          you'll access advanced targeting, creative generation, and performance optimization in minutes.  
          SMBBoost is your shortcut to smarter marketing.
        </p>

        <hr className="border-t border-gray-300 my-8" />

        {/* Purpose Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-4">
            Purpose
          </h2>
          <p className="text-lg text-gray-900">
            For small and medium-sized businesses seeking simplicity.
          </p>
        </section>

        <hr className="border-t border-gray-300 my-8" />

        {/* Key Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-4">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-900">
            <li>Simplified onboarding with guided setup.</li>
            <li>Affordable subscription plans starting at $99/month.</li>
            <li>Pre-built templates for quick campaign launches.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-300 my-8" />

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-[#8f0020] transition duration-300"
          >
            Get Started with SMBBoost
          </a>
        </div>
      </div>

      {/* ✅ Footer 추가 */}
      <Footer />
    </div>
  );
};

export default SMBBoostPage;
