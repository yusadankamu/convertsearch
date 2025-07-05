import React from "react";
import { Upload, Cog, FileText, Download, ArrowRight } from "lucide-react";

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Data",
      description:
        "Simply drag and drop your research file (CSV, DOC, DOCX, XLS, XLSX) or click to browse. Our system supports files up to 25MB.",
      details: [
        "Multiple format support",
        "Secure file validation",
        "Instant upload processing",
      ],
    },
    {
      icon: Cog,
      title: "AI Analysis & Processing",
      description:
        "Our advanced AI algorithms analyze your data structure, identify patterns, and apply statistical methods following academic standards.",
      details: [
        "Statistical analysis",
        "Pattern recognition",
        "Academic formatting",
      ],
    },
    {
      icon: FileText,
      title: "Report Generation",
      description:
        "A comprehensive scientific report is generated with proper methodology, results, discussion, and references sections.",
      details: [
        "Harvard/Oxford standards",
        "Peer-review ready",
        "Citation formatting",
      ],
    },
    {
      icon: Download,
      title: "Download & Use",
      description:
        "Download your professional report immediately. Ready for submission to journals, conferences, or academic institutions.",
      details: ["Instant download", "Multiple formats", "Publication ready"],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            How ConvertSearch Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transform your raw research data into professional scientific
            reports in just four simple steps. Our AI-powered platform handles
            the complex formatting while you focus on your research.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-emerald-200 to-slate-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-slate-200 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-white border-4 border-slate-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-lg font-bold text-teal-600">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="bg-teal-100 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 mt-4">
                    <step.icon className="h-8 w-8 text-teal-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center space-x-2 text-sm text-slate-500"
                      >
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-2 z-10">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <ArrowRight className="h-4 w-4 text-teal-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Why Choose ConvertSearch?
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  <strong>Academic Excellence:</strong> Reports meet standards
                  from Harvard, Oxford, MIT, and Stanford
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  <strong>Time Efficient:</strong> Generate comprehensive
                  reports in minutes, not days
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  <strong>No Learning Curve:</strong> Simple interface designed
                  for researchers of all levels
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Processing Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-1">
                  2.3s
                </div>
                <div className="text-slate-300 text-sm">
                  Average Processing Time
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  99.2%
                </div>
                <div className="text-slate-300 text-sm">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-1">15+</div>
                <div className="text-slate-300 text-sm">Report Sections</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  24/7
                </div>
                <div className="text-slate-300 text-sm">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
