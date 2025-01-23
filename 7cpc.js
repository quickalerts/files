 // PAY LEVEL
const payLevelValues = {
    "SL0": [0],  
    "Level-1": [18000, 18500, 19100, 19700, 20300, 20900, 21500, 22100, 22800, 23500, 24200, 24900, 25600, 26400, 27200, 28000, 28800, 29700, 30600, 31500, 32400, 33400, 34400, 35400, 36500, 37600, 38700, 39900, 41100, 42300, 43600, 44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900],
    "Level-2": [19900, 20500, 21100, 21700, 22400, 23100, 23800, 24500, 25200, 26000, 26800, 27600, 28400, 29300, 30200, 31100, 32000, 33000, 34000, 35000, 36100, 37200, 38300, 39400, 40600, 41800, 43100, 44400, 45700, 47100, 48500, 50000, 51500, 53000, 54600, 56200, 57900, 59600, 61400, 63200],
    "Level-3": [21700, 22400, 23100, 23800, 24500, 25200, 26000, 26800, 27600, 28400, 29300, 30200, 31100, 32000, 33000, 34000, 35000, 36100, 37200, 38300, 39400, 40600, 41800, 43100, 44400, 45700, 47100, 48500, 50000, 51500, 53000, 54600, 56200, 57900, 59600, 61400, 63200, 65100, 67100, 69100],
    "Level-4": [25500, 26300, 27100, 27900, 28700, 29600, 30500, 31400, 32300, 33300, 34300, 35300, 36400, 37500, 38600, 39800, 41000, 42200, 43500, 44800, 46100, 47500, 48900, 50400, 51900, 53500, 55100, 56800, 58500, 60300, 62100, 64000, 65900, 67900, 69900, 72000, 74200, 76400, 78700, 81100],
    "Level-5": [29200, 30100, 31000, 31900, 32900, 33900, 34900, 35900, 37000, 38100, 39200, 40400, 41600, 42800, 44100, 45400, 46800, 48200, 49600, 51100, 52600, 54200, 55800, 57500, 59200, 61000, 62800, 64700, 66600, 68600, 70700, 72800, 75000, 77300, 79600, 82000, 84500, 87000, 89600, 92300],
    "Level-6": [35400, 36500, 37600, 38700, 39900, 41100, 42300, 43600, 44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000, 70000, 72100, 74300, 76500, 78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400],
    "Level-7": [44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000, 70000, 72100, 74300, 76500, 78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400, 115800, 119300, 122900, 126600, 130400, 134300, 138300, 142400],
    "Level-8": [47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000, 70000, 72100, 74300, 76500, 78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400, 115800, 119300, 122900, 126600, 130400, 134300, 138300, 142400, 146700, 151100],
    "Level-9": [53100, 54700, 56300, 58000, 59700, 61500, 63300, 65200, 67200, 69200, 71300, 73400, 75600, 77900, 80200, 82600, 85100, 87700, 90300, 93000, 95800, 98700, 101700, 104800, 107900, 111100, 114400, 117800, 121300, 124900, 128600, 132500, 136500, 140600, 144800, 149100, 153600, 158200, 162900, 151100],
    "Level-10": [56100, 57800, 59500, 61300, 63100, 65000, 67000, 69000, 71100, 73200, 75400, 77700, 80000, 82400, 84900, 87400, 90000, 92700, 95500, 98400, 101400, 104400, 107500, 110700, 114000, 117400, 120900, 124500, 128200, 132000, 136000, 140100, 144300, 148600, 153100, 157700, 162400, 167300, 172300, 177500],
    "Level-11": [67700, 69700, 71800, 74000, 76200, 78500, 80900, 83300, 85800, 88400, 91100, 93800, 96600, 99500, 102500, 105600, 108800, 112100, 115500, 119000, 122600, 126300, 130100, 134000, 138000, 142100, 146400, 150800, 155300, 160000, 164800, 169700, 174800, 180000, 185400, 191000, 196700, 202600, 208700],
    "Level-12": [78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400, 115800, 119300, 122900, 126600, 130400, 134300, 138300, 142400, 146700, 151100, 155600, 160300, 165100, 170100, 175200, 180500, 185900, 191500, 197200, 203100, 209200],
    "Level-13": [123100, 126800, 130600, 134500, 138500, 142700, 147000, 151400, 155900, 160600, 165400, 170400, 175500, 180800, 186200, 191800, 197600, 203500, 209600, 215900],
    "Level-13A": [131100, 135000, 139100, 143300, 147600, 152000, 156600, 161300, 166100, 171100, 176200, 181500, 186900, 192500, 198300, 204200, 210300, 216600],
    "Level-14": [144200, 148500, 153000, 157600, 162300, 167200, 172200, 177400, 182700, 188200, 193800, 199600, 205600, 211800, 218200],
    "Level-15": [182200, 187700, 193300, 199100, 205100, 211300, 217600, 224100],
    "Level-16": [205400, 211600, 217900, 224400],
    "Level-17": [225000],
    "Level-18": [225000]  
  };
  
  function populateBasicPayDropdown() {
    const payLevelDropdown = document.getElementById("payLevelDropdown");
    const basicPayDropdown = document.getElementById("basicPayDropdown");
  
    // Get the selected Pay Level
    const selectedPayLevel = payLevelDropdown.value;
  
    // Clear previous options
    basicPayDropdown.innerHTML = "";
  
    // Populate options based on the selected Pay Level
    payLevelValues[selectedPayLevel].forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.text = value;
      basicPayDropdown.appendChild(option);
    });
  
    // Update Basic Pay Output
    updateBasicPayOutput();
  }
  
  // Attach the function to the change event of Pay Level dropdown
  document.getElementById("payLevelDropdown").addEventListener("change", populateBasicPayDropdown);
  
  // Initial population on page load
  populateBasicPayDropdown();
 
 
 // BASIC PAY
 function updateBasicPayOutput() {
    const basicPayDropdown = document.getElementById("basicPayDropdown");
    const basicPayOutput = document.getElementById("basicPayOutput");

    // Get the selected Basic Pay
    const selectedBasicPay = parseFloat(basicPayDropdown.value).toFixed(2);

    // Update the Basic Pay Output cell
    basicPayOutput.textContent = selectedBasicPay;
}

