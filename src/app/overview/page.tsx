'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function OverviewPage() {
    const router = useRouter();

    return (
        <>
            {/* HAMBURGER: หน้า overview = active + กลับ / */}
            <div className="hamburger-container left" style={{ zIndex: 9999 }}>
                <button
                    className="svg-menu active"
                    type="button"
                    aria-label="Close overview"
                    aria-pressed={true}
                    onClick={() => router.push('/')}
                    style={{ color: '#111' }}
                >
                    <svg className="svg-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <rect className="svg-rect" x="2" y="2" width="4" height="4" rx="0.5" fill="currentColor" />
                        <rect className="svg-rect" x="10" y="2" width="4" height="4" rx="0.5" fill="currentColor" />
                        <rect className="svg-rect" x="18" y="2" width="4" height="4" rx="0.5" fill="currentColor" />
                        <rect className="svg-rect" x="2" y="10" width="4" height="4" rx="0.5" fill="currentColor" />
                        <rect className="svg-rect" x="10" y="10" width="4" height="4" rx="0.5" fill="currentColor" />
                        <rect className="svg-rect" x="18" y="10" width="4" height="4" rx="0.5" fill="currentColor" />
                        <rect className="svg-rect" x="2" y="18" width="4" height="4" rx="0.5" fill="currentColor" />
                        <rect className="svg-rect" x="10" y="18" width="4" height="4" rx="0.5" fill="currentColor" />
                        <rect className="svg-rect" x="18" y="18" width="4" height="4" rx="0.5" fill="currentColor" />
                    </svg>
                </button>
            </div>

            <motion.main
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: '#000', color: '#111', minHeight: '100vh' }}
            >
                {/* เนื้อหา overview */}
            </motion.main>
        </>
    );
}