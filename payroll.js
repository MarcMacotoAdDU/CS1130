let payrollList = [];

function addEmployee() {
  const employeeName = document.getElementById('employeeName').value;
  const daysWorked = parseInt(document.getElementById('daysWorked').value);
  const dailyRate = parseFloat(document.getElementById('dailyRate').value);
  const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

  const grossPay = daysWorked * dailyRate;
  const netPay = grossPay - deductionAmount;

  const employee = {
    name: employeeName,
    daysWorked,
    dailyRate,
    grossPay,
    deductionAmount,
    netPay
  };

  payrollList.push(employee);
  displayPayroll();
}

function displayPayroll() {
  const table = document.getElementById('payrollTable');
  table.innerHTML = `
    <tr>
      <th>No.</th>
      <th>Employee Name</th>
      <th>Days Worked</th>
      <th>Daily Rate</th>
      <th>Gross Pay</th>
      <th>Deduction Amount</th>
      <th>Net Pay</th>
      <th>Action</th>
    </tr>
  `;

  payrollList.forEach((employee, index) => {
    const row = table.insertRow(-1);
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${employee.name}</td>
      <td>${employee.daysWorked}</td>
      <td>${employee.dailyRate}</td>
      <td>${employee.grossPay}</td>
      <td>${employee.deductionAmount}</td>
      <td>${employee.netPay}</td>
      <td><button onclick="openDeleteModal(${index})">Delete</button></td>
    `;
  });
}

function openDeleteModal(index) {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
  modal.dataset.index = index;
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

function deleteEntry() {
  const modal = document.getElementById('myModal');
  const index = parseInt(modal.dataset.index);
  payrollList.splice(index, 1);
  displayPayroll();
  closeModal();
}

function clearTable() {
    const clearTableModal = document.getElementById('clearTableModal');
    clearTableModal.style.display = 'block';
  }
  
  function confirmClearTable() {
    payrollList = [];
    displayPayroll();
    const clearTableModal = document.getElementById('clearTableModal');
    clearTableModal.style.display = 'none';
  }
  
  function closeClearTableModal() {
    const clearTableModal = document.getElementById('clearTableModal');
    clearTableModal.style.display = 'none';
  }
