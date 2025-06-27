import { useState } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState({ video1: true, video2: true });

  const handleStartFree = () => {
    setShowModal(true);
  };

  const handleDocumentation = () => {
    // Scroll to features section
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleVideo = (videoKey) => {
    setVideoPlaying(prev => ({
      ...prev,
      [videoKey]: !prev[videoKey]
    }));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Sebla lewan build tools
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                for developers
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"> 
            Empower your creativity and bring your SEBLA LEWAN app ideas to life with our
            intuitive development tools. Get started today and turn your imagination
            into immersive reality!
        </p>
        <div className="flex justify-center my-10">
            <button 
                onClick={handleStartFree}
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:from-orange-600 hover:to-orange-900 transition-all duration-200 transform hover:scale-105"
            >
                Start for free
            </button>
            <button 
                onClick={handleDocumentation}
                className="py-3 px-4 mx-3 rounded-md border hover:bg-neutral-800 transition-colors duration-200 transform hover:scale-105"
            >
                Documentation
            </button>
        </div>
        <div className="flex mt-10 justify-center">
            <div className="relative w-1/2 mx-2">
                <video 
                 autoPlay 
                 loop 
                 muted 
                 className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400 my-4"
                 ref={(el) => {
                     if (el) {
                         if (videoPlaying.video1) {
                             el.play();
                         } else {
                             el.pause();
                         }
                     }
                 }}
                >
                 <source src={video1} type="video/mp4" />
                 Your browser does not support the video tag.
                </video>
                <button
                    onClick={() => toggleVideo('video1')}
                    className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm hover:bg-black/70 transition-colors duration-200"
                >
                    {videoPlaying.video1 ? 'Pause' : 'Play'}
                </button>
            </div>
            <div className="relative w-1/2 mx-2">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400 my-4"
                  ref={(el) => {
                      if (el) {
                          if (videoPlaying.video2) {
                              el.play();
                          } else {
                              el.pause();
                          }
                      }
                  }}
                >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                    onClick={() => toggleVideo('video2')}
                    className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm hover:bg-black/70 transition-colors duration-200"
                >
                    {videoPlaying.video2 ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>

        {/* Modal */}
        {showModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-neutral-900 p-8 rounded-lg max-w-md mx-4">
                    <h3 className="text-2xl font-bold mb-4">Get Started for Free</h3>
                    <p className="text-neutral-400 mb-6">
                        Ready to start building amazing VR applications? Sign up now and get access to all our tools!
                    </p>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => alert('Sign up functionality coming soon!')}
                            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md hover:from-orange-600 hover:to-orange-900 transition-all duration-200"
                        >
                            Sign Up Now
                        </button>
                        <button
                            onClick={closeModal}
                            className="py-2 px-4 border rounded-md hover:bg-neutral-800 transition-colors duration-200"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default HeroSection