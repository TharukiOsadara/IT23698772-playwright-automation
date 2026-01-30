<<<<<<< HEAD
# Playwright Test Automation Project

**Student ID:** IT23698772  
**Student Name:** Tharuki Osadara  
**Course:** Software Testing / Quality Assurance  
**Application Under Test:** Singlish to Sinhala Converter  
https://www.swifttranslator.com/

---

## About This Project

This project contains automated test cases for a Singlish to Sinhala translation web application. The tests are implemented using the Playwright test automation framework with JavaScript.

---

## Test Coverage

- **Positive Functional Tests** – Verify correct translation behavior for valid inputs  
- **Negative Functional Tests** – Validate error handling and invalid input scenarios  
- **UI Tests** – Verify user interface behavior and interactions  

---

## Getting Started

### Requirements

- Node.js (version 16 or higher)
- npm (included with Node.js)

---

## Installation Steps

### 1. Clone the repository
```bash
git clone https://github.com/TharukiOsadara/IT23698772-playwright-automation.git
cd IT23698772-playwright-automation
=======
# Playwright Test Automation Project

**Student ID:** IT23698772  
**Student Name:** Tharuki Osadara  
**Course:** Software Testing / Quality Assurance  
**Application Under Test:** Singlish to Sinhala Converter (https://www.swifttranslator.com/)

---

## About This Project

This project contains automated tests for a Singlish to Sinhala translation web application using the Playwright framework with JavaScript.

### Test Coverage
- **Positive Functional Tests** – Testing correct translation scenarios  
- **Negative Functional Tests** – Testing error handling and edge cases  
- **UI Tests** – Testing user interface behavior  

---

## Getting Started

### Requirements
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/TharukiOsadara/IT23698772-playwright-automation.git
   cd IT23698772-playwright-automation

   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install browsers**
   ```bash
   npx playwright install
   ```

---

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests with browser visible
```bash
npx playwright test --headed

```

### Run specific test files
```bash
npx playwright test tests/singlishTranslator.spec.js

```

### View test report
```bash
npx playwright show-report
```

---

## Project Structure

```
├── tests/
│   ├── example.spec.js               # Sample test
│   ├── singlishTranslator.spec.js    # Functional test cases
│   └── getOutputHelper.js            # Helper functions
├── playwright.config.js              # Test configuration
├── package.json                      # Project dependencies
├── package-lock.json
└── README.md                         # This file
```


---

## Test Categories

### Positive Functional Tests (24 tests)
Tests correct translation behavior for various inputs:
- Basic everyday phrases
- Greetings and requests
- Different tenses (past, present, future)
- Questions and commands
- Mixed English/Singlish content

### Negative Functional Tests (10 tests)
Tests error handling and edge cases:
- Input without spaces
- Slang and typos
- Special characters
- Multiple spaces
- Long inputs
- Random or meaningless text

### UI Tests (10+ tests)
Tests user interface behavior:
- Real-time typing updates
- Clear and backspace functionality
- Copy/paste operations
- Responsive design

---

## Technologies Used

- **Playwright** - Modern test automation framework
- **JavaScript** - Programming language
- **Node.js** - Runtime environment
- **Page Object Model** - Design pattern for maintainable tests

---

## Assignment Information

This project was created as part of a software testing assignment to demonstrate:
- Test automation skills using Playwright
- Functional, negative, and UI test design
- GitHub version control usage
- Page Object Model implementation
- Test reporting and documentation

---

## Author

**Student ID:** IT23698772  
**GitHub:** https://github.com/TharukiOsadara/IT23698772-playwright-automation

---

## License

---
This project is created for educational purposes.
| **S (Short)** | Small | ≤ 30 characters |
| **M (Medium)** | Medium | 31 - 299 characters |
| **L (Long)** | Large | ≥ 300 characters |

---

## 📝 Reports

### View HTML Report

After running tests, view the detailed HTML report:

```powershell
npx playwright show-report

```

This opens an interactive report showing:
-  Passed tests
-  Failed tests
-  Skipped tests
-  Screenshots (on failure)
-  Videos (on failure)
-  Test duration

### Report Locations

- **HTML Report:** `playwright-report/index.html`
- **JSON Results:** `test-results.json`
- **Test Artifacts:** `test-results/` directory

---

## 🔄 CI/CD Integration

### GitHub Actions Example

Create `.github/workflows/playwright.yml`:

```yaml
name: Playwright Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - uses: actions/setup-node@v3
      with:
        node-version: 18

    - name: Install dependencies
      run: npm install

    - name: Run Playwright tests
      run: npx playwright test

>>>>>>> 19b7da7 (Update README and singlish Translator test)



