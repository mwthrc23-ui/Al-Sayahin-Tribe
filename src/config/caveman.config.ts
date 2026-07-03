/**
 * Caveman Code Configuration
 * Al-Sayahin Tribe Heritage Website
 */

export const cavemanConfig = {
  // مهارات التحليل والكود
  skills: {
    codeReview: {
      name: "Code Review",
      description: "فحص وتقييم جودة الكود",
      enabled: true,
      prompt: "قم بمراجعة شاملة للكود مع التركيز على الأمان والأداء والتوافقية"
    },
    documentationGen: {
      name: "Documentation Generation",
      description: "توليد التوثيق التلقائي",
      enabled: true,
      prompt: "أنشئ توثيقاً شاملاً بالعربية والإنجليزية"
    },
    codeOptimization: {
      name: "Code Optimization",
      description: "تحسين وتحسين الكود",
      enabled: true,
      prompt: "قدم اقتراحات للتحسين مع الحفاظ على الوضوح"
    },
    typescriptAnalysis: {
      name: "TypeScript Analysis",
      description: "تحليل نوع TypeScript",
      enabled: true,
      prompt: "تحليل شامل لأنواع TypeScript وتحسينات الأمان"
    },
    reactPatterns: {
      name: "React Patterns",
      description: "أنماط React الأفضل",
      enabled: true,
      prompt: "تحليل أنماط React والممارسات الفضلى"
    }
  },

  // أوضاع التشغيل
  modes: {
    compressed: true,        // تفعيل وضع الضغط
    tokenCompression: 0.75,   // ضغط 75% من الرموز
    responseFormat: "terse",  // تنسيق الرد المختصر
  },

  // الإعدادات المرئية والسلوك
  ui: {
    theme: "dark",
    language: "ar",  // اللغة العربية
    showPromptHints: true,
    enableHistory: true,
  },

  // معالجات الملفات
  fileHandlers: {
    typescript: {
      extensions: [".ts", ".tsx"],
      linter: "eslint",
    },
    react: {
      extensions: [".tsx"],
      formatter: "prettier",
    },
    css: {
      extensions: [".css"],
      formatter: "prettier",
    },
  },

  // سير العمل المخصص
  workflows: {
    defaultWorkflow: ["draft", "architect", "build", "inspect"],
    codeReviewWorkflow: ["analyze", "review", "suggest", "document"],
    optimizationWorkflow: ["profile", "identify", "optimize", "test"],
  },

  // إعدادات الأداء
  performance: {
    maxTokens: 2000,
    timeout: 30000,
    cacheResponses: true,
  },

  // المشاريع المدعومة
  projects: {
    "Al-Sayahin-Tribe": {
      name: "موقع ويب - قبيلة السياحين التراثي",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      patterns: ["Component-based", "Responsive Design", "RTL Support"],
    }
  }
};

/**
 * أوامر Caveman المخصصة
 */
export const cavemanCommands = {
  // مراجعة الكود
  review: {
    command: "caveman-review",
    description: "مراجعة شاملة للملف الحالي",
    usage: "caveman-review [file]",
    output: "تقرير مختصر مع الملاحظات الرئيسية"
  },

  // شرح الكود
  explain: {
    command: "caveman-explain",
    description: "شرح ما يفعله الكود",
    usage: "caveman-explain [file/snippet]",
    output: "شرح مختصر وواضح"
  },

  // تحسين الكود
  optimize: {
    command: "caveman-optimize",
    description: "اقتراحات التحسين",
    usage: "caveman-optimize [file]",
    output: "قائمة الاقتراحات مع أمثلة"
  },

  // توليد التوثيق
  document: {
    command: "caveman-document",
    description: "توليد التوثيق التلقائي",
    usage: "caveman-document [file/component]",
    output: "JSDoc/تعليقات مفصلة"
  },

  // فحص الأمان
  security: {
    command: "caveman-security",
    description: "فحص مشاكل الأمان",
    usage: "caveman-security [file]",
    output: "نقاط أمان محتملة"
  },

  // تحليل الأداء
  perf: {
    command: "caveman-perf",
    description: "تحليل الأداء",
    usage: "caveman-perf [file/component]",
    output: "نقاط الأداء والاختناقات"
  }
};

/**
 * قوالب Caveman المخصصة
 */
export const cavemanTemplates = {
  componentTemplate: `
import React from 'react';

interface Props {
  // تعريف الخصائص هنا
}

export const ComponentName: React.FC<Props> = (props) => {
  return (
    <div>
      {/* محتوى المكون */}
    </div>
  );
};
  `,

  hookTemplate: `
import { useState, useCallback } from 'react';

export const useCustomHook = () => {
  // منطق الـ Hook هنا
  return {
    // القيم المرجعة
  };
};
  `,

  testTemplate: `
import { describe, it, expect } from 'vitest';

describe('ComponentName', () => {
  it('should render correctly', () => {
    // اختبار هنا
    expect(true).toBe(true);
  });
});
  `
};

/**
 * إعدادات التكامل مع المشروع
 */
export const projectIntegration = {
  // أدوات البناء
  buildTools: {
    bundler: "vite",
    compiler: "typescript",
    formatter: "prettier",
    linter: "eslint"
  },

  // مسارات المشروع الرئيسية
  paths: {
    src: "./src",
    components: "./src/components",
    hooks: "./src/hooks",
    types: "./src/types",
    utils: "./src/utils",
    styles: "./src/styles"
  },

  // معايير الكود
  codeStandards: {
    maxLineLength: 100,
    indentation: 2,
    quotes: "single",
    semicolons: true,
    trailingComma: "es5"
  }
};

export default cavemanConfig;
