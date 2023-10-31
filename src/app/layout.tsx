import type { Metadata } from 'next';
import { Zen_Antique } from 'next/font/google';
import './styles/globals.css';

const zen = Zen_Antique({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'nextjs-approuter-tailwindcss-storybook-jest-boilerplate',
  description: 'nextjs-approuter-tailwindcss-storybook-jest-boilerplate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={zen.className}>{children}</body>
    </html>
  );
}
