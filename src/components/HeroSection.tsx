import React, { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Award,
  Microscope,
} from "lucide-react";
import SampleReportModal from "./SampleReportModal";

const HeroSection: React.FC = () => {
  const [showSampleModal, setShowSampleModal] = useState(false);

  const scrollToUpload = () => {
    const element = document.getElementById("upload");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <Microscope className="h-12 w-12 text-teal-600" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Raw Data into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 block">
                Scientific Reports
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Convert your research data into publication-ready scientific
              reports following international academic standards from Harvard,
              Oxford, and leading universities worldwide. No registration
              required, instant processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={scrollToUpload}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Start Converting Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setShowSampleModal(true)}
                className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-semibold border border-slate-300 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                View Sample Report
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="bg-teal-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Academic Standards
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Reports formatted according to Harvard, Oxford, MIT, and
                  Stanford research guidelines. Includes proper citations,
                  methodology sections, and statistical analysis.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  University Grade
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Professional quality reports suitable for thesis submission,
                  journal publication, and academic conferences. Peer-review
                  ready formatting.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="bg-slate-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Instant Processing
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Advanced AI algorithms analyze your data and generate
                  comprehensive reports in minutes. No waiting, no queues,
                  immediate results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SampleReportModal
        isOpen={showSampleModal}
        onClose={() => setShowSampleModal(false)}
      />
    </>
  );
};

export default HeroSection;
