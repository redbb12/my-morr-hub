import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-[500px] bg-gray-800 text-white p-12 gap-10">
      
      {/* 왼쪽 SVG 이미지 */}
      <div className="relative w-full max-w-md lg:w-1/2 h-full">
        <Image 
          src="/people.svg" // SVG 이미지 경로 (public 폴더 내 파일)
          alt="About Us Image"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* 오른쪽 콘텐츠 영역 */}
      <div className="relative bg-white text-gray-800 p-10 max-w-3xl text-center rounded-xl shadow-xl lg:w-1/2 h-[250px] flex flex-col justify-center">
        <h2 className="text-center text-3xl font-bold text-gray-900" style={{ fontFamily: 'Helvetica Neue' }}>
          About Us
        </h2>
        
        <p className="text-lg text-gray-700 mt-4">
          "At <span className="text-[#b5002b] font-semibold">MORR</span>, we believe every SMB deserves access to 
          world-class marketing technology. Our AI-driven platform levels the playing field, 
          empowering businesses to compete and thrive."
        </p>
      </div>
      
    </section>
  );
};

export default AboutUs;
