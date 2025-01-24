function calculatePension() {
    const basePay = parseFloat(document.getElementById('basePay').value);
    const pensionPercentage = parseFloat(document.getElementById('pensionPercentage').value);

    if (isNaN(basePay) || isNaN(pensionPercentage)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (basePay <= 0 || pensionPercentage < 0) {
        alert("Base pay must be greater than 0 and pension percentage cannot be negative.");
        return;
    }

    if (pensionPercentage > 50) {
        alert("Pension contribution cannot be over 50 percent of your wage.");
        return;
    }

    const pensionAmount = (basePay * pensionPercentage) / 100;
    const remainingPay = basePay - pensionAmount;

    document.getElementById('pensionAmount').textContent = pensionAmount.toFixed(2);
    document.getElementById('remainingPay').textContent = remainingPay.toFixed(2);
}

// Testing Functions
function validateInputs(basePay, pensionPercentage) {
    if (isNaN(basePay) || isNaN(pensionPercentage)) return false;
    if (basePay <= 0 || pensionPercentage < 0 || pensionPercentage > 50) return false;
    return true;
}

function calculatePensionTest(basePay, pensionPercentage) {
    if (!validateInputs(basePay, pensionPercentage)) {
        throw new Error("Invalid base pay or pension percentage.");
    }

    const pensionAmount = (basePay * pensionPercentage) / 100;
    const remainingPay = basePay - pensionAmount;

    return {
        pensionAmount: parseFloat(pensionAmount.toFixed(2)),
        remainingPay: parseFloat(remainingPay.toFixed(2)),
    };
}

// Jest-style Tests
function runTests() {
    try {
        console.log("Running Tests...");

        // Test 1: Standard Calculation
        let result = calculatePensionTest(50000, 5);
        console.assert(result.pensionAmount === 2500, "Test 1 Failed: Pension Amount");
        console.assert(result.remainingPay === 47500, "Test 1 Failed: Remaining Pay");

        // Test 2: Zero Contribution
        result = calculatePensionTest(50000, 0);
        console.assert(result.pensionAmount === 0, "Test 2 Failed: Pension Amount");
        console.assert(result.remainingPay === 50000, "Test 2 Failed: Remaining Pay");

        // Test 3: Invalid Inputs
        try {
            calculatePensionTest(-50000, 5);
            console.error("Test 3 Failed: Negative Base Pay Not Caught");
        } catch (e) {
            console.log("Test 3 Passed: Negative Base Pay");
        }

        try {
            calculatePensionTest(50000, -5);
            console.error("Test 4 Failed: Negative Pension Percentage Not Caught");
        } catch (e) {
            console.log("Test 4 Passed: Negative Pension Percentage");
        }

        console.log("All Tests Completed.");
    } catch (error) {
        console.error("Test Suite Error:", error.message);
    }
}

// Run tests
runTests();
