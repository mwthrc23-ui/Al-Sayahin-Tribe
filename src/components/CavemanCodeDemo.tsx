/**
 * Caveman Code Hook Component Demo
 * مثال على استخدام Caveman في مكونات React
 */

import React, { useState } from 'react';
import { useCavemanAnalysis, cavemanWorkflows } from '../utils/caveman.utils';

interface CodeReviewResult {
  patterns: string[];
  performance: {
    score: number;
    issues: string[];
    recommendations: string[];
  };
  security: {
    level: 'high' | 'medium' | 'low';
    issues: string[];
  };
  accessibility: {
    score: number;
    issues: string[];
  };
}

export const CavemanCodeDemo: React.FC = () => {
  const { analyzeComponent } = useCavemanAnalysis();
  const [code, setCode] = useState('');
  const [componentName, setComponentName] = useState('MyComponent');
  const [result, setResult] = useState<CodeReviewResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const analysis = await analyzeComponent(code, componentName);
      setResult(analysis.analysis);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCompressedReview = async () => {
    setLoading(true);
    try {
      const review = await cavemanWorkflows.compressedReview(code, componentName);
      console.log('Review Result:', review);
    } catch (error) {
      console.error('Review failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🦅 Caveman Code Demo</h1>
          <p className="text-slate-300">تحليل وتحسين الكود باستخدام Caveman Code</p>
        </div>

        {/* Input Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Code Input */}
          <div className="bg-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">📝 إدخال الكود</h2>
            
            <input
              type="text"
              value={componentName}
              onChange={(e) => setComponentName(e.target.value)}
              placeholder="اسم المكون"
              className="w-full px-3 py-2 bg-slate-600 text-white rounded mb-4 placeholder-slate-400"
            />
            
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="الصق الكود هنا..."
              rows={12}
              className="w-full px-3 py-2 bg-slate-600 text-white rounded font-mono text-sm placeholder-slate-400"
            />
            
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleAnalyze}
                disabled={loading || !code}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-50 transition"
              >
                {loading ? 'جاري التحليل...' : '🔍 تحليل'}
              </button>
              <button
                onClick={handleCompressedReview}
                disabled={loading || !code}
                className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded disabled:opacity-50 transition"
              >
                {loading ? 'جاري المراجعة...' : '✓ مراجعة'}
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">📊 النتائج</h2>
            
            {!result ? (
              <div className="text-slate-400 text-center py-8">
                <p>لم يتم تحليل الكود بعد</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Patterns */}
                <div>
                  <h3 className="text-sm font-bold text-blue-400 mb-2">🎯 الأنماط المستخدمة:</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.patterns.length > 0 ? (
                      result.patterns.map((pattern, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-900 text-blue-200 rounded text-xs">
                          {pattern}
                        </span>
                      ))
                    ) : (
                      <p className="text-slate-400 text-xs">لا توجد أنماط</p>
                    )}
                  </div>
                </div>

                {/* Performance */}
                <div>
                  <h3 className="text-sm font-bold text-yellow-400 mb-2">
                    ⚡ الأداء: {result.performance.score}/100
                  </h3>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        result.performance.score >= 80
                          ? 'bg-green-500'
                          : result.performance.score >= 60
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${result.performance.score}%` }}
                    />
                  </div>
                  {result.performance.issues.length > 0 && (
                    <ul className="mt-2 text-xs text-red-300">
                      {result.performance.issues.map((issue, i) => (
                        <li key={i}>• {issue}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Security */}
                <div>
                  <h3 className="text-sm font-bold text-red-400 mb-2">
                    🔒 الأمان: {result.security.level}
                  </h3>
                  {result.security.issues.length > 0 && (
                    <ul className="text-xs text-red-300">
                      {result.security.issues.map((issue, i) => (
                        <li key={i}>• {issue}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Accessibility */}
                <div>
                  <h3 className="text-sm font-bold text-purple-400 mb-2">
                    ♿ الوصول: {result.accessibility.score}/100
                  </h3>
                  {result.accessibility.issues.length > 0 && (
                    <ul className="text-xs text-purple-300">
                      {result.accessibility.issues.map((issue, i) => (
                        <li key={i}>• {issue}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">💡 نصائح سريعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-900 p-4 rounded">
              <p className="text-blue-200 text-sm">
                ✅ <strong>استخدم الضغط:</strong> الوضع المضغوط يسرع الاستجابة بـ 75%
              </p>
            </div>
            <div className="bg-green-900 p-4 rounded">
              <p className="text-green-200 text-sm">
                ✅ <strong>المراجعة الدورية:</strong> راجع الكود قبل الالتزام
              </p>
            </div>
            <div className="bg-purple-900 p-4 rounded">
              <p className="text-purple-200 text-sm">
                ✅ <strong>الأمان أولاً:</strong> فحص الأمان بانتظام
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CavemanCodeDemo;