// Attach the function to the change event of Basic Pay dropdown
document.getElementById("basicPayDropdown").addEventListener("change", updateBasicPayOutput);

// Initial update on page load
updateBasicPayOutput();

//DA
// Populate DA dropdown options and calculate DA output
document.addEventListener('DOMContentLoaded', function () {
    var daDropdown = document.getElementById('daDropdown');
    var daOutput = document.getElementById('daOutput');

    // Populate DA dropdown options from 0% to 150%
    for (var i = 0; i <= 150; i++) {
      var option = document.createElement('option');
      option.value = i;
      option.text = i + '%';
      daDropdown.add(option);
    }

    // Update DA output when DA dropdown value changes
    daDropdown.addEventListener('change', function () {
      var selectedDA = parseFloat(daDropdown.value) / 100;
      var basicPay = parseFloat(document.getElementById('basicPayOutput').textContent);
      var calculatedDA = basicPay * selectedDA;
      daOutput.textContent = calculatedDA.toFixed(2);
    });
  });

// HRA
// Calculate HRA output based on selected HRA percentage and basic pay
document.addEventListener('DOMContentLoaded', function () {
    var hraDropdown = document.getElementById('hraDropdown');
    var hraOutput = document.getElementById('hraOutput');
  
    // Update HRA output when HRA dropdown value changes
    hraDropdown.addEventListener('change', function () {
      var selectedHRA = parseFloat(hraDropdown.value) / 100;
      var basicPay = parseFloat(document.getElementById('basicPayOutput').textContent);
      var calculatedHRA = basicPay * selectedHRA;
      hraOutput.textContent = calculatedHRA.toFixed(2);
    });
  });
// TRANSPORT ALLOWANCE CALCULATION
// Calculate Transport Allowance output based on selected TA and DA values
document.addEventListener('DOMContentLoaded', function () {
    var taDropdown = document.getElementById('taDropdown');
    var taOutput = document.getElementById('taOutput');
    var daDropdown = document.getElementById('daDropdown');
  
    // Update TA output when TA or DA dropdown values change
    function updateTAOutput() {
      var selectedTA = parseFloat(taDropdown.value);
      var selectedDA = parseFloat(daDropdown.value) / 100;
      var calculatedTA = selectedTA + (selectedTA * selectedDA);
      taOutput.textContent = calculatedTA.toFixed(2);
    }
  
    // Update TA output when TA or DA dropdown values change
    taDropdown.addEventListener('change', updateTAOutput);
    daDropdown.addEventListener('change', updateTAOutput);
  });










  //OTHER ALLOWANCES
