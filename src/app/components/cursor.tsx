'use client';

import React, { useEffect, useRef } from 'react';

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
        if (isTouchDevice) {
            cursor.style.display = 'none';
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };
        document.addEventListener('mousemove', handleMouseMove);

        const handleMouseEnter = () => cursor.classList.add('hover');
        const handleMouseLeave = () => cursor.classList.remove('hover');

        document.querySelectorAll('a, button, .nav-item').forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('a, button, .nav-item').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="custom-cursor"
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
                zIndex: 99999,
                mixBlendMode: 'difference',
                transition: 'transform 0.15s ease-out, background 0.15s ease-out'
            }}
        />
    );
}