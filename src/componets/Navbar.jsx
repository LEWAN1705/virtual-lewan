import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png"
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleNavbar = () => {
        setMobileDrawOpen(!mobileDrawerOpen);
    };

    // Handle smooth scrolling to sections
    const handleNavClick = (href, label) => {
        setMobileDrawOpen(false); // Close mobile menu when clicking a link
        
        if (href === '#') {
            // Scroll to corresponding section
            const sectionId = label.toLowerCase();
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['features', 'workflow', 'pricing', 'testimonials'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
     <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                 <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                 <span className="text-xl tracking-tight">Sebla Lewan</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href, item.label);
                                }}
                                className={`transition-colors duration-200 hover:text-orange-500 ${
                                    activeSection === item.label.toLowerCase() ? 'text-orange-500' : ''
                                }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <button 
                        onClick={() => alert('Sign In functionality coming soon!')}
                        className="py-2 px-3 border rounded-md hover:bg-neutral-800 transition-colors duration-200"
                    >
                        Sign In
                    </button>
                    <button 
                        onClick={() => alert('Create account functionality coming soon!')}
                        className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:from-orange-600 hover:to-orange-900 transition-all duration-200"
                    >
                        Create an account
                    </button>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button 
                        onClick={toggleNavbar}
                        className="p-2 hover:bg-neutral-800 rounded-md transition-colors duration-200"
                    >
                        {mobileDrawerOpen ? <X/> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) =>(
                            <li key={index} className="py-4">
                                <a 
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href, item.label);
                                    }}
                                    className={`transition-colors duration-200 hover:text-orange-500 ${
                                        activeSection === item.label.toLowerCase() ? 'text-orange-500' : ''
                                    }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <button 
                            onClick={() => {
                                alert('Sign In functionality coming soon!');
                                setMobileDrawOpen(false);
                            }}
                            className="py-2 px-3 border rounded-md hover:bg-neutral-800 transition-colors duration-200"
                        >
                            Sign In
                        </button>
                        <button 
                            onClick={() => {
                                alert('Create account functionality coming soon!');
                                setMobileDrawOpen(false);
                            }}
                            className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-600 hover:to-orange-900 transition-all duration-200"
                        >
                            Create an account
                        </button>
                    </div>
                </div>
            )}
        </div>
     </nav>
  )
}

export default Navbar