document.addEventListener('DOMContentLoaded', function () {
    // Function to update the total allowances
    function updateAllowances() {
        console.log('updateAllowances called');
        const allowancesContainer = document.getElementById('allowancesContainer');
        const inputs = allowancesContainer.getElementsByTagName('input');
        let total = 0;
  
        // Loop through all number inputs and sum their values
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === 'number') {
                const value = parseFloat(inputs[i].value) || 0; // Default to 0 if invalid
                total += value;
            }
        }
  
        // Update the allowancesOutput element with the total
        const allowancesOutput = document.getElementById('allowancesOutput');
        if (allowancesOutput) {
            allowancesOutput.textContent = total.toFixed(2);
        } else {
            console.error('allowancesOutput element is missing in the DOM.');
        }
  
        console.log('Total allowances:', total);
    }
  
    // Add a new allowance row
    function addAllowance() {
        console.log('Add Allowance button clicked');
        const allowancesContainer = document.getElementById('allowancesContainer');
        const newInputContainer = document.createElement('div');
  
        // Create inputs for allowance name and amount
        const newNameInput = document.createElement('input');
        newNameInput.type = 'text';
        newNameInput.placeholder = 'Allowance Name';
  
        const newAmountInput = document.createElement('input');
        newAmountInput.type = 'number';
        newAmountInput.placeholder = '0';
        newAmountInput.oninput = updateAllowances;
  
        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'removeAllowance';
        removeButton.onclick = function () {
            removeAllowance(removeButton);
        };
  
        // Append the inputs and button to the container
        newInputContainer.appendChild(newNameInput);
        newInputContainer.appendChild(newAmountInput);
        newInputContainer.appendChild(removeButton);
  
        // Add the container to the allowancesContainer
        allowancesContainer.appendChild(newInputContainer);
    }
  
    // Remove a specific allowance row
    function removeAllowance(button) {
        console.log('Remove button clicked');
        const inputContainer = button.parentElement;
        inputContainer.parentElement.removeChild(inputContainer);
        updateAllowances(); // Recalculate total after removal
    }
  
    // Attach event listeners
    document.getElementById('addAllowance').addEventListener('click', addAllowance);
  });

  //DEDUCATIONS
document.addEventListener('DOMContentLoaded', function () {
    // Function to update the total deductions
    function updateDeductions() {
        console.log('updateDeductions called');
        const deductionsContainer = document.getElementById('deductionsContainer');
        const inputs = deductionsContainer.getElementsByTagName('input');
        let total = 0;

        // Loop through all number inputs and sum their values
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === 'number') {
                const value = parseFloat(inputs[i].value) || 0; // Default to 0 if invalid
                total += value;
            }
        }

        // Update the deductionsOutput element with the total
        const deductionsOutput = document.getElementById('deductionsOutput');
        if (deductionsOutput) {
            deductionsOutput.textContent = total.toFixed(2);
        } else {
            console.error('deductionsOutput element is missing in the DOM.');
        }

        console.log('Total deductions:', total);
    }

    // Add a new deduction row
    function addDeduction() {
        console.log('Add Deduction button clicked');
        const deductionsContainer = document.getElementById('deductionsContainer');
        const newInputContainer = document.createElement('div');

        // Create inputs for deduction name and amount
        const newNameInput = document.createElement('input');
        newNameInput.type = 'text';
        newNameInput.placeholder = 'Deduction Name';

        const newAmountInput = document.createElement('input');
        newAmountInput.type = 'number';
        newAmountInput.placeholder = '0';
        newAmountInput.oninput = updateDeductions;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'removeDeduction';
        removeButton.onclick = function () {
            removeDeduction(removeButton);
        };

        // Append the inputs and button to the container
        newInputContainer.appendChild(newNameInput);
        newInputContainer.appendChild(newAmountInput);
        newInputContainer.appendChild(removeButton);

        // Add the container to the deductionsContainer
        deductionsContainer.appendChild(newInputContainer);
    }

    // Remove a specific deduction row
    function removeDeduction(button) {
        console.log('Remove button clicked');
        const inputContainer = button.parentElement;
        inputContainer.parentElement.removeChild(inputContainer);
        updateDeductions(); // Recalculate total after removal
    }

    // Attach event listeners
    document.getElementById('addDeduction').addEventListener('click', addDeduction);
});

