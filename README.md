# Personal Finance Consumer Suite Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIPersonalFinanceConsumerSuiteAssistant`
- `AIPersonalFinanceConsumerSuiteOperations`
- `AIPersonalFinanceConsumerSuiteAnalytics`
- `AIPersonalFinanceConsumerSuiteWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/personal-finance-consumer-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5850`

Seeded users:
- `admin@personal-finance-consumer-suite.local / admin123`
- `manager@personal-finance-consumer-suite.local / manager123`
- `analyst@personal-finance-consumer-suite.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/personal-finance-consumer-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5850 npm run smoke
```
