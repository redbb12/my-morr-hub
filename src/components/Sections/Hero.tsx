"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { scroller } from "react-scroll"; // ✅ react-scroll 추가

const Hero: React.FC = () => {
  // ✅ 특정 섹션("contact-us")으로 부드럽게 스크롤 이동하는 함수
  const scrollToContact = () => {
    scroller.scrollTo("contact-us", {
      smooth: true,
      duration: 500,
      offset: -80, // 네비게이션 바 높이 보정
    });
  };

  return (
    <section className="h-screen flex flex-col justify-center bg-white relative overflow-hidden pt-36 pt-48">
      {/* ✅ 애니메이션 그리드 배경 */}
      <AnimatedGridPattern
        className="absolute inset-0 text-gray-300 opacity-40"
        width={40}
        height={40}
        numSquares={60}
        maxOpacity={0.3}
        duration={5}
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 px-6">
        {/* ✅ 왼쪽 텍스트 콘텐츠 */}
        <div className="space-y-6 max-w-full">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-center lg:text-left"
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            Unlock the Power of <span style={{ color: "#b5002b" }}>AI</span> for <span style={{ color: "#b5002b" }}>Your Business</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg md:max-w-full text-center lg:text-left">
            AI-Powered Marketing for SMBs— Simplified
          </p>

          {/* Subtext 추가 */}
          <p className="text-sm text-gray-500 max-w-lg md:max-w-full mt-4 text-center lg:text-left">
            MORR helps SMBs grow with smarter targeting, creative, and performance marketing.
          </p>

          {/* ✅ 버튼 그룹 */}
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <Button
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-200 hover:text-black"
              onClick={scrollToContact} // ✅ Contact Us 섹션으로 스크롤 이동
            >
              Start Free Trial
            </Button>
            <Button
              className="px-6 py-3 bg-gray-200 text-black rounded-md hover:bg-black hover:text-white"
              onClick={scrollToContact} // ✅ Contact Us 섹션으로 스크롤 이동
            >
              Book a Demo
            </Button>
          </div>
        </div>

        {/* ✅ 오른쪽 이미지 콘텐츠 */}
        <div className="relative h-[450px] md:h-[600px] flex justify-center">
          <Image
            src="/uuundulate.svg"
            alt="AI Infrastructure Illustration"
            width={900}
            height={700}
            className="object-contain floating-image animate-rotate"
            priority
          />
        </div>
      </div>      
    </section>
  );
};

export default Hero;
