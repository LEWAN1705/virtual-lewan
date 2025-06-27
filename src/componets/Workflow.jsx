import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  const [completedItems, setCompletedItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleCompleted = (index) => {
    setCompletedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleExpanded = (index) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getProgressPercentage = () => {
    return Math.round((completedItems.length / checklistItems.length) * 100);
  };

  return (
    <div id="workflow" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      
      {/* Progress Bar */}
      <div className="max-w-md mx-auto mt-8 mb-12">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-neutral-400">Progress</span>
          <span className="text-sm font-medium text-orange-500">{getProgressPercentage()}%</span>
        </div>
        <div className="w-full bg-neutral-800 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-orange-500 to-orange-800 h-2 rounded-full transition-all duration-500"
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img 
            src={codeImg} 
            alt="Coding" 
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => alert('Image clicked! This could open a larger view or gallery.')}
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex mb-12 p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                hoveredItem === index ? 'bg-neutral-800/50' : ''
              } ${completedItems.includes(index) ? 'opacity-75' : ''}`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div 
                className={`text-green-400 mx-6 h-10 w-10 p-2 justify-center items-center rounded-full transition-all duration-300 cursor-pointer ${
                  completedItems.includes(index) 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-neutral-900 hover:bg-green-500/20'
                }`}
                onClick={() => toggleCompleted(index)}
              >
                <CheckCircle2 className={completedItems.includes(index) ? 'scale-110' : ''} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h5 className={`mt-1 mb-2 text-xl font-semibold transition-all duration-300 ${
                    completedItems.includes(index) ? 'line-through text-neutral-500' : ''
                  }`}>
                    {item.title}
                  </h5>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpanded(index);
                    }}
                    className="text-neutral-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {expandedItems.includes(index) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                <p className={`text-md text-neutral-500 transition-all duration-300 ${
                  completedItems.includes(index) ? 'line-through' : ''
                }`}>
                  {item.description}
                </p>
                
                {/* Expanded Details */}
                {expandedItems.includes(index) && (
                  <div className="mt-4 p-4 bg-neutral-800/50 rounded-lg">
                    <h6 className="text-sm font-semibold text-orange-400 mb-2">How it works:</h6>
                    <ul className="text-sm text-neutral-400 space-y-1">
                      <li>• Step-by-step guidance through the process</li>
                      <li>• Automated checks and validations</li>
                      <li>• Real-time feedback and suggestions</li>
                      <li>• Integration with your existing tools</li>
                    </ul>
                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Starting ${item.title} workflow...`);
                        }}
                        className="text-xs bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded transition-colors duration-200"
                      >
                        Start Now
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Opening documentation for ${item.title}...`);
                        }}
                        className="text-xs border border-neutral-600 hover:bg-neutral-700 text-neutral-300 px-3 py-1 rounded transition-colors duration-200"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completion Message */}
      {completedItems.length === checklistItems.length && (
        <div className="text-center mt-12 p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
          <h3 className="text-2xl font-bold text-green-400 mb-2">🎉 Workflow Complete!</h3>
          <p className="text-neutral-400">
            You've completed all the steps. Your coding workflow is now optimized!
          </p>
          <button
            onClick={() => {
              setCompletedItems([]);
              setExpandedItems([]);
            }}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            Reset Progress
          </button>
        </div>
      )}
    </div>
  );
};

export default Workflow;
