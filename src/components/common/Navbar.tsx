import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,

} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '../ui/navigation-menu-styles';

export const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <Link to="/" className="flex items-center space-x-2" aria-label="Libra Associates Home">
        <span className="font-bold text-xl">Libra Associates</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
