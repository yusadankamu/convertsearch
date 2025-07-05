import { useState } from "react";
import { FileText, Search, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="h-8 w-8 text-teal-600" />
                <FileText className="h-5 w-5 text-slate-700 absolute -bottom-1 -right-1" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Convert<span className="text-teal-600">Search</span>
              </h1>
              <p className="text-xs text-slate-500 -mt-1">
                Scientific Research Platform
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("upload")}
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Start Converting
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("features")}
                className="text-slate-700 hover:text-teal-600 transition-colors font-medium text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-slate-700 hover:text-teal-600 transition-colors font-medium text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("upload")}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-left"
              >
                Start Converting
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
