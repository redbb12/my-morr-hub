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
    <section className="h-screen flex flex-col center bg-white relative overflow-hidden pt-36 md:pt-48">
      {/* ✅ 애니메이션 그리드 배경 */}
      <AnimatedGridPattern
        className="absolute inset-0 text-gray-300 opacity-40"
        width={40}
        height={40}
        numSquares={60}
        maxOpacity={0.3}
        duration={5}
      />

      {/* ✅ 모바일에서는 텍스트가 정중앙으로 오도록 설정 */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 px-6 text-center md:text-left">
        {/* ✅ 왼쪽 텍스트 콘텐츠 (모바일에서는 중앙 정렬) */}
        <div className="space-y-6 max-w-full flex flex-col items-center md:items-start">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-center md:text-left pt-12 md:pt-0"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Unlock the Power of <span style={{ color: "#b5002b" }}>AI</span> for{" "}
            <span style={{ color: "#b5002b" }}>Your Business</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg md:max-w-full text-center md:text-left">
            AI-Powered Marketing for SMBs— Simplified
          </p>

          {/* Subtext 추가 */}
          <p className="text-sm text-gray-500 max-w-lg md:max-w-full mt-4 text-center md:text-left">
            MORR helps SMBs grow with smarter targeting, creative, and performance marketing.
          </p>

          {/* ✅ 버튼 그룹 (모바일에서는 Start Free Trial만 표시) */}
          <div 
            className="px-6 py-3 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4"
            style={{ marginTop: "50px" }} // ✅ 원하는 값으로 직접 설정
          >
            {/* ✅ 모바일에서는 전체 너비 사용 + 버튼 위로 올림 */}
            <Button
              className="w-full md:w-auto py-7 md:py-3 text-xl md:text-sm px-8 md:px-5 bg-black text-white rounded-md hover:bg-gray-200 hover:text-black mt-[-20px] md:mt-0"
              onClick={scrollToContact} // ✅ Contact Us 섹션으로 스크롤 이동
            >
              Start Free Trial
            </Button>

            {/* ✅ 데스크톱에서만 Book a Demo 버튼 표시 */}
            <Button
              className="px-6 py-3 bg-gray-200 text-black rounded-md hover:bg-black hover:text-white hidden md:inline-flex"
              onClick={scrollToContact} // ✅ Contact Us 섹션으로 스크롤 이동
            >
              Book a Demo
            </Button>
          </div>
        </div>

        {/* ✅ 오른쪽 이미지 콘텐츠 (모바일에서는 숨김, 데스크톱에서는 올리기) */}
        <div className="relative h-[450px] md:h-[600px] flex justify-center hidden md:block">
          <Image
            src="/uuundulate.svg"
            alt="AI Infrastructure Illustration"
            width={900}
            height={700}
            className="object-contain floating-image animate-rotate md:mt-[-50px]" // ✅ 데스크톱에서 위로 이동
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
