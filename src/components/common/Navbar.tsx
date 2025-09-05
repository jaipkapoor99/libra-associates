import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-1 text-white">
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-bold text-white drop-shadow-sm hover:scale-105 transition-transform duration-300"
        >
          <span>Libra Associates</span>
        </Link>
      </div>
      <div className="hidden md:flex flex-1 justify-center">
        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className="hover:text-blue-200">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className="hover:text-blue-200">
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex-1 md:hidden flex justify-end">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div
        className={`absolute top-12 left-0 w-full bg-blue-900 md:hidden z-50 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col items-start space-y-4 py-4 px-6">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className="hover:text-blue-200" onClick={() => setIsOpen(false)}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className="hover:text-blue-200" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </div>
  );
};