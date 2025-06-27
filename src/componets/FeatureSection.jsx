import { useState } from "react";
import { features } from "../constants";

const FeatureSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  return (
    <div id="features" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase ">
                Feature
            </span>
             <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                 Easily build{" "}
                 <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                 your code
                 </span>
             </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
          >
            <div 
              className="flex cursor-pointer p-4 rounded-lg transition-all duration-300 hover:bg-neutral-800/50 hover:scale-105"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              onClick={() => handleFeatureClick(feature)}
            >
              <div className={`flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full transition-all duration-300 ${
                hoveredFeature === index ? 'text-orange-500 scale-110' : ''
              }`}>
                {feature.icon}
              </div>
              <div className="flex-1">
                <h5 className="mt-1 mb-6 text-xl font-semibold">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
                <button 
                  className="text-orange-500 hover:text-orange-400 transition-colors duration-200 text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFeatureClick(feature);
                  }}
                >
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-neutral-900 p-8 rounded-lg max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center mb-6">
              <div className="flex mx-4 h-12 w-12 p-3 bg-neutral-800 text-orange-500 justify-center items-center rounded-full">
                {selectedFeature.icon}
              </div>
              <h3 className="text-2xl font-bold">{selectedFeature.text}</h3>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              {selectedFeature.description}
            </p>
            <div className="bg-neutral-800 p-4 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3 text-orange-400">Key Benefits:</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Enhanced productivity and workflow efficiency</li>
                <li>• Intuitive user experience for developers</li>
                <li>• Seamless integration with existing tools</li>
                <li>• Real-time collaboration capabilities</li>
              </ul>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => alert('Feature demo coming soon!')}
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md hover:from-orange-600 hover:to-orange-900 transition-all duration-200"
              >
                Try Demo
              </button>
              <button
                onClick={closeModal}
                className="py-2 px-4 border rounded-md hover:bg-neutral-800 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FeatureSection 