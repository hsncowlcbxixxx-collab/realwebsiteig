
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-orange-500">Your</span>
              <span className="text-white">Host</span>
              <span className="text-gray-400 text-sm ml-2">Premium Host</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/minecraft" className="text-gray-300 hover:text-orange-500 transition-colors">Minecraft</Link>
            <Link to="/vps" className="text-gray-300 hover:text-orange-500 transition-colors">VPS</Link>
            <a href="https://client.grootop.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">Client Area</a>
            <a href="https://discord.gg/grootop" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">Discord Server</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://client.grootop.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6">
                Login/Register
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</Link>
              <Link to="/minecraft" className="text-gray-300 hover:text-orange-500 transition-colors">Minecraft</Link>
              <Link to="/vps" className="text-gray-300 hover:text-orange-500 transition-colors">VPS</Link>
              <a href="https://client.grootop.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">Client Area</a>
              <a href="https://discord.gg/grootop" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition-colors">Discord Server</a>
              <div className="pt-4">
                <a href="https://client.grootop.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                    Login/Register
                  </Button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