// SUBSCRIPTION CALCULATOR
function updateSubscriptionOutput() {
    // Get the selected subscription type from the dropdown
    var subscriberType = document.getElementById('subscriber').value;
    var subscriptionInput = document.getElementById('subscription');

    // Check if the "Select your Subscription" option is chosen
    if (subscriberType === '0') {
        subscriptionInput.value = 0; // Set input value to 0
        subscriptionInput.disabled = true; // Disable the input field
    } else if (subscriberType === 'GPF') {
        // Enable the input field for GPF
        subscriptionInput.disabled = false; 
        // Ensure the input value is kept or reset to 0 if it's empty
        subscriptionInput.value = subscriptionInput.value || 0; 
    } else {
        // Disable the input field for NPS and PF
        subscriptionInput.disabled = true; 
        subscriptionInput.value = 0; // Set input value to 0
    }

    // Get the basic pay and DA values from the DOM (replace these with your actual elements)
    var basicPay = parseFloat(document.getElementById('basicPayOutput').textContent) || 0;
    var da = parseFloat(document.getElementById('daOutput').textContent) || 0;

    var output = 0; // Initialize the output variable

    // Calculate the output based on the selected subscription type
    if (subscriberType === 'GPF') {
        // GPF uses the input value directly
        output = parseFloat(subscriptionInput.value) || 0;
    } else if (subscriberType === 'NPS') {
        // Calculate NPS Subscription: 10% of Basic Pay + DA
        output = (0.10 * (basicPay + da));
    } else if (subscriberType === 'PF') {
        // Calculate PF Subscription: 12% of Basic Pay + DA
        output = (0.12 * (basicPay + da));
    }

    // Update the output in the SubscriptionOutput cell
    document.getElementById('SubscriptionOutput').textContent = output.toFixed(2); // Display the output with two decimal places
}

// NET SALARY CALCULATION
// Function to calculate Net Salary
function calculateNetSalary() {
    // Get the gross salary value
    var grossSalary = parseFloat(document.getElementById('gross').textContent) || 0;
    
    // Get the subscription output value
    var subscriptionOutput = parseFloat(document.getElementById('SubscriptionOutput').textContent) || 0;
  
    // Get the deductions output value
    var deductionsOutput = parseFloat(document.getElementById('DeductionsOutput').textContent) || 0;
  
    // Calculate the net salary
    var netSalary = grossSalary - subscriptionOutput - deductionsOutput;
  
    // Update the Net Salary output cell
    document.getElementById('netSalaryOutput').textContent = netSalary.toFixed(2); // Display the output with two decimal places
}

// CALCULATE FUNCTION
function calculate() {
    // Get values from the elements using innerText
    var basicPay = parseFloat(document.getElementById("basicPayOutput").innerText) || 0;
    var da = parseFloat(document.getElementById("daOutput").innerText) || 0;
    var hra = parseFloat(document.getElementById("hraOutput").innerText) || 0;
    var ta = parseFloat(document.getElementById("taOutput").innerText) || 0;
    var otherAllowances = parseFloat(document.getElementById("allowancesOutput").innerText) || 0;
    var deductions = parseFloat(document.getElementById("deductionsOutput").innerText) || 0;

    // Calculate Gross Salary (removing 'deductions')
    var grossSalary = basicPay + da + hra + ta + otherAllowances; // No deductions here
    document.getElementById("gross").innerText = grossSalary.toFixed(2);

    // Calculate Net Salary
    var subscription = parseFloat(document.getElementById("SubscriptionOutput").innerText) || 0;
    var netSalary;
    if (subscription && deductions) {
        netSalary = grossSalary - (subscription + deductions);
    } else if (subscription) {
        netSalary = grossSalary - subscription;
    } else if (deductions) {
        netSalary = grossSalary - deductions;
    } else {
        netSalary = grossSalary;
    }
    document.getElementById("netSalaryOutput").innerText = netSalary.toFixed(2);
}

// Note: Don't forget to call the calculate function when needed, for example, on a button click or when the values change.
