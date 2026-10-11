# Playwright QA Automation Portfolio

**End-to-End Testing | TypeScript | Cross-Browser Testing | CI/CD**

A QA Automation portfolio project demonstrating maintainable end-to-end test automation, functional regression coverage, and continuous integration using Playwright.

Developed by **Daniel Pires**.

## Project Overview

This project automates critical user journeys of the TodoMVC web application.

Its purpose is to demonstrate practical QA engineering skills, including test design, reusable automation components, cross-browser validation, and automated execution through GitHub Actions.

**Application under test:** https://demo.playwright.dev/todomvc/

## Technology Stack

- **Playwright** — End-to-end test automation
- **TypeScript** — Test implementation
- **Page Object Model** — Reusable page interactions
- **GitHub Actions** — Continuous integration
- **HTML Reports** — Test execution reporting

## Automated Test Coverage

| Test ID | Scenario | Test Type |
|---|---|---|
| TC-001 | Create a single todo | Functional |
| TC-002 | Create multiple todos | Functional |
| TC-003 | Complete a todo | Functional |
| TC-004 | Filter active todos | Functional |
| TC-005 | Filter completed todos | Functional |
| TC-006 | Delete a todo | Functional |
| TC-007 | Prevent empty todo creation | Negative |
| TC-008 | Verify persistence after reload | Regression |

**8 automated scenarios across 3 browser engines:**

- Chromium
- Firefox
- WebKit

**Total: 24 test executions per complete run.**

## Project Structure

- `pages/TodoPage.ts` — Page Object Model
- `tests/todo.spec.ts` — Automated test scenarios
- `playwright.config.ts` — Browser and test configuration
- `.github/workflows/playwright.yml` — CI workflow

## Getting Started

**1. Install dependencies**

`npm ci`

**2. Install Playwright browsers**

`npx playwright install`

**3. Run all tests**

`npx playwright test`

**4. Run Chromium tests only**

`npx playwright test --project=chromium`

**5. Open the HTML report**

`npx playwright show-report`

## Continuous Integration

GitHub Actions runs the Playwright suite automatically on pushes and pull requests targeting the main branch.

The workflow installs the required dependencies and browsers, runs the automated tests, and uploads the HTML report as an artifact.

## Test Evidence

Playwright is configured to provide:

- HTML execution reports
- Screenshots on failure
- Video recordings on failure
- Traces on the first retry

These artifacts help investigate failures and provide reproducible testing evidence.

## QA Documentation

- [Test Plan](docs/TEST-PLAN.md)
- [Bug Report Template](docs/BUG-REPORT.md)

## Future Improvements

- Expand negative and edge-case coverage
- Add API testing examples
- Introduce test data strategies
- Add detailed test plans and defect reporting examples
- Create an additional portfolio project covering a realistic authentication or e-commerce workflow

## Author

**Daniel Pires**

QA Engineer | Test Automation | Playwright | TypeScript

[GitHub Profile](https://github.com/danielrboss)

---

*This project uses a public demonstration application and is intended to showcase test automation practices rather than production-level test coverage.*