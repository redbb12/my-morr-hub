// src/app/layout.tsx
import { ReactNode } from "react";
import "./globals.css";
import CaseStudies from "@/components/Sections/casestudy"; // ✅ CaseStudies 추가
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>MORR AI Platform</title>
        <meta name="description" content="AI-powered marketing for SMBs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white text-gray-900">
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          
        </div>
      </body>
    </html>
  );
}
