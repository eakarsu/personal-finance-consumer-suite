export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "financial-planning-coach",
    "label": "Financial Planning Coach",
    "description": "Open Financial Planning Coach workflows elevated from cash_flow, financialServices, AiFinancialReportGenerator.",
    "href": "/budget-coach",
    "sourceProjects": [
      "cash_flow",
      "financialServices",
      "AiFinancialReportGenerator"
    ],
    "examples": [
      "Budget Coach",
      "Retirement Scenarios",
      "Cash Flow Planning",
      "Advisor Report"
    ],
    "count": 3
  }
];
