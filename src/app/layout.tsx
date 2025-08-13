import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import MotionProvider from './motion-provider';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Kit Simon – UX/UI Designer, Branding Specialist',
  description:
    'Portfolio of Kit Simon, UX/UI designer, branding specialist, and creative director delivering web design, digital branding, and unique user experiences that stand out.',
  icons: {
    icon: [
      { url: '/favicon-light.png?v=1', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.png?v=1', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}