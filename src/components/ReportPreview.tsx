import { useState } from "react";
import {
  Download,
  RotateCcw,
  Eye,
  FileText,
  Share2,
  Copy,
  CheckCircle,
} from "lucide-react";

interface ReportPreviewProps {
  report: string;
  fileName: string;
  onStartOver: () => void;
}

const ReportPreview: React.FC<ReportPreviewProps> = ({
  report,
  fileName,
  onStartOver,
}) => {
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    const blob = new Blob([report], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName.split(".")[0]}_Scientific_Report.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(report);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const reportStats = {
    wordCount: report.split(" ").length,
    sections:
      report.split(
        "═══════════════════════════════════════════════════════════════════════════════"
      ).length - 1,
    references: (report.match(/\(\d{4}\)/g) || []).length,
    pages: Math.ceil(report.split(" ").length / 250), // Approximate pages
  };

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-lg">
            <CheckCircle className="h-12 w-12 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Your Scientific Report is Ready!
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Generated from:{" "}
            <span className="font-semibold text-teal-600">{fileName}</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleDownload}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Download className="h-5 w-5" />
              <span>Download Report</span>
            </button>

            <button
              onClick={handleCopyToClipboard}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {copied ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
              <span>{copied ? "Copied!" : "Copy to Clipboard"}</span>
            </button>

            <button
              onClick={onStartOver}
              className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <RotateCcw className="h-5 w-5" />
              <span>Convert Another File</span>
            </button>
          </div>

          {/* Report Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-teal-600">
                {reportStats.wordCount.toLocaleString()}
              </div>
              <div className="text-sm text-slate-600">Words</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-emerald-600">
                {reportStats.sections}
              </div>
              <div className="text-sm text-slate-600">Sections</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-slate-600">
                {reportStats.references}
              </div>
              <div className="text-sm text-slate-600">References</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-teal-600">
                {reportStats.pages}
              </div>
              <div className="text-sm text-slate-600">Pages</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Report Header */}
          <div className="bg-slate-100 px-8 py-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-slate-600" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    Scientific Research Report
                  </h3>
                  <p className="text-sm text-slate-600">
                    Generated using ConvertSearch AI Platform
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-slate-500" />
                <span className="text-sm text-slate-500">Preview Mode</span>
              </div>
            </div>
          </div>

          {/* Report Content */}
          <div className="p-8 max-h-96 overflow-y-auto">
            <div className="prose prose-slate max-w-none">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono text-slate-800 bg-slate-50 p-6 rounded-lg">
                {report}
              </pre>
            </div>
          </div>
        </div>

        {/* Quality Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-teal-100 rounded-full p-2">
                <CheckCircle className="h-5 w-5 text-teal-600" />
              </div>
              <h4 className="font-bold text-slate-900">Academic Standards</h4>
            </div>
            <p className="text-sm text-slate-600">
              Formatted according to Harvard, Oxford, MIT, and Stanford research
              guidelines with proper citations and academic structure.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-emerald-100 rounded-full p-2">
                <FileText className="h-5 w-5 text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900">Complete Structure</h4>
            </div>
            <p className="text-sm text-slate-600">
              Includes abstract, introduction, methodology, results, discussion,
              conclusions, and comprehensive reference list.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-slate-100 rounded-full p-2">
                <Share2 className="h-5 w-5 text-slate-600" />
              </div>
              <h4 className="font-bold text-slate-900">Publication Ready</h4>
            </div>
            <p className="text-sm text-slate-600">
              Professional quality suitable for journal submission, thesis
              defense, and academic conference presentations.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              What's Next?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  For Journal Submission:
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Review and customize the methodology section</li>
                  <li>• Add specific statistical software details</li>
                  <li>• Include author information and affiliations</li>
                  <li>• Verify journal-specific formatting requirements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  For Academic Use:
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Perfect for thesis chapters and dissertations</li>
                  <li>• Suitable for conference presentations</li>
                  <li>• Ready for peer review processes</li>
                  <li>• Meets institutional research standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportPreview;
