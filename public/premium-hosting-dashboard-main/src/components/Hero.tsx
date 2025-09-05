
import { Button } from "@/components/ui/button";
import { Server, Gamepad2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-gray-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-orange-600/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-sm font-medium text-orange-400">Premium Hosting Solutions</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your <span className="text-orange-500">Hosting</span> Experience
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            YourHost Premium Host delivers premium Minecraft and VPS hosting solutions with 
            unmatched performance. Experience faster speeds, enhanced security, and maximum uptime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 h-auto rounded-full"
            >
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto border-2 border-gray-600 text-gray-300 hover:bg-gray-800 rounded-full"
            >
              Learn More
            </Button>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-orange-500 transition-colors">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Minecraft Servers</h3>
              <p className="text-gray-400">High-performance Minecraft servers with plugin support</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-orange-500 transition-colors">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">VPS Hosting</h3>
              <p className="text-gray-400">Reliable virtual private servers for all your hosting needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
