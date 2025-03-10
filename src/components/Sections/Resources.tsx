import React from "react";

const blogTopics = [
  "How AI is Transforming SMB Marketing in 2025.",
  "Understanding MORR’s Multi-Agent System: A Technical Deep Dive."
];

const webinars = [
  "Getting Started with AI Marketing: A Guide for SMBs."
];

const visuals = [
  "Blog thumbnails and webinar banners."
];

const Resources = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container-padding max-w-4xl mx-auto">
        {/* 섹션 제목 */}
        <div className="text-center mb-10">
        <h2 className="text-center text-3xl font-bold text-gray-900" style={{ fontFamily: 'Helvetica Neue' }}>Resources</h2>
          <p className="text-lg text-gray-600 mt-2">
            Stay updated with the latest insights and industry trends.
          </p>
        </div>

        {/* Blog Topics & Webinars */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Blog Topics */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">📖 Blog Topics</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              {blogTopics.map((topic, index) => (
                <li key={index} className="flex items-center gap-2">
                  ✅ {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Webinars */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">🎤 Webinars</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              {webinars.map((webinar, index) => (
                <li key={index} className="flex items-center gap-2">
                  🎥 {webinar}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visuals Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg mt-8">
          <h3 className="text-xl font-semibold text-gray-900">🖼 Visuals</h3>
          <p className="mt-4 text-gray-700">{visuals[0]}</p>
        </div>
      </div>
    </section>
  );
};

export default Resources;
