'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Hamburger() {
  const router = useRouter();
  const pathname = usePathname();

  // active = เรากำลังอยู่หน้า Overview
  const isActive = pathname === '/overview';

  const handleClick = () => {
    if (isActive) {
      router.push('/');            // กดซ้ำ = ปิด Overview กลับหน้าแรก
    } else {
      router.push('/overview');    // จากหน้าแรก = เข้า Overview
    }
  };

  return (
    <div className="hamburger-container left" style={{ zIndex: 9999 }}>
      <button
        className={`svg-menu ${isActive ? 'active' : ''}`}
        type="button"
        aria-label="Menu"
        aria-pressed={isActive}
        onClick={handleClick}
      >
        {/* 3x3 grid — ใช้ชุดเดิมของคุณ */}
        <svg className="svg-icon" viewBox="0 0 24 24" aria-hidden="true">
          <rect className="svg-rect" x="2"  y="2"  width="4" height="4" rx="0.5" />
          <rect className="svg-rect" x="10" y="2"  width="4" height="4" rx="0.5" />
          <rect className="svg-rect" x="18" y="2"  width="4" height="4" rx="0.5" />
          <rect className="svg-rect" x="2"  y="10" width="4" height="4" rx="0.5" />
          <rect className="svg-rect" x="10" y="10" width="4" height="4" rx="0.5" />
          <rect className="svg-rect" x="18" y="10" width="4" height="4" rx="0.5" />
          <rect className="svg-rect" x="2"  y="18" width="4" height="4" rx="0.5" />
          <rect className="svg-rect" x="10" y="18" width="4" height="4" rx="0.5" />
          <rect className="svg-rect" x="18" y="18" width="4" height="4" rx="0.5" />
        </svg>
      </button>
    </div>
  );
}