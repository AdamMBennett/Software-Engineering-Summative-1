console.log("test.js loaded");

const { calculatePension, validateInputs } = require('./script.js'); // Import functions

describe("Pension Contribution Calculator", () => {
    test("Calculates pension contribution correctly", () => {
        const result = calculatePension(50000, 5);
        expect(result.pensionAmount).toBeCloseTo(2500);
        expect(result.remainingPay).toBeCloseTo(47500);
    });

    test("Handles 0% pension contribution", () => {
        const result = calculatePension(50000, 0);
        expect(result.pensionAmount).toBeCloseTo(0);
        expect(result.remainingPay).toBeCloseTo(50000);
    });

    test("Validates inputs correctly", () => {
        expect(validateInputs(50000, 5)).toBe(true);
        expect(validateInputs(-50000, 5)).toBe(false);
        expect(validateInputs(50000, -5)).toBe(false);
        expect(validateInputs("invalid", 5)).toBe(false);
    });

    test("Returns errors for invalid inputs", () => {
        expect(() => calculatePension(-50000, 5)).toThrow("Invalid base pay or pension percentage.");
        expect(() => calculatePension(50000, -5)).toThrow("Invalid base pay or pension percentage.");
        expect(() => calculatePension("abc", 5)).toThrow("Invalid base pay or pension percentage.");
    });
});
