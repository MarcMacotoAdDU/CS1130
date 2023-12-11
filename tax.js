function calculateTax() {
    const incomeInput = document.getElementById('income');
    const income = parseFloat(incomeInput.value);
  
    const resultDiv = document.getElementById('result');
  
    let tax = 0;
  
    if (income <= 250000) {
      tax = 0;
    } else if (income > 250000 && income <= 400000) {
      tax = 0.2 * (income - 250000);
    } else if (income > 400000 && income <= 800000) {
      tax = 30000 + 0.25 * (income - 400000);
    } else if (income > 800000 && income <= 2000000) {
      tax = 130000 + 0.3 * (income - 800000);
    } else if (income > 2000000 && income <= 8000000) {
      tax = 490000 + 0.32 * (income - 2000000);
    } else if (income > 8000000) {
      tax = 2410000 + 0.35 * (income - 8000000);
    }
  
    resultDiv.innerHTML = `Income Tax for taxable income of P${income.toFixed(2)} is P${tax.toFixed(2)}.`;
  }
  