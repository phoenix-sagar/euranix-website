import React, { useState, useEffect, useRef } from 'react';
import WorldMap from 'react-svg-worldmap';

const deploymentData = [
  { country: "us", value: 6, name: "United States" },
  { country: "fr", value: 7, name: "France" },
  { country: "mr", value: 1, name: "Mauritania" },
  { country: "gh", value: 1, name: "Ghana" },
  { country: "ng", value: 1, name: "Nigeria" },
  { country: "za", value: 2, name: "South Africa" },
  { country: "es", value: 1, name: "Spain" },
  { country: "it", value: 1, name: "Italy" },
  { country: "de", value: 1, name: "Germany" },
  { country: "dk", value: 2, name: "Denmark" },
  { country: "id", value: 1, name: "Indonesia" },
];

const DeploymentMap: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTotalDeployments = () => {
    return deploymentData.reduce((total, deployment) => total + deployment.value, 0);
  };

  const getTotalCountries = () => {
    return deploymentData.length;
  };

  return (
    <div ref={mapRef} className="w-full">
      {/* Map Container */}
      <div className="flex justify-center mb-12">
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} max-w-7xl w-full`}>
          <WorldMap
            color="#dc2626"
            title=""
            value-suffix=" deployments"
            size="xxl"
            data={deploymentData}
            backgroundColor="transparent"
            strokeOpacity={0.8}
            tooltipBgColor="#1f2937"
            tooltipTextColor="#ffffff"
            richInteraction={true}
            styleFunction={(context) => {
              const { countryValue, color, minValue, maxValue, countryCode } = context;
              
              // Find if this is India (home base)
              
              if (countryValue) {
                  const intensity = (countryValue - minValue) / (maxValue - minValue);
                  return {
                    fill: color,
                    fillOpacity: 0.7 + (intensity * 0.3),
                    stroke: "#b91c1c",
                    strokeWidth: 2,
                    strokeOpacity: 0.8,
                    cursor: "pointer",
                    filter: "drop-shadow(0 0 4px rgba(220, 38, 38, 0.4))",
                  };
              } else {
                return {
                  fill: "#e5e7eb",
                  fillOpacity: 0.9,
                  stroke: "#d1d5db",
                  strokeWidth: 1,
                };
              }
            }}
          />
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-8 flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-red-600 rounded shadow-md"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Countries with Deployments
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gray-300 rounded"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Other Countries
            </span>
          </div>
        </div>
      </div>

      {/* Stats Below Map */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">{getTotalDeployments()}</div>
          <div className="text-gray-600 dark:text-gray-300">Total Deployments</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">{getTotalCountries()}</div>
          <div className="text-gray-600 dark:text-gray-300">Countries</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold gradient-text mb-2">10+</div>
          <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentMap;