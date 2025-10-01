import { navItems } from "./NavItems";

type DesktopNavProps = {
  showNav: boolean;
};

const DesktopNav = ({ showNav }: DesktopNavProps) => {
  if (!showNav) return null;

  return (
    <div className="hidden lg:flex items-center justify-center gap-8 mt-4 relative animate-fade-in">
      <nav className="flex gap-8">
        {navItems.map((item) => (
          <div key={item.label} className="relative group">
            <button
              className={`text-sm font-medium px-2 py-2 ${
                item.label === "SALE"
                  ? "text-orange-600 font-semibold hover:opacity-70"
                  : "text-gray-700 hover:text-black hover:opacity-70"
              }`}
            >
              {item.label}
            </button>
            {item.dropdown && (
              <div className="absolute left-0 mt-2 hidden group-hover:block">
                {item.dropdown}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default DesktopNav;
