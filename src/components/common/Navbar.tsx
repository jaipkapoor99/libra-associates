import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,

} from '@/components/ui/navigation-menu';

export const Navbar = () => {
  return (
    <div className="flex items-center px-4 py-2 text-white">
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-bold text-white drop-shadow-sm hover:scale-105 transition-transform duration-300"
        >
          <span>Libra Associates</span>
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
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
      <div className="flex-1" />
    </div>
  );
};
