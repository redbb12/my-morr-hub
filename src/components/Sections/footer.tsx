"use client";

import React from "react";
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { scroller } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  // 특정 섹션으로 부드럽게 스크롤 이동하는 함수
  const scrollToSection = (id: string) => {
    if (pathname === "/") {
      // ✅ 홈("/")일 때 스크롤 이동
      scroller.scrollTo(id, {
        smooth: true,
        duration: 500,
        offset: -80, // 네비게이션 바 높이 보정
      });
    } else {
      // ✅ 다른 페이지에 있으면 홈("/")으로 이동 후 스크롤 이동
      router.push(`/#${id}`);
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-10 w-full">
      <div className="container mx-auto px-6">
        {/* 🔹 모바일(세로 정렬) → 데스크탑(가로 정렬) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Product 섹션 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2 mt-4">
              <li><a href="/products/audiencemaster-ai" className="hover:text-gray-400">AudienceMaster AI</a></li>
              <li><a href="/products/creativegenius-ai" className="hover:text-gray-400">CreativeGenius AI</a></li>
              <li><a href="/products/campaignoptimizer-ai" className="hover:text-gray-400">CampaignOptimizer AI</a></li>
              <li><a href="/products/insightdashboard-ai" className="hover:text-gray-400">InsightDashboard AI</a></li>              
            </ul>
          </div>

          {/* Solutions 섹션 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2 mt-4">
              <li><a href="/solutions/growthaccelerator" className="hover:text-gray-400">GrowthAccelerator</a></li>
              <li><a href="/solutions/creativestudio" className="hover:text-gray-400">CreativeStudio</a></li>
              <li><a href="/solutions/agencyhub" className="hover:text-gray-400">AgencyHub</a></li>
              <li><a href="/solutions/smbboost" className="hover:text-gray-400">SMBBoost</a></li>
            </ul>
          </div>

          {/* Company 섹션 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-4 mt-4">
              <li>
                <button 
                  onClick={() => scrollToSection("about-us")} 
                  className="hover:text-gray-400 text-white text-base"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("case-studies")} 
                  className="hover:text-gray-400 text-white text-base"
                >
                  Case Study
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact-us")} 
                  className="hover:text-gray-400 text-white text-base"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 🔹 로고 및 소셜 미디어 링크 */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
          {/* 로고 */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img src="/logo.png" alt="Logo" className="h-14" />
          </div>

          {/* SNS 아이콘 */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/company/morrmy/" className="hover:text-gray-400">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaYoutube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
