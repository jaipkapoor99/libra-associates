import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-400 text-white shadow-2xl shadow-inner">
      <nav className="container mx-auto px-6 py-4">
        <Navbar />
      </nav>
    </header>
  );
};
