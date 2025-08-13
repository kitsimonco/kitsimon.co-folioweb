// src/app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // 1. Import ฟอนต์
import "./globals.css";

// 2. ตั้งค่าฟอนต์
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// 3. อัปเดต Metadata
export const metadata: Metadata = {
  title: "Kit Simon – UX/UI Designer, Branding Specialist",
  description: "Portfolio of Kit Simon, UX/UI designer, branding specialist, and creative director delivering web design, digital branding, and unique user experiences that stand out.",
  icons: {
    icon: [
      { url: '/favicon-light.png?v=1', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.png?v=1', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 4. ใช้ฟอนต์กับ <body> */}
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
