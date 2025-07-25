import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

import ContactIcons from "./ContactIcons";

const Header = () => (
  <header className="z-10 pointer-events-none flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto">
    <Logo/>
    <div className="flex gap-4 pointer-events-auto">
      <ThemeToggler />
      <ContactIcons />
    </div>
  </header>
);

export default Header;
