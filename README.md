# Software Engineering - Summative 1

---

## **Project Proposal - Pension Cotribution Calculator**

#### **Overview**

The pension contribution app will be a simple, web-based tool designed to assist colleagues in calculating their pension contributions and remaining pay after this is deducted. The tool will allow colleagues to input their base pay and selected pension percentage to quickly obtain accurate and clear results. This app aims to provide convenience and transparency in financial planning for employees which is not currently available within the business.

#### **Objective**

The aim of this project is to provide colleagues with an easy to use tool which will allow them to have a greater understanding of their pay elements and how the pension scheme works. The hope is that through obtaining this greater understanding colleagues will have a higher propensity to utilise the pension scheme. The target users for this app is all colleagues within British Airways.

#### **Core Features**
- The app will allow users to enter two fields; basic pay and pension %.
- The results will be dynamically updated through clicking the 'CALCULATE' button.
- The app will then return two figures based on these inputs, one for the total contribution and one for the take home pay following this contribution.
- The app will have error checking that will return errors if any of the following conditions are met:
    - The user has not entered a figure for basic pay or pension.
    - The pension % entered is above 50% or below 0%.
    - The pay entered is below 0.

#### **Technology Stack:**
- Front End: HTML, CSS, JavaScript
- Hosting: The app will be hosted in github pages for easy deployment and accessibility.

---

## **App Design**
The a basic design for the MVP version of the app has been designed in figma and is available to access here: https://www.figma.com/design/vprSkcRq0vste0Yc4irlSB/Figma-basics?node-id=601-10&t=TojOR6uLxKWOa0AM-1

The design can also be seen in figure 1 below. It demonstrates the intitial page seen when the dashboard is loaded, the two scenarios where an error message is displayed due to failed entries and what the page should look like after the correct numbers are entered.

![image](https://github.com/user-attachments/assets/022a6860-4978-44c7-8693-9176084ad7e9).


---

## **Project Management**
To manage this project effectively, we used the following tools and techniques:

1. **GitHub Issues**:
   - Each feature or task was tracked using GitHub Issues.
   - Example issues:
     - "Create App design in Figma"
     - "Calculate Button"
     - "Entry Validation"

![image](https://github.com/user-attachments/assets/f38f6b28-84dc-438b-9054-f8642d325247)

2. **GitHub Projects**:
   - A GitHub Project board was set up to organise tasks into the folllowing columns "Backlog", "Rejected", "In Progress," and "Done."
   - This provided a clear visual representation of progress.

3. **Documentation Updates**:
   - Documentation was iteratively updated throughout the issues created
  
4. **Backlog**:
   - The project utilises a backlog for tasks that are needed to be done but not yet started. Following the completion of the MVP the tasks not currently     
     completed or in the backlog are deemed not necessary for the functionality of the app but will improve the quality of the product in future iterations.

By using these project management tools, we ensured smooth collaboration, clear progress tracking, and high-quality deliverables.

---

## **User Documentation for Pension Contribution Calculator App**

![image](https://github.com/user-attachments/assets/7b3f7d9f-a4f3-47e2-a773-9590cd73adff)


#### **Overview**
The Pension Contribution Calculator App allows colleagues to calculate their pension contributions and remaining pay after deducting this by entering their base pay and pension contribution percentage. It also contains automated tests to ensure the app is working successfully.

---

#### **How to Use the App**
1. **Accessing the App**:
   - Open the app in your web browser using the provided link below.
   - https://adammbennett.github.io/Software-Engineering-Summative-1/

2. **Entering Details**:
   - Locate the input fields labeled "Base Pay" and "Pension Contribution (%)."
   - Enter your **Base Pay** (e.g., 50000 for a salary of £50,000).
   - Enter your desired **Pension Contribution Percentage** (e.g., 5 for 5%). Thed default value on this field is 5%.

3. **Calculating Results**:
   - Click the "Calculate" button.
   - The app will then display the following:
     - **Pension Contribution Amount**: The portion of your salary going into the pension fund.
     - **Remaining Pay After Contribution**: Your new pay after the pension contribution has been deducted.

4. **Clearing Errors**:
   - If invalid values are entered, the app will alert you to correct them.
   - The invlaid values are as follows:
         - Entering no value in either field.
         - Entering negative values in either field.
         - Entering a value of over 50% in the pension contribution field.

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

## **Technical Documentation for Pension Contribution Calculator App**

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
   - To see if the tests have run enter the control panel by clicking F12 and navigate to the control centre. The following should be displayed.
   - ![image](https://github.com/user-attachments/assets/b1a6fa2e-1dad-4310-a0e2-87539ae1a0cc)


---

#### **Error Handling**
- Alerts the user if:
  - Fields are empty.
  - Non-numeric values are entered.
  - Negative or zero values are provided.
  - Pension percentage exceeds 50%.
  - Below is an example of an error message that can be returned.
        ![image](https://github.com/user-attachments/assets/e89e1dc3-b918-472e-a435-ea63a749e625)


---

## **Testing and Deployment**

The app includes a test suite written in Jest to ensure correctness and reliability. Below is a breakdown of each test:

1. **Calculates Pension Contribution Correctly**
   - Verifies that the `calculatePension` function computes the pension contribution and remaining pay accurately.
   - **Example Input:** Base Pay = 50000, Pension Percentage = 5.
   - **Expected Output:** Pension Amount = 2500, Remaining Pay = 47500.

2. **Handles 0% Pension Contribution**
   - Ensures that the app correctly handles edge cases where the pension contribution percentage is 0.
   - **Example Input:** Base Pay = 50000, Pension Percentage = 0.
   - **Expected Output:** Pension Amount = 0, Remaining Pay = 50000.

3. **Validates Inputs Correctly**
   - Tests the `validateInputs` function to ensure it rejects invalid inputs like negative values, non-numeric values, or overly high percentages.
   - **Example Inputs:**
     - Base Pay = -50000, Pension Percentage = 5 → Invalid.
     - Base Pay = 50000, Pension Percentage = -5 → Invalid.
     - Base Pay = "invalid", Pension Percentage = 5 → Invalid.
     - Base Pay = 50000, Pension Percentage = 100 → Invalid.

4. **Throws Errors for Invalid Inputs**
   - Verifies that `calculatePension` throws appropriate errors for invalid inputs.
   - **Example Cases:**
     - Negative Base Pay.
     - Negative Pension Percentage.
     - Non-numeric or malformed values.
   - **Expected Behavior:** Function throws an error message.

5. **Edge Cases for Pension Contribution**
   - Confirms the app handles boundary cases like:
     - Maximum allowable percentage (e.g., 50%).
     - Smallest non-zero inputs.

---
## **Future Developments**
Following the initial release of the MVP there will be future iterations of the dashboard released that will involve the following developments that are currently in the backlog:
- Adding tax deductions.
- Export results as PDF or Excel.
- Enable users to compare different pension contribution scenarios.
- Make improvements to the UI.
![image](https://github.com/user-attachments/assets/4790aab4-fb3a-4008-9a60-4c54d3cbf793)

## **Evaluation**


By following these updated guidelines, employees and developers can easily use, maintain, and test the Pension Contribution Calculator App.




