
import React from 'react';
import { AnalysisResult } from './ResumeAnalyzer';
import { Trophy, TrendingUp, AlertCircle, CheckCircle, Star } from 'lucide-react';

interface AnalysisResultsProps {
  analysis: AnalysisResult;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({ analysis }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="space-y-6">
      {/* Overall Score */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
          <h3 className="text-xl font-semibold">Overall Score</h3>
        </div>
        <div className="flex items-center justify-center">
          <div className={`text-6xl font-bold ${getScoreColor(analysis.overallScore)} ${getScoreBgColor(analysis.overallScore)} rounded-full w-24 h-24 flex items-center justify-center`}>
            {analysis.overallScore}
          </div>
          <span className="text-2xl text-gray-500 ml-2">/100</span>
        </div>
      </div>

      {/* Skills Analysis */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Star className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold">Skills Analysis</h3>
          <span className={`ml-auto text-lg font-bold ${getScoreColor(analysis.skillsAnalysis.skillsScore)}`}>
            {analysis.skillsAnalysis.skillsScore}/100
          </span>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-green-700 mb-2">Identified Skills</h4>
            <div className="flex flex-wrap gap-2">
              {analysis.skillsAnalysis.identifiedSkills.map((skill, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {analysis.skillsAnalysis.missingSkills.length > 0 && (
            <div>
              <h4 className="font-medium text-orange-700 mb-2">Suggested Skills to Add</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.skillsAnalysis.missingSkills.map((skill, index) => (
                  <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Experience Analysis */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-5 w-5 text-purple-600 mr-2" />
          <h3 className="text-lg font-semibold">Experience Analysis</h3>
          <span className={`ml-auto text-lg font-bold ${getScoreColor(analysis.experienceAnalysis.experienceScore)}`}>
            {analysis.experienceAnalysis.experienceScore}/100
          </span>
        </div>
        
        <div className="space-y-3">
          <p className="text-gray-700">
            <span className="font-medium">Years of Experience:</span> {analysis.experienceAnalysis.yearsOfExperience}
          </p>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Relevant Experience</h4>
            <ul className="space-y-1">
              {analysis.experienceAnalysis.relevantExperience.map((exp, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{exp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Strengths */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
          <h3 className="text-lg font-semibold">Strengths</h3>
        </div>
        <ul className="space-y-2">
          {analysis.strengths.map((strength, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{strength}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Improvement Suggestions */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <AlertCircle className="h-5 w-5 text-orange-600 mr-2" />
          <h3 className="text-lg font-semibold">Areas for Improvement</h3>
        </div>
        <ul className="space-y-2">
          {analysis.improvements.map((improvement, index) => (
            <li key={index} className="flex items-start">
              <AlertCircle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{improvement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* General Suggestions */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold">Suggestions</h3>
        </div>
        <ul className="space-y-2">
          {analysis.suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start">
              <TrendingUp className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{suggestion}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
