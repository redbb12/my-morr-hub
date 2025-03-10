"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="bg-gray-300 min-h-[600px] flex items-center justify-center">
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg w-full max-w-[700px]">
        {/* 제목 (중앙 정렬) */}
        <div className="w-full flex justify-center">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
        </div>

        {/* 🔹 좌측 정보 & 우측 폼을 동일한 높이로 정렬 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {/* 🔹 좌측 정보 */}
          <div className="md:h-full flex flex-col justify-between space-y-6">
            {/* 주소 */}
            <div className="text-gray-700 text-left">
              <p className="font-semibold text-lg">Address</p><br></br>
              <p>Menara Uoa Bangsar, Unit A-12A-3 Level 12A, 5, Jalan Bangsar Utama 1,</p>
              <p>59000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</p>              
            </div>

            {/* 이메일 */}
            <div className="text-gray-700 text-left">
              <p className="font-semibold text-lg">Email</p>
              <a href="mailto:hello@noxaraclothes.shop" className="text-[#b5002b] hover:underline">
                hello@morr.my
              </a>
            </div>

            {/* 전화번호 */}
            <div className="text-gray-700 text-left">
              <p className="font-semibold text-lg">Phone</p>
              <a href="tel:+12345678910" className="text-[#b5002b] hover:underline">
                +60 10-206 6315
              </a>
            </div>
          </div>

          {/* 🔹 우측 폼 */}
          <div className="md:h-full flex justify-center items-start">
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
              <Input
                type="text"
                name="subject"
                placeholder="Message Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-[#b5002b] focus:outline-none"
                rows={4}
              />
              <Button type="submit" className="w-full bg-[#b5002b] text-white hover:bg-[#8f0020]">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
