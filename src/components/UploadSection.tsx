import React, { useState, useRef } from "react";
import {
  Upload,
  FileText,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

interface UploadSectionProps {
  onFileUpload: (file: {
    name: string;
    type: string;
    size: number;
    content: string;
  }) => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string>("");
  const [isValidating, setIsValidating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const supportedFormats = [
    {
      name: "CSV",
      icon: FileSpreadsheet,
      description: "Comma-separated values",
      details:
        "Perfect for statistical data, survey results, experimental measurements",
    },
    {
      name: "DOC/DOCX",
      icon: FileText,
      description: "Microsoft Word documents",
      details: "Research notes, literature reviews, preliminary findings",
    },
    {
      name: "XLS/XLSX",
      icon: FileSpreadsheet,
      description: "Microsoft Excel spreadsheets",
      details: "Complex datasets, financial data, multi-variable analysis",
    },
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = async (file: File) => {
    setUploadError("");
    setIsValidating(true);

    // Simulate validation time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check file type
    const allowedTypes = [".csv", ".doc", ".docx", ".xls", ".xlsx"];
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();

    if (!allowedTypes.includes(fileExtension)) {
      setUploadError(
        "Please upload a supported file format (CSV, DOC, DOCX, XLS, XLSX)"
      );
      setIsValidating(false);
      return;
    }

    // Check file size (25MB limit)
    if (file.size > 25 * 1024 * 1024) {
      setUploadError("File size must be less than 25MB for optimal processing");
      setIsValidating(false);
      return;
    }

    // Check if file is empty
    if (file.size === 0) {
      setUploadError(
        "The selected file appears to be empty. Please choose a file with data."
      );
      setIsValidating(false);
      return;
    }

    try {
      // Read file content
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;

        // Basic content validation
        if (!content || content.trim().length === 0) {
          setUploadError(
            "The file appears to be empty or corrupted. Please try another file."
          );
          setIsValidating(false);
          return;
        }

        setIsValidating(false);
        onFileUpload({
          name: file.name,
          type: file.type,
          size: file.size,
          content: content,
        });
      };

      reader.onerror = () => {
        setUploadError(
          "Error reading file. Please try again or choose a different file."
        );
        setIsValidating(false);
      };

      reader.readAsText(file);
    } catch (error) {
      setUploadError(
        "An error occurred while processing your file. Please try again."
      );
      setIsValidating(false);
    }
  };

  return (
    <section id="upload" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Upload Your Research Data
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Drop your file or click to browse. Our AI will analyze your data and
            generate a comprehensive scientific report following international
            academic standards.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div
            className={`border-2 border-dashed rounded-2xl p-12 lg:p-16 text-center transition-all duration-300 ${
              isDragging
                ? "border-teal-500 bg-teal-50 scale-105"
                : "border-slate-300 hover:border-teal-400 hover:bg-slate-50"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center space-y-6">
              <div
                className={`rounded-full p-6 transition-all duration-300 ${
                  isDragging ? "bg-teal-100 scale-110" : "bg-slate-100"
                }`}
              >
                <Upload
                  className={`h-16 w-16 ${
                    isDragging ? "text-teal-600" : "text-slate-600"
                  }`}
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {isDragging
                    ? "Drop your file here"
                    : "Drag & drop your research file"}
                </h3>
                <p className="text-slate-600 mb-6 text-lg">
                  or click the button below to browse from your computer
                </p>

                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isValidating}
                  className="bg-teal-600 hover:bg-teal-700 disabled:bg-slate-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
                >
                  {isValidating ? "Validating File..." : "Choose File"}
                </button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept=".csv,.doc,.docx,.xls,.xlsx"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </div>

          {uploadError && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-red-800 mb-1">
                  Upload Error
                </h4>
                <span className="text-red-700">{uploadError}</span>
              </div>
            </div>
          )}

          {isValidating && (
            <div className="mt-6 bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-teal-600"></div>
              <span className="text-teal-700 font-medium">
                Validating your file...
              </span>
            </div>
          )}

          <div className="mt-12">
            <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">
              Supported File Formats
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportedFormats.map((format) => (
                <div
                  key={format.name}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-teal-300 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <format.icon className="h-6 w-6 text-slate-600" />
                    <span className="font-bold text-slate-900 text-lg">
                      {format.name}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-2 font-medium">
                    {format.description}
                  </p>
                  <p className="text-sm text-slate-500">{format.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  Security & Privacy
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>
                    • Maximum file size: 25MB for optimal processing speed
                  </li>
                  <li>• End-to-end encryption during upload and processing</li>
                  <li>• No registration required - completely anonymous</li>
                  <li>• Files are automatically deleted after processing</li>
                  <li>• GDPR compliant data handling procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
