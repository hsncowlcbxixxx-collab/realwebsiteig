
import { useState } from "react";

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState("india");
  
  const locations = [
    { 
      id: "india", 
      name: "India", 
      flag: "/lovable-uploads/photo-1482881497185-d4a9ddbe4151", 
      status: "Popular",
      statusColor: "bg-orange-500"
    },
    { 
      id: "singapore", 
      name: "Singapore", 
      flag: "/lovable-uploads/photo-1470071459604-3b5ec3a7fe05", 
      status: "Coming Soon",
      statusColor: "bg-gray-600"
    },
    { 
      id: "germany", 
      name: "Germany", 
      flag: "/lovable-uploads/photo-1465146344425-f00d5f5c8f07", 
      status: "Coming Soon",
      statusColor: "bg-gray-600"
    }
  ];

  return (
    <div className="text-center mb-16">
      <div className="flex justify-center mb-8">
        <div className="bg-orange-600/20 backdrop-blur-sm rounded-full px-8 py-4 border border-orange-500/30">
          <span className="text-lg font-semibold text-orange-400 flex items-center gap-2">
            <span className="text-xl">📍</span>
            Choose Your Location
          </span>
        </div>
      </div>
      
      <p className="text-gray-400 mb-12 text-lg">Select the server location closest to your players</p>
      
      <div className="flex justify-center space-x-8">
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => setSelectedLocation(location.id)}
            className={`p-8 rounded-xl border-2 transition-all w-48 h-48 flex flex-col items-center justify-center ${
              selectedLocation === location.id
                ? 'border-orange-500 bg-orange-500/10'
                : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
            }`}
          >
            <div className="w-16 h-12 mb-4 bg-gray-700 rounded overflow-hidden flex items-center justify-center">
              <img 
                src={location.flag} 
                alt={`${location.name} flag`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white font-medium text-lg mb-3">{location.name}</div>
            <div className={`text-sm px-4 py-2 rounded-full text-white ${location.statusColor}`}>
              {location.status}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocationSelector;
