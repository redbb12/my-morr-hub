import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-[500px] bg-gray-800 text-white p-12 gap-10">
      
      {/* ✅ 모바일에서는 텍스트가 카드 내부에서 유지되도록 수정 */}
      <div className="relative bg-white text-gray-800 p-6 sm:p-10 max-w-full sm:max-w-3xl text-center rounded-xl shadow-xl lg:w-1/2 min-h-[250px] flex flex-col justify-center order-1 lg:order-none">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Helvetica Neue' }}>
          About Us
        </h2>
        
        <p className="text-base sm:text-lg text-gray-700 mt-2 sm:mt-4">
          At <span className="text-[#b5002b] font-semibold">MORR</span>, we believe every SMB deserves access to 
          world-class marketing technology. Our AI-driven platform levels the playing field, 
          empowering businesses to compete and thrive.
        </p>
      </div>

      {/* ✅ 모바일에서는 이미지가 아래로 오도록 order-2 적용 */}
      <div className="relative w-full max-w-md lg:w-1/2 h-auto order-2 lg:order-none">
        <Image 
          src="/people.svg" // SVG 이미지 경로 (public 폴더 내 파일)
          alt="About Us Image"
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
      
    </section>
  );
};

export default AboutUs;
