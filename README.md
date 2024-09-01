# **Automating Extension using Playwright**

## **Overview**

This project aims to automate the testing of a browser extension using Playwright. The extension is built for the TON Project and is called Ton Keeper.

## **Getting Started**

To get started with this project, you'll need to have Node.js installed on your machine. You can then install the required dependencies by running the following command:

1. Install dependencies: `npm install`
2. Install Playwright browsers: `npx playwright install`
3. Set up environment variables: Create a `.env` file in the root directory and add the necessary environment variables. (U can see an example in .env-template)
4. Run the tests: `npx playwright test`

Note: Make sure you have the necessary dependencies installed and the environment variables set up before running the tests.

## **Project Structure**

The project is organized into the following directories:

-   `src`: This directory contains the source code for the project, including the fixtures and tests.
-   `tests`: This directory contains the test files for the project.
-   `tonKeeper`: This directory contains the code for the Ton Keeper extension.

## **Fixtures**

In this project, we use fixtures to set up the browser context and page for testing. Fixtures are defined in `src/fixtures.ts`. Our approach to fixtures is to create a separate fixture for each test scenario, allowing us to isolate the test environment and ensure consistent results. We use Playwright's built-in fixture API to define and manage our fixtures.

## **Specifics of the Project**

This project is designed to automate the testing of the Ton Keeper extension on multiple devices and browsers. The extension is built for the TON Project, a decentralized blockchain platform. The project uses Playwright to automate the testing of the extension on the following devices and browsers:

-   Desktop Chrome
-   Desktop Edge
-   iPhone 13 ( Chrommium)

## **Problem it Solves**

The Ton Keeper extension provides a secure and user-friendly way to interact with the TON blockchain. However, testing the extension on multiple devices and browsers can be time-consuming and prone to errors. This project solves this problem by automating the testing of the extension using Playwright, ensuring that the extension works correctly on multiple devices and browsers.

## **Applicability**

This project is applicable to any project that requires automated testing of a browser extension on multiple devices and browsers. The project can be easily extended to support additional devices and browsers, making it a versatile solution for a wide range of testing needs.

## **License**

This project is licensed under the ISC license.

## **Contributing**

Contributions to this project are welcome. If you'd like to contribute, please fork the repository and submit a pull request.

## **Troubleshooting**

If you encounter any issues or error messages, try the following:

-   Check the console logs for errors
-   Make sure the environment variables are set correctly
-   Try restarting the project

## **Additional Resources**

-   [Playwright documentation](https://playwright.dev/docs)

## **Code of Conduct**

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

## **Changelog**

This project maintains a changelog in the `CHANGELOG.md` file.

## **Roadmap**

This project has the following roadmap:

1. **Set up Playwright**: Set up Playwright and configure the test environment.
2. **Write Tests**: Write tests for the extension using Playwright.
3. **Run Tests**: Run the tests using the Playwright test runner.
4. **Add additional features**: Add additional features to the extension as needed.
