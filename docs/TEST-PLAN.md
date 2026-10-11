# TodoMVC — Test Plan

**Project:** Playwright QA Automation Portfolio  
**Application Under Test:** https://demo.playwright.dev/todomvc/  
**Framework:** Playwright + TypeScript  
**Test approach:** Automated functional regression testing

## 1. Test Objectives

Validate the application's core functionality and demonstrate maintainable, repeatable end-to-end testing across different browser engines.

## 2. Scope

The automated regression suite covers the following scenarios:

| Test ID | Test Scenario | Type | Priority |
|---|---|---|---|
| TC-001 | Create a single todo | Functional | High |
| TC-002 | Create multiple todos | Functional | High |
| TC-003 | Complete a todo | Functional | High |
| TC-004 | Filter active todos | Functional | Medium |
| TC-005 | Filter completed todos | Functional | Medium |
| TC-006 | Delete a todo | Functional | High |
| TC-007 | Prevent empty todo creation | Negative | Medium |
| TC-008 | Verify persistence after reload | Regression | High |

### Out of Scope

- Security and penetration testing
- Load and performance testing
- Accessibility auditing
- Mobile device testing
- Backend API testing

## 3. Test Environment

**Application:** Public TodoMVC demonstration  
**Automation framework:** Playwright  
**Programming language:** TypeScript

Browser engines:

- Chromium
- Firefox
- WebKit

Execution environments:

- Local development machine
- GitHub Actions (Ubuntu)

## 4. Test Strategy

Tests follow the Page Object Model pattern to separate page interactions from test assertions.

Each scenario is executed using a fresh Playwright browser context.

Automated assertions validate expected application behavior.

The complete suite contains 8 scenarios executed across 3 browser projects, resulting in 24 test executions.

## 5. Entry Criteria

- Application is accessible
- Dependencies are installed
- Required browser binaries are available
- Test environment is correctly configured

## 6. Exit Criteria

- All planned scenarios have been executed
- Test failures have been investigated and documented
- Critical defects found within the tested scope have been reported
- Execution evidence is available for review

Passing these criteria does not establish production readiness beyond the defined test scope.

## 7. Test Evidence

Available through Playwright:

- HTML execution reports
- Screenshots on failure
- Video recordings on failure
- Traces on the first retry

GitHub Actions uploads the HTML report as a workflow artifact.

## 8. Risks and Limitations

- The application is hosted externally and may change without notice
- Network availability may affect execution
- The suite covers only selected functional scenarios
- Browser engine coverage does not replace testing on physical devices

## 9. Future Improvements

- Additional negative test scenarios
- Boundary-value testing
- Parameterized test data
- API testing examples
- Accessibility checks
- Broader end-to-end workflows