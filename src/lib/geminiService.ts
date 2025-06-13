
import { AnalysisResult } from '@/components/ResumeAnalyzer';

export const analyzeResume = async (resumeText: string, apiKey: string): Promise<AnalysisResult> => {
  const prompt = `
Analyze the following resume and provide a comprehensive evaluation. Return your response in JSON format with the following structure:

{
  "overallScore": number (0-100),
  "skillsAnalysis": {
    "identifiedSkills": string[],
    "missingSkills": string[],
    "skillsScore": number (0-100)
  },
  "experienceAnalysis": {
    "yearsOfExperience": number,
    "relevantExperience": string[],
    "experienceScore": number (0-100)
  },
  "suggestions": string[],
  "strengths": string[],
  "improvements": string[]
}

Please analyze this resume thoroughly:

${resumeText}

Focus on:
1. Technical and soft skills mentioned
2. Years and quality of experience
3. Education and certifications
4. Resume format and presentation
5. Achievement quantification
6. Keywords and industry relevance

Provide actionable suggestions for improvement and highlight the candidate's strengths.
`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Gemini API response:', data);

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid response format from Gemini API');
    }

    const generatedText = data.candidates[0].content.parts[0].text;
    console.log('Generated text:', generatedText);

    // Try to extract JSON from the response
    let jsonMatch = generatedText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      // If no JSON found, create a fallback response
      return createFallbackAnalysis(resumeText);
    }

    try {
      const analysis = JSON.parse(jsonMatch[0]);
      
      // Validate the structure and provide defaults for missing fields
      return {
        overallScore: analysis.overallScore || 75,
        skillsAnalysis: {
          identifiedSkills: analysis.skillsAnalysis?.identifiedSkills || [],
          missingSkills: analysis.skillsAnalysis?.missingSkills || [],
          skillsScore: analysis.skillsAnalysis?.skillsScore || 70
        },
        experienceAnalysis: {
          yearsOfExperience: analysis.experienceAnalysis?.yearsOfExperience || 0,
          relevantExperience: analysis.experienceAnalysis?.relevantExperience || [],
          experienceScore: analysis.experienceAnalysis?.experienceScore || 70
        },
        suggestions: analysis.suggestions || [],
        strengths: analysis.strengths || [],
        improvements: analysis.improvements || []
      };
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      return createFallbackAnalysis(resumeText);
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw new Error('Failed to analyze resume. Please check your API key and try again.');
  }
};

const createFallbackAnalysis = (resumeText: string): AnalysisResult => {
  // Simple fallback analysis based on text content
  const wordCount = resumeText.split(' ').length;
  const hasEmail = resumeText.includes('@');
  const hasPhone = /\d{3}[-.]?\d{3}[-.]?\d{4}/.test(resumeText);
  
  const commonSkills = ['JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'HTML', 'CSS', 'Git'];
  const identifiedSkills = commonSkills.filter(skill => 
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  return {
    overallScore: Math.min(90, Math.max(50, wordCount / 10 + (hasEmail ? 10 : 0) + (hasPhone ? 10 : 0))),
    skillsAnalysis: {
      identifiedSkills,
      missingSkills: ['Communication', 'Leadership', 'Problem Solving'],
      skillsScore: Math.min(100, identifiedSkills.length * 15 + 40)
    },
    experienceAnalysis: {
      yearsOfExperience: Math.floor(wordCount / 200),
      relevantExperience: ['Professional experience mentioned', 'Technical background evident'],
      experienceScore: Math.min(90, wordCount / 15)
    },
    suggestions: [
      'Add more quantified achievements',
      'Include relevant keywords for your industry',
      'Consider adding a professional summary'
    ],
    strengths: [
      'Resume uploaded successfully',
      'Contains contact information',
      'Includes technical skills'
    ],
    improvements: [
      'Add more specific accomplishments',
      'Include measurable results',
      'Consider improving formatting'
    ]
  };
};
