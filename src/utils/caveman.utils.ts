/**
 * Caveman Code Integration Utility
 * مساعد دمج Caveman Code مع مشروع React
 */

import { cavemanConfig, cavemanCommands } from './caveman.config';

/**
 * مراقب تحليل الكود في الوقت الفعلي
 */
export class CavemanCodeAnalyzer {
  private config = cavemanConfig;

  /**
   * تحليل مكون React
   */
  async analyzeComponent(componentCode: string, componentName: string) {
    return {
      name: componentName,
      analysis: {
        patterns: this.detectPatterns(componentCode),
        performance: this.analyzePerformance(componentCode),
        security: this.checkSecurity(componentCode),
        accessibility: this.checkAccessibility(componentCode),
        documentation: this.generateDocumentation(componentCode, componentName)
      }
    };
  }

  /**
   * الكشف عن أنماط React
   */
  private detectPatterns(code: string): string[] {
    const patterns: string[] = [];

    if (code.includes('useState')) patterns.push('State Management');
    if (code.includes('useEffect')) patterns.push('Side Effects');
    if (code.includes('useCallback')) patterns.push('Memoization');
    if (code.includes('useContext')) patterns.push('Context API');
    if (code.includes('useReducer')) patterns.push('Complex State');
    if (code.includes('memo(')) patterns.push('Performance Optimization');
    if (code.includes('forwardRef')) patterns.push('Ref Forwarding');
    if (code.includes('Suspense')) patterns.push('Code Splitting');

    return patterns;
  }

  /**
   * تحليل الأداء
   */
  private analyzePerformance(code: string): {
    score: number;
    issues: string[];
    recommendations: string[];
  } {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let score = 100;

    // فحص Render Props
    if (code.match(/return\s*\(\s*\)\s*=>/g)) {
      issues.push('Arrow functions in JSX can cause unnecessary re-renders');
      recommendations.push('Use useCallback for event handlers');
      score -= 10;
    }

    // فحص Inline Objects
    if (code.includes('style={{') || code.includes('const obj = {}')) {
      issues.push('Inline object/style creation in render');
      recommendations.push('Move to component level or use useMemo');
      score -= 8;
    }

    // فحص الحلقات غير المحسنة
    if (code.includes('.map(') && !code.includes('key=')) {
      issues.push('List rendering without keys');
      recommendations.push('Add key prop to list items');
      score -= 15;
    }

    return { score, issues, recommendations };
  }

  /**
   * فحص الأمان
   */
  private checkSecurity(code: string): {
    level: 'high' | 'medium' | 'low';
    issues: string[];
    recommendations: string[];
  } {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let level: 'high' | 'medium' | 'low' = 'high';

    // فحص XSS
    if (code.includes('dangerouslySetInnerHTML')) {
      issues.push('Using dangerouslySetInnerHTML - potential XSS vulnerability');
      recommendations.push('Use DOMPurify or trusted content only');
      level = 'low';
    }

    // فحص Props Spreading
    if (code.includes('{...props}')) {
      issues.push('Spreading props without validation');
      recommendations.push('Validate or explicitly define expected props');
      level = 'medium';
    }

    // فحص Auth
    if (!code.includes('auth') && !code.includes('token')) {
      recommendations.push('Consider adding authentication checks');
    }

    return { level, issues, recommendations };
  }

  /**
   * فحص إمكانية الوصول (Accessibility)
   */
  private checkAccessibility(code: string): {
    score: number;
    issues: string[];
  } {
    const issues: string[] = [];
    let score = 100;

    if (!code.includes('aria-') && !code.includes('role=')) {
      issues.push('Missing ARIA attributes');
      score -= 20;
    }

    if (code.includes('<button>') && !code.includes('onClick')) {
      issues.push('Button without click handler');
      score -= 10;
    }

    if (!code.includes('alt=') && code.includes('<img')) {
      issues.push('Images without alt text');
      score -= 15;
    }

    if (!code.includes('label') && code.includes('input')) {
      issues.push('Form inputs without labels');
      score -= 10;
    }

    return { score, issues };
  }

  /**
   * توليد التوثيق التلقائي
   */
  private generateDocumentation(code: string, componentName: string): string {
    const lines = code.split('\n');
    const propMatches = code.match(/interface\s+\w+Props\s*{([^}]*)}/s);
    
    let docs = `/**\n * ${componentName}\n * \n`;
    
    if (propMatches) {
      docs += ` * @component\n * \n * Props:\n`;
      propMatches[1].split(';').forEach(prop => {
        const trimmed = prop.trim();
        if (trimmed) {
          docs += ` * - ${trimmed}\n`;
        }
      });
    }

    docs += ` * \n * @example\n * <${componentName} />\n */\n`;
    
    return docs;
  }
}

/**
 * Hook للوصول إلى خدمات Caveman
 */
export const useCavemanAnalysis = () => {
  const analyzer = new CavemanCodeAnalyzer();

  return {
    analyzeComponent: analyzer.analyzeComponent.bind(analyzer),
    getConfig: () => cavemanConfig,
    getCommands: () => cavemanCommands,
  };
};

/**
 * مكون قائمة الأدوات
 */
export interface CavemanToolkit {
  codeReview: (code: string) => Promise<{ issues: string[]; suggestions: string[] }>;
  codeExplain: (code: string) => Promise<{ explanation: string }>;
  codeOptimize: (code: string) => Promise<{ optimizations: string[] }>;
  generateDocs: (code: string, name: string) => Promise<{ documentation: string }>;
  checkSecurity: (code: string) => Promise<{ vulnerabilities: string[] }>;
  analyzePerformance: (code: string) => Promise<{ bottlenecks: string[] }>;
}

/**
 * سير العمل المدمج
 */
export const cavemanWorkflows = {
  /**
   * سير عمل مراجعة الكود الشامل
   */
  compressedReview: async (code: string, componentName: string) => {
    const analyzer = new CavemanCodeAnalyzer();
    const analysis = await analyzer.analyzeComponent(code, componentName);
    
    return {
      summary: `Component: ${componentName}`,
      status: 'analyzed',
      timestamp: new Date().toISOString(),
      results: {
        patterns: analysis.analysis.patterns,
        performance: analysis.analysis.performance,
        security: analysis.analysis.security,
        accessibility: analysis.analysis.accessibility
      }
    };
  },

  /**
   * سير عمل التحسين السريع
   */
  quickOptimize: async (code: string) => {
    const analyzer = new CavemanCodeAnalyzer();
    const perf = analyzer['analyzePerformance'](code);
    
    return {
      score: perf.score,
      improvements: perf.recommendations
    };
  },

  /**
   * سير عمل توليد التوثيق
   */
  autoDocumentation: async (code: string, componentName: string) => {
    const analyzer = new CavemanCodeAnalyzer();
    const docs = analyzer['generateDocumentation'](code, componentName);
    
    return {
      documentation: docs,
      generated: new Date().toISOString()
    };
  }
};

/**
 * إعدادات المشروع المخصصة
 */
export const projectSettings = {
  projectName: 'Al-Sayahin Tribe',
  codeStandards: {
    maxComplexity: 10,
    maxLength: 100,
    minDocumentation: true,
    enforceTypeScript: true
  },
  rules: {
    requirePropTypes: true,
    requireDocstrings: true,
    enforceAccessibility: true,
    enforceSecurity: true
  }
};

export default {
  CavemanCodeAnalyzer,
  useCavemanAnalysis,
  cavemanWorkflows,
  projectSettings
};
