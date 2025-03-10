"use client";

import React from 'react';
import Navbar from "@/components/Navbar"; // 네비게이션 바 컴포넌트 추가
import Footer from "@/components/Sections/footer"; // Footer 컴포넌트 임포트
import { Link as ScrollLink } from "react-scroll"; // react-scroll 사용

export default function CreativeGeniusPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 네비게이션 바 추가 */}
      <Navbar /> {/* Navbar 컴포넌트 추가 */}

      <div className="container mx-auto py-16 px-6 flex-grow mt-[80px]">
        {/* 제목 및 설명 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#B5002B]" id="hero">
          CreativeGenius AI
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
          Transform your creative workflow with{" "}
          <span className="font-semibold text-[#B5002B]">CreativeGenius AI</span>. Leveraging the latest in generative AI—including stable diffusion for stunning visuals and transformer models for compelling copy—this product generates persona-specific content that resonates.
          Reduce creative turnaround time by 60% and boost engagement with AI-powered A/B testing and performance tracking. From images to videos, CreativeGenius AI ensures your brand's message always hits the mark.
        </p>

        <hr className="border-t border-gray-500 my-8" />

        {/* Key Benefits Section */}
        <section className="mb-16" id="key-benefits">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-6">Key Benefits</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
            <li>Creates personalized content at scale.</li>
            <li>Reduces creative fatigue with automated A/B testing.</li>
            <li>Improves engagement with data-driven creative insights.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-500 my-8" />

        {/* Technical Highlights */}
        <section className="mb-16" id="technical-highlights">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-6">Technical Highlights</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-600">
            <li>Employs Generative Adversarial Networks (GANs) for high-fidelity visuals.</li>
            <li>Uses large language models (LLMs) for dynamic copy generation.</li>
            <li>Monitors CTR exhaustion and suggests creative refreshes.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-500 my-8" />

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-[#8f0020] transition duration-300"
          >
            Get Started with CreativeGenius AI
          </a>
        </div>
      </div>

      {/* Footer 컴포넌트 추가 */}
      <Footer />  {/* Footer 컴포넌트 추가 */}
    </div>
  );
}
