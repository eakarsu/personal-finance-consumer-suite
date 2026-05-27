export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "financial-planning-coach-copilot": [
    {
      "name": "financial_snapshot",
      "label": "Financial Snapshot",
      "type": "textarea",
      "defaultValue": "Income, expenses, debts, assets, savings, and goals.",
      "placeholder": "Enter financial snapshot",
      "options": [],
      "required": true,
      "source": "cash_flow, financialServices, AiFinancialReportGenerator"
    },
    {
      "name": "planning_goal",
      "label": "Planning Goal",
      "type": "select",
      "defaultValue": "Cash-flow plan",
      "placeholder": "Enter planning goal",
      "options": [
        "Cash-flow plan",
        "Retirement scenario",
        "Debt payoff",
        "Advisor report"
      ],
      "required": true,
      "source": "cash_flow, financialServices, AiFinancialReportGenerator"
    },
    {
      "name": "time_horizon",
      "label": "Time Horizon",
      "type": "text",
      "defaultValue": "12 months",
      "placeholder": "Enter time horizon",
      "options": [],
      "required": true,
      "source": "cash_flow, financialServices, AiFinancialReportGenerator"
    }
  ]
};
