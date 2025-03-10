"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; // ✅ Next.js 15 방식
import Navbar from "@/components/Navbar"; // ✅ Navbar 추가
import Footer from "@/components/Sections/footer";

export default function AudienceMasterPage() {
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
          AudienceMaster AI
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
          Unlock the full potential of your audience with{" "}
          <span className="font-semibold text-[#B5002B]">AudienceMaster AI</span>. 
          Powered by cutting-edge clustering algorithms like DBSCAN and K-Means, and enhanced by predictive analytics, this product identifies high-intent buyers across platforms in real-time.
          Seamlessly integrate with your CRM, attribution platforms, and website analytics to create dynamic, evolving audience cohorts. With AudienceMaster AI, you'll reach the right people at the right time, every time.
        </p>

        <hr className="border-t border-gray-300 my-6" />

        {/* Key Benefits 섹션 */}
        <section className="mb-12" id="key-benefits">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-5">
            Key Benefits
          </h2>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Identifies high-intent audiences with precision.</li>
            <li>Reduces wasted ad spend by targeting relevant cohorts.</li>
            <li>Adapts to changing audience behaviors in real-time.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-300 my-6" />

        {/* Technical Highlights 섹션 */}
        <section className="mb-12" id="technical-highlights">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#B5002B] mb-5">
            Technical Highlights
          </h2>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Uses transformer-based models for behavioral analysis.</li>
            <li>Processes multi-modal data (e.g., text, images, user interactions).</li>
            <li>Real-time optimization with reinforcement learning.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-300 my-6" />
               
        {/* CTA 버튼 */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-[#8f0020] transition duration-300"
          >
            Get Started with AudienceMaster AI
          </a>
        </div>
      </div>

      {/* Footer 추가 */}
      <Footer />
    </div>
  );
}
