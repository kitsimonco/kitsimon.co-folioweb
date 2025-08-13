// src/app/layout.tsx

import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google"; // 1. Import ฟอนต์
import "./globals.css";

// 2. ตั้งค่าฟอนต์
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// 3. อัปเดต Metadata
export const metadata: Metadata = {
  title: "Kit Simon – UX/UI Designer, Branding Specialist",
  description: "Portfolio of Kit Simon, UX/UI designer, branding specialist, and creative director delivering web design, digital branding, and unique user experiences that stand out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 4. ใช้ฟอนต์กับ <body> */}
      <body className={courierPrime.className}> 
        {children}
      </body>
    </html>
  );
}
