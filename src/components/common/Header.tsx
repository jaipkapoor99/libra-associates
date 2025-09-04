import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 max-w-screen-2xl items-center" aria-label="Main navigation">
        <Navbar />
      </nav>
    </header>
  );
};
