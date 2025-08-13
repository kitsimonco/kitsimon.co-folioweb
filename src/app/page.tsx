// src/app/page.tsx

'use client'; // <-- สำคัญมาก! บอกให้ Next.js รู้ว่าหน้านี้มีโค้ดที่ทำงานฝั่ง Client

import { useState, useEffect, useRef } from 'react';

export default function HomePage() {
  // --- State Management ---
  // 1. State สำหรับสถานะของปุ่มเมนู (เปิด/ปิด)
  const [isMenuPressed, setMenuPressed] = useState(false);
  // 2. State สำหรับตัวเลข progress ที่จะนับขึ้น
  const [progress, setProgress] = useState(0.000000001);

  // --- Refs for Direct DOM Access ---
  // 3. Ref สำหรับชี้ไปยัง element ของ custom cursor และปุ่มเมนู
  const customCursorRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  // --- Effects (จัดการ Logic จาก JavaScript เดิม) ---

  // 4. Effect สำหรับ Custom Cursor
  useEffect(() => {
    const cursor = customCursorRef.current;
    if (!cursor) return;

    // ไม่แสดง custom cursor บนอุปกรณ์ touch
    const isTouchOrNoHover = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouchOrNoHover) {
      cursor.style.display = 'none';
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll('a, button, .nav-item');
    const handleMouseEnter = () => cursor.classList.add('hover');
    const handleMouseLeave = () => cursor.classList.remove('hover');

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup function: จะถูกเรียกเมื่อ component ถูกทำลายเพื่อลบ event listeners ออก
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []); // [] หมายถึงให้ effect นี้ทำงานแค่ครั้งเดียวตอนเริ่มต้น

  // 5. Effect สำหรับปุ่มเมนูที่ขยับตามเมาส์
  useEffect(() => {
    const menuBtn = menuBtnRef.current;
    if (!menuBtn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = menuBtn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const maxMove = 15;
      const limitedX = Math.max(-maxMove, Math.min(maxMove, x * 0.4));
      const limitedY = Math.max(-maxMove, Math.min(maxMove, y * 0.4));
      menuBtn.style.transform = `translate(${limitedX}px, ${limitedY}px)`;
    };
    
    const handleMouseLeave = () => {
      menuBtn.style.transform = 'translate(0px, 0px)';
    };

    menuBtn.addEventListener('mousemove', handleMouseMove);
    menuBtn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      menuBtn.removeEventListener('mousemove', handleMouseMove);
      menuBtn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // 6. Effect สำหรับการนับเลข Progress
  useEffect(() => {
    const animateProgress = () => {
      let currentValue = 0.000000001;
      const targetValue = 1.0;
      const increment = 0.000000001;
      
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          setProgress(targetValue);
          clearInterval(timer);
        } else {
          setProgress(currentValue);
        }
      }, 10);

      // Cleanup: หยุด interval ถ้า component หายไป
      return () => clearInterval(timer);
    };

    const timeoutId = setTimeout(animateProgress, 500);
    return () => clearTimeout(timeoutId);

  }, []); // [] ทำงานครั้งเดียว

  // --- Render (แปลง HTML เป็น JSX) ---
  return (
    <>
      {/* Grid Pattern Background */}
      <div className="grid-pattern"></div>
      
      {/* Custom Cursor */}
      <div className="custom-cursor" ref={customCursorRef}></div>
      
      {/* Animated Energy Grid */}
      <div className="energy-grid">
        {/* สร้าง energy lines ด้วย Array.from เพื่อโค้ดที่สั้นลง */}
        {Array.from({ length: 10 }).map((_, i) => <div key={`h-${i}`} className="energy-line"></div>)}
        {Array.from({ length: 10 }).map((_, i) => <div key={`v-${i}`} className="energy-line-vertical"></div>)}
      </div>
      
      {/* Navigation */}
      <nav className="nav">
        <a href="#" className="nav-item">design</a>
        <a href="#" className="nav-item">about</a>
        <a href="#" className="nav-item">contact</a>
      </nav>
      
      {/* Hamburger Menu */}
      <div className="hamburger-container">
        <button 
          ref={menuBtnRef}
          className={`svg-menu ${isMenuPressed ? 'active' : ''}`} // ใช้ state ควบคุม class
          id="menuBtn" 
          type="button" 
          aria-label="Menu" 
          aria-pressed={isMenuPressed}
          onClick={() => setMenuPressed(!isMenuPressed)} // เมื่อคลิก ให้สลับค่า state
        >
          <svg className="svg-icon" viewBox="0 0 24 24">
            {/* อย่าลืมใส่ / ปิดท้าย self-closing tags */}
            <rect className="svg-rect" x="2" y="2" width="4" height="4" fill="currentColor" rx="0.5"/>
            <rect className="svg-rect" x="10" y="2" width="4" height="4" fill="currentColor" rx="0.5"/>
            <rect className="svg-rect" x="18" y="2" width="4" height="4" fill="currentColor" rx="0.5"/>
            <rect className="svg-rect" x="2" y="10" width="4" height="4" fill="currentColor" rx="0.5"/>
            <rect className="svg-rect" x="10" y="10" width="4" height="4" fill="currentColor" rx="0.5"/>
            <rect className="svg-rect" x="18" y="10" width="4" height="4" fill="currentColor" rx="0.5"/>
            <rect className="svg-rect" x="2" y="18" width="4" height="4" fill="currentColor" rx="0.5"/>
            <rect className="svg-rect" x="10" y="18" width="4" height="4" fill="currentColor" rx="0.5"/>
            <rect className="svg-rect" x="18" y="18" width="4" height="4" fill="currentColor" rx="0.5"/>
          </svg>
        </button>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="right-text">
          <p>uxui designer</p>
          <p>multidisciplinary designer</p>
          <p>branding designer</p>
        </div>
        
        <div className="construction-status">
          <p>in construction - <span className="progress-number">{progress.toFixed(9)}</span>% -</p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">© All rights reserved kitsimon.co</div>
        <div className="footer-right">
          <a href="https://instagram.com/kristiannemblanc" target="_blank" rel="noopener noreferrer">instagram: @kristiannemblanc</a>
        </div>
      </footer>
    </>
  );
}
