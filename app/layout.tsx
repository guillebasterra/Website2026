import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import './globals.css';
import Navigation from '@/components/Navigation';
import SmartScrollWrapper from '@/components/SmartScrollWrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Guillermo Basterra',
  description: 'Personal website of Guillermo Basterra',
  metadataBase: new URL('https://guillermobasterra.com'),
  openGraph: {
    title: 'Guillermo Basterra',
    description: 'Personal website of Guillermo Basterra',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guillermo Basterra',
    description: 'Personal website of Guillermo Basterra',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ViewTransitions>
          <Navigation />

          {/* Main Content Area */}
          <main className="md:ml-64 min-h-screen relative z-0">
            <SmartScrollWrapper>{children}</SmartScrollWrapper>
          </main>
        </ViewTransitions>

        {/* Dithered Art Overlay - Fixed at bottom, visible on all pages - Outside ViewTransitions */}
        <div
          className="fixed bottom-0 left-0 right-0 pointer-events-none z-[9999]"
          style={{
            isolation: 'isolate',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        >
          <img
            src="/dithered-overlay.png"
            alt=""
            className="w-full block"
            style={{ display: 'block', margin: 0, padding: 0, verticalAlign: 'bottom' }}
          />
        </div>
      </body>
    </html>
  );
}
