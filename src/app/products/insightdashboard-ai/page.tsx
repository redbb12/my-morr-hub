"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; // ✅ Next.js 15 방식
import Navbar from "@/components/Navbar"; // ✅ Navbar 추가
import Footer from "@/components/Sections/footer";

export default function InsightDashboardPage() {
  const pathname = usePathname(); // ✅ 현재 경로 가져오기
  const router = useRouter(); // ✅ Next.js 15에서 useRouter 사용

  // ✅ URL 해시 값(#id)이 있다면 해당 섹션으로 스크롤 이동
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* ✅ 네비게이션 바 추가 */}
      
      <div className="container mx-auto py-16 px-6 flex-grow mt-[80px]">
        {/* Home 섹션 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#B5002B]" id="hero">
          InsightDashboard AI
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
          Gain a 360-degree view of your marketing efforts with{" "}
          <span className="font-semibold text-[#B5002B]">InsightDashboard AI</span>.
          This unified analytics platform aggregates data from all your campaigns, providing real-time performance metrics and AI-driven recommendations.
          Track KPIs, uncover hidden trends, and make data-backed decisions faster than ever.
          With InsightDashboard AI, you'll always know what's working—and what's next.
        </p>

        <hr className="border-t border-gray-300 my-6" />

        {/* Key Benefits 섹션 */}
        <section className="mb-12" id="key-benefits">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-5">
            Key Benefits
          </h2>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Centralizes data from all marketing channels.</li>
            <li>Provides actionable insights with AI recommendations.</li>
            <li>Enables faster decision-making with real-time metrics.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-300 my-6" />

        {/* Technical Highlights 섹션 */}
        <section className="mb-12" id="technical-highlights">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-5">
            Technical Highlights
          </h2>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Context-aware AI agents for insight generation.</li>
            <li>Multi-modal data processing (text, images, videos).</li>
            <li>Customizable dashboards with predictive forecasting.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-300 my-6" />

        {/* CTA 버튼 */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-[#8f0020] transition duration-300"
          >
            Get Started with InsightDashboard AI
          </a>
        </div>
      </div>

      {/* Footer 추가 */}
      <Footer />
    </div>
  );
}
