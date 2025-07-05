import {
  FileText,
  BarChart3,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Database,
  TrendingUp,
  BookOpen,
  Award,
  Brain,
  Target,
} from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Analysis",
      description:
        "Machine learning algorithms trained on thousands of academic papers automatically identify patterns, correlations, and statistical significance in your data.",
      color: "teal",
    },
    {
      icon: Target,
      title: "Intelligent Research Context",
      description:
        "AI automatically determines research domain, methodology, and theoretical framework based on your data characteristics and variable relationships.",
      color: "emerald",
    },
    {
      icon: BarChart3,
      title: "Automated Statistical Testing",
      description:
        "Comprehensive statistical analysis including correlation studies, hypothesis testing, ANOVA, regression analysis, and effect size calculations.",
      color: "slate",
    },
    {
      icon: FileText,
      title: "Multiple Format Support",
      description:
        "Upload CSV, DOC, DOCX, XLS, and XLSX files. Our AI automatically detects data structure and optimizes analysis accordingly.",
      color: "teal",
    },
    {
      icon: BookOpen,
      title: "Academic Standards Compliance",
      description:
        "Reports automatically formatted according to Harvard, Oxford, MIT, and Stanford guidelines with proper citations and academic structure.",
      color: "emerald",
    },
    {
      icon: Shield,
      title: "Secure AI Processing",
      description:
        "Your data is processed securely with end-to-end encryption. AI analysis occurs in isolated environments with automatic data deletion.",
      color: "slate",
    },
    {
      icon: Zap,
      title: "Real-Time Generation",
      description:
        "Advanced AI algorithms generate comprehensive reports in under 5 minutes, regardless of data complexity or size.",
      color: "teal",
    },
    {
      icon: Globe,
      title: "International Standards",
      description:
        "AI ensures compliance with research standards from universities worldwide including APA, MLA, Chicago, and IEEE citation styles.",
      color: "emerald",
    },
    {
      icon: Database,
      title: "Intelligent Data Validation",
      description:
        "AI-powered data validation automatically detects outliers, missing values, and data quality issues with recommended solutions.",
      color: "slate",
    },
    {
      icon: TrendingUp,
      title: "Pattern Recognition",
      description:
        "Machine learning models identify complex patterns, clusters, and relationships that traditional analysis might miss.",
      color: "teal",
    },
    {
      icon: Award,
      title: "Publication Ready",
      description:
        "AI-generated reports meet peer-review standards and are ready for journal submission, thesis defense, and conference presentations.",
      color: "emerald",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance AI",
      description:
        "Automated quality checks ensure statistical accuracy, proper methodology, and academic integrity throughout the report.",
      color: "slate",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "teal":
        return {
          bg: "bg-teal-100",
          text: "text-teal-600",
          border: "border-teal-200",
        };
      case "emerald":
        return {
          bg: "bg-emerald-100",
          text: "text-emerald-600",
          border: "border-emerald-200",
        };
      default:
        return {
          bg: "bg-slate-100",
          text: "text-slate-600",
          border: "border-slate-200",
        };
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-teal-100 rounded-full p-3">
              <Brain className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            AI-Powered Scientific Research Platform
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our advanced artificial intelligence combines machine learning,
            natural language processing, and statistical analysis to deliver
            publication-ready scientific reports that exceed international
            university standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-slate-200 group"
              >
                <div
                  className={`${colors.bg} rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`h-8 w-8 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-50 via-emerald-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Trusted by AI-Enhanced Research Worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  75,000+
                </div>
                <div className="text-slate-600">AI-Generated Reports</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  300+
                </div>
                <div className="text-slate-600">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  99.2%
                </div>
                <div className="text-slate-600">AI Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  4.9/5
                </div>
                <div className="text-slate-600">Research Quality</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-6 w-6 text-teal-600" />
              <h4 className="text-lg font-bold text-slate-900">
                AI Research Capabilities
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <strong>Machine Learning Analysis:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Pattern recognition and clustering</li>
                  <li>• Predictive modeling and validation</li>
                  <li>• Automated hypothesis generation</li>
                </ul>
              </div>
              <div>
                <strong>Academic Intelligence:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Research domain classification</li>
                  <li>• Citation generation and formatting</li>
                  <li>• Methodology recommendation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
