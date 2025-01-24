# Software Engineering - Summative 1

## Project Proposal - Pension Cotribution Calculator

### Overview

The pension contribution app will be a simple, web-based tool designed to assist colleagues in calculating their pension contributions and remaining pay after this is deducted. The tool will allow colleagues to input their base pay and selected pension percentage to quickly obtain accurate and clear results. This app aims to provide convenience and transparency in financial planning for employees which is not currently available within the business.

### Objective

The aim of this project is to provide colleagues with an easy to use tool which will allow them to have a greater understanding of their pay elements and how the pension scheme works. The hope is that through obtaining this greater understanding colleagues will have a higher propensity to utilise the pension scheme. The target users for this app is all colleagues within British Airways.

### Core Features
- The app will allow users to enter two fields; basic pay and pension %.
- The results will be dynamically updated through clicking the 'CALCULATE' button.
- The app will then return two figures based on these inputs, one for the total contribution and one for the take home pay following this contribution.
- The app will have error checking that will return errors if any of the following conditions are met:
    - The user has not entered a figure for basic pay or pension.
    - The pension % entered is above 50% or below 0%.
    - The pay entered is below 0.

### Technology Stack:
- Front End: HTML, CSS, JavaScript
- Hosting: The app will be hosted in github pages for easy deployment and accessibility.

## App Design
The a basic design for the MVP version of the app has been designed in figma and is available to access here: https://www.figma.com/design/vprSkcRq0vste0Yc4irlSB/Figma-basics?node-id=601-10&t=TojOR6uLxKWOa0AM-1

The design can also be seen in figure 1 below. It demonstrates the intitial page seen when the dashboard is loaded, the two scenarios where an error message is displayed due to failed entries and what the page should look like after the correct numbers are entered.

![image](https://github.com/user-attachments/assets/022a6860-4978-44c7-8693-9176084ad7e9).

## Project Management





### User Documentation for Pension Contribution Calculator App

#### **Overview**
The Pension Contribution Calculator App allows employees to calculate their pension contributions and remaining pay after deductions by entering their base pay and pension contribution percentage. It now includes automated tests for quality assurance.

---

#### **How to Use the App**
1. **Accessing the App**:
   - Open the app in your web browser using the provided link.

2. **Entering Details**:
   - Locate the input fields labeled "Base Pay" and "Pension Contribution (%)."
   - Enter your **Base Pay** (e.g., 50000 for a salary of £50,000).
   - Enter your desired **Pension Contribution Percentage** (e.g., 5 for 5%).

3. **Calculating Results**:
   - Click the "Calculate" button.
   - The app will display:
     - **Pension Contribution Amount**: The portion of your salary going into the pension fund.
     - **Remaining Pay After Contribution**: Your take-home pay after the pension deduction.

4. **Clearing Errors**:
   - If invalid values are entered, the app will alert you to correct them.

5. **Closing the App**:
   - Simply close the browser tab to exit the app. No data is saved for privacy.

---

#### **FAQ**
1. **What happens if I leave a field blank?**
   - The app will prompt you to fill in all required fields.

2. **What is the default pension percentage?**
   - The default percentage is set to 5%, but you can change it.

3. **Can I use the app on my mobile phone?**
   - Yes, the app is responsive and works on mobile devices.

4. **Is my data saved?**
   - No, the app does not store any data for privacy reasons.

---

### Technical Documentation for Pension Contribution Calculator App

#### **Overview**
The Pension Contribution Calculator App is a web-based tool built with HTML, CSS, and JavaScript. It includes automated tests using Jest to ensure accurate calculations and input validations.

---

#### **System Requirements**
- A modern web browser (e.g., Chrome, Firefox, Safari).
- Node.js for running tests locally.

---

#### **Architecture**
1. **Frontend**:
   - **HTML**: Defines the structure of the app, including input fields and result displays.
   - **CSS**: Styles the app for a responsive and user-friendly interface.
   - **JavaScript**: Handles the logic for calculations and validations.

2. **Testing**:
   - Jest is used for unit testing core functionalities.

3. **Hosting**:
   - The app is deployed on GitHub Pages for easy access.

---

#### **Folder Structure**
- `index.html`: The main HTML file.
- `styles.css`: The stylesheet for app design.
- `script.js`: The JavaScript file containing logic for calculations, validation, and exports for testing.
- `test.js`: The Jest test suite to verify app functionality.
- `package.json`: Configuration file for managing dependencies and scripts.

---

#### **Core Functionalities**
1. **Input Handling**:
   - Collect user inputs for base pay and pension percentage.
2. **Calculation Logic**:
   - Pension Contribution = (Base Pay * Pension Percentage) / 100.
   - Remaining Pay = Base Pay - Pension Contribution.
3. **Validation**:
   - Ensures inputs are numeric and greater than zero.
   - Displays an alert for invalid entries.
4. **Dynamic Updates**:
   - Results are recalculated and displayed when the user clicks "Calculate."
5. **Testing**:
   - Functions are exported for testing using Jest.

---

#### **Error Handling**
- Alerts the user if:
  - Fields are empty.
  - Non-numeric values are entered.
  - Negative or zero values are provided.
  - Pension percentage exceeds 50%.

---

#### **Testing and Deployment**
1. **Testing**:
   - Jest is used to test the following scenarios:
     - Valid and invalid input handling.
     - Accurate calculation of pension contribution and remaining pay.
     - Edge cases (e.g., 0% or over 50% contribution).
   - Run tests locally with:
     ```bash
     npm test
     ```

2. **Deployment**:
   - Hosted on GitHub Pages.
   - Regularly updated and tested for compatibility.

---

#### **Future Development**
- Adding tax deductions.
- Export results as PDF or Excel.
- Enable users to compare different pension contribution scenarios.

---

By following these updated guidelines, employees and developers can easily use, maintain, and test the Pension Contribution Calculator App.




