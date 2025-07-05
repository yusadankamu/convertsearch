import { useState, useEffect } from "react";
import {
  FileText,
  CheckCircle,
  Loader2,
  BarChart3,
  BookOpen,
  Search,
  Brain,
  Zap,
  Target,
} from "lucide-react";

interface ConversionProcessProps {
  fileName: string;
}

const ConversionProcess: React.FC<ConversionProcessProps> = ({ fileName }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      icon: Search,
      title: "AI Data Validation & Parsing",
      description:
        "Advanced algorithms analyzing file structure and data integrity",
      status: "complete",
      duration: 1000,
    },
    {
      icon: Brain,
      title: "Intelligent Pattern Recognition",
      description:
        "Machine learning models identifying statistical relationships",
      status: "processing",
      duration: 1500,
    },
    {
      icon: BarChart3,
      title: "Statistical Analysis Engine",
      description:
        "Performing correlation analysis, hypothesis testing, and significance calculations",
      status: "pending",
      duration: 1200,
    },
    {
      icon: Target,
      title: "Research Context Generation",
      description:
        "AI determining research domain, methodology, and theoretical framework",
      status: "pending",
      duration: 800,
    },
    {
      icon: BookOpen,
      title: "Academic Formatting AI",
      description:
        "Applying Harvard, Oxford, and MIT scientific writing standards",
      status: "pending",
      duration: 700,
    },
    {
      icon: FileText,
      title: "Report Synthesis & Validation",
      description:
        "Finalizing publication-ready scientific report with quality assurance",
      status: "pending",
      duration: 300,
    },
  ];

  useEffect(() => {
    const totalDuration = 4500; // 4.5 seconds total for AI processing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 100 / (totalDuration / 50); // Update every 50ms
      });
    }, 50);

    // Update step status based on progress
    const stepInterval = setInterval(() => {
      setCurrentStepIndex(() => {
        const newIndex = Math.floor((progress / 100) * steps.length);
        return Math.min(newIndex, steps.length - 1);
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, []);

  const getStepStatus = (index: number) => {
    if (index < currentStepIndex) return "complete";
    if (index === currentStepIndex) return "processing";
    return "pending";
  };

  return (
    <section className="py-20 bg-slate-50 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-lg">
            <Brain className="h-12 w-12 text-teal-600 animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            AI-Powered Research Analysis
          </h2>
          <p className="text-xl text-slate-600 mb-2">
            Processing:{" "}
            <span className="font-semibold text-teal-600">{fileName}</span>
          </p>
          <p className="text-slate-500">
            Advanced artificial intelligence generating publication-ready
            scientific report
          </p>

          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="bg-slate-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-500 h-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-slate-600 mt-2">
              {Math.round(progress)}% Complete
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const status = getStepStatus(index);
              return (
                <div key={index} className="flex items-center space-x-6">
                  <div
                    className={`rounded-full p-4 transition-all duration-500 ${
                      status === "complete"
                        ? "bg-emerald-100 text-emerald-600 scale-110"
                        : status === "processing"
                        ? "bg-teal-100 text-teal-600 scale-110"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {status === "processing" ? (
                      <Loader2 className="h-8 w-8 animate-spin" />
                    ) : status === "complete" ? (
                      <CheckCircle className="h-8 w-8" />
                    ) : (
                      <step.icon className="h-8 w-8" />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold transition-colors duration-300 ${
                        status === "complete"
                          ? "text-emerald-700"
                          : status === "processing"
                          ? "text-teal-700"
                          : "text-slate-500"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-slate-600 mt-1">{step.description}</p>
                  </div>

                  {status === "complete" && (
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  )}

                  {status === "processing" && (
                    <div className="flex items-center space-x-2">
                      <div className="animate-pulse flex space-x-1">
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <Brain className="h-5 w-5 text-teal-600" />
                <span>AI Analysis Capabilities:</span>
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Advanced pattern recognition and clustering</li>
                <li>• Automated statistical significance testing</li>
                <li>• Intelligent variable relationship mapping</li>
                <li>• Research domain classification and context</li>
                <li>• Hypothesis generation and validation</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <Zap className="h-5 w-5 text-emerald-600" />
                <span>Report Features:</span>
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Comprehensive literature review with citations</li>
                <li>• Rigorous methodology and statistical analysis</li>
                <li>• Publication-ready academic formatting</li>
                <li>• International university standard compliance</li>
                <li>• AI-generated insights and recommendations</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-teal-100 rounded-full p-2">
                <Brain className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Artificial Intelligence Processing
                </h4>
                <p className="text-sm text-slate-600">
                  Our advanced AI algorithms analyze your data using machine
                  learning models trained on thousands of academic papers from
                  Harvard, Oxford, MIT, and Stanford. The system automatically
                  identifies research patterns, generates hypotheses, and
                  formats results according to international academic standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionProcess;
