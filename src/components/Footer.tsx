
import { MessageSquare, Users, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="text-orange-500">YourHost</span>
              </span>
              <span className="text-gray-400 text-sm">Premium Host</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Elevating online experiences with premium Discord, Minecraft, and VPS hosting solutions and unparalleled performance.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Users className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <FileText className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Discord Server</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Minecraft Hosting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">VPS Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-orange-500">✉</span>
                <span className="text-gray-400">support@yourhost.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 YourHost Premium Host. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
