"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // 네비게이션 바 컴포넌트 추가
import Footer from "@/components/Sections/footer"; // Footer 컴포넌트 임포트
import { Link as ScrollLink } from "react-scroll"; // react-scroll 사용

export default function CampaignOptimizerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 네비게이션 바 추가 */}
      <Navbar /> {/* Navbar 컴포넌트 추가 */}

      <div className="container mx-auto py-16 px-6 flex-grow mt-[80px]">
        {/* 제목 및 설명 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#B5002B]" id="hero">
          CampaignOptimizer AI
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
          Maximize your return on investment with{" "}
          <span className="font-semibold text-[#B5002B]">CampaignOptimizer AI</span>.  
          Our reinforcement learning models adjust bids, budgets, and ad placements in real-time,  
          ensuring optimal spend across all channels.  
          Stabilize customer acquisition costs (CAC), counter seasonality with predictive modeling,  
          and achieve peak performance with a codeless, intuitive interface.  
          CampaignOptimizer AI is your key to smarter, faster marketing decisions.
        </p>

        <hr className="border-t border-gray-500 my-8" />

        {/* Key Benefits Section */}
        <section className="mb-16" id="key-benefits">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-6">Key Benefits</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
            <li>Optimizes ad spend for maximum ROAS.</li>
            <li>Stabilizes CAC with real-time adjustments.</li>
            <li>Simplifies campaign management with a user-friendly interface.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-500 my-8" />

        {/* Technical Highlights */}
        <section className="mb-16" id="technical-highlights">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-6">Technical Highlights</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
            <li>Multi-objective optimization for cross-channel budget allocation.</li>
            <li>Real-time bid pacing using reinforcement learning.</li>
            <li>Predictive analytics to mitigate short-term fluctuations.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-500 my-8" />

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-[#8f0020] transition duration-300"
          >
            Get Started with CampaignOptimizer AI
          </a>
        </div>
      </div>

      {/* Footer 컴포넌트 추가 */}
      <Footer />  {/* Footer 컴포넌트 추가 */}
    </div>
  );
}
