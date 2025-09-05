
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Cpu, HardDrive, Zap, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationSelector from "@/components/LocationSelector";

const VPS = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-gray-900"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-orange-600/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-sm font-medium text-orange-400">Premium VPS</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Virtual <span className="text-orange-500">Private</span> Servers
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Our high-performance VPS solutions are optimized for gaming, community hosting, and other 
              demanding applications.
            </p>
          </div>
        </div>
      </section>

      {/* Location Selector */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <LocationSelector />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VPS;
