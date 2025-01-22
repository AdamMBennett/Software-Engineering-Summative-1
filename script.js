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

    const pensionAmount = (basePay * pensionPercentage) / 100;
    const remainingPay = basePay - pensionAmount;

    document.getElementById('pensionAmount').textContent = pensionAmount.toFixed(2);
    document.getElementById('remainingPay').textContent = remainingPay.toFixed(2);
}
