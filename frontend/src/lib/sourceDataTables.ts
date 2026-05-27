export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-limited-exchange-api-integrations-no-coinbase-kraken-binance-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_limited_exchange_api_integrations_no_coinbase_kraken_binance.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-missing-analyze-crypto-tax-strategy-optimize-tax-loss-harves-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_missing_analyze_crypto_tax_strategy_optimize_tax_loss_harves.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-no-cpa-accountant-review-workflow-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_cpa_accountant_review_workflow.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-no-real-time-price-feed-integration-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_real_time_price_feed_integration.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-no-search-across-transactions-surface-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_search_across_transactions_surface.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-no-wallet-private-key-security-module-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_wallet_private_key_security_module.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-no-webhooks-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-models-user-js-users",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "users",
    "displayName": "Users",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/User.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "email",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email: { ... }"
      },
      {
        "name": "password",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-ach-batches",
    "sourceProject": "aiFinancePlatform",
    "name": "ach_batches",
    "displayName": "Ach Batches",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id                    String    @id @default(uuid())"
      },
      {
        "name": "secCode",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secCode               String"
      },
      {
        "name": "direction",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Origination\"",
        "sourceLine": "direction             String    @default(\"Origination\")"
      },
      {
        "name": "receiverName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receiverName          String?"
      },
      {
        "name": "receiverRoutingAba",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receiverRoutingAba    String"
      },
      {
        "name": "receiverAccountNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receiverAccountNumber String"
      },
      {
        "name": "receiverAccountType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Checking\"",
        "sourceLine": "receiverAccountType   String    @default(\"Checking\")"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount                Float"
      },
      {
        "name": "transactionCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactionCode       String?"
      },
      {
        "name": "companyName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyName           String?"
      },
      {
        "name": "companyId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyId             String?"
      },
      {
        "name": "traceNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "traceNumber           String?"
      },
      {
        "name": "batchId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "batchId               String?"
      },
      {
        "name": "effectiveDate",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effectiveDate         String?"
      },
      {
        "name": "prenotification",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "prenotification       Boolean   @default(false)"
      },
      {
        "name": "returnCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "returnCode            String?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Pending\"",
        "sourceLine": "status                String    @default(\"Pending\")"
      },
      {
        "name": "aiResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResult              Json?"
      },
      {
        "name": "deletedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deletedAt             DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-ai-analysis-logs",
    "sourceProject": "aiFinancePlatform",
    "name": "ai_analysis_logs",
    "displayName": "Ai Analysis Logs",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "module",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "module      String   // robo_advisor, credit_score, fraud_detection"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String?"
      },
      {
        "name": "inputData",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inputData   Json"
      },
      {
        "name": "outputData",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outputData  Json"
      },
      {
        "name": "modelUsed",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "modelUsed   String"
      },
      {
        "name": "confidence",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence  Float?"
      },
      {
        "name": "processingTime",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "processingTime Int?  // milliseconds"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-migrations-20251208154639-init-migration-sql-ai-analysis-logs",
    "sourceProject": "aiFinancePlatform",
    "name": "ai_analysis_logs",
    "displayName": "\"Ai Analysis Logs\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "module",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"module\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT"
      },
      {
        "name": "inputData",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"inputData\" JSONB NOT NULL"
      },
      {
        "name": "outputData",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"outputData\" JSONB NOT NULL"
      },
      {
        "name": "modelUsed",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"modelUsed\" TEXT NOT NULL"
      },
      {
        "name": "confidence",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"confidence\" DOUBLE PRECISION"
      },
      {
        "name": "processingTime",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"processingTime\" INTEGER"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-bank-accounts",
    "sourceProject": "aiFinancePlatform",
    "name": "bank_accounts",
    "displayName": "Bank Accounts",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id                String    @id @default(uuid())"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId        String"
      },
      {
        "name": "accountNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "accountNumber     String    @unique"
      },
      {
        "name": "accountType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountType       String    // Checking, Savings, CD, etc."
      },
      {
        "name": "currency",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"USD\"",
        "sourceLine": "currency          String    @default(\"USD\")"
      },
      {
        "name": "productCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "productCode       String?"
      },
      {
        "name": "branchCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "branchCode        String?"
      },
      {
        "name": "overdraftLimit",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "overdraftLimit    Float     @default(0)"
      },
      {
        "name": "availableBalance",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "availableBalance  Float     @default(0)"
      },
      {
        "name": "ledgerBalance",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "ledgerBalance     Float     @default(0)"
      },
      {
        "name": "interestRate",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "interestRate      Float     @default(0)"
      },
      {
        "name": "openedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "openedAt          DateTime?"
      },
      {
        "name": "closedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "closedAt          DateTime?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Active\"",
        "sourceLine": "status            String    @default(\"Active\")"
      },
      {
        "name": "aiResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResult          Json?"
      },
      {
        "name": "deletedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deletedAt         DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-bank-transactions",
    "sourceProject": "aiFinancePlatform",
    "name": "bank_transactions",
    "displayName": "Bank Transactions",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "accountId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountId       String"
      },
      {
        "name": "txType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "txType          String"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Float"
      },
      {
        "name": "currency",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"USD\"",
        "sourceLine": "currency        String    @default(\"USD\")"
      },
      {
        "name": "direction",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Debit\"",
        "sourceLine": "direction       String    @default(\"Debit\")"
      },
      {
        "name": "channel",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Online\"",
        "sourceLine": "channel         String    @default(\"Online\")"
      },
      {
        "name": "merchantName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "merchantName    String?"
      },
      {
        "name": "mccCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mccCode         String?"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "referenceNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referenceNumber String?"
      },
      {
        "name": "valueDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "valueDate       DateTime?"
      },
      {
        "name": "feeAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "feeAmount       Float     @default(0)"
      },
      {
        "name": "amlScore",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "amlScore        Float     @default(0)"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Completed\"",
        "sourceLine": "status          String    @default(\"Completed\")"
      },
      {
        "name": "aiResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResult        Json?"
      },
      {
        "name": "deletedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deletedAt       DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-bills",
    "sourceProject": "aiFinancePlatform",
    "name": "bills",
    "displayName": "Bills",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "billType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billType        String   // cable, internet, phone, insurance, subscription, utility"
      },
      {
        "name": "provider",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider        String"
      },
      {
        "name": "currentAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentAmount   Float"
      },
      {
        "name": "originalAmount",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "originalAmount  Float?"
      },
      {
        "name": "frequency",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"monthly\"",
        "sourceLine": "frequency       String   @default(\"monthly\")"
      },
      {
        "name": "dueDate",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate         Int?     // Day of month"
      },
      {
        "name": "accountNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountNumber   String?"
      },
      {
        "name": "contractStart",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contractStart   DateTime?"
      },
      {
        "name": "contractEnd",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contractEnd     DateTime?"
      },
      {
        "name": "isUnderContract",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isUnderContract Boolean  @default(false)"
      },
      {
        "name": "lastNegotiated",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastNegotiated  DateTime?"
      },
      {
        "name": "negotiationHistory",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "negotiationHistory Json?  // Array of past negotiations"
      },
      {
        "name": "aiSavingsEstimate",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiSavingsEstimate Float?"
      },
      {
        "name": "aiNegotiationScript",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiNegotiationScript String?"
      },
      {
        "name": "aiAlternatives",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiAlternatives  Json?    // Competitor offers"
      },
      {
        "name": "aiTips",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiTips          Json?"
      },
      {
        "name": "aiSuccessLikelihood",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiSuccessLikelihood Int? // 0-100%"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"active\"",
        "sourceLine": "status          String   @default(\"active\") // active, negotiating, cancelled"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-budget-plans",
    "sourceProject": "aiFinancePlatform",
    "name": "budget_plans",
    "displayName": "Budget Plans",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "period",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"monthly\"",
        "sourceLine": "period          String   @default(\"monthly\") // weekly, monthly, yearly"
      },
      {
        "name": "totalIncome",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalIncome     Float"
      },
      {
        "name": "totalBudget",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalBudget     Float"
      },
      {
        "name": "categories",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "categories      Json     // Array of {name, budgeted, spent, color}"
      },
      {
        "name": "aiHealthScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiHealthScore   Int?     // 0-100"
      },
      {
        "name": "aiInsights",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiInsights      Json?"
      },
      {
        "name": "aiRecommendations",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiRecommendations Json?"
      },
      {
        "name": "aiSavingsGoal",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiSavingsGoal   Float?"
      },
      {
        "name": "aiOptimizations",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiOptimizations Json?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-card-issuances",
    "sourceProject": "aiFinancePlatform",
    "name": "card_issuances",
    "displayName": "Card Issuances",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id               String    @id @default(uuid())"
      },
      {
        "name": "accountId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountId        String"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId       String"
      },
      {
        "name": "cardType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cardType         String"
      },
      {
        "name": "network",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Visa\"",
        "sourceLine": "network          String    @default(\"Visa\")"
      },
      {
        "name": "embossedName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "embossedName     String?"
      },
      {
        "name": "last4",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last4            String?"
      },
      {
        "name": "creditLimit",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "creditLimit      Float     @default(0)"
      },
      {
        "name": "availableCredit",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "availableCredit  Float     @default(0)"
      },
      {
        "name": "cardStatus",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"PendingActivation\"",
        "sourceLine": "cardStatus       String    @default(\"PendingActivation\")"
      },
      {
        "name": "issuedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issuedAt         DateTime?"
      },
      {
        "name": "expiryMonth",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiryMonth      Int?"
      },
      {
        "name": "expiryYear",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiryYear       Int?"
      },
      {
        "name": "pinFailCount",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "pinFailCount     Int       @default(0)"
      },
      {
        "name": "contactless",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "contactless      Boolean   @default(true)"
      },
      {
        "name": "virtualCard",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "virtualCard      Boolean   @default(false)"
      },
      {
        "name": "aiIssuanceRisk",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "aiIssuanceRisk   Float     @default(0)"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Active\"",
        "sourceLine": "status           String    @default(\"Active\")"
      },
      {
        "name": "aiResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResult         Json?"
      },
      {
        "name": "deletedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deletedAt        DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-credit-histories",
    "sourceProject": "aiFinancePlatform",
    "name": "credit_histories",
    "displayName": "Credit Histories",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "creditProfileId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "creditProfileId String"
      },
      {
        "name": "creditProfile",
        "type": "CreditProfile",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "creditProfile   CreditProfile @relation(fields: [creditProfileId], references: [id])"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            String   // rent, utility, phone, loan"
      },
      {
        "name": "provider",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider        String   // Company name"
      },
      {
        "name": "monthlyAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyAmount   Float"
      },
      {
        "name": "onTimePayments",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "onTimePayments  Int"
      },
      {
        "name": "latePayments",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "latePayments    Int"
      },
      {
        "name": "missedPayments",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "missedPayments  Int"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate       DateTime"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate         DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-migrations-20251208154639-init-migration-sql-credit-histories",
    "sourceProject": "aiFinancePlatform",
    "name": "credit_histories",
    "displayName": "\"Credit Histories\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "creditProfileId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"creditProfileId\" TEXT NOT NULL"
      },
      {
        "name": "type",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"type\" TEXT NOT NULL"
      },
      {
        "name": "provider",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"provider\" TEXT NOT NULL"
      },
      {
        "name": "monthlyAmount",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"monthlyAmount\" DOUBLE PRECISION NOT NULL"
      },
      {
        "name": "onTimePayments",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"onTimePayments\" INTEGER NOT NULL"
      },
      {
        "name": "latePayments",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"latePayments\" INTEGER NOT NULL"
      },
      {
        "name": "missedPayments",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"missedPayments\" INTEGER NOT NULL"
      },
      {
        "name": "startDate",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"startDate\" TIMESTAMP(3) NOT NULL"
      },
      {
        "name": "endDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"endDate\" TIMESTAMP(3)"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-credit-profiles",
    "sourceProject": "aiFinancePlatform",
    "name": "credit_profiles",
    "displayName": "Credit Profiles",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "userId          String   @unique"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "annualIncome",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annualIncome    Float?"
      },
      {
        "name": "employmentStatus",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employmentStatus String?"
      },
      {
        "name": "employmentYears",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employmentYears Float?"
      },
      {
        "name": "housingStatus",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "housingStatus   String?  // own, rent, mortgage"
      },
      {
        "name": "monthlyRent",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyRent     Float?"
      },
      {
        "name": "rentPaymentHistory",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rentPaymentHistory    Int?  // months of on-time payments"
      },
      {
        "name": "utilityPaymentHistory",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "utilityPaymentHistory Int?"
      },
      {
        "name": "phonePaymentHistory",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phonePaymentHistory   Int?"
      },
      {
        "name": "bankAccountAge",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankAccountAge        Int?  // months"
      },
      {
        "name": "averageBalance",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "averageBalance        Float?"
      },
      {
        "name": "overdraftCount",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overdraftCount        Int?"
      },
      {
        "name": "aiCreditScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiCreditScore   Int?     // 300-850"
      },
      {
        "name": "aiScoreDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiScoreDate     DateTime?"
      },
      {
        "name": "aiConfidence",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiConfidence    Float?   // 0-100%"
      },
      {
        "name": "aiFactors",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiFactors       Json?    // Factors affecting score"
      },
      {
        "name": "traditionalScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "traditionalScore Int?"
      },
      {
        "name": "creditHistories",
        "type": "CreditHistory[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "creditHistories CreditHistory[]"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-migrations-20251208154639-init-migration-sql-credit-profiles",
    "sourceProject": "aiFinancePlatform",
    "name": "credit_profiles",
    "displayName": "\"Credit Profiles\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "annualIncome",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"annualIncome\" DOUBLE PRECISION"
      },
      {
        "name": "employmentStatus",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"employmentStatus\" TEXT"
      },
      {
        "name": "employmentYears",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"employmentYears\" DOUBLE PRECISION"
      },
      {
        "name": "housingStatus",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"housingStatus\" TEXT"
      },
      {
        "name": "monthlyRent",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"monthlyRent\" DOUBLE PRECISION"
      },
      {
        "name": "rentPaymentHistory",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"rentPaymentHistory\" INTEGER"
      },
      {
        "name": "utilityPaymentHistory",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"utilityPaymentHistory\" INTEGER"
      },
      {
        "name": "phonePaymentHistory",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"phonePaymentHistory\" INTEGER"
      },
      {
        "name": "bankAccountAge",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"bankAccountAge\" INTEGER"
      },
      {
        "name": "averageBalance",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"averageBalance\" DOUBLE PRECISION"
      },
      {
        "name": "overdraftCount",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"overdraftCount\" INTEGER"
      },
      {
        "name": "aiCreditScore",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiCreditScore\" INTEGER"
      },
      {
        "name": "aiScoreDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiScoreDate\" TIMESTAMP(3)"
      },
      {
        "name": "aiConfidence",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiConfidence\" DOUBLE PRECISION"
      },
      {
        "name": "aiFactors",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiFactors\" JSONB"
      },
      {
        "name": "traditionalScore",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"traditionalScore\" INTEGER"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-crypto-analyses",
    "sourceProject": "aiFinancePlatform",
    "name": "crypto_analyses",
    "displayName": "Crypto Analyses",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "symbol",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol          String   // BTC, ETH, etc."
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "currentPrice",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentPrice    Float?"
      },
      {
        "name": "priceChange24h",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "priceChange24h  Float?"
      },
      {
        "name": "priceChange7d",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "priceChange7d   Float?"
      },
      {
        "name": "marketCap",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "marketCap       Float?"
      },
      {
        "name": "volume24h",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "volume24h       Float?"
      },
      {
        "name": "circulatingSupply",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "circulatingSupply Float?"
      },
      {
        "name": "totalSupply",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalSupply     Float?"
      },
      {
        "name": "allTimeHigh",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "allTimeHigh     Float?"
      },
      {
        "name": "allTimeLow",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "allTimeLow      Float?"
      },
      {
        "name": "aiScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiScore         Int?      // 0-100"
      },
      {
        "name": "aiRiskLevel",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiRiskLevel     String?   // low, medium, high, very_high"
      },
      {
        "name": "aiTrend",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiTrend         String?   // bullish, bearish, neutral, volatile"
      },
      {
        "name": "aiAnalysis",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiAnalysis      Json?"
      },
      {
        "name": "aiPricePrediction",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiPricePrediction Json?   // short_term, medium_term, long_term predictions"
      },
      {
        "name": "isTracked",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isTracked       Boolean   @default(false)"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-expenses",
    "sourceProject": "aiFinancePlatform",
    "name": "expenses",
    "displayName": "Expenses",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Float"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "merchant",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "merchant        String?"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date            DateTime"
      },
      {
        "name": "isRecurring",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isRecurring     Boolean  @default(false)"
      },
      {
        "name": "recurringFrequency",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recurringFrequency String?"
      },
      {
        "name": "aiCategory",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiCategory      String?"
      },
      {
        "name": "aiConfidence",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiConfidence    Float?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-financial-goals",
    "sourceProject": "aiFinancePlatform",
    "name": "financial_goals",
    "displayName": "Financial Goals",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String   // savings, investment, debt_payoff, purchase, emergency_fund, retirement"
      },
      {
        "name": "targetAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "targetAmount    Float"
      },
      {
        "name": "currentAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "currentAmount   Float    @default(0)"
      },
      {
        "name": "deadline",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deadline        DateTime?"
      },
      {
        "name": "priority",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "priority        Int      @default(1) // 1-5, 1 is highest"
      },
      {
        "name": "monthlyContribution",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyContribution Float?"
      },
      {
        "name": "autoSave",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "autoSave        Boolean  @default(false)"
      },
      {
        "name": "aiProgress",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiProgress      Int?     // percentage"
      },
      {
        "name": "aiOnTrack",
        "type": "Boolean?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiOnTrack       Boolean?"
      },
      {
        "name": "aiProjectedCompletion",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiProjectedCompletion DateTime?"
      },
      {
        "name": "aiRecommendations",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiRecommendations Json?"
      },
      {
        "name": "aiMilestones",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiMilestones    Json?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"active\"",
        "sourceLine": "status          String   @default(\"active\") // active, completed, paused, abandoned"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-fraud-alerts",
    "sourceProject": "aiFinancePlatform",
    "name": "fraud_alerts",
    "displayName": "Fraud Alerts",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId        String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user          User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "transactionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactionId String"
      },
      {
        "name": "transaction",
        "type": "Transaction",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction   Transaction @relation(fields: [transactionId], references: [id])"
      },
      {
        "name": "alertType",
        "type": "AlertType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alertType     AlertType"
      },
      {
        "name": "severity",
        "type": "Severity",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity      Severity"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String"
      },
      {
        "name": "aiConfidence",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiConfidence  Float    // 0-100%"
      },
      {
        "name": "isResolved",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isResolved    Boolean  @default(false)"
      },
      {
        "name": "resolvedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolvedAt    DateTime?"
      },
      {
        "name": "resolvedBy",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolvedBy    String?"
      },
      {
        "name": "resolution",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution    String?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-migrations-20251208154639-init-migration-sql-fraud-alerts",
    "sourceProject": "aiFinancePlatform",
    "name": "fraud_alerts",
    "displayName": "\"Fraud Alerts\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "transactionId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"transactionId\" TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"description\" TEXT NOT NULL"
      },
      {
        "name": "aiConfidence",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiConfidence\" DOUBLE PRECISION NOT NULL"
      },
      {
        "name": "isResolved",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"isResolved\" BOOLEAN NOT NULL DEFAULT false"
      },
      {
        "name": "resolvedAt",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"resolvedAt\" TIMESTAMP(3)"
      },
      {
        "name": "resolvedBy",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"resolvedBy\" TEXT"
      },
      {
        "name": "resolution",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"resolution\" TEXT"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-routes-batch03-gaps-js-gap-features",
    "sourceProject": "aiFinancePlatform",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/batch03Gaps.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-gl-entries",
    "sourceProject": "aiFinancePlatform",
    "name": "gl_entries",
    "displayName": "Gl Entries",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String    @id @default(uuid())"
      },
      {
        "name": "journalId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "journalId     String"
      },
      {
        "name": "entryDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entryDate     DateTime?"
      },
      {
        "name": "accountId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountId     String"
      },
      {
        "name": "debit",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "debit         Float     @default(0)"
      },
      {
        "name": "credit",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "credit        Float     @default(0)"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "glCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "glCode        String?"
      },
      {
        "name": "reference",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reference     String?"
      },
      {
        "name": "postingStatus",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Draft\"",
        "sourceLine": "postingStatus String    @default(\"Draft\")"
      },
      {
        "name": "periodCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "periodCode    String?"
      },
      {
        "name": "reversalOf",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reversalOf    String?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Active\"",
        "sourceLine": "status        String    @default(\"Active\")"
      },
      {
        "name": "aiResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResult      Json?"
      },
      {
        "name": "deletedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deletedAt     DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-holdings",
    "sourceProject": "aiFinancePlatform",
    "name": "holdings",
    "displayName": "Holdings",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "portfolioId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolioId String"
      },
      {
        "name": "portfolio",
        "type": "Portfolio",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolio   Portfolio @relation(fields: [portfolioId], references: [id])"
      },
      {
        "name": "symbol",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol      String   // Stock/ETF symbol"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "assetType",
        "type": "AssetType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assetType   AssetType"
      },
      {
        "name": "shares",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shares      Float"
      },
      {
        "name": "avgCost",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avgCost     Float"
      },
      {
        "name": "currentPrice",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentPrice Float?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-migrations-20251208154639-init-migration-sql-holdings",
    "sourceProject": "aiFinancePlatform",
    "name": "holdings",
    "displayName": "\"Holdings\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "portfolioId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"portfolioId\" TEXT NOT NULL"
      },
      {
        "name": "symbol",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"symbol\" TEXT NOT NULL"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"name\" TEXT NOT NULL"
      },
      {
        "name": "shares",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"shares\" DOUBLE PRECISION NOT NULL"
      },
      {
        "name": "avgCost",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"avgCost\" DOUBLE PRECISION NOT NULL"
      },
      {
        "name": "currentPrice",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"currentPrice\" DOUBLE PRECISION"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-insurance-policies",
    "sourceProject": "aiFinancePlatform",
    "name": "insurance_policies",
    "displayName": "Insurance Policies",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "insuranceType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "insuranceType   String   // health, life, auto, home, disability, umbrella"
      },
      {
        "name": "provider",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider        String?"
      },
      {
        "name": "policyNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "policyNumber    String?"
      },
      {
        "name": "coverageAmount",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverageAmount  Float?"
      },
      {
        "name": "premium",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "premium         Float?    // monthly"
      },
      {
        "name": "deductible",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deductible      Float?"
      },
      {
        "name": "startDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate       DateTime?"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate         DateTime?"
      },
      {
        "name": "coverageDetails",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverageDetails Json?"
      },
      {
        "name": "beneficiaries",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "beneficiaries   Json?"
      },
      {
        "name": "aiCoverageScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiCoverageScore Int?      // 0-100 adequacy score"
      },
      {
        "name": "aiPremiumRating",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiPremiumRating String?   // excellent, good, fair, poor"
      },
      {
        "name": "aiGaps",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiGaps          Json?     // Identified coverage gaps"
      },
      {
        "name": "aiRecommendations",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiRecommendations Json?   // Suggested improvements"
      },
      {
        "name": "aiAlternatives",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiAlternatives  Json?     // Better policy options"
      },
      {
        "name": "aiSavingsPotential",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiSavingsPotential Float?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive        Boolean   @default(true)"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-interest-accruals",
    "sourceProject": "aiFinancePlatform",
    "name": "interest_accruals",
    "displayName": "Interest Accruals",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id                 String    @id @default(uuid())"
      },
      {
        "name": "accountId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountId          String"
      },
      {
        "name": "accrualDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accrualDate        DateTime?"
      },
      {
        "name": "principal",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "principal          Float"
      },
      {
        "name": "rate",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rate               Float"
      },
      {
        "name": "dayCount",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "dayCount           Int       @default(1)"
      },
      {
        "name": "accrualAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "accrualAmount      Float     @default(0)"
      },
      {
        "name": "rateType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Fixed\"",
        "sourceLine": "rateType           String    @default(\"Fixed\")"
      },
      {
        "name": "dayCountConvention",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Actual365\"",
        "sourceLine": "dayCountConvention String    @default(\"Actual365\")"
      },
      {
        "name": "postingStatus",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Pending\"",
        "sourceLine": "postingStatus      String    @default(\"Pending\")"
      },
      {
        "name": "ytdAccrued",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "ytdAccrued         Float     @default(0)"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Active\"",
        "sourceLine": "status             String    @default(\"Active\")"
      },
      {
        "name": "aiResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResult           Json?"
      },
      {
        "name": "deletedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deletedAt          DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-investments",
    "sourceProject": "aiFinancePlatform",
    "name": "investments",
    "displayName": "Investments",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user        User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "portfolioId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolioId String"
      },
      {
        "name": "portfolio",
        "type": "Portfolio",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolio   Portfolio @relation(fields: [portfolioId], references: [id])"
      },
      {
        "name": "type",
        "type": "InvestmentType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type        InvestmentType"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount      Float"
      },
      {
        "name": "symbol",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol      String?"
      },
      {
        "name": "shares",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shares      Float?"
      },
      {
        "name": "price",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price       Float?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-migrations-20251208154639-init-migration-sql-investments",
    "sourceProject": "aiFinancePlatform",
    "name": "investments",
    "displayName": "\"Investments\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "portfolioId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"portfolioId\" TEXT NOT NULL"
      },
      {
        "name": "amount",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"amount\" DOUBLE PRECISION NOT NULL"
      },
      {
        "name": "symbol",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"symbol\" TEXT"
      },
      {
        "name": "shares",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"shares\" DOUBLE PRECISION"
      },
      {
        "name": "price",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"price\" DOUBLE PRECISION"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-kyc-profiles",
    "sourceProject": "aiFinancePlatform",
    "name": "kyc_profiles",
    "displayName": "Kyc Profiles",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "customerId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId      String"
      },
      {
        "name": "idDocType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "idDocType       String?"
      },
      {
        "name": "idDocNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "idDocNumber     String?"
      },
      {
        "name": "idIssuedBy",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "idIssuedBy      String?"
      },
      {
        "name": "idExpiresAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "idExpiresAt     DateTime?"
      },
      {
        "name": "sourceOfFunds",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sourceOfFunds   String?"
      },
      {
        "name": "annualIncomeBand",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annualIncomeBand String?"
      },
      {
        "name": "kycStatus",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Pending\"",
        "sourceLine": "kycStatus       String    @default(\"Pending\")"
      },
      {
        "name": "riskTier",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Medium\"",
        "sourceLine": "riskTier        String    @default(\"Medium\")"
      },
      {
        "name": "pepFlag",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "pepFlag         Boolean   @default(false)"
      },
      {
        "name": "sanctionsFlag",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "sanctionsFlag   Boolean   @default(false)"
      },
      {
        "name": "onboardedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "onboardedAt     DateTime?"
      },
      {
        "name": "nextReviewDue",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nextReviewDue   DateTime?"
      },
      {
        "name": "aiRiskScore",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "aiRiskScore     Float     @default(0)"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Active\"",
        "sourceLine": "status          String    @default(\"Active\")"
      },
      {
        "name": "aiResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResult        Json?"
      },
      {
        "name": "deletedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deletedAt       DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-loan-applications",
    "sourceProject": "aiFinancePlatform",
    "name": "loan_applications",
    "displayName": "Loan Applications",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "loanType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loanType        String   // personal, mortgage, auto, student, business"
      },
      {
        "name": "loanAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loanAmount      Float"
      },
      {
        "name": "loanPurpose",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loanPurpose     String?"
      },
      {
        "name": "loanTerm",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loanTerm        Int      // months"
      },
      {
        "name": "desiredRate",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "desiredRate     Float?"
      },
      {
        "name": "annualIncome",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annualIncome    Float?"
      },
      {
        "name": "employmentStatus",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employmentStatus String?"
      },
      {
        "name": "employmentYears",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employmentYears Float?"
      },
      {
        "name": "creditScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "creditScore     Int?"
      },
      {
        "name": "existingDebts",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "existingDebts   Float?"
      },
      {
        "name": "monthlyExpenses",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyExpenses Float?"
      },
      {
        "name": "collateralValue",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "collateralValue Float?"
      },
      {
        "name": "downPayment",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "downPayment     Float?"
      },
      {
        "name": "aiApprovalLikelihood",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiApprovalLikelihood Int?  // 0-100%"
      },
      {
        "name": "aiRecommendedRate",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiRecommendedRate   Float?"
      },
      {
        "name": "aiRecommendedTerm",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiRecommendedTerm   Int?"
      },
      {
        "name": "aiAnalysis",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiAnalysis          Json?"
      },
      {
        "name": "aiBestLenders",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiBestLenders       Json?   // Array of recommended lenders"
      },
      {
        "name": "aiMonthlyPayment",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiMonthlyPayment    Float?"
      },
      {
        "name": "aiTotalInterest",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiTotalInterest     Float?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"draft\"",
        "sourceLine": "status          String   @default(\"draft\") // draft, submitted, approved, rejected"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-notifications",
    "sourceProject": "aiFinancePlatform",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user        User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type        String   // FRAUD_HIGH_RISK, CREDIT_SCORE_DROP, PORTFOLIO_DRIFT, etc."
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category    String   // fraud, credit, portfolio, security, transaction, general"
      },
      {
        "name": "severity",
        "type": "Severity",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity    Severity"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title       String"
      },
      {
        "name": "message",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message     String"
      },
      {
        "name": "details",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details     Json?"
      },
      {
        "name": "isRead",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isRead      Boolean  @default(false)"
      },
      {
        "name": "isDismissed",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isDismissed Boolean  @default(false)"
      },
      {
        "name": "isPositive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isPositive  Boolean  @default(false)"
      },
      {
        "name": "actionRequired",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "actionRequired Boolean @default(false)"
      },
      {
        "name": "expiresAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt   DateTime?"
      },
      {
        "name": "readAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "readAt      DateTime?"
      },
      {
        "name": "dismissedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dismissedAt DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-plaid-connections",
    "sourceProject": "aiFinancePlatform",
    "name": "plaid_connections",
    "displayName": "Plaid Connections",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "accessToken",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accessToken     String   // Encrypted Plaid access token"
      },
      {
        "name": "itemId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "itemId          String   // Plaid item ID"
      },
      {
        "name": "institutionId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "institutionId   String?"
      },
      {
        "name": "institutionName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "institutionName String?"
      },
      {
        "name": "accountIds",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountIds      Json?    // Array of connected account IDs"
      },
      {
        "name": "consentExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "consentExpiry   DateTime?"
      },
      {
        "name": "lastSync",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastSync        DateTime?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"active\"",
        "sourceLine": "status          String   @default(\"active\") // active, expired, error"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-portfolios",
    "sourceProject": "aiFinancePlatform",
    "name": "portfolios",
    "displayName": "Portfolios",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "type",
        "type": "PortfolioType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "BALANCED",
        "sourceLine": "type            PortfolioType @default(BALANCED)"
      },
      {
        "name": "totalValue",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "totalValue      Float    @default(0)"
      },
      {
        "name": "cashBalance",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cashBalance     Float    @default(0)"
      },
      {
        "name": "aiScore",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiScore         Float?   // AI confidence score"
      },
      {
        "name": "aiRecommendation",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiRecommendation String? // Latest AI recommendation"
      },
      {
        "name": "lastRebalanced",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastRebalanced  DateTime?"
      },
      {
        "name": "holdings",
        "type": "Holding[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "holdings        Holding[]"
      },
      {
        "name": "investments",
        "type": "Investment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "investments     Investment[]"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-migrations-20251208154639-init-migration-sql-portfolios",
    "sourceProject": "aiFinancePlatform",
    "name": "portfolios",
    "displayName": "\"Portfolios\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"name\" TEXT NOT NULL"
      },
      {
        "name": "totalValue",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"totalValue\" DOUBLE PRECISION NOT NULL DEFAULT 0"
      },
      {
        "name": "cashBalance",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"cashBalance\" DOUBLE PRECISION NOT NULL DEFAULT 0"
      },
      {
        "name": "aiScore",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiScore\" DOUBLE PRECISION"
      },
      {
        "name": "aiRecommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiRecommendation\" TEXT"
      },
      {
        "name": "lastRebalanced",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"lastRebalanced\" TIMESTAMP(3)"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-reconciliation-items",
    "sourceProject": "aiFinancePlatform",
    "name": "reconciliation_items",
    "displayName": "Reconciliation Items",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id               String    @id @default(uuid())"
      },
      {
        "name": "reconDate",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reconDate        String"
      },
      {
        "name": "reconType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reconType        String"
      },
      {
        "name": "accountId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountId        String"
      },
      {
        "name": "glBalance",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "glBalance        Float     @default(0)"
      },
      {
        "name": "statementBalance",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "statementBalance Float     @default(0)"
      },
      {
        "name": "difference",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "difference       Float     @default(0)"
      },
      {
        "name": "unresolvedItems",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "unresolvedItems  Int       @default(0)"
      },
      {
        "name": "resolvedItems",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "resolvedItems    Int       @default(0)"
      },
      {
        "name": "suspenseAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "suspenseAmount   Float     @default(0)"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Open\"",
        "sourceLine": "status           String    @default(\"Open\")"
      },
      {
        "name": "aiResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResult         Json?"
      },
      {
        "name": "deletedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deletedAt        DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-reg-reports",
    "sourceProject": "aiFinancePlatform",
    "name": "reg_reports",
    "displayName": "Reg Reports",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id                String    @id @default(uuid())"
      },
      {
        "name": "reportType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reportType        String"
      },
      {
        "name": "reportingPeriod",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reportingPeriod   String"
      },
      {
        "name": "dueDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate           DateTime?"
      },
      {
        "name": "subjectCustomerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subjectCustomerId String?"
      },
      {
        "name": "subjectAccountId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subjectAccountId  String?"
      },
      {
        "name": "reportingOfficer",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reportingOfficer  String?"
      },
      {
        "name": "totalAmount",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalAmount       Float?"
      },
      {
        "name": "currencyType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"USD\"",
        "sourceLine": "currencyType      String    @default(\"USD\")"
      },
      {
        "name": "filedWith",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filedWith         String?"
      },
      {
        "name": "referenceNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "referenceNumber   String?"
      },
      {
        "name": "narrativeText",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "narrativeText     String?"
      },
      {
        "name": "aiDraftedNarrative",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiDraftedNarrative String?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Draft\"",
        "sourceLine": "status            String    @default(\"Draft\")"
      },
      {
        "name": "aiResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResult          Json?"
      },
      {
        "name": "deletedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deletedAt         DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-retirement-plans",
    "sourceProject": "aiFinancePlatform",
    "name": "retirement_plans",
    "displayName": "Retirement Plans",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "currentAge",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentAge      Int"
      },
      {
        "name": "retirementAge",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retirementAge   Int"
      },
      {
        "name": "lifeExpectancy",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "90",
        "sourceLine": "lifeExpectancy  Int      @default(90)"
      },
      {
        "name": "currentSavings",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentSavings  Float"
      },
      {
        "name": "monthlyContribution",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyContribution Float?"
      },
      {
        "name": "expectedReturn",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expectedReturn  Float?   // annual %"
      },
      {
        "name": "inflationRate",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "3",
        "sourceLine": "inflationRate   Float    @default(3)"
      },
      {
        "name": "socialSecurityAge",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "socialSecurityAge Int?"
      },
      {
        "name": "socialSecurityAmount",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "socialSecurityAmount Float?"
      },
      {
        "name": "pensionAmount",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pensionAmount   Float?"
      },
      {
        "name": "otherIncome",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "otherIncome     Float?"
      },
      {
        "name": "currentExpenses",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentExpenses Float?"
      },
      {
        "name": "retirementExpenses",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retirementExpenses Float?"
      },
      {
        "name": "healthcareCosts",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "healthcareCosts Float?"
      },
      {
        "name": "desiredRetirementIncome",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "desiredRetirementIncome Float?"
      },
      {
        "name": "legacyGoal",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "legacyGoal      Float?   // Amount to leave to heirs"
      },
      {
        "name": "aiReadinessScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiReadinessScore Int?    // 0-100"
      },
      {
        "name": "aiProjectedSavings",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiProjectedSavings Float?"
      },
      {
        "name": "aiIncomeGap",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiIncomeGap     Float?"
      },
      {
        "name": "aiRecommendations",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiRecommendations Json?"
      },
      {
        "name": "aiMilestones",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiMilestones    Json?    // Year-by-year projections"
      },
      {
        "name": "aiRiskAssessment",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiRiskAssessment Json?"
      },
      {
        "name": "aiActionItems",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiActionItems   Json?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-risk-profiles",
    "sourceProject": "aiFinancePlatform",
    "name": "risk_profiles",
    "displayName": "Risk Profiles",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "userId          String   @unique"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "riskTolerance",
        "type": "RiskLevel",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "MODERATE",
        "sourceLine": "riskTolerance   RiskLevel @default(MODERATE)"
      },
      {
        "name": "investmentGoal",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "investmentGoal  String    // retirement, growth, income, preservation"
      },
      {
        "name": "timeHorizon",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeHorizon     Int       // years"
      },
      {
        "name": "monthlyIncome",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyIncome   Float?"
      },
      {
        "name": "monthlyExpenses",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyExpenses Float?"
      },
      {
        "name": "emergencyFund",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emergencyFund   Float?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-migrations-20251208154639-init-migration-sql-risk-profiles",
    "sourceProject": "aiFinancePlatform",
    "name": "risk_profiles",
    "displayName": "\"Risk Profiles\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "investmentGoal",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"investmentGoal\" TEXT NOT NULL"
      },
      {
        "name": "timeHorizon",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"timeHorizon\" INTEGER NOT NULL"
      },
      {
        "name": "monthlyIncome",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"monthlyIncome\" DOUBLE PRECISION"
      },
      {
        "name": "monthlyExpenses",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"monthlyExpenses\" DOUBLE PRECISION"
      },
      {
        "name": "emergencyFund",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"emergencyFund\" DOUBLE PRECISION"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-risk-questionnaires",
    "sourceProject": "aiFinancePlatform",
    "name": "risk_questionnaires",
    "displayName": "Risk Questionnaires",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "userId          String   @unique"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "age",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "age             Int?"
      },
      {
        "name": "dependents",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dependents      Int?"
      },
      {
        "name": "annualIncome",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annualIncome    Float?"
      },
      {
        "name": "netWorth",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "netWorth        Float?"
      },
      {
        "name": "liquidAssets",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "liquidAssets    Float?"
      },
      {
        "name": "monthlyExpenses",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyExpenses Float?"
      },
      {
        "name": "debtLevel",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "debtLevel       String?   // none, low, moderate, high"
      },
      {
        "name": "hasEmergencyFund",
        "type": "Boolean?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hasEmergencyFund Boolean?"
      },
      {
        "name": "emergencyFundMonths",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emergencyFundMonths Int?"
      },
      {
        "name": "riskAttitude",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskAttitude    Int?      // 1-10 scale"
      },
      {
        "name": "lossTolerance",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lossTolerance   String?   // none, small, moderate, large"
      },
      {
        "name": "investmentExperience",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "investmentExperience String? // none, beginner, intermediate, advanced"
      },
      {
        "name": "primaryGoal",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "primaryGoal     String?   // retirement, growth, income, preservation, education"
      },
      {
        "name": "timeHorizon",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeHorizon     Int?      // years"
      },
      {
        "name": "incomeStability",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incomeStability String?   // very_stable, stable, variable, unstable"
      },
      {
        "name": "marketDropReaction",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "marketDropReaction String? // sell_all, sell_some, hold, buy_more"
      },
      {
        "name": "preferredApproach",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferredApproach String?  // guaranteed_low, moderate_growth, high_growth"
      },
      {
        "name": "riskScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskScore       Int?      // 0-100"
      },
      {
        "name": "riskTolerance",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskTolerance   String?   // CONSERVATIVE, MODERATE, AGGRESSIVE"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-stock-screeners",
    "sourceProject": "aiFinancePlatform",
    "name": "stock_screeners",
    "displayName": "Stock Screeners",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "symbol",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol          String"
      },
      {
        "name": "companyName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "companyName     String"
      },
      {
        "name": "sector",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sector          String?"
      },
      {
        "name": "industry",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "industry        String?"
      },
      {
        "name": "marketCap",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "marketCap       Float?"
      },
      {
        "name": "peRatio",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "peRatio         Float?"
      },
      {
        "name": "pbRatio",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pbRatio         Float?"
      },
      {
        "name": "dividendYield",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dividendYield   Float?"
      },
      {
        "name": "eps",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "eps             Float?"
      },
      {
        "name": "revenueGrowth",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revenueGrowth   Float?"
      },
      {
        "name": "profitMargin",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "profitMargin    Float?"
      },
      {
        "name": "debtToEquity",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "debtToEquity    Float?"
      },
      {
        "name": "currentPrice",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentPrice    Float?"
      },
      {
        "name": "targetPrice",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "targetPrice     Float?"
      },
      {
        "name": "analystRating",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analystRating   String?"
      },
      {
        "name": "aiScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiScore         Int?      // 0-100"
      },
      {
        "name": "aiSentiment",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiSentiment     String?   // bullish, bearish, neutral"
      },
      {
        "name": "aiAnalysis",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiAnalysis      Json?"
      },
      {
        "name": "aiRecommendation",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiRecommendation String?  // strong_buy, buy, hold, sell, strong_sell"
      },
      {
        "name": "isWatchlisted",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isWatchlisted   Boolean   @default(false)"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-swift-messages",
    "sourceProject": "aiFinancePlatform",
    "name": "swift_messages",
    "displayName": "Swift Messages",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id               String    @id @default(uuid())"
      },
      {
        "name": "messageType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "messageType      String"
      },
      {
        "name": "sender",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sender           String?"
      },
      {
        "name": "receiver",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receiver         String?"
      },
      {
        "name": "senderBic",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "senderBic        String"
      },
      {
        "name": "receiverBic",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receiverBic      String"
      },
      {
        "name": "transactionRef",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactionRef   String?"
      },
      {
        "name": "relatedRef",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "relatedRef       String?"
      },
      {
        "name": "currency",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currency         String?"
      },
      {
        "name": "amount",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount           Float?"
      },
      {
        "name": "valueDate",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "valueDate        String?"
      },
      {
        "name": "rawMt",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rawMt            String?"
      },
      {
        "name": "parsedFields",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parsedFields     Json?"
      },
      {
        "name": "validationStatus",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Pending\"",
        "sourceLine": "validationStatus String    @default(\"Pending\")"
      },
      {
        "name": "validationErrors",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "validationErrors Json?"
      },
      {
        "name": "stpStatus",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Pending\"",
        "sourceLine": "stpStatus        String    @default(\"Pending\")"
      },
      {
        "name": "coverMethod",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "coverMethod      String?"
      },
      {
        "name": "aiQualityScore",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiQualityScore   Float?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Active\"",
        "sourceLine": "status           String    @default(\"Active\")"
      },
      {
        "name": "aiResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResult         Json?"
      },
      {
        "name": "deletedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deletedAt        DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-transaction-imports",
    "sourceProject": "aiFinancePlatform",
    "name": "transaction_imports",
    "displayName": "Transaction Imports",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user        User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "source",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source      String   // csv, plaid, manual"
      },
      {
        "name": "fileName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fileName    String?"
      },
      {
        "name": "status",
        "type": "ImportStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status      ImportStatus @default(PENDING)"
      },
      {
        "name": "totalRecords",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "totalRecords Int     @default(0)"
      },
      {
        "name": "processedRecords",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "processedRecords Int @default(0)"
      },
      {
        "name": "failedRecords",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "failedRecords Int   @default(0)"
      },
      {
        "name": "errorLog",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "errorLog    Json?"
      },
      {
        "name": "summary",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "summary     Json?"
      },
      {
        "name": "startedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startedAt   DateTime?"
      },
      {
        "name": "completedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedAt DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-transactions",
    "sourceProject": "aiFinancePlatform",
    "name": "transactions",
    "displayName": "Transactions",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user        User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "type",
        "type": "TransactionType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type        TransactionType"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount      Float"
      },
      {
        "name": "currency",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"USD\"",
        "sourceLine": "currency    String   @default(\"USD\")"
      },
      {
        "name": "merchant",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "merchant    String?"
      },
      {
        "name": "category",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category    String?"
      },
      {
        "name": "location",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location    String?"
      },
      {
        "name": "ipAddress",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ipAddress   String?"
      },
      {
        "name": "deviceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deviceId    String?"
      },
      {
        "name": "fraudScore",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fraudScore  Float?   // 0-100 (higher = more likely fraud)"
      },
      {
        "name": "fraudFlags",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fraudFlags  Json?    // Array of flags"
      },
      {
        "name": "isBlocked",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isBlocked   Boolean  @default(false)"
      },
      {
        "name": "reviewStatus",
        "type": "ReviewStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "reviewStatus ReviewStatus @default(PENDING)"
      },
      {
        "name": "fraudAlerts",
        "type": "FraudAlert[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fraudAlerts FraudAlert[]"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-migrations-20251208154639-init-migration-sql-transactions",
    "sourceProject": "aiFinancePlatform",
    "name": "transactions",
    "displayName": "\"Transactions\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "amount",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"amount\" DOUBLE PRECISION NOT NULL"
      },
      {
        "name": "currency",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "\"currency\" TEXT NOT NULL DEFAULT 'USD'"
      },
      {
        "name": "merchant",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"merchant\" TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"category\" TEXT"
      },
      {
        "name": "location",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"location\" TEXT"
      },
      {
        "name": "ipAddress",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"ipAddress\" TEXT"
      },
      {
        "name": "deviceId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"deviceId\" TEXT"
      },
      {
        "name": "fraudScore",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"fraudScore\" DOUBLE PRECISION"
      },
      {
        "name": "fraudFlags",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"fraudFlags\" JSONB"
      },
      {
        "name": "isBlocked",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"isBlocked\" BOOLEAN NOT NULL DEFAULT false"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-users",
    "sourceProject": "aiFinancePlatform",
    "name": "users",
    "displayName": "Users",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String   @id @default(uuid())"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email         String   @unique"
      },
      {
        "name": "password",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password      String"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName     String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName      String"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "role",
        "type": "UserRole",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "USER",
        "sourceLine": "role          UserRole @default(USER)"
      },
      {
        "name": "notificationPreferences",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notificationPreferences Json?"
      },
      {
        "name": "resetToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resetToken         String?"
      },
      {
        "name": "resetTokenExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resetTokenExpiry   DateTime?"
      },
      {
        "name": "twoFactorSecret",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "twoFactorSecret    String?"
      },
      {
        "name": "twoFactorEnabled",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "twoFactorEnabled   Boolean  @default(false)"
      },
      {
        "name": "portfolios",
        "type": "Portfolio[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolios    Portfolio[]"
      },
      {
        "name": "riskProfile",
        "type": "RiskProfile?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskProfile   RiskProfile?"
      },
      {
        "name": "investments",
        "type": "Investment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "investments   Investment[]"
      },
      {
        "name": "creditProfile",
        "type": "CreditProfile?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "creditProfile CreditProfile?"
      },
      {
        "name": "transactions",
        "type": "Transaction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactions  Transaction[]"
      },
      {
        "name": "fraudAlerts",
        "type": "FraudAlert[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fraudAlerts   FraudAlert[]"
      },
      {
        "name": "notifications",
        "type": "Notification[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notifications Notification[]"
      },
      {
        "name": "riskQuestionnaire",
        "type": "RiskQuestionnaire?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskQuestionnaire RiskQuestionnaire?"
      },
      {
        "name": "transactionImports",
        "type": "TransactionImport[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactionImports TransactionImport[]"
      },
      {
        "name": "plaidConnections",
        "type": "PlaidConnection[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plaidConnections PlaidConnection[]"
      },
      {
        "name": "stockScreeners",
        "type": "StockScreener[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stockScreeners    StockScreener[]"
      },
      {
        "name": "cryptoAnalyses",
        "type": "CryptoAnalysis[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cryptoAnalyses    CryptoAnalysis[]"
      },
      {
        "name": "loanApplications",
        "type": "LoanApplication[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loanApplications  LoanApplication[]"
      },
      {
        "name": "insurancePolicies",
        "type": "InsurancePolicy[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "insurancePolicies InsurancePolicy[]"
      },
      {
        "name": "retirementPlans",
        "type": "RetirementPlan[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retirementPlans   RetirementPlan[]"
      },
      {
        "name": "budgetPlans",
        "type": "BudgetPlan[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budgetPlans       BudgetPlan[]"
      },
      {
        "name": "expenses",
        "type": "Expense[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expenses          Expense[]"
      },
      {
        "name": "financialGoals",
        "type": "FinancialGoal[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "financialGoals    FinancialGoal[]"
      },
      {
        "name": "bills",
        "type": "Bill[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bills             Bill[]"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-migrations-20251208154639-init-migration-sql-users",
    "sourceProject": "aiFinancePlatform",
    "name": "users",
    "displayName": "\"Users\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "email",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"email\" TEXT NOT NULL"
      },
      {
        "name": "password",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"password\" TEXT NOT NULL"
      },
      {
        "name": "firstName",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"firstName\" TEXT NOT NULL"
      },
      {
        "name": "lastName",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"lastName\" TEXT NOT NULL"
      },
      {
        "name": "phone",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"phone\" TEXT"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backend-prisma-schema-prisma-wire-transfers",
    "sourceProject": "aiFinancePlatform",
    "name": "wire_transfers",
    "displayName": "Wire Transfers",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id                   String    @id @default(uuid())"
      },
      {
        "name": "accountId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountId            String"
      },
      {
        "name": "customerId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customerId           String?"
      },
      {
        "name": "direction",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Outgoing\"",
        "sourceLine": "direction            String    @default(\"Outgoing\")"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount               Float"
      },
      {
        "name": "currency",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"USD\"",
        "sourceLine": "currency             String    @default(\"USD\")"
      },
      {
        "name": "beneficiaryName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "beneficiaryName      String"
      },
      {
        "name": "beneficiaryAccount",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "beneficiaryAccount   String"
      },
      {
        "name": "beneficiaryBank",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "beneficiaryBank      String?"
      },
      {
        "name": "beneficiaryBankSwift",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "beneficiaryBankSwift String?"
      },
      {
        "name": "purposeOfPayment",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purposeOfPayment     String?"
      },
      {
        "name": "fedReference",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fedReference         String?"
      },
      {
        "name": "ofacScreeningResult",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Pending\"",
        "sourceLine": "ofacScreeningResult  String    @default(\"Pending\")"
      },
      {
        "name": "feeAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "feeAmount            Float     @default(0)"
      },
      {
        "name": "valueDate",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "valueDate            String?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"Pending\"",
        "sourceLine": "status               String    @default(\"Pending\")"
      },
      {
        "name": "aiResult",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiResult             Json?"
      },
      {
        "name": "deletedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deletedAt            DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-ai-analysis-logs",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "ai_analysis_logs",
    "displayName": "Ai Analysis Logs",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "module",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "module      String   // robo_advisor, credit_score, fraud_detection"
      },
      {
        "name": "userId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String?"
      },
      {
        "name": "inputData",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inputData   Json"
      },
      {
        "name": "outputData",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outputData  Json"
      },
      {
        "name": "modelUsed",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "modelUsed   String"
      },
      {
        "name": "confidence",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence  Float?"
      },
      {
        "name": "processingTime",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "processingTime Int?  // milliseconds"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-migrations-20251208154639-init-migration-sql-ai-analysis-logs",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "ai_analysis_logs",
    "displayName": "\"Ai Analysis Logs\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "module",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"module\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT"
      },
      {
        "name": "inputData",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"inputData\" JSONB NOT NULL"
      },
      {
        "name": "outputData",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"outputData\" JSONB NOT NULL"
      },
      {
        "name": "modelUsed",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"modelUsed\" TEXT NOT NULL"
      },
      {
        "name": "confidence",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"confidence\" DOUBLE PRECISION"
      },
      {
        "name": "processingTime",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"processingTime\" INTEGER"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-credit-histories",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "credit_histories",
    "displayName": "Credit Histories",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "creditProfileId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "creditProfileId String"
      },
      {
        "name": "creditProfile",
        "type": "CreditProfile",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "creditProfile   CreditProfile @relation(fields: [creditProfileId], references: [id])"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            String   // rent, utility, phone, loan"
      },
      {
        "name": "provider",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider        String   // Company name"
      },
      {
        "name": "monthlyAmount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyAmount   Float"
      },
      {
        "name": "onTimePayments",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "onTimePayments  Int"
      },
      {
        "name": "latePayments",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "latePayments    Int"
      },
      {
        "name": "missedPayments",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "missedPayments  Int"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate       DateTime"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate         DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-migrations-20251208154639-init-migration-sql-credit-histories",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "credit_histories",
    "displayName": "\"Credit Histories\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "creditProfileId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"creditProfileId\" TEXT NOT NULL"
      },
      {
        "name": "type",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"type\" TEXT NOT NULL"
      },
      {
        "name": "provider",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"provider\" TEXT NOT NULL"
      },
      {
        "name": "monthlyAmount",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"monthlyAmount\" DOUBLE PRECISION NOT NULL"
      },
      {
        "name": "onTimePayments",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"onTimePayments\" INTEGER NOT NULL"
      },
      {
        "name": "latePayments",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"latePayments\" INTEGER NOT NULL"
      },
      {
        "name": "missedPayments",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"missedPayments\" INTEGER NOT NULL"
      },
      {
        "name": "startDate",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"startDate\" TIMESTAMP(3) NOT NULL"
      },
      {
        "name": "endDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"endDate\" TIMESTAMP(3)"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-credit-profiles",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "credit_profiles",
    "displayName": "Credit Profiles",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "userId          String   @unique"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "annualIncome",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annualIncome    Float?"
      },
      {
        "name": "employmentStatus",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employmentStatus String?"
      },
      {
        "name": "employmentYears",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employmentYears Float?"
      },
      {
        "name": "housingStatus",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "housingStatus   String?  // own, rent, mortgage"
      },
      {
        "name": "monthlyRent",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyRent     Float?"
      },
      {
        "name": "rentPaymentHistory",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rentPaymentHistory    Int?  // months of on-time payments"
      },
      {
        "name": "utilityPaymentHistory",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "utilityPaymentHistory Int?"
      },
      {
        "name": "phonePaymentHistory",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phonePaymentHistory   Int?"
      },
      {
        "name": "bankAccountAge",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankAccountAge        Int?  // months"
      },
      {
        "name": "averageBalance",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "averageBalance        Float?"
      },
      {
        "name": "overdraftCount",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overdraftCount        Int?"
      },
      {
        "name": "aiCreditScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiCreditScore   Int?     // 300-850"
      },
      {
        "name": "aiScoreDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiScoreDate     DateTime?"
      },
      {
        "name": "aiConfidence",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiConfidence    Float?   // 0-100%"
      },
      {
        "name": "aiFactors",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiFactors       Json?    // Factors affecting score"
      },
      {
        "name": "traditionalScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "traditionalScore Int?"
      },
      {
        "name": "creditHistories",
        "type": "CreditHistory[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "creditHistories CreditHistory[]"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-migrations-20251208154639-init-migration-sql-credit-profiles",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "credit_profiles",
    "displayName": "\"Credit Profiles\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "annualIncome",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"annualIncome\" DOUBLE PRECISION"
      },
      {
        "name": "employmentStatus",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"employmentStatus\" TEXT"
      },
      {
        "name": "employmentYears",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"employmentYears\" DOUBLE PRECISION"
      },
      {
        "name": "housingStatus",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"housingStatus\" TEXT"
      },
      {
        "name": "monthlyRent",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"monthlyRent\" DOUBLE PRECISION"
      },
      {
        "name": "rentPaymentHistory",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"rentPaymentHistory\" INTEGER"
      },
      {
        "name": "utilityPaymentHistory",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"utilityPaymentHistory\" INTEGER"
      },
      {
        "name": "phonePaymentHistory",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"phonePaymentHistory\" INTEGER"
      },
      {
        "name": "bankAccountAge",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"bankAccountAge\" INTEGER"
      },
      {
        "name": "averageBalance",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"averageBalance\" DOUBLE PRECISION"
      },
      {
        "name": "overdraftCount",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"overdraftCount\" INTEGER"
      },
      {
        "name": "aiCreditScore",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiCreditScore\" INTEGER"
      },
      {
        "name": "aiScoreDate",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiScoreDate\" TIMESTAMP(3)"
      },
      {
        "name": "aiConfidence",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiConfidence\" DOUBLE PRECISION"
      },
      {
        "name": "aiFactors",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiFactors\" JSONB"
      },
      {
        "name": "traditionalScore",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"traditionalScore\" INTEGER"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-fraud-alerts",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "fraud_alerts",
    "displayName": "Fraud Alerts",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId        String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user          User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "transactionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactionId String"
      },
      {
        "name": "transaction",
        "type": "Transaction",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction   Transaction @relation(fields: [transactionId], references: [id])"
      },
      {
        "name": "alertType",
        "type": "AlertType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alertType     AlertType"
      },
      {
        "name": "severity",
        "type": "Severity",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity      Severity"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String"
      },
      {
        "name": "aiConfidence",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiConfidence  Float    // 0-100%"
      },
      {
        "name": "isResolved",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isResolved    Boolean  @default(false)"
      },
      {
        "name": "resolvedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolvedAt    DateTime?"
      },
      {
        "name": "resolvedBy",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolvedBy    String?"
      },
      {
        "name": "resolution",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution    String?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-migrations-20251208154639-init-migration-sql-fraud-alerts",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "fraud_alerts",
    "displayName": "\"Fraud Alerts\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "transactionId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"transactionId\" TEXT NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"description\" TEXT NOT NULL"
      },
      {
        "name": "aiConfidence",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiConfidence\" DOUBLE PRECISION NOT NULL"
      },
      {
        "name": "isResolved",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"isResolved\" BOOLEAN NOT NULL DEFAULT false"
      },
      {
        "name": "resolvedAt",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"resolvedAt\" TIMESTAMP(3)"
      },
      {
        "name": "resolvedBy",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"resolvedBy\" TEXT"
      },
      {
        "name": "resolution",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"resolution\" TEXT"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-routes-batch03-gaps-js-gap-features",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/batch03Gaps.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-holdings",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "holdings",
    "displayName": "Holdings",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "portfolioId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolioId String"
      },
      {
        "name": "portfolio",
        "type": "Portfolio",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolio   Portfolio @relation(fields: [portfolioId], references: [id])"
      },
      {
        "name": "symbol",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol      String   // Stock/ETF symbol"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "assetType",
        "type": "AssetType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assetType   AssetType"
      },
      {
        "name": "shares",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shares      Float"
      },
      {
        "name": "avgCost",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avgCost     Float"
      },
      {
        "name": "currentPrice",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentPrice Float?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-migrations-20251208154639-init-migration-sql-holdings",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "holdings",
    "displayName": "\"Holdings\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "portfolioId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"portfolioId\" TEXT NOT NULL"
      },
      {
        "name": "symbol",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"symbol\" TEXT NOT NULL"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"name\" TEXT NOT NULL"
      },
      {
        "name": "shares",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"shares\" DOUBLE PRECISION NOT NULL"
      },
      {
        "name": "avgCost",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"avgCost\" DOUBLE PRECISION NOT NULL"
      },
      {
        "name": "currentPrice",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"currentPrice\" DOUBLE PRECISION"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-investments",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "investments",
    "displayName": "Investments",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user        User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "portfolioId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolioId String"
      },
      {
        "name": "portfolio",
        "type": "Portfolio",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolio   Portfolio @relation(fields: [portfolioId], references: [id])"
      },
      {
        "name": "type",
        "type": "InvestmentType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type        InvestmentType"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount      Float"
      },
      {
        "name": "symbol",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol      String?"
      },
      {
        "name": "shares",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shares      Float?"
      },
      {
        "name": "price",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price       Float?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-migrations-20251208154639-init-migration-sql-investments",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "investments",
    "displayName": "\"Investments\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "portfolioId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"portfolioId\" TEXT NOT NULL"
      },
      {
        "name": "amount",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"amount\" DOUBLE PRECISION NOT NULL"
      },
      {
        "name": "symbol",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"symbol\" TEXT"
      },
      {
        "name": "shares",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"shares\" DOUBLE PRECISION"
      },
      {
        "name": "price",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"price\" DOUBLE PRECISION"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-notifications",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user        User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type        String   // FRAUD_HIGH_RISK, CREDIT_SCORE_DROP, PORTFOLIO_DRIFT, etc."
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category    String   // fraud, credit, portfolio, security, transaction, general"
      },
      {
        "name": "severity",
        "type": "Severity",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity    Severity"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title       String"
      },
      {
        "name": "message",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message     String"
      },
      {
        "name": "details",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details     Json?"
      },
      {
        "name": "isRead",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isRead      Boolean  @default(false)"
      },
      {
        "name": "isDismissed",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isDismissed Boolean  @default(false)"
      },
      {
        "name": "isPositive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isPositive  Boolean  @default(false)"
      },
      {
        "name": "actionRequired",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "actionRequired Boolean @default(false)"
      },
      {
        "name": "expiresAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt   DateTime?"
      },
      {
        "name": "readAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "readAt      DateTime?"
      },
      {
        "name": "dismissedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dismissedAt DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-plaid-connections",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "plaid_connections",
    "displayName": "Plaid Connections",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "accessToken",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accessToken     String   // Encrypted Plaid access token"
      },
      {
        "name": "itemId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "itemId          String   // Plaid item ID"
      },
      {
        "name": "institutionId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "institutionId   String?"
      },
      {
        "name": "institutionName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "institutionName String?"
      },
      {
        "name": "accountIds",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountIds      Json?    // Array of connected account IDs"
      },
      {
        "name": "consentExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "consentExpiry   DateTime?"
      },
      {
        "name": "lastSync",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastSync        DateTime?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"active\"",
        "sourceLine": "status          String   @default(\"active\") // active, expired, error"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-portfolios",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "portfolios",
    "displayName": "Portfolios",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "type",
        "type": "PortfolioType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "BALANCED",
        "sourceLine": "type            PortfolioType @default(BALANCED)"
      },
      {
        "name": "totalValue",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "totalValue      Float    @default(0)"
      },
      {
        "name": "cashBalance",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cashBalance     Float    @default(0)"
      },
      {
        "name": "aiScore",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiScore         Float?   // AI confidence score"
      },
      {
        "name": "aiRecommendation",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiRecommendation String? // Latest AI recommendation"
      },
      {
        "name": "lastRebalanced",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastRebalanced  DateTime?"
      },
      {
        "name": "holdings",
        "type": "Holding[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "holdings        Holding[]"
      },
      {
        "name": "investments",
        "type": "Investment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "investments     Investment[]"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-migrations-20251208154639-init-migration-sql-portfolios",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "portfolios",
    "displayName": "\"Portfolios\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"name\" TEXT NOT NULL"
      },
      {
        "name": "totalValue",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"totalValue\" DOUBLE PRECISION NOT NULL DEFAULT 0"
      },
      {
        "name": "cashBalance",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "\"cashBalance\" DOUBLE PRECISION NOT NULL DEFAULT 0"
      },
      {
        "name": "aiScore",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiScore\" DOUBLE PRECISION"
      },
      {
        "name": "aiRecommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"aiRecommendation\" TEXT"
      },
      {
        "name": "lastRebalanced",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"lastRebalanced\" TIMESTAMP(3)"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-risk-profiles",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "risk_profiles",
    "displayName": "Risk Profiles",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "userId          String   @unique"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "riskTolerance",
        "type": "RiskLevel",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "MODERATE",
        "sourceLine": "riskTolerance   RiskLevel @default(MODERATE)"
      },
      {
        "name": "investmentGoal",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "investmentGoal  String    // retirement, growth, income, preservation"
      },
      {
        "name": "timeHorizon",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeHorizon     Int       // years"
      },
      {
        "name": "monthlyIncome",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyIncome   Float?"
      },
      {
        "name": "monthlyExpenses",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyExpenses Float?"
      },
      {
        "name": "emergencyFund",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emergencyFund   Float?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-migrations-20251208154639-init-migration-sql-risk-profiles",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "risk_profiles",
    "displayName": "\"Risk Profiles\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "investmentGoal",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"investmentGoal\" TEXT NOT NULL"
      },
      {
        "name": "timeHorizon",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"timeHorizon\" INTEGER NOT NULL"
      },
      {
        "name": "monthlyIncome",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"monthlyIncome\" DOUBLE PRECISION"
      },
      {
        "name": "monthlyExpenses",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"monthlyExpenses\" DOUBLE PRECISION"
      },
      {
        "name": "emergencyFund",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"emergencyFund\" DOUBLE PRECISION"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-risk-questionnaires",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "risk_questionnaires",
    "displayName": "Risk Questionnaires",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "userId          String   @unique"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "age",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "age             Int?"
      },
      {
        "name": "dependents",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dependents      Int?"
      },
      {
        "name": "annualIncome",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annualIncome    Float?"
      },
      {
        "name": "netWorth",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "netWorth        Float?"
      },
      {
        "name": "liquidAssets",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "liquidAssets    Float?"
      },
      {
        "name": "monthlyExpenses",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthlyExpenses Float?"
      },
      {
        "name": "debtLevel",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "debtLevel       String?   // none, low, moderate, high"
      },
      {
        "name": "hasEmergencyFund",
        "type": "Boolean?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hasEmergencyFund Boolean?"
      },
      {
        "name": "emergencyFundMonths",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emergencyFundMonths Int?"
      },
      {
        "name": "riskAttitude",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskAttitude    Int?      // 1-10 scale"
      },
      {
        "name": "lossTolerance",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lossTolerance   String?   // none, small, moderate, large"
      },
      {
        "name": "investmentExperience",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "investmentExperience String? // none, beginner, intermediate, advanced"
      },
      {
        "name": "primaryGoal",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "primaryGoal     String?   // retirement, growth, income, preservation, education"
      },
      {
        "name": "timeHorizon",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeHorizon     Int?      // years"
      },
      {
        "name": "incomeStability",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incomeStability String?   // very_stable, stable, variable, unstable"
      },
      {
        "name": "marketDropReaction",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "marketDropReaction String? // sell_all, sell_some, hold, buy_more"
      },
      {
        "name": "preferredApproach",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "preferredApproach String?  // guaranteed_low, moderate_growth, high_growth"
      },
      {
        "name": "riskScore",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskScore       Int?      // 0-100"
      },
      {
        "name": "riskTolerance",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskTolerance   String?   // CONSERVATIVE, MODERATE, AGGRESSIVE"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-transaction-imports",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "transaction_imports",
    "displayName": "Transaction Imports",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user        User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "source",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source      String   // csv, plaid, manual"
      },
      {
        "name": "fileName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fileName    String?"
      },
      {
        "name": "status",
        "type": "ImportStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status      ImportStatus @default(PENDING)"
      },
      {
        "name": "totalRecords",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "totalRecords Int     @default(0)"
      },
      {
        "name": "processedRecords",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "processedRecords Int @default(0)"
      },
      {
        "name": "failedRecords",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "failedRecords Int   @default(0)"
      },
      {
        "name": "errorLog",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "errorLog    Json?"
      },
      {
        "name": "summary",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "summary     Json?"
      },
      {
        "name": "startedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startedAt   DateTime?"
      },
      {
        "name": "completedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedAt DateTime?"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-transactions",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "transactions",
    "displayName": "Transactions",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user        User     @relation(fields: [userId], references: [id])"
      },
      {
        "name": "type",
        "type": "TransactionType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type        TransactionType"
      },
      {
        "name": "amount",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount      Float"
      },
      {
        "name": "currency",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"USD\"",
        "sourceLine": "currency    String   @default(\"USD\")"
      },
      {
        "name": "merchant",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "merchant    String?"
      },
      {
        "name": "category",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category    String?"
      },
      {
        "name": "location",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location    String?"
      },
      {
        "name": "ipAddress",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ipAddress   String?"
      },
      {
        "name": "deviceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deviceId    String?"
      },
      {
        "name": "fraudScore",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fraudScore  Float?   // 0-100 (higher = more likely fraud)"
      },
      {
        "name": "fraudFlags",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fraudFlags  Json?    // Array of flags"
      },
      {
        "name": "isBlocked",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isBlocked   Boolean  @default(false)"
      },
      {
        "name": "reviewStatus",
        "type": "ReviewStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "reviewStatus ReviewStatus @default(PENDING)"
      },
      {
        "name": "fraudAlerts",
        "type": "FraudAlert[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fraudAlerts FraudAlert[]"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-migrations-20251208154639-init-migration-sql-transactions",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "transactions",
    "displayName": "\"Transactions\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "userId",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"userId\" TEXT NOT NULL"
      },
      {
        "name": "amount",
        "type": "DOUBLE PRECISION",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"amount\" DOUBLE PRECISION NOT NULL"
      },
      {
        "name": "currency",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "\"currency\" TEXT NOT NULL DEFAULT 'USD'"
      },
      {
        "name": "merchant",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"merchant\" TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"category\" TEXT"
      },
      {
        "name": "location",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"location\" TEXT"
      },
      {
        "name": "ipAddress",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"ipAddress\" TEXT"
      },
      {
        "name": "deviceId",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"deviceId\" TEXT"
      },
      {
        "name": "fraudScore",
        "type": "DOUBLE PRECISION",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"fraudScore\" DOUBLE PRECISION"
      },
      {
        "name": "fraudFlags",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"fraudFlags\" JSONB"
      },
      {
        "name": "isBlocked",
        "type": "BOOLEAN",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "\"isBlocked\" BOOLEAN NOT NULL DEFAULT false"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-schema-prisma-users",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "users",
    "displayName": "Users",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String   @id @default(uuid())"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email         String   @unique"
      },
      {
        "name": "password",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password      String"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName     String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName      String"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "role",
        "type": "UserRole",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "USER",
        "sourceLine": "role          UserRole @default(USER)"
      },
      {
        "name": "notificationPreferences",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notificationPreferences Json?"
      },
      {
        "name": "portfolios",
        "type": "Portfolio[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolios    Portfolio[]"
      },
      {
        "name": "riskProfile",
        "type": "RiskProfile?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskProfile   RiskProfile?"
      },
      {
        "name": "investments",
        "type": "Investment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "investments   Investment[]"
      },
      {
        "name": "creditProfile",
        "type": "CreditProfile?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "creditProfile CreditProfile?"
      },
      {
        "name": "transactions",
        "type": "Transaction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactions  Transaction[]"
      },
      {
        "name": "fraudAlerts",
        "type": "FraudAlert[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fraudAlerts   FraudAlert[]"
      },
      {
        "name": "notifications",
        "type": "Notification[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notifications Notification[]"
      },
      {
        "name": "riskQuestionnaire",
        "type": "RiskQuestionnaire?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "riskQuestionnaire RiskQuestionnaire?"
      },
      {
        "name": "transactionImports",
        "type": "TransactionImport[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactionImports TransactionImport[]"
      },
      {
        "name": "plaidConnections",
        "type": "PlaidConnection[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plaidConnections PlaidConnection[]"
      }
    ]
  },
  {
    "id": "ai-finance-platform-backup-backend-prisma-migrations-20251208154639-init-migration-sql-users",
    "sourceProject": "aiFinancePlatform_backup",
    "name": "users",
    "displayName": "\"Users\"",
    "framework": "SQL",
    "sourceFile": "backend/prisma/migrations/20251208154639_init/migration.sql",
    "columns": [
      {
        "name": "id",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"id\" TEXT NOT NULL"
      },
      {
        "name": "email",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"email\" TEXT NOT NULL"
      },
      {
        "name": "password",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"password\" TEXT NOT NULL"
      },
      {
        "name": "firstName",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"firstName\" TEXT NOT NULL"
      },
      {
        "name": "lastName",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"lastName\" TEXT NOT NULL"
      },
      {
        "name": "phone",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "\"phone\" TEXT"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-ai-audit-analyses",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "ai_audit_analyses",
    "displayName": "Ai Audit Analyses",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "analysis_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "analysis_period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_period VARCHAR(50)"
      },
      {
        "name": "total_events_analyzed",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_events_analyzed INTEGER"
      },
      {
        "name": "risk_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score DECIMAL(5,2)"
      },
      {
        "name": "compliance_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_score DECIMAL(5,2)"
      },
      {
        "name": "findings",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "findings JSONB"
      },
      {
        "name": "high_risk_events",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "high_risk_events JSONB"
      },
      {
        "name": "patterns_detected",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patterns_detected JSONB"
      },
      {
        "name": "recommendations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations JSONB"
      },
      {
        "name": "ai_summary",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_summary TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'completed'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-ai-board-reports",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "ai_board_reports",
    "displayName": "Ai Board Reports",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "report_title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_title VARCHAR(255) NOT NULL"
      },
      {
        "name": "report_period",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_period VARCHAR(50) NOT NULL"
      },
      {
        "name": "executive_summary",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "executive_summary TEXT"
      },
      {
        "name": "financial_highlights",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "financial_highlights JSONB"
      },
      {
        "name": "key_metrics",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "key_metrics JSONB"
      },
      {
        "name": "strategic_initiatives",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "strategic_initiatives JSONB"
      },
      {
        "name": "risk_assessment",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_assessment JSONB"
      },
      {
        "name": "outlook",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "outlook TEXT"
      },
      {
        "name": "recommendations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations JSONB"
      },
      {
        "name": "appendices",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "appendices JSONB"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "ai_generated BOOLEAN DEFAULT true"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'draft'"
      },
      {
        "name": "presented_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "presented_date DATE"
      },
      {
        "name": "created_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by UUID REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-ai-expense-categorizations",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "ai_expense_categorizations",
    "displayName": "Ai Expense Categorizations",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "expense_description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expense_description TEXT NOT NULL"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(15,2) NOT NULL"
      },
      {
        "name": "vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor VARCHAR(255)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE NOT NULL"
      },
      {
        "name": "receipt_text",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receipt_text TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "subcategory",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subcategory VARCHAR(100)"
      },
      {
        "name": "confidence_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_score DECIMAL(5,2)"
      },
      {
        "name": "tax_deductible",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_deductible BOOLEAN"
      },
      {
        "name": "gl_account",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gl_account VARCHAR(100)"
      },
      {
        "name": "cost_center",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_center VARCHAR(100)"
      },
      {
        "name": "policy_compliance",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "policy_compliance JSONB"
      },
      {
        "name": "fraud_risk",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fraud_risk JSONB"
      },
      {
        "name": "optimization_suggestions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "optimization_suggestions JSONB"
      },
      {
        "name": "ai_reasoning",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_reasoning TEXT"
      },
      {
        "name": "tags",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT[]"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-ai-forecasts",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "ai_forecasts",
    "displayName": "Ai Forecasts",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "forecast_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "forecast_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "forecast_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "forecast_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "metric_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metric_name VARCHAR(100)"
      },
      {
        "name": "time_horizon",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "time_horizon VARCHAR(50)"
      },
      {
        "name": "historical_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "historical_data JSONB"
      },
      {
        "name": "predictions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "predictions JSONB"
      },
      {
        "name": "confidence_intervals",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_intervals JSONB"
      },
      {
        "name": "methodology",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "methodology VARCHAR(100)"
      },
      {
        "name": "assumptions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assumptions JSONB"
      },
      {
        "name": "risk_factors",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_factors JSONB"
      },
      {
        "name": "ai_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis TEXT"
      },
      {
        "name": "accuracy_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accuracy_score DECIMAL(5,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-ai-insights",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "ai_insights",
    "displayName": "Ai Insights",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "insight_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "insight_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT NOT NULL"
      },
      {
        "name": "impact_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact_level VARCHAR(20)"
      },
      {
        "name": "confidence_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_score DECIMAL(5,2)"
      },
      {
        "name": "data_sources",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "data_sources TEXT[]"
      },
      {
        "name": "recommendations",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations TEXT[]"
      },
      {
        "name": "action_items",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action_items JSONB"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'new'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'new'"
      },
      {
        "name": "acknowledged_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "acknowledged_by UUID REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-ai-presentations",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "ai_presentations",
    "displayName": "Ai Presentations",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "source_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "source_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_id UUID"
      },
      {
        "name": "slides",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slides JSONB"
      },
      {
        "name": "theme",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'professional'",
        "sourceLine": "theme VARCHAR(50) DEFAULT 'professional'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'draft'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "ai_generated BOOLEAN DEFAULT true"
      },
      {
        "name": "created_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by UUID REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-ai-responses",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "ai_responses",
    "displayName": "Ai Responses",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "feature_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "feature_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "source_record_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_record_id UUID"
      },
      {
        "name": "prompt_summary",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prompt_summary TEXT"
      },
      {
        "name": "raw_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw_response TEXT"
      },
      {
        "name": "parsed_response",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parsed_response JSONB"
      },
      {
        "name": "response_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'analysis'",
        "sourceLine": "response_type VARCHAR(50) DEFAULT 'analysis'"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "processing_time_ms",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "processing_time_ms INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'completed'"
      },
      {
        "name": "error_message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_message TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-ai-variance-explanations",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "ai_variance_explanations",
    "displayName": "Ai Variance Explanations",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period VARCHAR(50) NOT NULL"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(100)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "budgeted_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budgeted_amount DECIMAL(15,2)"
      },
      {
        "name": "actual_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_amount DECIMAL(15,2)"
      },
      {
        "name": "variance_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variance_amount DECIMAL(15,2)"
      },
      {
        "name": "variance_percentage",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variance_percentage DECIMAL(8,2)"
      },
      {
        "name": "variance_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variance_type VARCHAR(20)"
      },
      {
        "name": "root_causes",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "root_causes JSONB"
      },
      {
        "name": "impact_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact_analysis TEXT"
      },
      {
        "name": "recommendations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations JSONB"
      },
      {
        "name": "ai_explanation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_explanation TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-anomaly-detections",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "anomaly_detections",
    "displayName": "Anomaly Detections",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "anomaly_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "anomaly_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT NOT NULL"
      },
      {
        "name": "affected_metric",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "affected_metric VARCHAR(100)"
      },
      {
        "name": "expected_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expected_value DECIMAL(15,2)"
      },
      {
        "name": "actual_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_value DECIMAL(15,2)"
      },
      {
        "name": "deviation_percentage",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deviation_percentage DECIMAL(10,2)"
      },
      {
        "name": "detection_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "detection_date DATE NOT NULL"
      },
      {
        "name": "ai_explanation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_explanation TEXT"
      },
      {
        "name": "resolution_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "resolution_status VARCHAR(20) DEFAULT 'open'"
      },
      {
        "name": "resolved_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_by UUID REFERENCES users(id)"
      },
      {
        "name": "resolution_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolution_notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-routes-ai-js-approvals",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "approvals",
    "displayName": "Approvals",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "resource_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_type VARCHAR(64) NOT NULL"
      },
      {
        "name": "resource_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_id INTEGER"
      },
      {
        "name": "requested_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requested_by INTEGER"
      },
      {
        "name": "approver_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approver_id INTEGER"
      },
      {
        "name": "state",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "state VARCHAR(16) NOT NULL DEFAULT 'pending'"
      },
      {
        "name": "comment",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comment TEXT"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount NUMERIC(18,2)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-audit-logs",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "audit_logs",
    "displayName": "Audit Logs",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "user_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id UUID REFERENCES users(id)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id UUID"
      },
      {
        "name": "old_values",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "old_values JSONB"
      },
      {
        "name": "new_values",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "new_values JSONB"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(45)"
      },
      {
        "name": "user_agent",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_agent TEXT"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'low'",
        "sourceLine": "risk_level VARCHAR(20) DEFAULT 'low'"
      },
      {
        "name": "ai_risk_assessment",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_risk_assessment TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-balance-sheets",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "balance_sheets",
    "displayName": "Balance Sheets",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "as_of_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "as_of_date DATE NOT NULL"
      },
      {
        "name": "total_assets",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_assets DECIMAL(15,2) NOT NULL"
      },
      {
        "name": "current_assets",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_assets DECIMAL(15,2)"
      },
      {
        "name": "fixed_assets",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fixed_assets DECIMAL(15,2)"
      },
      {
        "name": "total_liabilities",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_liabilities DECIMAL(15,2)"
      },
      {
        "name": "current_liabilities",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_liabilities DECIMAL(15,2)"
      },
      {
        "name": "long_term_liabilities",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "long_term_liabilities DECIMAL(15,2)"
      },
      {
        "name": "shareholders_equity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shareholders_equity DECIMAL(15,2)"
      },
      {
        "name": "retained_earnings",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retained_earnings DECIMAL(15,2)"
      },
      {
        "name": "ai_health_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_health_score INTEGER"
      },
      {
        "name": "ai_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-break-even-analyses",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "break_even_analyses",
    "displayName": "Break Even Analyses",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "analysis_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "fixed_costs",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fixed_costs DECIMAL(15,2) NOT NULL"
      },
      {
        "name": "variable_cost_per_unit",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variable_cost_per_unit DECIMAL(15,4) NOT NULL"
      },
      {
        "name": "selling_price_per_unit",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "selling_price_per_unit DECIMAL(15,4) NOT NULL"
      },
      {
        "name": "break_even_units",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "break_even_units DECIMAL(15,2)"
      },
      {
        "name": "break_even_revenue",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "break_even_revenue DECIMAL(15,2)"
      },
      {
        "name": "contribution_margin",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contribution_margin DECIMAL(15,4)"
      },
      {
        "name": "contribution_margin_ratio",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contribution_margin_ratio DECIMAL(8,4)"
      },
      {
        "name": "margin_of_safety",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "margin_of_safety DECIMAL(8,4)"
      },
      {
        "name": "operating_leverage",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operating_leverage DECIMAL(8,4)"
      },
      {
        "name": "sensitivity_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sensitivity_data JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-budget-actuals",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "budget_actuals",
    "displayName": "Budget Actuals",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "department",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department VARCHAR(100) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100) NOT NULL"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period VARCHAR(50) NOT NULL"
      },
      {
        "name": "budgeted_amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budgeted_amount DECIMAL(15,2) NOT NULL"
      },
      {
        "name": "actual_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_amount DECIMAL(15,2)"
      },
      {
        "name": "variance",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variance DECIMAL(15,2)"
      },
      {
        "name": "variance_percentage",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variance_percentage DECIMAL(5,2)"
      },
      {
        "name": "ai_explanation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_explanation TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'on_track'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'on_track'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-capital-projects",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "capital_projects",
    "displayName": "Capital Projects",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "initial_investment",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "initial_investment DECIMAL(15,2) NOT NULL"
      },
      {
        "name": "cash_flows",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cash_flows JSONB"
      },
      {
        "name": "discount_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discount_rate DECIMAL(8,4)"
      },
      {
        "name": "project_life",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_life INTEGER"
      },
      {
        "name": "salvage_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "salvage_value DECIMAL(15,2) DEFAULT 0"
      },
      {
        "name": "npv",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "npv DECIMAL(15,2)"
      },
      {
        "name": "irr",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "irr DECIMAL(8,4)"
      },
      {
        "name": "mirr",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mirr DECIMAL(8,4)"
      },
      {
        "name": "payback_period",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payback_period DECIMAL(8,2)"
      },
      {
        "name": "discounted_payback",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "discounted_payback DECIMAL(8,2)"
      },
      {
        "name": "profitability_index",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "profitability_index DECIMAL(8,4)"
      },
      {
        "name": "eaa",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "eaa DECIMAL(15,2)"
      },
      {
        "name": "decision",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "decision JSONB"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-cash-flow-records",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "cash_flow_records",
    "displayName": "Cash Flow Records",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "record_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "record_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100) NOT NULL"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(15,2) NOT NULL"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source VARCHAR(255)"
      },
      {
        "name": "ai_classification",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_classification TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-companies",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "companies",
    "displayName": "Companies",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "industry",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "industry VARCHAR(100)"
      },
      {
        "name": "fiscal_year_end",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'December'",
        "sourceLine": "fiscal_year_end VARCHAR(20) DEFAULT 'December'"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(3) DEFAULT 'USD'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-compliance-reports",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "compliance_reports",
    "displayName": "Compliance Reports",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "regulation_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulation_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "report_period",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_period VARCHAR(50) NOT NULL"
      },
      {
        "name": "compliance_status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_status VARCHAR(20) NOT NULL"
      },
      {
        "name": "score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score DECIMAL(5,2)"
      },
      {
        "name": "findings",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "findings JSONB"
      },
      {
        "name": "remediation_items",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "remediation_items JSONB"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "submitted_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submitted_date DATE"
      },
      {
        "name": "ai_compliance_check",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_compliance_check TEXT"
      },
      {
        "name": "reviewer",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewer UUID REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-custom-reports",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "custom_reports",
    "displayName": "Custom Reports",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "report_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "report_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "query_config",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "query_config JSONB"
      },
      {
        "name": "chart_config",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chart_config JSONB"
      },
      {
        "name": "filters",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filters JSONB"
      },
      {
        "name": "schedule",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schedule VARCHAR(50)"
      },
      {
        "name": "recipients",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipients TEXT[]"
      },
      {
        "name": "last_generated",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_generated TIMESTAMP"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_content",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_content TEXT"
      },
      {
        "name": "created_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by UUID REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-dcf-valuations",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "dcf_valuations",
    "displayName": "Dcf Valuations",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "valuation_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "valuation_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "initial_fcf",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "initial_fcf DECIMAL(15,2)"
      },
      {
        "name": "projection_years",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "projection_years INTEGER DEFAULT 5"
      },
      {
        "name": "growth_rates",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "growth_rates JSONB"
      },
      {
        "name": "wacc",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "wacc DECIMAL(8,4)"
      },
      {
        "name": "terminal_growth_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "terminal_growth_rate DECIMAL(8,4)"
      },
      {
        "name": "projected_cash_flows",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projected_cash_flows JSONB"
      },
      {
        "name": "terminal_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "terminal_value DECIMAL(18,2)"
      },
      {
        "name": "enterprise_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "enterprise_value DECIMAL(18,2)"
      },
      {
        "name": "equity_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equity_value DECIMAL(18,2)"
      },
      {
        "name": "sensitivity_matrix",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sensitivity_matrix JSONB"
      },
      {
        "name": "assumptions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assumptions JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-expense-records",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "expense_records",
    "displayName": "Expense Records",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100) NOT NULL"
      },
      {
        "name": "subcategory",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subcategory VARCHAR(100)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(15,2) NOT NULL"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE NOT NULL"
      },
      {
        "name": "vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor VARCHAR(255)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "receipt_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receipt_url VARCHAR(500)"
      },
      {
        "name": "approved_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by UUID REFERENCES users(id)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending'"
      },
      {
        "name": "ai_categorization",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_categorization TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-financial-statements",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "financial_statements",
    "displayName": "Financial Statements",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "statement_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "statement_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "period_start",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period_start DATE NOT NULL"
      },
      {
        "name": "period_end",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period_end DATE NOT NULL"
      },
      {
        "name": "total_revenue",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_revenue DECIMAL(15,2)"
      },
      {
        "name": "total_expenses",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_expenses DECIMAL(15,2)"
      },
      {
        "name": "net_income",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "net_income DECIMAL(15,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'draft'"
      },
      {
        "name": "ai_summary",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_summary TEXT"
      },
      {
        "name": "created_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by UUID REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-routes-batch03-gaps-js-gap-features",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/batch03Gaps.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-kpi-metrics",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "kpi_metrics",
    "displayName": "Kpi Metrics",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "metric_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metric_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "metric_category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metric_category VARCHAR(50) NOT NULL"
      },
      {
        "name": "current_value",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_value DECIMAL(15,4) NOT NULL"
      },
      {
        "name": "target_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_value DECIMAL(15,4)"
      },
      {
        "name": "previous_value",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "previous_value DECIMAL(15,4)"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(20)"
      },
      {
        "name": "trend",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trend VARCHAR(20)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period VARCHAR(50) NOT NULL"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-monte-carlo-simulations",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "monte_carlo_simulations",
    "displayName": "Monte Carlo Simulations",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "simulation_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "simulation_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "simulation_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "simulation_type VARCHAR(100)"
      },
      {
        "name": "num_simulations",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "10000",
        "sourceLine": "num_simulations INTEGER DEFAULT 10000"
      },
      {
        "name": "variables",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variables JSONB"
      },
      {
        "name": "projection_years",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5",
        "sourceLine": "projection_years INTEGER DEFAULT 5"
      },
      {
        "name": "statistics",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "statistics JSONB"
      },
      {
        "name": "percentiles",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "percentiles JSONB"
      },
      {
        "name": "probabilities",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "probabilities JSONB"
      },
      {
        "name": "var_95",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "var_95 DECIMAL(15,2)"
      },
      {
        "name": "var_99",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "var_99 DECIMAL(15,2)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-profit-loss-records",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "profit_loss_records",
    "displayName": "Profit Loss Records",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period VARCHAR(50) NOT NULL"
      },
      {
        "name": "revenue",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revenue DECIMAL(15,2) NOT NULL"
      },
      {
        "name": "cost_of_goods_sold",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_of_goods_sold DECIMAL(15,2)"
      },
      {
        "name": "gross_profit",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gross_profit DECIMAL(15,2)"
      },
      {
        "name": "operating_expenses",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operating_expenses DECIMAL(15,2)"
      },
      {
        "name": "operating_income",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operating_income DECIMAL(15,2)"
      },
      {
        "name": "net_income",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "net_income DECIMAL(15,2)"
      },
      {
        "name": "earnings_per_share",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "earnings_per_share DECIMAL(10,4)"
      },
      {
        "name": "ai_insights",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_insights TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-report-execution-logs",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "report_execution_logs",
    "displayName": "Report Execution Logs",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "scheduled_report_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_report_id UUID REFERENCES scheduled_reports(id)"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(20) NOT NULL"
      },
      {
        "name": "started_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "started_at TIMESTAMP NOT NULL"
      },
      {
        "name": "completed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_at TIMESTAMP"
      },
      {
        "name": "error_message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_message TEXT"
      },
      {
        "name": "file_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_url VARCHAR(500)"
      },
      {
        "name": "recipients_notified",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "recipients_notified INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-routes-custom-views-js-report-templates",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "report_templates",
    "displayName": "Report Templates",
    "framework": "SQL",
    "sourceFile": "backend/routes/customViews.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(200) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "sections",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'::jsonb",
        "sourceLine": "sections JSONB DEFAULT '[]'::jsonb"
      },
      {
        "name": "kpi_definitions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'::jsonb",
        "sourceLine": "kpi_definitions JSONB DEFAULT '[]'::jsonb"
      },
      {
        "name": "created_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by VARCHAR(64)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-revenue-forecasts",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "revenue_forecasts",
    "displayName": "Revenue Forecasts",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "forecast_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "forecast_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "forecast_period",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "forecast_period VARCHAR(50) NOT NULL"
      },
      {
        "name": "predicted_revenue",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "predicted_revenue DECIMAL(15,2) NOT NULL"
      },
      {
        "name": "confidence_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_level DECIMAL(5,2)"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "assumptions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assumptions TEXT"
      },
      {
        "name": "ai_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending'"
      },
      {
        "name": "created_by",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by UUID REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-saved-queries",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "saved_queries",
    "displayName": "Saved Queries",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "query_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "query_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "query_text",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "query_text TEXT NOT NULL"
      },
      {
        "name": "visualization_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'table'",
        "sourceLine": "visualization_type VARCHAR(50) DEFAULT 'table'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-scenario-analyses",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "scenario_analyses",
    "displayName": "Scenario Analyses",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "scenario_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scenario_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "scenario_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scenario_type VARCHAR(100)"
      },
      {
        "name": "base_values",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "base_values JSONB"
      },
      {
        "name": "assumptions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assumptions JSONB"
      },
      {
        "name": "variables",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variables JSONB"
      },
      {
        "name": "projected_values",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projected_values JSONB"
      },
      {
        "name": "impact_summary",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact_summary JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-scheduled-reports",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "scheduled_reports",
    "displayName": "Scheduled Reports",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "report_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "report_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "report_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "schedule_frequency",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schedule_frequency VARCHAR(50) NOT NULL"
      },
      {
        "name": "schedule_day",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "schedule_day INTEGER"
      },
      {
        "name": "schedule_time",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'09:00'",
        "sourceLine": "schedule_time VARCHAR(10) DEFAULT '09:00'"
      },
      {
        "name": "recipients",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipients TEXT[]"
      },
      {
        "name": "include_sections",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "include_sections TEXT[]"
      },
      {
        "name": "format",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pdf'",
        "sourceLine": "format VARCHAR(20) DEFAULT 'pdf'"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "last_run",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_run TIMESTAMP"
      },
      {
        "name": "next_run",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_run TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-routes-scheduled-scans-js-scheduled-scans",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "scheduled_scans",
    "displayName": "Scheduled Scans",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/scheduledScans.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "scan_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scan_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "frequency",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'weekly'",
        "sourceLine": "frequency VARCHAR(50) NOT NULL DEFAULT 'weekly'"
      },
      {
        "name": "company_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id INTEGER"
      },
      {
        "name": "last_run",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_run TIMESTAMP"
      },
      {
        "name": "next_run",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_run TIMESTAMP"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "is_active BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER"
      },
      {
        "name": "result_summary",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_summary JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-tax-reports",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "tax_reports",
    "displayName": "Tax Reports",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "tax_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "tax_period",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_period VARCHAR(50) NOT NULL"
      },
      {
        "name": "taxable_income",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxable_income DECIMAL(15,2)"
      },
      {
        "name": "tax_liability",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_liability DECIMAL(15,2)"
      },
      {
        "name": "deductions",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deductions DECIMAL(15,2)"
      },
      {
        "name": "credits",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "credits DECIMAL(15,2)"
      },
      {
        "name": "effective_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "effective_rate DECIMAL(5,2)"
      },
      {
        "name": "filing_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "filing_status VARCHAR(20) DEFAULT 'pending'"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "ai_optimization_suggestions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_optimization_suggestions TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-trend-analyses",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "trend_analyses",
    "displayName": "Trend Analyses",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "metric_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "metric_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "analysis_period",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_period VARCHAR(50) NOT NULL"
      },
      {
        "name": "trend_direction",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trend_direction VARCHAR(20) NOT NULL"
      },
      {
        "name": "growth_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "growth_rate DECIMAL(10,2)"
      },
      {
        "name": "data_points",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "data_points JSONB"
      },
      {
        "name": "seasonality_detected",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "seasonality_detected BOOLEAN DEFAULT false"
      },
      {
        "name": "forecast_next_period",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "forecast_next_period DECIMAL(15,2)"
      },
      {
        "name": "ai_narrative",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_narrative TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-users",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'analyst'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'analyst'"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-financial-report-generator-backend-src-schema-sql-working-capital-analyses",
    "sourceProject": "AiFinancialReportGenerator",
    "name": "working_capital_analyses",
    "displayName": "Working Capital Analyses",
    "framework": "SQL",
    "sourceFile": "backend/src/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "gen_random_uuid()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
      },
      {
        "name": "company_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company_id UUID REFERENCES companies(id)"
      },
      {
        "name": "analysis_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "accounts_receivable",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accounts_receivable DECIMAL(15,2)"
      },
      {
        "name": "inventory",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inventory DECIMAL(15,2)"
      },
      {
        "name": "accounts_payable",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accounts_payable DECIMAL(15,2)"
      },
      {
        "name": "revenue",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "revenue DECIMAL(15,2)"
      },
      {
        "name": "cogs",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cogs DECIMAL(15,2)"
      },
      {
        "name": "dso",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dso DECIMAL(8,2)"
      },
      {
        "name": "dio",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dio DECIMAL(8,2)"
      },
      {
        "name": "dpo",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dpo DECIMAL(8,2)"
      },
      {
        "name": "cash_conversion_cycle",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cash_conversion_cycle DECIMAL(8,2)"
      },
      {
        "name": "working_capital",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "working_capital DECIMAL(15,2)"
      },
      {
        "name": "optimization_potential",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "optimization_potential DECIMAL(15,2)"
      },
      {
        "name": "recommendations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-models-schema-sql-accounts",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "accounts",
    "displayName": "Accounts",
    "framework": "SQL",
    "sourceFile": "backend/models/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "institution",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "institution VARCHAR(255)"
      },
      {
        "name": "account_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account_type VARCHAR(50)"
      },
      {
        "name": "balance",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "balance NUMERIC DEFAULT 0"
      },
      {
        "name": "currency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency VARCHAR(10) DEFAULT 'USD'"
      },
      {
        "name": "account_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account_number VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-models-migrate-js-agent-detected-subscriptions",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "agent_detected_subscriptions",
    "displayName": "Agent Detected Subscriptions",
    "framework": "SQL",
    "sourceFile": "backend/models/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id           SERIAL PRIMARY KEY"
      },
      {
        "name": "service_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "service_name VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount       NUMERIC"
      },
      {
        "name": "frequency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency    VARCHAR(50)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category     VARCHAR(100)"
      },
      {
        "name": "confidence",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence   VARCHAR(20)"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason       TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending_review'",
        "sourceLine": "status       VARCHAR(50) DEFAULT 'pending_review'"
      },
      {
        "name": "detected_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "detected_at  TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-models-migrate-js-ai-analysis-results",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "ai_analysis_results",
    "displayName": "Ai Analysis Results",
    "framework": "SQL",
    "sourceFile": "backend/models/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id          SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id     INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint    VARCHAR(100) NOT NULL"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result      JSONB NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at  TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-extensions-js-bank-links",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "bank_links",
    "displayName": "Bank Links",
    "framework": "SQL",
    "sourceFile": "backend/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "provider",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider VARCHAR(64)"
      },
      {
        "name": "institution_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "institution_name VARCHAR(255)"
      },
      {
        "name": "access_token",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "access_token VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(64) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-extensions-js-bill-pay-jobs",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "bill_pay_jobs",
    "displayName": "Bill Pay Jobs",
    "framework": "SQL",
    "sourceFile": "backend/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "payee",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payee VARCHAR(255)"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount NUMERIC(12,2)"
      },
      {
        "name": "scheduled_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'queued'",
        "sourceLine": "status VARCHAR(64) DEFAULT 'queued'"
      },
      {
        "name": "external_ref",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "external_ref VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-models-schema-sql-budgets",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "budgets",
    "displayName": "Budgets",
    "framework": "SQL",
    "sourceFile": "backend/models/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "monthly_limit",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monthly_limit NUMERIC"
      },
      {
        "name": "spent",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "spent NUMERIC DEFAULT 0"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'2024-03'",
        "sourceLine": "period VARCHAR(20) DEFAULT '2024-03'"
      },
      {
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by INTEGER REFERENCES users(id)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-extensions-js-expense-anomalies",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "expense_anomalies",
    "displayName": "Expense Anomalies",
    "framework": "SQL",
    "sourceFile": "backend/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "anomaly_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "anomaly_date DATE"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(64)"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount NUMERIC(12,2)"
      },
      {
        "name": "expected",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expected NUMERIC(12,2)"
      },
      {
        "name": "z_score",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "z_score NUMERIC(6,3)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status VARCHAR(32) DEFAULT 'open'"
      },
      {
        "name": "details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-models-migrate-js-finance-forecasts",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "finance_forecasts",
    "displayName": "Finance Forecasts",
    "framework": "SQL",
    "sourceFile": "backend/models/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id            SERIAL PRIMARY KEY"
      },
      {
        "name": "period",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period        VARCHAR(50) NOT NULL"
      },
      {
        "name": "forecast_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "forecast_data JSONB NOT NULL"
      },
      {
        "name": "generated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "generated_at  TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-models-schema-sql-finance-logs",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "finance_logs",
    "displayName": "Finance Logs",
    "framework": "SQL",
    "sourceFile": "backend/models/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "agent",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agent VARCHAR(100)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status VARCHAR(50)"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "duration_ms",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_ms INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-models-migrate-js-finance-negotiation-scripts",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "finance_negotiation_scripts",
    "displayName": "Finance Negotiation Scripts",
    "framework": "SQL",
    "sourceFile": "backend/models/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                SERIAL PRIMARY KEY"
      },
      {
        "name": "subscription_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subscription_id   INTEGER REFERENCES subscriptions(id) ON DELETE SET NULL"
      },
      {
        "name": "service_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "service_name      VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "strategy",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "strategy          VARCHAR(100)"
      },
      {
        "name": "call_script",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "call_script       TEXT"
      },
      {
        "name": "key_phrases",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "key_phrases       JSONB"
      },
      {
        "name": "estimated_savings",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_savings VARCHAR(100)"
      },
      {
        "name": "negotiable",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "negotiable        BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at        TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-models-migrate-js-finance-recommendations",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "finance_recommendations",
    "displayName": "Finance Recommendations",
    "framework": "SQL",
    "sourceFile": "backend/models/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                SERIAL PRIMARY KEY"
      },
      {
        "name": "rec_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "rec_id            VARCHAR(100) UNIQUE"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category          VARCHAR(100)"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "priority          VARCHAR(20)"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title             TEXT"
      },
      {
        "name": "current_monthly",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_monthly   NUMERIC"
      },
      {
        "name": "target_monthly",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_monthly    NUMERIC"
      },
      {
        "name": "estimated_savings",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_savings NUMERIC"
      },
      {
        "name": "specific_actions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specific_actions  JSONB"
      },
      {
        "name": "difficulty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "difficulty        VARCHAR(20)"
      },
      {
        "name": "agent",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "agent             VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at        TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-accounts-without-net-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_accounts_without_net.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-budgets-without-budget-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_budgets_without_budget.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-limited-spending-analytics-no-aggregations-beyond-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_limited_spending_analytics_no_aggregations_beyond_.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-no-bank-credit-card-sync-plaid-mx-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_bank_credit_card_sync_plaid_mx.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-no-bill-pay-integration-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_bill_pay_integration.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-no-investment-portfolio-tracking-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_investment_portfolio_tracking.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-no-mobile-app-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_mobile_app.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-no-notifications-layer-grep-0-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_notifications_layer_grep_0.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-no-tax-planning-module-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_tax_planning_module.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-no-webhooks-for-transaction-events-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_no_webhooks_for_transaction_events.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-only-7-frontend-pages-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_only_7_frontend_pages.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-subscriptions-without-subscription-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_subscriptions_without_subscription.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-the-agents-js-route-is-unfulfilled-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_the_agents_js_route_is_unfulfilled.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-gap-feat-transactions-without-categorize-js-gap-features",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gapFeat_transactions_without_categorize.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result TEXT"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-extensions-js-investment-holdings",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "investment_holdings",
    "displayName": "Investment Holdings",
    "framework": "SQL",
    "sourceFile": "backend/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "account_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account_name VARCHAR(255)"
      },
      {
        "name": "symbol",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "symbol VARCHAR(32)"
      },
      {
        "name": "quantity",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity NUMERIC(18,6)"
      },
      {
        "name": "avg_cost",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avg_cost NUMERIC(18,6)"
      },
      {
        "name": "last_price",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_price NUMERIC(18,6)"
      },
      {
        "name": "last_synced",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "last_synced TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-custom-views-js-savings-goals",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "savings_goals",
    "displayName": "Savings Goals",
    "framework": "SQL",
    "sourceFile": "backend/routes/customViews.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "target_amount",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "target_amount NUMERIC NOT NULL DEFAULT 0"
      },
      {
        "name": "current_amount",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_amount NUMERIC NOT NULL DEFAULT 0"
      },
      {
        "name": "monthly_contribution",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "monthly_contribution NUMERIC NOT NULL DEFAULT 0"
      },
      {
        "name": "alert_threshold_pct",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "80",
        "sourceLine": "alert_threshold_pct NUMERIC NOT NULL DEFAULT 80"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-models-schema-sql-subscriptions",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "subscriptions",
    "displayName": "Subscriptions",
    "framework": "SQL",
    "sourceFile": "backend/models/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "account_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE"
      },
      {
        "name": "service_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "service_name VARCHAR(255)"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount NUMERIC"
      },
      {
        "name": "frequency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'monthly'",
        "sourceLine": "frequency VARCHAR(50) DEFAULT 'monthly'"
      },
      {
        "name": "next_charge",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_charge DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "detected_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "detected_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-routes-extensions-js-tax-scenarios",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "tax_scenarios",
    "displayName": "Tax Scenarios",
    "framework": "SQL",
    "sourceFile": "backend/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "tax_year",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year INTEGER"
      },
      {
        "name": "filing_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filing_status VARCHAR(32)"
      },
      {
        "name": "gross_income",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gross_income NUMERIC(14,2)"
      },
      {
        "name": "deductions",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deductions NUMERIC(14,2)"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-models-schema-sql-transactions",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "transactions",
    "displayName": "Transactions",
    "framework": "SQL",
    "sourceFile": "backend/models/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "account_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE"
      },
      {
        "name": "merchant",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "merchant VARCHAR(255)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "amount",
        "type": "NUMERIC",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount NUMERIC NOT NULL"
      },
      {
        "name": "transaction_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'debit'",
        "sourceLine": "transaction_type VARCHAR(50) DEFAULT 'debit'"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_DATE",
        "sourceLine": "date DATE DEFAULT CURRENT_DATE"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'completed'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-personal-finance-multi-agent-backend-models-schema-sql-users",
    "sourceProject": "AIPersonalFinanceMultiAgent",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/models/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-ai-features-js-ai-audit-risks",
    "sourceProject": "AiTaxPrep",
    "name": "ai_audit_risks",
    "displayName": "Ai Audit Risks",
    "framework": "SQL",
    "sourceFile": "server/db/migrate-ai-features.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "overall_risk",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'low'",
        "sourceLine": "overall_risk VARCHAR(20) DEFAULT 'low'"
      },
      {
        "name": "risk_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "risk_score INTEGER DEFAULT 0"
      },
      {
        "name": "risk_factors",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "risk_factors JSONB DEFAULT '[]'"
      },
      {
        "name": "positive_factors",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "positive_factors JSONB DEFAULT '[]'"
      },
      {
        "name": "recommendations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "recommendations JSONB DEFAULT '[]'"
      },
      {
        "name": "analyzed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-ai-features-js-ai-deduction-finder",
    "sourceProject": "AiTaxPrep",
    "name": "ai_deduction_finder",
    "displayName": "Ai Deduction Finder",
    "framework": "SQL",
    "sourceFile": "server/db/migrate-ai-features.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100) NOT NULL"
      },
      {
        "name": "deduction_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deduction_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "estimated_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "estimated_amount DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "requirements",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requirements TEXT"
      },
      {
        "name": "irs_reference",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "irs_reference VARCHAR(100)"
      },
      {
        "name": "confidence",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "confidence VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "is_claimed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_claimed BOOLEAN DEFAULT false"
      },
      {
        "name": "is_dismissed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_dismissed BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-ai-features-js-ai-estimated-taxes",
    "sourceProject": "AiTaxPrep",
    "name": "ai_estimated_taxes",
    "displayName": "Ai Estimated Taxes",
    "framework": "SQL",
    "sourceFile": "server/db/migrate-ai-features.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "quarter",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quarter INTEGER NOT NULL"
      },
      {
        "name": "due_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "due_date DATE NOT NULL"
      },
      {
        "name": "estimated_income",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "estimated_income DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "estimated_deductions",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "estimated_deductions DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "estimated_tax",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "estimated_tax DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "required_payment",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "required_payment DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "ytd_payments",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "ytd_payments DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "remaining_balance",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "remaining_balance DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "safe_harbor_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "safe_harbor_amount DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "penalty_risk",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'none'",
        "sourceLine": "penalty_risk VARCHAR(20) DEFAULT 'none'"
      },
      {
        "name": "ai_recommendations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "ai_recommendations JSONB DEFAULT '[]'"
      },
      {
        "name": "calculation_details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "calculation_details JSONB DEFAULT '{}'"
      },
      {
        "name": "is_paid",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_paid BOOLEAN DEFAULT false"
      },
      {
        "name": "paid_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "paid_amount DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "paid_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paid_date DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-ai-features-js-ai-receipt-scans",
    "sourceProject": "AiTaxPrep",
    "name": "ai_receipt_scans",
    "displayName": "Ai Receipt Scans",
    "framework": "SQL",
    "sourceFile": "server/db/migrate-ai-features.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor VARCHAR(255)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "expense_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expense_date DATE"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "items",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "items JSONB DEFAULT '[]'"
      },
      {
        "name": "is_tax_deductible",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_tax_deductible BOOLEAN DEFAULT false"
      },
      {
        "name": "deduction_category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deduction_category VARCHAR(100)"
      },
      {
        "name": "confidence",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "confidence VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "raw_ocr_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw_ocr_data JSONB"
      },
      {
        "name": "file_path",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_path VARCHAR(500)"
      },
      {
        "name": "file_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_name VARCHAR(255)"
      },
      {
        "name": "is_imported",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_imported BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-ai-tax-advice",
    "sourceProject": "AiTaxPrep",
    "name": "ai_tax_advice",
    "displayName": "Ai Tax Advice",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "advice_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "advice_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "advice_text",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "advice_text TEXT NOT NULL"
      },
      {
        "name": "potential_savings",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "potential_savings DECIMAL(12,2)"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "is_read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_read BOOLEAN DEFAULT false"
      },
      {
        "name": "is_applied",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_applied BOOLEAN DEFAULT false"
      },
      {
        "name": "action_items",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "action_items JSONB DEFAULT '[]'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-ai-features-js-ai-tax-planning",
    "sourceProject": "AiTaxPrep",
    "name": "ai_tax_planning",
    "displayName": "Ai Tax Planning",
    "framework": "SQL",
    "sourceFile": "server/db/migrate-ai-features.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "scenario_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scenario_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "scenario_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scenario_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "current_tax",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_tax DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "projected_tax",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "projected_tax DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "potential_savings",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "potential_savings DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "assumptions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "assumptions JSONB DEFAULT '{}'"
      },
      {
        "name": "action_items",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "action_items JSONB DEFAULT '[]'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "is_implemented",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_implemented BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-audit-log",
    "sourceProject": "AiTaxPrep",
    "name": "audit_log",
    "displayName": "Audit Log",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "old_values",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "old_values JSONB"
      },
      {
        "name": "new_values",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "new_values JSONB"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(45)"
      },
      {
        "name": "user_agent",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_agent TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-features-js-bulk-operations-log",
    "sourceProject": "AiTaxPrep",
    "name": "bulk_operations_log",
    "displayName": "Bulk Operations Log",
    "framework": "SQL",
    "sourceFile": "server/db/migrate-features.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "operation_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operation_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_ids",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_ids JSONB NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'completed'"
      },
      {
        "name": "details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-chat-history",
    "sourceProject": "AiTaxPrep",
    "name": "chat_history",
    "displayName": "Chat History",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE SET NULL"
      },
      {
        "name": "messages",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "messages JSONB NOT NULL"
      },
      {
        "name": "response",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response TEXT NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-cpa-workflow-js-cpa-assignments",
    "sourceProject": "AiTaxPrep",
    "name": "cpa_assignments",
    "displayName": "Cpa Assignments",
    "framework": "SQL",
    "sourceFile": "server/routes/cpaWorkflow.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER NOT NULL"
      },
      {
        "name": "cpa_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cpa_email VARCHAR(200)"
      },
      {
        "name": "cpa_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cpa_name VARCHAR(200)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(40) NOT NULL DEFAULT 'draft'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-cpa-workflow-js-cpa-review-notes",
    "sourceProject": "AiTaxPrep",
    "name": "cpa_review_notes",
    "displayName": "Cpa Review Notes",
    "framework": "SQL",
    "sourceFile": "server/routes/cpaWorkflow.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "assignment_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignment_id INTEGER REFERENCES cpa_assignments(id) ON DELETE CASCADE"
      },
      {
        "name": "author",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author VARCHAR(40) NOT NULL"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body TEXT NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-deductions",
    "sourceProject": "AiTaxPrep",
    "name": "deductions",
    "displayName": "Deductions",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description VARCHAR(500)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "is_itemized",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_itemized BOOLEAN DEFAULT false"
      },
      {
        "name": "receipt_path",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receipt_path VARCHAR(500)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-dependents",
    "sourceProject": "AiTaxPrep",
    "name": "dependents",
    "displayName": "Dependents",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "first_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "last_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "relationship",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "relationship VARCHAR(50) NOT NULL"
      },
      {
        "name": "date_of_birth",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_of_birth DATE NOT NULL"
      },
      {
        "name": "ssn_encrypted",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ssn_encrypted VARCHAR(255)"
      },
      {
        "name": "months_lived_with",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "12",
        "sourceLine": "months_lived_with INTEGER DEFAULT 12"
      },
      {
        "name": "is_student",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_student BOOLEAN DEFAULT false"
      },
      {
        "name": "is_disabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_disabled BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-documents",
    "sourceProject": "AiTaxPrep",
    "name": "documents",
    "displayName": "Documents",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "document_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "file_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "file_path",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_path VARCHAR(500) NOT NULL"
      },
      {
        "name": "file_size",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_size INTEGER"
      },
      {
        "name": "mime_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mime_type VARCHAR(100)"
      },
      {
        "name": "upload_date",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "processed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "processed BOOLEAN DEFAULT false"
      },
      {
        "name": "extracted_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "extracted_data JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-engagement-letters-js-engagement-letters",
    "sourceProject": "AiTaxPrep",
    "name": "engagement_letters",
    "displayName": "Engagement Letters",
    "framework": "SQL",
    "sourceFile": "server/routes/engagementLetters.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER NOT NULL"
      },
      {
        "name": "template_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "template_key VARCHAR(80)"
      },
      {
        "name": "client_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client_name VARCHAR(200)"
      },
      {
        "name": "tax_year",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year VARCHAR(8)"
      },
      {
        "name": "fee",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fee VARCHAR(40)"
      },
      {
        "name": "firm",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm VARCHAR(200)"
      },
      {
        "name": "rendered",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rendered TEXT NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-expense-categories",
    "sourceProject": "AiTaxPrep",
    "name": "expense_categories",
    "displayName": "Expense Categories",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "is_deductible",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_deductible BOOLEAN DEFAULT true"
      },
      {
        "name": "deduction_limit",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deduction_limit DECIMAL(12,2)"
      },
      {
        "name": "requires_receipt",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "requires_receipt BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-gap-limited-cpa-coordination-beyond-engagement-letters-js-gap-features",
    "sourceProject": "AiTaxPrep",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapLimitedCpaCoordinationBeyondEngagementLetters.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-gap-limited-integrations-module-exists-but-not-deeply-wired-js-gap-features",
    "sourceProject": "AiTaxPrep",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapLimitedIntegrationsModuleExistsButNotDeeplyWired.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-gap-no-audit-log-subsystem-js-gap-features",
    "sourceProject": "AiTaxPrep",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoAuditLogSubsystem.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-gap-no-automated-audit-risk-early-warning-monitor-js-gap-features",
    "sourceProject": "AiTaxPrep",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoAutomatedAuditRiskEarlyWarningMonitor.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-gap-no-e-filing-integration-efin-irs-mef-js-gap-features",
    "sourceProject": "AiTaxPrep",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoEFilingIntegrationEfinIrsMef.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-gap-no-estimated-payment-planning-ai-js-gap-features",
    "sourceProject": "AiTaxPrep",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoEstimatedPaymentPlanningAi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-gap-no-state-local-tax-optimization-ai-js-gap-features",
    "sourceProject": "AiTaxPrep",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoStateLocalTaxOptimizationAi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-gap-no-tax-plan-comparison-standard-vs-itemized-visualizations-js-gap-features",
    "sourceProject": "AiTaxPrep",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoTaxPlanComparisonStandardVsItemizedVisualizations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-gap-no-webhooks-notifications-system-js-gap-features",
    "sourceProject": "AiTaxPrep",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoWebhooksNotificationsSystem.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-routes-gap-no-year-over-year-comparison-and-anomaly-detection-js-gap-features",
    "sourceProject": "AiTaxPrep",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gapNoYearOverYearComparisonAndAnomalyDetection.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug TEXT NOT NULL"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-income-sources",
    "sourceProject": "AiTaxPrep",
    "name": "income_sources",
    "displayName": "Income Sources",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "source_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "employer_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employer_name VARCHAR(255)"
      },
      {
        "name": "employer_ein",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employer_ein VARCHAR(20)"
      },
      {
        "name": "employer_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employer_address VARCHAR(500)"
      },
      {
        "name": "wages",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "wages DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "federal_tax_withheld",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "federal_tax_withheld DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "state_tax_withheld",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "state_tax_withheld DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "social_security_wages",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "social_security_wages DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "social_security_tax",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "social_security_tax DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "medicare_wages",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "medicare_wages DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "medicare_tax",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "medicare_tax DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "other_income",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "other_income DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-features-js-notifications",
    "sourceProject": "AiTaxPrep",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "server/db/migrate-features.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'info'",
        "sourceLine": "type VARCHAR(50) NOT NULL DEFAULT 'info'"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT NOT NULL"
      },
      {
        "name": "is_read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_read BOOLEAN DEFAULT false"
      },
      {
        "name": "action_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action_url VARCHAR(500)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-features-js-password-reset-tokens",
    "sourceProject": "AiTaxPrep",
    "name": "password_reset_tokens",
    "displayName": "Password Reset Tokens",
    "framework": "SQL",
    "sourceFile": "server/db/migrate-features.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "token",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "token VARCHAR(255) NOT NULL UNIQUE"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP NOT NULL"
      },
      {
        "name": "used",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "used BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-features-js-rate-limit-log",
    "sourceProject": "AiTaxPrep",
    "name": "rate_limit_log",
    "displayName": "Rate Limit Log",
    "framework": "SQL",
    "sourceFile": "server/db/migrate-features.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(45) NOT NULL"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(255) NOT NULL"
      },
      {
        "name": "request_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "request_count INTEGER DEFAULT 1"
      },
      {
        "name": "window_start",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "window_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-state-tax-rates",
    "sourceProject": "AiTaxPrep",
    "name": "state_tax_rates",
    "displayName": "State Tax Rates",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "state_code",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state_code VARCHAR(2) NOT NULL"
      },
      {
        "name": "state_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "year",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year INTEGER NOT NULL"
      },
      {
        "name": "has_income_tax",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "has_income_tax BOOLEAN DEFAULT true"
      },
      {
        "name": "is_flat_rate",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_flat_rate BOOLEAN DEFAULT false"
      },
      {
        "name": "flat_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "flat_rate DECIMAL(5,4)"
      },
      {
        "name": "brackets",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brackets JSONB"
      },
      {
        "name": "standard_deduction",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "standard_deduction DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "personal_exemption",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "personal_exemption DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-tax-calculations",
    "sourceProject": "AiTaxPrep",
    "name": "tax_calculations",
    "displayName": "Tax Calculations",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "gross_income",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "gross_income DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "adjusted_gross_income",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "adjusted_gross_income DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "taxable_income",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxable_income DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "standard_deduction",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "standard_deduction DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "itemized_deduction",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "itemized_deduction DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "total_credits",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_credits DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "federal_tax_liability",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "federal_tax_liability DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "state_tax_liability",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "state_tax_liability DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "self_employment_tax",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "self_employment_tax DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "total_tax_withheld",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_tax_withheld DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "calculated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-tax-credits",
    "sourceProject": "AiTaxPrep",
    "name": "tax_credits",
    "displayName": "Tax Credits",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "credit_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "credit_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "description",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description VARCHAR(500)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "is_refundable",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_refundable BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-tax-forms",
    "sourceProject": "AiTaxPrep",
    "name": "tax_forms",
    "displayName": "Tax Forms",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "form_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "form_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "form_data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "form_data JSONB"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "generated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "generated_at TIMESTAMP"
      },
      {
        "name": "submitted_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submitted_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-tax-interviews",
    "sourceProject": "AiTaxPrep",
    "name": "tax_interviews",
    "displayName": "Tax Interviews",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "current_section",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'personal_info'",
        "sourceLine": "current_section VARCHAR(100) DEFAULT 'personal_info'"
      },
      {
        "name": "answers",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "answers JSONB DEFAULT '{}'"
      },
      {
        "name": "completed_sections",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "completed_sections JSONB DEFAULT '[]'"
      },
      {
        "name": "progress",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "progress INTEGER DEFAULT 0"
      },
      {
        "name": "is_complete",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_complete BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-tax-years",
    "sourceProject": "AiTaxPrep",
    "name": "tax_years",
    "displayName": "Tax Years",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "year",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "year INTEGER NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'in_progress'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'in_progress'"
      },
      {
        "name": "federal_refund",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "federal_refund DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "federal_owed",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "federal_owed DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "state_refund",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "state_refund DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "state_owed",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "state_owed DECIMAL(12,2) DEFAULT 0"
      },
      {
        "name": "submitted_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "submitted_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-user-expenses",
    "sourceProject": "AiTaxPrep",
    "name": "user_expenses",
    "displayName": "User Expenses",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "tax_year_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax_year_id INTEGER REFERENCES tax_years(id) ON DELETE CASCADE"
      },
      {
        "name": "category_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category_id INTEGER REFERENCES expense_categories(id)"
      },
      {
        "name": "description",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description VARCHAR(500)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "expense_date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expense_date DATE NOT NULL"
      },
      {
        "name": "vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor VARCHAR(255)"
      },
      {
        "name": "receipt_path",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receipt_path VARCHAR(500)"
      },
      {
        "name": "is_business_expense",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "is_business_expense BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-features-js-user-sessions",
    "sourceProject": "AiTaxPrep",
    "name": "user_sessions",
    "displayName": "User Sessions",
    "framework": "SQL",
    "sourceFile": "server/db/migrate-features.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "token_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "token_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "ip_address",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip_address VARCHAR(45)"
      },
      {
        "name": "user_agent",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_agent TEXT"
      },
      {
        "name": "is_active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "is_active BOOLEAN DEFAULT true"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-tax-prep-server-db-migrate-js-users",
    "sourceProject": "AiTaxPrep",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "server/db/migrate.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "first_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "last_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(20)"
      },
      {
        "name": "ssn_encrypted",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ssn_encrypted VARCHAR(255)"
      },
      {
        "name": "date_of_birth",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date_of_birth DATE"
      },
      {
        "name": "filing_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'single'",
        "sourceLine": "filing_status VARCHAR(50) DEFAULT 'single'"
      },
      {
        "name": "address_street",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address_street VARCHAR(255)"
      },
      {
        "name": "address_city",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address_city VARCHAR(100)"
      },
      {
        "name": "address_state",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address_state VARCHAR(50)"
      },
      {
        "name": "address_zip",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address_zip VARCHAR(20)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "cash-flow-src-api-routes-batch09-gap-ai-js-gap-features",
    "sourceProject": "cash_flow",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/api/routes/batch09GapAi.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "cash-flow-src-api-routes-batch09-gap-nonai-js-gap-features",
    "sourceProject": "cash_flow",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "src/api/routes/batch09GapNonai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-ai-analysis",
    "sourceProject": "financialServices",
    "name": "AIAnalysis",
    "displayName": "AI Analysis",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "type",
        "type": "AIAnalysisType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            AIAnalysisType"
      },
      {
        "name": "input",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input           Json"
      },
      {
        "name": "output",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output          Json"
      },
      {
        "name": "confidence",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence      Decimal?"
      },
      {
        "name": "status",
        "type": "AIAnalysisStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status          AIAnalysisStatus @default(PENDING)"
      },
      {
        "name": "error",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error           String?"
      },
      {
        "name": "processingTime",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "processingTime  Int?      // in milliseconds"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-ai-insight",
    "sourceProject": "financialServices",
    "name": "AIInsight",
    "displayName": "AI Insight",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           String"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String    @db.Text"
      },
      {
        "name": "severity",
        "type": "InsightSeverity",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "INFO",
        "sourceLine": "severity        InsightSeverity @default(INFO)"
      },
      {
        "name": "data",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "data            Json?"
      },
      {
        "name": "isRead",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isRead          Boolean   @default(false)"
      },
      {
        "name": "isDismissed",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isDismissed     Boolean   @default(false)"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-audit-log",
    "sourceProject": "financialServices",
    "name": "AuditLog",
    "displayName": "Audit Log",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "action",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action          String"
      },
      {
        "name": "entityType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entityType      String"
      },
      {
        "name": "entityId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entityId        String"
      },
      {
        "name": "oldValue",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "oldValue        Json?"
      },
      {
        "name": "newValue",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "newValue        Json?"
      },
      {
        "name": "ipAddress",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ipAddress       String?"
      },
      {
        "name": "userAgent",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userAgent       String?"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-bank-account",
    "sourceProject": "financialServices",
    "name": "BankAccount",
    "displayName": "Bank Account",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "accountNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountNumber   String?"
      },
      {
        "name": "routingNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "routingNumber   String?"
      },
      {
        "name": "accountType",
        "type": "BankAccountType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountType     BankAccountType"
      },
      {
        "name": "institution",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "institution     String?"
      },
      {
        "name": "balance",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "balance         Decimal   @default(0)"
      },
      {
        "name": "currency",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"USD\"",
        "sourceLine": "currency        String    @default(\"USD\")"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive        Boolean   @default(true)"
      },
      {
        "name": "lastSyncedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastSyncedAt    DateTime?"
      },
      {
        "name": "plaidAccessToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plaidAccessToken String?"
      },
      {
        "name": "plaidItemId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plaidItemId     String?"
      },
      {
        "name": "plaidAccountId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plaidAccountId  String?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "transactions",
        "type": "Transaction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactions    Transaction[]"
      },
      {
        "name": "reconciliations",
        "type": "Reconciliation[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reconciliations Reconciliation[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-budget",
    "sourceProject": "financialServices",
    "name": "Budget",
    "displayName": "Budget",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "fiscalYear",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fiscalYear      Int"
      },
      {
        "name": "status",
        "type": "BudgetStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          BudgetStatus @default(DRAFT)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "lines",
        "type": "BudgetLine[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lines           BudgetLine[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-budget-line",
    "sourceProject": "financialServices",
    "name": "BudgetLine",
    "displayName": "Budget Line",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "month",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "month           Int       // 1-12"
      },
      {
        "name": "amount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Decimal"
      },
      {
        "name": "budget",
        "type": "Budget",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget          Budget    @relation(fields: [budgetId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "budgetId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budgetId        String"
      },
      {
        "name": "account",
        "type": "ChartOfAccount",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account         ChartOfAccount @relation(fields: [accountId], references: [id])"
      },
      {
        "name": "accountId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountId       String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-chart-of-account",
    "sourceProject": "financialServices",
    "name": "ChartOfAccount",
    "displayName": "Chart Of Account",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "accountNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountNumber   String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "type",
        "type": "AccountType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            AccountType"
      },
      {
        "name": "subType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subType         String?"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive        Boolean   @default(true)"
      },
      {
        "name": "isBankAccount",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isBankAccount   Boolean   @default(false)"
      },
      {
        "name": "parentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parentId        String?"
      },
      {
        "name": "firm",
        "type": "Firm",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm            Firm      @relation(fields: [firmId], references: [id])"
      },
      {
        "name": "firmId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firmId          String"
      },
      {
        "name": "parent",
        "type": "ChartOfAccount?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent          ChartOfAccount? @relation(\"AccountHierarchy\", fields: [parentId], references: [id])"
      },
      {
        "name": "children",
        "type": "ChartOfAccount[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "children        ChartOfAccount[] @relation(\"AccountHierarchy\")"
      },
      {
        "name": "transactions",
        "type": "Transaction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactions    Transaction[]"
      },
      {
        "name": "journalLines",
        "type": "JournalLine[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "journalLines    JournalLine[]"
      },
      {
        "name": "budgetLines",
        "type": "BudgetLine[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budgetLines     BudgetLine[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-client",
    "sourceProject": "financialServices",
    "name": "Client",
    "displayName": "Client",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id                String    @id @default(uuid())"
      },
      {
        "name": "clientNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "clientNumber      String    @unique"
      },
      {
        "name": "type",
        "type": "ClientType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "INDIVIDUAL",
        "sourceLine": "type              ClientType @default(INDIVIDUAL)"
      },
      {
        "name": "status",
        "type": "ClientStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status            ClientStatus @default(ACTIVE)"
      },
      {
        "name": "firstName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName         String?"
      },
      {
        "name": "lastName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName          String?"
      },
      {
        "name": "dateOfBirth",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dateOfBirth       DateTime?"
      },
      {
        "name": "ssn",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ssn               String?"
      },
      {
        "name": "businessName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "businessName      String?"
      },
      {
        "name": "ein",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ein               String?"
      },
      {
        "name": "entityType",
        "type": "EntityType?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entityType        EntityType?"
      },
      {
        "name": "stateOfIncorporation",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stateOfIncorporation String?"
      },
      {
        "name": "dateOfIncorporation",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dateOfIncorporation DateTime?"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email             String?"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone             String?"
      },
      {
        "name": "mobilePhone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mobilePhone       String?"
      },
      {
        "name": "fax",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fax               String?"
      },
      {
        "name": "website",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "website           String?"
      },
      {
        "name": "address",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address           String?"
      },
      {
        "name": "address2",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address2          String?"
      },
      {
        "name": "city",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city              String?"
      },
      {
        "name": "state",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state             String?"
      },
      {
        "name": "zipCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zipCode           String?"
      },
      {
        "name": "country",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"USA\"",
        "sourceLine": "country           String    @default(\"USA\")"
      },
      {
        "name": "billingEmail",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billingEmail      String?"
      },
      {
        "name": "billingAddress",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billingAddress    String?"
      },
      {
        "name": "billingCity",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billingCity       String?"
      },
      {
        "name": "billingState",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billingState      String?"
      },
      {
        "name": "billingZipCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "billingZipCode    String?"
      },
      {
        "name": "portalEnabled",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "portalEnabled     Boolean   @default(false)"
      },
      {
        "name": "portalEmail",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portalEmail       String?"
      },
      {
        "name": "portalPassword",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portalPassword    String?"
      },
      {
        "name": "firm",
        "type": "Firm",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm              Firm      @relation(fields: [firmId], references: [id])"
      },
      {
        "name": "firmId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firmId            String"
      },
      {
        "name": "contacts",
        "type": "ClientContact[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contacts          ClientContact[]"
      },
      {
        "name": "assignments",
        "type": "ClientAssignment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignments       ClientAssignment[]"
      },
      {
        "name": "documents",
        "type": "Document[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documents         Document[]"
      },
      {
        "name": "engagements",
        "type": "Engagement[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engagements       Engagement[]"
      },
      {
        "name": "notes",
        "type": "Note[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes             Note[]"
      },
      {
        "name": "bankAccounts",
        "type": "BankAccount[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankAccounts      BankAccount[]"
      },
      {
        "name": "transactions",
        "type": "Transaction[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transactions      Transaction[]"
      },
      {
        "name": "taxReturns",
        "type": "TaxReturn[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxReturns        TaxReturn[]"
      },
      {
        "name": "employees",
        "type": "Employee[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employees         Employee[]"
      },
      {
        "name": "payrollRuns",
        "type": "PayrollRun[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payrollRuns       PayrollRun[]"
      },
      {
        "name": "invoices",
        "type": "Invoice[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoices          Invoice[]"
      },
      {
        "name": "tasks",
        "type": "Task[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tasks             Task[]"
      },
      {
        "name": "journalEntries",
        "type": "JournalEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "journalEntries    JournalEntry[]"
      },
      {
        "name": "budgets",
        "type": "Budget[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budgets           Budget[]"
      },
      {
        "name": "healthScores",
        "type": "FinancialHealthScore[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "healthScores      FinancialHealthScore[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-client-assignment",
    "sourceProject": "financialServices",
    "name": "ClientAssignment",
    "displayName": "Client Assignment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String    @id @default(uuid())"
      },
      {
        "name": "role",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role          String?   // e.g., \"Lead Partner\", \"Staff Accountant\""
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client    @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user          User      @relation(fields: [userId], references: [id])"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId        String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-client-contact",
    "sourceProject": "financialServices",
    "name": "ClientContact",
    "displayName": "Client Contact",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String    @id @default(uuid())"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName     String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName      String"
      },
      {
        "name": "title",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title         String?"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email         String?"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "mobilePhone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mobilePhone   String?"
      },
      {
        "name": "isPrimary",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isPrimary     Boolean   @default(false)"
      },
      {
        "name": "role",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role          String?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client        Client    @relation(fields: [clientId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId      String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-document",
    "sourceProject": "financialServices",
    "name": "Document",
    "displayName": "Document",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "type",
        "type": "DocumentType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            DocumentType"
      },
      {
        "name": "category",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String?"
      },
      {
        "name": "fileUrl",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fileUrl         String"
      },
      {
        "name": "fileSize",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fileSize        Int"
      },
      {
        "name": "mimeType",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mimeType        String"
      },
      {
        "name": "version",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "version         Int       @default(1)"
      },
      {
        "name": "status",
        "type": "DocumentStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          DocumentStatus @default(DRAFT)"
      },
      {
        "name": "taxYear",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxYear         Int?"
      },
      {
        "name": "expiresAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt       DateTime?"
      },
      {
        "name": "retainUntil",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retainUntil     DateTime?"
      },
      {
        "name": "isTemplate",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isTemplate      Boolean   @default(false)"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client?   @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String?"
      },
      {
        "name": "uploadedBy",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploadedBy      User      @relation(fields: [uploadedById], references: [id])"
      },
      {
        "name": "uploadedById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploadedById    String"
      },
      {
        "name": "folder",
        "type": "DocumentFolder?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "folder          DocumentFolder? @relation(fields: [folderId], references: [id])"
      },
      {
        "name": "folderId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "folderId        String?"
      },
      {
        "name": "engagement",
        "type": "Engagement?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engagement      Engagement? @relation(fields: [engagementId], references: [id])"
      },
      {
        "name": "engagementId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engagementId    String?"
      },
      {
        "name": "versions",
        "type": "DocumentVersion[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "versions        DocumentVersion[]"
      },
      {
        "name": "signatures",
        "type": "DocumentSignature[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signatures      DocumentSignature[]"
      },
      {
        "name": "requests",
        "type": "DocumentRequest[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requests        DocumentRequest[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-document-folder",
    "sourceProject": "financialServices",
    "name": "DocumentFolder",
    "displayName": "Document Folder",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "parentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parentId      String?"
      },
      {
        "name": "parent",
        "type": "DocumentFolder?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent        DocumentFolder? @relation(\"FolderHierarchy\", fields: [parentId], references: [id])"
      },
      {
        "name": "children",
        "type": "DocumentFolder[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "children      DocumentFolder[] @relation(\"FolderHierarchy\")"
      },
      {
        "name": "documents",
        "type": "Document[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documents     Document[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-document-request",
    "sourceProject": "financialServices",
    "name": "DocumentRequest",
    "displayName": "Document Request",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String    @id @default(uuid())"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title         String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "dueDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate       DateTime?"
      },
      {
        "name": "status",
        "type": "RequestStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status        RequestStatus @default(PENDING)"
      },
      {
        "name": "document",
        "type": "Document?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document      Document? @relation(fields: [documentId], references: [id])"
      },
      {
        "name": "documentId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentId    String?"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-document-request-template",
    "sourceProject": "financialServices",
    "name": "DocumentRequestTemplate",
    "displayName": "Document Request Template",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive        Boolean   @default(true)"
      },
      {
        "name": "isSystem",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isSystem        Boolean   @default(false)"
      },
      {
        "name": "sortOrder",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sortOrder       Int       @default(0)"
      },
      {
        "name": "firm",
        "type": "Firm?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm            Firm?     @relation(fields: [firmId], references: [id])"
      },
      {
        "name": "firmId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firmId          String?"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-document-signature",
    "sourceProject": "financialServices",
    "name": "DocumentSignature",
    "displayName": "Document Signature",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String    @id @default(uuid())"
      },
      {
        "name": "signerName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signerName    String"
      },
      {
        "name": "signerEmail",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signerEmail   String"
      },
      {
        "name": "status",
        "type": "SignatureStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status        SignatureStatus @default(PENDING)"
      },
      {
        "name": "signedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signedAt      DateTime?"
      },
      {
        "name": "ipAddress",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ipAddress     String?"
      },
      {
        "name": "signatureData",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signatureData String?"
      },
      {
        "name": "document",
        "type": "Document",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document      Document  @relation(fields: [documentId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "documentId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentId    String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-document-template",
    "sourceProject": "financialServices",
    "name": "DocumentTemplate",
    "displayName": "Document Template",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description   String?"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category      String"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content       String    @db.Text"
      },
      {
        "name": "variables",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "variables     Json?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "firm",
        "type": "Firm",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm          Firm      @relation(fields: [firmId], references: [id])"
      },
      {
        "name": "firmId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firmId        String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-document-version",
    "sourceProject": "financialServices",
    "name": "DocumentVersion",
    "displayName": "Document Version",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String    @id @default(uuid())"
      },
      {
        "name": "version",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version       Int"
      },
      {
        "name": "fileUrl",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fileUrl       String"
      },
      {
        "name": "fileSize",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fileSize      Int"
      },
      {
        "name": "changeNote",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "changeNote    String?"
      },
      {
        "name": "document",
        "type": "Document",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "document      Document  @relation(fields: [documentId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "documentId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentId    String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-employee",
    "sourceProject": "financialServices",
    "name": "Employee",
    "displayName": "Employee",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "employeeNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employeeNumber  String"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName       String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName        String"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email           String?"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone           String?"
      },
      {
        "name": "ssn",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ssn             String?"
      },
      {
        "name": "dateOfBirth",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dateOfBirth     DateTime?"
      },
      {
        "name": "hireDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hireDate        DateTime"
      },
      {
        "name": "terminationDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "terminationDate DateTime?"
      },
      {
        "name": "status",
        "type": "EmployeeStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status          EmployeeStatus @default(ACTIVE)"
      },
      {
        "name": "address",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address         String?"
      },
      {
        "name": "city",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city            String?"
      },
      {
        "name": "state",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state           String?"
      },
      {
        "name": "zipCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zipCode         String?"
      },
      {
        "name": "payType",
        "type": "PayType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payType         PayType"
      },
      {
        "name": "payRate",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payRate         Decimal"
      },
      {
        "name": "payFrequency",
        "type": "PayFrequency",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payFrequency    PayFrequency"
      },
      {
        "name": "federalFilingStatus",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "federalFilingStatus String?"
      },
      {
        "name": "federalAllowances",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "federalAllowances Int     @default(0)"
      },
      {
        "name": "stateFilingStatus",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stateFilingStatus String?"
      },
      {
        "name": "stateAllowances",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "stateAllowances Int       @default(0)"
      },
      {
        "name": "additionalWithholding",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "additionalWithholding Decimal @default(0)"
      },
      {
        "name": "directDepositEnabled",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "directDepositEnabled Boolean @default(false)"
      },
      {
        "name": "bankName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankName        String?"
      },
      {
        "name": "bankRoutingNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankRoutingNumber String?"
      },
      {
        "name": "bankAccountNumber",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankAccountNumber String?"
      },
      {
        "name": "bankAccountType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankAccountType String?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "payrollItems",
        "type": "PayrollItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payrollItems    PayrollItem[]"
      },
      {
        "name": "taxForms",
        "type": "EmployeeTaxForm[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxForms        EmployeeTaxForm[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-employee-tax-form",
    "sourceProject": "financialServices",
    "name": "EmployeeTaxForm",
    "displayName": "Employee Tax Form",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "type",
        "type": "TaxFormType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            TaxFormType"
      },
      {
        "name": "taxYear",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxYear         Int"
      },
      {
        "name": "status",
        "type": "TaxFormStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          TaxFormStatus @default(DRAFT)"
      },
      {
        "name": "data",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "data            Json?"
      },
      {
        "name": "generatedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "generatedAt     DateTime?"
      },
      {
        "name": "filedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filedAt         DateTime?"
      },
      {
        "name": "employee",
        "type": "Employee",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employee        Employee  @relation(fields: [employeeId], references: [id])"
      },
      {
        "name": "employeeId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employeeId      String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-engagement",
    "sourceProject": "financialServices",
    "name": "Engagement",
    "displayName": "Engagement",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "type",
        "type": "EngagementType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            EngagementType"
      },
      {
        "name": "status",
        "type": "EngagementStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ACTIVE",
        "sourceLine": "status          EngagementStatus @default(ACTIVE)"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate       DateTime"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate         DateTime?"
      },
      {
        "name": "budgetHours",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budgetHours     Decimal?"
      },
      {
        "name": "budgetAmount",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budgetAmount    Decimal?"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "documents",
        "type": "Document[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documents       Document[]"
      },
      {
        "name": "timeEntries",
        "type": "TimeEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeEntries     TimeEntry[]"
      },
      {
        "name": "tasks",
        "type": "Task[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tasks           Task[]"
      },
      {
        "name": "invoices",
        "type": "Invoice[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoices        Invoice[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-estimated-payment",
    "sourceProject": "financialServices",
    "name": "EstimatedPayment",
    "displayName": "Estimated Payment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "quarter",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quarter         Int"
      },
      {
        "name": "dueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate         DateTime"
      },
      {
        "name": "amount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Decimal"
      },
      {
        "name": "paidAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "paidAmount      Decimal   @default(0)"
      },
      {
        "name": "paidDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paidDate        DateTime?"
      },
      {
        "name": "status",
        "type": "PaymentStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status          PaymentStatus @default(PENDING)"
      },
      {
        "name": "taxReturn",
        "type": "TaxReturn",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxReturn       TaxReturn @relation(fields: [taxReturnId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "taxReturnId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxReturnId     String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-financial-health-score",
    "sourceProject": "financialServices",
    "name": "FinancialHealthScore",
    "displayName": "Financial Health Score",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id                  String    @id @default(uuid())"
      },
      {
        "name": "score",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score               Int       // 0-100 composite score"
      },
      {
        "name": "incomeExpenseRatio",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incomeExpenseRatio  Decimal   // income / expenses"
      },
      {
        "name": "savingsRate",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savingsRate         Decimal   // (income - expenses) / income"
      },
      {
        "name": "debtToIncome",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "debtToIncome        Decimal   // total debt payments / gross income"
      },
      {
        "name": "emergencyFundMonths",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emergencyFundMonths Decimal   // liquid assets / monthly expenses"
      },
      {
        "name": "narrative",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "narrative           String    @db.Text  // AI-generated assessment"
      },
      {
        "name": "recommendations",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations     Json      // String[] of 3 specific recommendations"
      },
      {
        "name": "periodStart",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "periodStart         DateTime"
      },
      {
        "name": "periodEnd",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "periodEnd           DateTime"
      },
      {
        "name": "computedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "computedAt          DateTime  @default(now())"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client              Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId            String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-financial-report",
    "sourceProject": "financialServices",
    "name": "FinancialReport",
    "displayName": "Financial Report",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "type",
        "type": "ReportType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            ReportType"
      },
      {
        "name": "periodStart",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "periodStart     DateTime"
      },
      {
        "name": "periodEnd",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "periodEnd       DateTime"
      },
      {
        "name": "data",
        "type": "Json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "data            Json"
      },
      {
        "name": "generatedAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "generatedAt     DateTime  @default(now())"
      },
      {
        "name": "parameters",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parameters      Json?"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-firm",
    "sourceProject": "financialServices",
    "name": "Firm",
    "displayName": "Firm",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "email",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email         String?"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "address",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address       String?"
      },
      {
        "name": "city",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city          String?"
      },
      {
        "name": "state",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state         String?"
      },
      {
        "name": "zipCode",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zipCode       String?"
      },
      {
        "name": "website",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "website       String?"
      },
      {
        "name": "logo",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logo          String?"
      },
      {
        "name": "users",
        "type": "User[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "users         User[]"
      },
      {
        "name": "clients",
        "type": "Client[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clients       Client[]"
      },
      {
        "name": "chartOfAccounts",
        "type": "ChartOfAccount[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chartOfAccounts ChartOfAccount[]"
      },
      {
        "name": "documentTemplates",
        "type": "DocumentTemplate[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentTemplates DocumentTemplate[]"
      },
      {
        "name": "invoices",
        "type": "Invoice[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoices      Invoice[]"
      },
      {
        "name": "settings",
        "type": "FirmSettings?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "settings      FirmSettings?"
      },
      {
        "name": "integrations",
        "type": "Integration[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "integrations  Integration[]"
      },
      {
        "name": "reportTemplates",
        "type": "ReportTemplate[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reportTemplates ReportTemplate[]"
      },
      {
        "name": "documentRequestTemplates",
        "type": "DocumentRequestTemplate[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentRequestTemplates DocumentRequestTemplate[]"
      },
      {
        "name": "taxChecklistTemplates",
        "type": "TaxChecklistTemplate[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxChecklistTemplates TaxChecklistTemplate[]"
      },
      {
        "name": "serviceItems",
        "type": "ServiceItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serviceItems  ServiceItem[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-firm-settings",
    "sourceProject": "financialServices",
    "name": "FirmSettings",
    "displayName": "Firm Settings",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id                    String    @id @default(uuid())"
      },
      {
        "name": "firm",
        "type": "Firm",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm                  Firm      @relation(fields: [firmId], references: [id])"
      },
      {
        "name": "firmId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "firmId                String    @unique"
      },
      {
        "name": "fiscalYearStart",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "fiscalYearStart       Int       @default(1) // Month number"
      },
      {
        "name": "defaultHourlyRate",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "150.00",
        "sourceLine": "defaultHourlyRate     Decimal   @default(150.00)"
      },
      {
        "name": "invoicePrefix",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"INV\"",
        "sourceLine": "invoicePrefix         String    @default(\"INV\")"
      },
      {
        "name": "invoiceNextNumber",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1001",
        "sourceLine": "invoiceNextNumber     Int       @default(1001)"
      },
      {
        "name": "taxIdType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxIdType             String?"
      },
      {
        "name": "taxId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxId                 String?"
      },
      {
        "name": "defaultPaymentTerms",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "30",
        "sourceLine": "defaultPaymentTerms   Int       @default(30)"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-integration",
    "sourceProject": "financialServices",
    "name": "Integration",
    "displayName": "Integration",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "type",
        "type": "IntegrationType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            IntegrationType"
      },
      {
        "name": "name",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String?"
      },
      {
        "name": "status",
        "type": "IntegrationStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DISCONNECTED",
        "sourceLine": "status          IntegrationStatus @default(DISCONNECTED)"
      },
      {
        "name": "credentials",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "credentials     Json?"
      },
      {
        "name": "settings",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "settings        Json?"
      },
      {
        "name": "lastSyncAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastSyncAt      DateTime?"
      },
      {
        "name": "errorMessage",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "errorMessage    String?"
      },
      {
        "name": "firm",
        "type": "Firm",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm            Firm      @relation(fields: [firmId], references: [id])"
      },
      {
        "name": "firmId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firmId          String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-invoice",
    "sourceProject": "financialServices",
    "name": "Invoice",
    "displayName": "Invoice",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "invoiceNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "invoiceNumber   String    @unique"
      },
      {
        "name": "issueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issueDate       DateTime"
      },
      {
        "name": "dueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate         DateTime"
      },
      {
        "name": "status",
        "type": "InvoiceStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          InvoiceStatus @default(DRAFT)"
      },
      {
        "name": "subtotal",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "subtotal        Decimal   @default(0)"
      },
      {
        "name": "taxRate",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxRate         Decimal   @default(0)"
      },
      {
        "name": "taxAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "taxAmount       Decimal   @default(0)"
      },
      {
        "name": "total",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total           Decimal   @default(0)"
      },
      {
        "name": "paidAmount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "paidAmount      Decimal   @default(0)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "terms",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "terms           String?"
      },
      {
        "name": "paidAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paidAt          DateTime?"
      },
      {
        "name": "firm",
        "type": "Firm",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm            Firm      @relation(fields: [firmId], references: [id])"
      },
      {
        "name": "firmId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firmId          String"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "engagement",
        "type": "Engagement?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engagement      Engagement? @relation(fields: [engagementId], references: [id])"
      },
      {
        "name": "engagementId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engagementId    String?"
      },
      {
        "name": "createdBy",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdBy       User      @relation(fields: [createdById], references: [id])"
      },
      {
        "name": "createdById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdById     String"
      },
      {
        "name": "timeEntries",
        "type": "TimeEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeEntries     TimeEntry[]"
      },
      {
        "name": "lineItems",
        "type": "InvoiceLineItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lineItems       InvoiceLineItem[]"
      },
      {
        "name": "payments",
        "type": "InvoicePayment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payments        InvoicePayment[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-invoice-line-item",
    "sourceProject": "financialServices",
    "name": "InvoiceLineItem",
    "displayName": "Invoice Line Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String"
      },
      {
        "name": "quantity",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity        Decimal"
      },
      {
        "name": "rate",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rate            Decimal"
      },
      {
        "name": "amount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Decimal"
      },
      {
        "name": "invoice",
        "type": "Invoice",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoice         Invoice   @relation(fields: [invoiceId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "invoiceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoiceId       String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-invoice-payment",
    "sourceProject": "financialServices",
    "name": "InvoicePayment",
    "displayName": "Invoice Payment",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "amount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Decimal"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date            DateTime"
      },
      {
        "name": "method",
        "type": "PaymentMethod",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "method          PaymentMethod"
      },
      {
        "name": "reference",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reference       String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "invoice",
        "type": "Invoice",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoice         Invoice   @relation(fields: [invoiceId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "invoiceId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoiceId       String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-journal-entry",
    "sourceProject": "financialServices",
    "name": "JournalEntry",
    "displayName": "Journal Entry",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "entryNumber",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entryNumber     String"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date            DateTime"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "status",
        "type": "JournalStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          JournalStatus @default(DRAFT)"
      },
      {
        "name": "isAdjusting",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isAdjusting     Boolean   @default(false)"
      },
      {
        "name": "isClosing",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isClosing       Boolean   @default(false)"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "lines",
        "type": "JournalLine[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lines           JournalLine[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-journal-line",
    "sourceProject": "financialServices",
    "name": "JournalLine",
    "displayName": "Journal Line",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "debit",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "debit           Decimal   @default(0)"
      },
      {
        "name": "credit",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "credit          Decimal   @default(0)"
      },
      {
        "name": "journalEntry",
        "type": "JournalEntry",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "journalEntry    JournalEntry @relation(fields: [journalEntryId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "journalEntryId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "journalEntryId  String"
      },
      {
        "name": "account",
        "type": "ChartOfAccount",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "account         ChartOfAccount @relation(fields: [accountId], references: [id])"
      },
      {
        "name": "accountId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "accountId       String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-note",
    "sourceProject": "financialServices",
    "name": "Note",
    "displayName": "Note",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "content",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content         String    @db.Text"
      },
      {
        "name": "isPinned",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isPinned        Boolean   @default(false)"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "createdBy",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdBy       User      @relation(fields: [createdById], references: [id])"
      },
      {
        "name": "createdById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdById     String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-payroll-item",
    "sourceProject": "financialServices",
    "name": "PayrollItem",
    "displayName": "Payroll Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "regularHours",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "regularHours    Decimal   @default(0)"
      },
      {
        "name": "overtimeHours",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "overtimeHours   Decimal   @default(0)"
      },
      {
        "name": "regularPay",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "regularPay      Decimal   @default(0)"
      },
      {
        "name": "overtimePay",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "overtimePay     Decimal   @default(0)"
      },
      {
        "name": "grossPay",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "grossPay        Decimal   @default(0)"
      },
      {
        "name": "federalTax",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "federalTax      Decimal   @default(0)"
      },
      {
        "name": "stateTax",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "stateTax        Decimal   @default(0)"
      },
      {
        "name": "socialSecurity",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "socialSecurity  Decimal   @default(0)"
      },
      {
        "name": "medicare",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "medicare        Decimal   @default(0)"
      },
      {
        "name": "otherDeductions",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "otherDeductions Decimal   @default(0)"
      },
      {
        "name": "netPay",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "netPay          Decimal   @default(0)"
      },
      {
        "name": "payrollRun",
        "type": "PayrollRun",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payrollRun      PayrollRun @relation(fields: [payrollRunId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "payrollRunId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payrollRunId    String"
      },
      {
        "name": "employee",
        "type": "Employee",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employee        Employee  @relation(fields: [employeeId], references: [id])"
      },
      {
        "name": "employeeId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employeeId      String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-payroll-run",
    "sourceProject": "financialServices",
    "name": "PayrollRun",
    "displayName": "Payroll Run",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "payPeriodStart",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payPeriodStart  DateTime"
      },
      {
        "name": "payPeriodEnd",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payPeriodEnd    DateTime"
      },
      {
        "name": "payDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payDate         DateTime"
      },
      {
        "name": "status",
        "type": "PayrollRunStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          PayrollRunStatus @default(DRAFT)"
      },
      {
        "name": "totalGross",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "totalGross      Decimal   @default(0)"
      },
      {
        "name": "totalNet",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "totalNet        Decimal   @default(0)"
      },
      {
        "name": "totalTaxes",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "totalTaxes      Decimal   @default(0)"
      },
      {
        "name": "totalDeductions",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "totalDeductions Decimal   @default(0)"
      },
      {
        "name": "employeeCount",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "employeeCount   Int       @default(0)"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "approvedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approvedAt      DateTime?"
      },
      {
        "name": "processedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "processedAt     DateTime?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "createdBy",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdBy       User      @relation(fields: [createdById], references: [id])"
      },
      {
        "name": "createdById",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdById     String"
      },
      {
        "name": "items",
        "type": "PayrollItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items           PayrollItem[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-receipt",
    "sourceProject": "financialServices",
    "name": "Receipt",
    "displayName": "Receipt",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "imageUrl",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl        String"
      },
      {
        "name": "vendor",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor          String?"
      },
      {
        "name": "amount",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Decimal?"
      },
      {
        "name": "date",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date            DateTime?"
      },
      {
        "name": "taxAmount",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxAmount       Decimal?"
      },
      {
        "name": "category",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String?"
      },
      {
        "name": "extractedData",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "extractedData   Json?"
      },
      {
        "name": "aiProcessed",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "aiProcessed     Boolean   @default(false)"
      },
      {
        "name": "transaction",
        "type": "Transaction",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction     Transaction @relation(fields: [transactionId], references: [id])"
      },
      {
        "name": "transactionId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "transactionId   String    @unique"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-reconciliation",
    "sourceProject": "financialServices",
    "name": "Reconciliation",
    "displayName": "Reconciliation",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "statementDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "statementDate   DateTime"
      },
      {
        "name": "statementBalance",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "statementBalance Decimal"
      },
      {
        "name": "clearedBalance",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clearedBalance  Decimal?"
      },
      {
        "name": "difference",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "difference      Decimal?"
      },
      {
        "name": "status",
        "type": "ReconciliationStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "IN_PROGRESS",
        "sourceLine": "status          ReconciliationStatus @default(IN_PROGRESS)"
      },
      {
        "name": "completedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedAt     DateTime?"
      },
      {
        "name": "bankAccount",
        "type": "BankAccount",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankAccount     BankAccount @relation(fields: [bankAccountId], references: [id])"
      },
      {
        "name": "bankAccountId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankAccountId   String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-report-template",
    "sourceProject": "financialServices",
    "name": "ReportTemplate",
    "displayName": "Report Template",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "category",
        "type": "ReportCategory",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        ReportCategory"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive        Boolean   @default(true)"
      },
      {
        "name": "isSystem",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isSystem        Boolean   @default(false)"
      },
      {
        "name": "config",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "config          Json?"
      },
      {
        "name": "firm",
        "type": "Firm?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm            Firm?     @relation(fields: [firmId], references: [id])"
      },
      {
        "name": "firmId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firmId          String?"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-service-item",
    "sourceProject": "financialServices",
    "name": "ServiceItem",
    "displayName": "Service Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "defaultRate",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "defaultRate     Decimal"
      },
      {
        "name": "category",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive        Boolean   @default(true)"
      },
      {
        "name": "firm",
        "type": "Firm",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm            Firm      @relation(fields: [firmId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "firmId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firmId          String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-task",
    "sourceProject": "financialServices",
    "name": "Task",
    "displayName": "Task",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "priority",
        "type": "TaskPriority",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "MEDIUM",
        "sourceLine": "priority        TaskPriority @default(MEDIUM)"
      },
      {
        "name": "status",
        "type": "TaskStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TODO",
        "sourceLine": "status          TaskStatus @default(TODO)"
      },
      {
        "name": "dueDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate         DateTime?"
      },
      {
        "name": "completedAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedAt     DateTime?"
      },
      {
        "name": "estimatedHours",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedHours  Decimal?"
      },
      {
        "name": "client",
        "type": "Client?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client?   @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String?"
      },
      {
        "name": "assignedTo",
        "type": "User?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedTo      User?     @relation(fields: [assignedToId], references: [id])"
      },
      {
        "name": "assignedToId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedToId    String?"
      },
      {
        "name": "engagement",
        "type": "Engagement?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engagement      Engagement? @relation(fields: [engagementId], references: [id])"
      },
      {
        "name": "engagementId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engagementId    String?"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-tax-checklist-item",
    "sourceProject": "financialServices",
    "name": "TaxChecklistItem",
    "displayName": "Tax Checklist Item",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String"
      },
      {
        "name": "isRequired",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isRequired      Boolean   @default(true)"
      },
      {
        "name": "isReceived",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isReceived      Boolean   @default(false)"
      },
      {
        "name": "receivedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receivedDate    DateTime?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "taxReturn",
        "type": "TaxReturn",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxReturn       TaxReturn @relation(fields: [taxReturnId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "taxReturnId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxReturnId     String"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-tax-checklist-template",
    "sourceProject": "financialServices",
    "name": "TaxChecklistTemplate",
    "displayName": "Tax Checklist Template",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        String"
      },
      {
        "name": "returnType",
        "type": "TaxReturnType?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "returnType      TaxReturnType?"
      },
      {
        "name": "isRequired",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isRequired      Boolean   @default(true)"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive        Boolean   @default(true)"
      },
      {
        "name": "sortOrder",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sortOrder       Int       @default(0)"
      },
      {
        "name": "firm",
        "type": "Firm?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm            Firm?     @relation(fields: [firmId], references: [id])"
      },
      {
        "name": "firmId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firmId          String?"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-tax-deadline",
    "sourceProject": "financialServices",
    "name": "TaxDeadline",
    "displayName": "Tax Deadline",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String?"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            String"
      },
      {
        "name": "baseDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "baseDate        DateTime"
      },
      {
        "name": "dueDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate         DateTime"
      },
      {
        "name": "extendedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "extendedDate    DateTime?"
      },
      {
        "name": "reminderDays",
        "type": "Int[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reminderDays    Int[]"
      },
      {
        "name": "isRecurring",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isRecurring     Boolean   @default(false)"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-tax-organizer",
    "sourceProject": "financialServices",
    "name": "TaxOrganizer",
    "displayName": "Tax Organizer",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "personalInfo",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "personalInfo    Json?"
      },
      {
        "name": "incomeInfo",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incomeInfo      Json?"
      },
      {
        "name": "deductionInfo",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deductionInfo   Json?"
      },
      {
        "name": "creditInfo",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "creditInfo      Json?"
      },
      {
        "name": "otherInfo",
        "type": "Json?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "otherInfo       Json?"
      },
      {
        "name": "completedSections",
        "type": "String[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completedSections String[]"
      },
      {
        "name": "lastUpdated",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastUpdated     DateTime  @updatedAt"
      },
      {
        "name": "taxReturn",
        "type": "TaxReturn",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxReturn       TaxReturn @relation(fields: [taxReturnId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "taxReturnId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "taxReturnId     String    @unique"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-tax-return",
    "sourceProject": "financialServices",
    "name": "TaxReturn",
    "displayName": "Tax Return",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "taxYear",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxYear         Int"
      },
      {
        "name": "type",
        "type": "TaxReturnType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            TaxReturnType"
      },
      {
        "name": "status",
        "type": "TaxReturnStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOT_STARTED",
        "sourceLine": "status          TaxReturnStatus @default(NOT_STARTED)"
      },
      {
        "name": "filingStatus",
        "type": "FilingStatus?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filingStatus    FilingStatus?"
      },
      {
        "name": "dueDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate         DateTime?"
      },
      {
        "name": "extendedDueDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "extendedDueDate DateTime?"
      },
      {
        "name": "filedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filedDate       DateTime?"
      },
      {
        "name": "acceptedDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "acceptedDate    DateTime?"
      },
      {
        "name": "estimatedRefund",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedRefund Decimal?"
      },
      {
        "name": "estimatedOwed",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedOwed   Decimal?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           String?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "organizer",
        "type": "TaxOrganizer?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "organizer       TaxOrganizer?"
      },
      {
        "name": "checklistItems",
        "type": "TaxChecklistItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "checklistItems  TaxChecklistItem[]"
      },
      {
        "name": "estimates",
        "type": "EstimatedPayment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimates       EstimatedPayment[]"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-time-entry",
    "sourceProject": "financialServices",
    "name": "TimeEntry",
    "displayName": "Time Entry",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date            DateTime"
      },
      {
        "name": "hours",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hours           Decimal"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String"
      },
      {
        "name": "isBillable",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isBillable      Boolean   @default(true)"
      },
      {
        "name": "rate",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rate            Decimal?"
      },
      {
        "name": "amount",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Decimal?"
      },
      {
        "name": "status",
        "type": "TimeEntryStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "DRAFT",
        "sourceLine": "status          TimeEntryStatus @default(DRAFT)"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user            User      @relation(fields: [userId], references: [id])"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId          String"
      },
      {
        "name": "engagement",
        "type": "Engagement?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engagement      Engagement? @relation(fields: [engagementId], references: [id])"
      },
      {
        "name": "engagementId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "engagementId    String?"
      },
      {
        "name": "invoice",
        "type": "Invoice?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoice         Invoice?  @relation(fields: [invoiceId], references: [id])"
      },
      {
        "name": "invoiceId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoiceId       String?"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-transaction",
    "sourceProject": "financialServices",
    "name": "Transaction",
    "displayName": "Transaction",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id              String    @id @default(uuid())"
      },
      {
        "name": "date",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date            DateTime"
      },
      {
        "name": "description",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description     String"
      },
      {
        "name": "amount",
        "type": "Decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount          Decimal"
      },
      {
        "name": "type",
        "type": "TransactionType",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            TransactionType"
      },
      {
        "name": "status",
        "type": "TransactionStatus",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "PENDING",
        "sourceLine": "status          TransactionStatus @default(PENDING)"
      },
      {
        "name": "reference",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reference       String?"
      },
      {
        "name": "memo",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "memo            String?"
      },
      {
        "name": "isReconciled",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "isReconciled    Boolean   @default(false)"
      },
      {
        "name": "reconciledAt",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reconciledAt    DateTime?"
      },
      {
        "name": "aiCategorized",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "aiCategorized   Boolean   @default(false)"
      },
      {
        "name": "aiConfidence",
        "type": "Decimal?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiConfidence    Decimal?"
      },
      {
        "name": "originalDescription",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "originalDescription String?"
      },
      {
        "name": "vendor",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor          String?"
      },
      {
        "name": "client",
        "type": "Client",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "client          Client    @relation(fields: [clientId], references: [id])"
      },
      {
        "name": "clientId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientId        String"
      },
      {
        "name": "bankAccount",
        "type": "BankAccount?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankAccount     BankAccount? @relation(fields: [bankAccountId], references: [id])"
      },
      {
        "name": "bankAccountId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bankAccountId   String?"
      },
      {
        "name": "category",
        "type": "ChartOfAccount?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        ChartOfAccount? @relation(fields: [categoryId], references: [id])"
      },
      {
        "name": "categoryId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "categoryId      String?"
      },
      {
        "name": "receipt",
        "type": "Receipt?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receipt         Receipt?"
      }
    ]
  },
  {
    "id": "financial-services-prisma-schema-prisma-user",
    "sourceProject": "financialServices",
    "name": "User",
    "displayName": "User",
    "framework": "Prisma",
    "sourceFile": "prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String    @id @default(uuid())"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email         String    @unique"
      },
      {
        "name": "password",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password      String"
      },
      {
        "name": "firstName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName     String"
      },
      {
        "name": "lastName",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName      String"
      },
      {
        "name": "role",
        "type": "UserRole",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "STAFF",
        "sourceLine": "role          UserRole  @default(STAFF)"
      },
      {
        "name": "phone",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone         String?"
      },
      {
        "name": "avatar",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar        String?"
      },
      {
        "name": "isActive",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "isActive      Boolean   @default(true)"
      },
      {
        "name": "emailVerified",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "emailVerified Boolean   @default(false)"
      },
      {
        "name": "emailVerificationToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "emailVerificationToken String? @unique"
      },
      {
        "name": "emailVerificationExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "emailVerificationExpiry DateTime?"
      },
      {
        "name": "passwordResetToken",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "passwordResetToken String? @unique"
      },
      {
        "name": "passwordResetExpiry",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "passwordResetExpiry DateTime?"
      },
      {
        "name": "firm",
        "type": "Firm?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firm          Firm?     @relation(fields: [firmId], references: [id])"
      },
      {
        "name": "firmId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firmId        String?"
      },
      {
        "name": "assignedClients",
        "type": "ClientAssignment[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedClients ClientAssignment[]"
      },
      {
        "name": "timeEntries",
        "type": "TimeEntry[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeEntries   TimeEntry[]"
      },
      {
        "name": "createdDocuments",
        "type": "Document[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "createdDocuments Document[]"
      },
      {
        "name": "notes",
        "type": "Note[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         Note[]"
      },
      {
        "name": "tasks",
        "type": "Task[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tasks         Task[]"
      },
      {
        "name": "invoicesCreated",
        "type": "Invoice[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoicesCreated Invoice[]"
      },
      {
        "name": "payrollRuns",
        "type": "PayrollRun[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payrollRuns   PayrollRun[]"
      }
    ]
  }
];
