import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-100">
      <Header />
      <main className="container mx-auto px-6 py-4 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};