
import { Gamepad2, Zap, Shield, Settings } from "lucide-react";

const FeatureBoxes = () => {
  const features = [
    {
      title: "Game Server Features",
      icon: Gamepad2,
      items: [
        "One-click modpack installation",
        "Support for all major versions", 
        "Custom plugin support",
        "World backups included"
      ]
    },
    {
      title: "Performance", 
      icon: Zap,
      items: [
        "NVMe SSD storage",
        "Low latency network",
        "Anti-lag systems",
        "99% uptime"
      ]
    },
    {
      title: "Security",
      icon: Shield,
      items: [
        "DDoS protection",
        "2 Backups/Database/Additional Ports",
        "Firewall protection",
        "SSL encryption"
      ]
    },
    {
      title: "Management",
      icon: Settings,
      items: [
        "Pterodactyl panel",
        "SFTP access",
        "Web console",
        "Ticket support"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-colors"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <feature.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
            </div>
          </div>
          <ul className="space-y-2">
            {feature.items.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FeatureBoxes;
