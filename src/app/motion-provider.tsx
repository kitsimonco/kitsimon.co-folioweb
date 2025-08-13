'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

type Props = { children: React.ReactNode };

export default function MotionProvider({ children }: Props) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
}