import React from "react";
import {
  Search,
  FileText,
  Mail,
  ExternalLink,
  BookOpen,
  GraduationCap,
  Shield,
  Zap,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Search className="h-10 w-10 text-teal-400" />
                <FileText className="h-6 w-6 text-white absolute -bottom-1 -right-1" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">
                  Convert<span className="text-teal-400">Search</span>
                </h3>
                <p className="text-slate-400 text-sm">
                  Scientific Research Platform
                </p>
              </div>
            </div>
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed">
              Transform your research data into professional scientific reports
              following international academic standards. Trusted by researchers
              from over 200 universities worldwide.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
              <Mail className="h-5 w-5" />
              <span>research@convertsearch.com</span>
            </div>
            <div className="mt-4 flex items-center space-x-2 text-slate-400">
              <Shield className="h-5 w-5" />
              <span>GDPR Compliant • SOC 2 Certified</span>
            </div>
          </div>

          {/* Features Column */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">
              Platform Features
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                <Zap className="h-4 w-4 text-teal-400" />
                <span>AI-Powered Analysis</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                <BookOpen className="h-4 w-4 text-emerald-400" />
                <span>Academic Standards</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                <FileText className="h-4 w-4 text-slate-400" />
                <span>Multiple Formats</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                <Shield className="h-4 w-4 text-teal-400" />
                <span>Secure Processing</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                <GraduationCap className="h-4 w-4 text-emerald-400" />
                <span>Publication Ready</span>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">
              Academic Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <span>Harvard Writing Standards</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <span>Oxford Research Guidelines</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <span>MIT Publication Format</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Sample Scientific Reports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Research Methodology Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Statistical Analysis Help
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="border-t border-slate-800 mt-16 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">
                50,000+
              </div>
              <div className="text-slate-400">Reports Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                200+
              </div>
              <div className="text-slate-400">Universities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-400 mb-2">
                98.7%
              </div>
              <div className="text-slate-400">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
              <div className="text-slate-400">Availability</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              <p>&copy; 2024 ConvertSearch. All rights reserved.</p>
              <p className="text-sm mt-1">
                Empowering researchers worldwide with AI-powered scientific
                report generation.
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Academic Ethics
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
