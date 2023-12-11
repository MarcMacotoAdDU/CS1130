document.getElementById('calculateBtn').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const factorialResult = document.getElementById('factorialResult');
    const sumResult = document.getElementById('sumResult');
    const averageResult = document.getElementById('averageResult');
  
    let factorial = 1;
    let i = 1;
    while (i <= numberInput) {
      factorial *= i;
      i++;
    }
    factorialResult.textContent = `${factorial}`;
  
    let sum = 0;
    let j = 1;
    do {
      sum += j;
      j++;
    } while (j <= numberInput);
    sumResult.textContent = `${sum}`;
  
    let total = 0;
    for (let k = 1; k <= numberInput; k++) {
      total += k;
    }
    const average = total / numberInput;
    averageResult.textContent = `${average}`;
  });