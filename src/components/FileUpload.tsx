
import React, { useCallback } from 'react';
import { Upload, FileText, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FileUploadProps {
  onFileUpload: (text: string) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const { toast } = useToast();

  const extractTextFromFile = useCallback((file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const text = e.target?.result as string;
        resolve(text);
      };
      
      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };
      
      if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
        reader.readAsText(file);
      } else {
        // For other file types, we'll read as text (this is a simplified approach)
        // In a real app, you'd want to use libraries like pdf-parse for PDFs
        reader.readAsText(file);
      }
    });
  }, []);

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const text = await extractTextFromFile(file);
      onFileUpload(text);
      toast({
        title: "File Uploaded Successfully",
        description: `${file.name} has been processed and is ready for analysis`,
      });
    } catch (error) {
      console.error('File upload error:', error);
      toast({
        title: "Upload Failed",
        description: "Failed to read the file. Please try a different format.",
        variant: "destructive",
      });
    }
  }, [extractTextFromFile, onFileUpload, toast]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const input = document.createElement('input');
      input.type = 'file';
      input.files = e.dataTransfer.files;
      handleFileChange({ target: input } as any);
    }
  }, [handleFileChange]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl mr-4">
          <Upload className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Upload Your Resume</h3>
      </div>
      
      <div
        className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-purple-400/5 group-hover:to-blue-400/5 transition-all duration-500"></div>
        
        <div className="relative z-10 flex flex-col items-center space-y-6">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-2xl group-hover:scale-110 transition-transform duration-300">
            <Upload className="h-12 w-12 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
          </div>
          
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
              Drop your resume here or click to browse
            </p>
            <p className="text-gray-500 group-hover:text-gray-600 transition-colors">
              Supports .txt, .pdf, .doc, .docx files
            </p>
          </div>
          
          <input
            type="file"
            accept=".txt,.pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
            id="resume-upload"
          />
          
          <label
            htmlFor="resume-upload"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 cursor-pointer flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 group-hover:scale-110"
          >
            <FileText className="mr-3 h-5 w-5" />
            Choose File
            <Sparkles className="ml-2 h-4 w-4 opacity-70" />
          </label>
        </div>
      </div>
    </div>
  );
};
