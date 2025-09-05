
import { Server, Shield, Zap, Headphones, Globe, Database, Cpu, HardDrive } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Server,
      title: "Server Control",
      description: "Full root access with complete server management and monitoring capabilities."
    },
    {
      icon: Globe,
      title: "Global Locations",
      description: "Strategic server locations worldwide for optimal performance and low latency."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced DDoS protection and security measures to keep your servers safe."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast SSD storage and latest generation processors for optimal speed."
    },
    {
      icon: Headphones,
      title: "24/7 Live Support",
      description: "Round-the-clock expert support to assist you with any hosting challenges."
    },
    {
      icon: Database,
      title: "One-Click Backups", 
      description: "Automated backup solutions with instant restore capabilities for data protection."
    },
    {
      icon: Cpu,
      title: "VPS Solutions",
      description: "Scalable virtual private servers with guaranteed resources and flexibility."
    },
    {
      icon: HardDrive,
      title: "Solid State Drives",
      description: "Ultra-fast NVMe SSD storage for superior performance and reliability."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-600/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-sm font-medium text-orange-400">Advanced Technology</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Technology, <span className="text-orange-500">Superior Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            YourHost Premium Host provides the best infrastructure with unlimited bandwidth 
            across six continents and a 99.9% uptime guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
