import { X, Globe } from "lucide-react";
import { navItems } from "./NavItems";

type MobileSidebarProps = {
  onClose: () => void;
};

const MobileSidebar = ({ onClose }: MobileSidebarProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
      <div className="w-64 bg-white h-full shadow-md p-4">
        {/* Top */}
        <div className="flex justify-between items-center mb-6">
          <button className="p-1 hover:bg-gray-100 rounded text-xs flex items-center gap-1">
            <Globe className="h-5 w-5" /> <span>EG</span> | $ USD
          </button>
          <button onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`text-left text-sm font-medium hover:bg-gray-100 rounded px-2 py-1 ${
                item.label === "SALE"
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <hr className="my-3" />

        {/* Account */}
        <p className="d-block p-2 text-xs font-semibold bg-gray-100">
          ACCOUNT
        </p>
        <div className="flex items-center justify-center gap-2 text-sm">
          <button className="border py-1 px-6 mt-2 hover:bg-black hover:text-white transition">
            LOGIN
          </button>
          <span className="text-gray-400">|</span>
          <button className="border py-1 px-6 mt-2 hover:bg-black hover:text-white transition">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
