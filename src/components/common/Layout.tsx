import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-100">
      <Header />
      <main className="container mx-auto px-6 py-4 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
