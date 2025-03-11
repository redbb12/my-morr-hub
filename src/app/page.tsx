"use client";

import React from "react";
import Link from "next/link"; // ✅ Next.js Link 사용
import { Button, Section, ProductCard } from "@/components";
import Navbar from "@/components/Navbar"; // ✅ 네비게이션 바 추가
import "./globals.css";
import Image from "next/image";

const products = [
  {
    id: "audiencemaster-ai",
    title: "AudienceMaster AI",
    description: "Advanced audience segmentation and targeting using AI",
    icon: "/icons/audience.svg",
    href: "/products/audiencemaster-ai",
  },
  {
    id: "creativegenius-ai",
    title: "CreativeGenius AI",
    description: "AI-driven content generation for personalized marketing",
    icon: "/icons/creative.svg",
    href: "/products/creativegenius-ai",
  },
  {
    id: "campaignoptimizer-ai",
    title: "CampaignOptimizer AI",
    description: "Real-time campaign performance optimization",
    icon: "/icons/campaign.svg",
    href: "/products/campaignoptimizer-ai",
  },
  {
    id: "insightdashboard-ai",
    title: "InsightDashboard AI",
    description: "Unified analytics and actionable insights",
    icon: "/icons/insights.svg",
    href: "/products/insightdashboard-ai",
  },
];

import Hero from "@/components/Sections/Hero";
import AboutUs from "@/components/Sections/About-Us";
import Services from "@/components/Sections/Services";
import Features from "@/components/Sections/Features";
import Casestudy from "@/components/Sections/casestudy";
import Resources from "@/components/Sections/Resources";
import ContactUs from "@/components/Sections/Contact-us";
import Footer from "@/components/Sections/footer";

const Homepage = () => {
  return (
    <main className="h-screen">
      <Navbar /> {/* ✅ 네비게이션 바 추가 */}

      {/* 각 섹션에 id 추가 */}
      <div id="hero">
        <Hero />
      </div>

      {/* Products Overview */}
      <Section id="products" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2
            className="text-center text-3xl font-bold text-gray-900"
            style={{ fontFamily: "Helvetica Neue" }}
          >
            Our AI-Powered Solutions
          </h2>

          <p className="mt-4 text-xl text-gray-600 text-center">
            Comprehensive tools for modern marketing
          </p>
          {/* 카드 UI (한 줄에 4개) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {products.map((product) => (
              <Link key={product.id} href={product.href} passHref>
                <div className="p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer flex flex-col items-start h-[300px]">
                  {/* 아이콘 영역 */}
                  <div className="w-full h-40 flex items-center justify-center bg-gray-200 rounded-lg animate-card-hover">
                    <Image
                      src={product.icon}
                      alt={product.title}
                      width={80}
                      height={80}
                      className="animate-image-hover"
                    />
                  </div>

                  {/* 텍스트 영역 */}
                  <div className="mt-4 text-left flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{product.description}</p>

                    <span
                      className={`text-[#b5002b] font-semibold hover:underline mt-2 sm:mt-6 md:mt-2 inline-block`}
                    >
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 퍼센티지 정보 섹션 (아래로 내리고 30%를 오른쪽으로 이동) */}
        <div className="container mx-auto mt-24">
          <div className="flex justify-between w-full px-6">
            {/* Reduce CAC by 25% (왼쪽 정렬) */}
            <div className="text-center flex-1">
              <h2 className="text-4xl font-bold text-[#B5002B]">25%</h2>
              <p className="text-gray-600">Reduce CAC</p>
            </div>

            {/* Boost Engagement by 30% (오른쪽으로 이동) */}
            <div className="text-center flex-1">
              <h2 className="text-4xl font-bold text-[#B5002B]">30%</h2>
              <p className="text-gray-600">Boost Engagement</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional Sections */}
      <div id="about-us">
        <AboutUs />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="casestudy">
        <Casestudy />
      </div>

      <div id="contact-us">
        <ContactUs />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </main>
  );
};

export default Homepage;
