// PayLevel.js: Define the values for Basic Pay corresponding to each Pay Level and populate Basic Pay dropdown based on the selected Pay Level

const payLevelValues = {
  "SL0": [0],  
  "SL1": [14800, 15200, 15700, 16200, 16700, 17200, 17700, 18200, 18700, 19300, 19900, 20500, 21100, 21700, 22400, 23100, 23800, 24500, 25200, 26000, 26800, 27600, 28400, 29300, 30200, 31100, 32000, 33000, 34000, 35000, 36100, 37200, 38300, 39400, 40600, 41800, 43100, 44400, 45700, 47100],
  "SL2": [15900, 16400, 16900, 17400, 17900, 18400, 19000, 19600, 20200, 20800, 21400, 22000, 22700, 23400, 24100, 24800, 25500, 26300, 27100, 27900, 28700, 29600, 30500, 31400, 32300, 33300, 34300, 35300, 36400, 37500, 38600, 39800, 41000, 42200, 43500, 44800, 46100, 47500, 48900, 50400],
  "SL3": [16900, 17400, 17900, 18400, 19000, 19600, 20200, 20800, 21400, 22000, 22700, 23400, 24100, 24800, 25500, 26300, 27100, 27900, 28700, 29600, 30500, 31400, 32300, 33300, 34300, 35300, 36400, 37500, 38600, 39800, 41000, 42200, 43500, 44800, 46100, 47500, 48900, 50400, 51900, 53500],
  "Level-1": [18000, 18500, 19100, 19700, 20300, 20900, 21500, 22100, 22800, 23500, 24200, 24900, 25600, 26400, 27200, 28000, 28800, 29700, 30600, 31500, 32400, 33400, 34400, 35400, 36500, 37600, 38700, 39900, 41100, 42300, 43600, 44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900],
  "Level-2": [19900, 20500, 21100, 21700, 22400, 23100, 23800, 24500, 25200, 26000, 26800, 27600, 28400, 29300, 30200, 31100, 32000, 33000, 34000, 35000, 36100, 37200, 38300, 39400, 40600, 41800, 43100, 44400, 45700, 47100, 48500, 50000, 51500, 53000, 54600, 56200, 57900, 59600, 61400, 63200],
  "Level-3A": [25300, 26100, 26900, 27700, 28500, 29400, 30300, 31200, 32100, 33100, 34100, 35100, 36200, 37300, 38400, 39600, 40800, 42000, 43300, 44600, 45900, 47300, 48700, 50200, 51700, 53300, 54900, 56500, 58200, 59900, 61700, 63600, 65500, 67500, 69500, 71600, 73700, 75900, 78200, 80500],
  "Level-3B": [25400, 26200, 27000, 27800, 28600, 29500, 30400, 31300, 32200, 33200, 34200, 35200, 36300, 37400, 38500, 39700, 40900, 42100, 43400, 44700, 46000, 47400, 48800, 50300, 51800, 53400, 55000, 56700, 58400, 60200, 62000, 63900, 65800, 67800, 69800, 71900, 74100, 76300, 78600, 81000],
  "Level-4": [25500, 26300, 27100, 27900, 28700, 29600, 30500, 31400, 32300, 33300, 34300, 35300, 36400, 37500, 38600, 39800, 41000, 42200, 43500, 44800, 46100, 47500, 48900, 50400, 51900, 53500, 55100, 56800, 58500, 60300, 62100, 64000, 65900, 67900, 69900, 72000, 74200, 76400, 78700, 81100],
  "Level-5": [29200, 30100, 31000, 31900, 32900, 33900, 34900, 35900, 37000, 38100, 39200, 40400, 41600, 42800, 44100, 45400, 46800, 48200, 49600, 51100, 52600, 54200, 55800, 57500, 59200, 61000, 62800, 64700, 66600, 68600, 70700, 72800, 75000, 77300, 79600, 82000, 84500, 87000, 89600, 92300],
  "Level-6": [35400, 36500, 37600, 38700, 39900, 41100, 42300, 43600, 44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000, 70000, 72100, 74300, 76500, 78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400],
  "Level-6A": [35500, 36600, 37700, 38800, 40000, 41200, 42400, 43700, 45000, 46400, 47800, 49200, 50700, 52200, 53800, 55400, 57100, 58800, 60600, 62400, 64300, 66200, 68200, 70200, 72300, 74500, 76700, 79000, 81400, 83800, 86300, 88900, 91600, 94300, 97100, 100000, 103000, 106100, 109300, 112600],
  "Level-6B": [35600, 36700, 37800, 38900, 40100, 41300, 42500, 43800, 45100, 46500, 47900, 49300, 50800, 52300, 53900, 55500, 57200, 58900, 60700, 62500, 64400, 66300, 68300, 70300, 72400, 74600, 76800, 79100, 81500, 83900, 86400, 89000, 91700, 94500, 97300, 100200, 103200, 106300, 109500, 112800],
  "Level-6C": [35700, 36800, 37900, 39000, 40200, 41400, 42600, 43900, 45200, 46600, 48000, 49400, 50900, 52400, 54000, 55600, 57300, 59000, 60800, 62600, 64500, 66400, 68400, 70500, 72600, 74800, 77000, 79300, 81700, 84200, 86700, 89300, 92000, 94800, 97600, 100500, 103500, 106600, 109800, 113100],
  "Level-6D": [35800, 36900, 38000, 39100, 40300, 41500, 42700, 44000, 45300, 46700, 48100, 49500, 51000, 52500, 54100, 55700, 57400, 59100, 60900, 62700, 64600, 66500, 68500, 70600, 72700, 74900, 77100, 79400, 81800, 84300, 86800, 89400, 92100, 94900, 97700, 100600, 103600, 106700, 109900, 113200],
  "Level-6E": [35900, 37000, 38100, 39200, 40400, 41600, 42800, 44100, 45400, 46800, 48200, 49600, 51100, 52600, 54200, 55800, 57500, 59200, 61000, 62800, 64700, 66600, 68600, 70700, 72800, 75000, 77300, 79600, 82000, 84500, 87000, 89600, 92300, 95100, 98000, 100900, 103900, 107000, 110200, 113500],
  "Level-6F": [40800, 42000, 43300, 44600, 45900, 47300, 48700, 50200, 51700, 53300, 54900, 56500, 58200, 59900, 61700, 63600, 65500, 67500, 69500, 71600, 73700, 75900, 78200, 80500, 82900, 85400, 88000, 90600, 93300, 96100, 99000, 102000, 105100, 108300, 111500, 114800, 118200, 121700, 125400, 129200],
  "Level-6G": [42300, 43600, 44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000, 70000, 72100, 74300, 76500, 78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400, 115800, 119300, 122900, 126600, 130400, 134300],
  "Level-7": [44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000, 70000, 72100, 74300, 76500, 78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400, 115800, 119300, 122900, 126600, 130400, 134300, 138300, 142400],
  "Level-8": [47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000, 70000, 72100, 74300, 76500, 78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400, 115800, 119300, 122900, 126600, 130400, 134300, 138300, 142400, 146700, 151100],
  "Level-8A": [50700, 52200, 53800, 55400, 57100, 58800, 60600, 62400, 64300, 66200, 68200, 70200, 72300, 74500, 76700, 79000, 81400, 83800, 86300, 88900, 91600, 94300, 97100, 100000, 103000, 106100, 109300, 112600, 116000, 119500, 123100, 126800, 130600, 134500, 138500, 142700, 147000, 151400, 155900, 160600],
  "Level-9": [52700, 54300, 55900, 57600, 59300, 61100, 62900, 64800, 66700, 68700, 70800, 72900, 75100, 77400, 79700, 82100, 84600, 87100, 89700, 92400, 95200, 98100, 101000, 104000, 107100, 110300, 113600, 117000, 120500, 124100, 127800, 131600, 135500, 139600, 143800, 148100, 152500, 157100, 161800, 166700],
  "Level-10A": [56600, 58300, 60000, 61800, 63700, 65600, 67600, 69600, 71700, 73900, 76100, 78400, 80800, 83200, 85700, 88300, 90900, 93600, 96400, 99300, 102300, 105400, 108600, 111900, 115300, 118800, 122400, 126100, 129900, 133800, 137800, 141900, 146200, 150600, 155100, 159800, 164600, 169500, 174600, 179800],
  "Level-11": [67700, 69700, 71800, 74000, 76200, 78500, 80900, 83300, 85800, 88400, 91100, 93800, 96600, 99500, 102500, 105600, 108800, 112100, 115500, 119000, 122600, 126300, 130100, 134000, 138000, 142100, 146400, 150800, 155300, 160000, 164800, 169700, 174800, 180000, 185400, 191000, 196700, 202600, 208700],
  "Level-12": [78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400, 115800, 119300, 122900, 126600, 130400, 134300, 138300, 142400, 146700, 151100, 155600, 160300, 165100, 170100, 175200, 180500, 185900, 191500, 197200, 203100, 209200],
  "Level-13": [123100, 126800, 130600, 134500, 138500, 142700, 147000, 151400, 155900, 160600, 165400, 170400, 175500, 180800, 186200, 191800, 197600, 203500, 209600, 215900, 222400],
  "Level-13A": [131100, 135000, 139100, 143300, 147600, 152000, 156600, 161300, 166100, 171100, 176200, 181500, 186900, 192500, 198300, 204200, 210300, 216600],
  "Level-14": [144200, 148500, 153000, 157600, 162300, 167200, 172200, 177400, 182700, 188200, 193800, 199600, 205600, 211800, 218200],
  "Level-15": [182200, 187700, 193300, 199100, 205100, 211300, 217600, 224100],  
  "Level-16": [205400, 211600, 217900, 224400],  
  "Level-17": [225000]   
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


// This funcation is used to update the Basic Pay Output cell with the selected value from the dropdown.

    function updateBasicPayOutput() {
        const basicPayDropdown = document.getElementById("basicPayDropdown");
        const basicPayOutput = document.getElementById("basicPayOutput");
    
        // Get the selected Basic Pay
        const selectedBasicPay = basicPayDropdown.value;
    
        // Update the Basic Pay Output cell
        basicPayOutput.textContent = selectedBasicPay;
    }
    
    // Attach the function to the change event of Basic Pay dropdown
    document.getElementById("basicPayDropdown").addEventListener("change", updateBasicPayOutput);
    
    // Initial update on page load
    updateBasicPayOutput();
    




// This function is used to calculate the new basic pay based on the selected Fitment Factor and update the New Basic Pay Output cell.


function calculateNewPay() {
    // Get the existing basic pay value
    var basicPay = parseFloat(document.getElementById('basicPayOutput').innerText);

    // Get the selected fitment factor value
    var fitmentFactor = parseFloat(document.getElementById('fitmentFactorDropdown').value);

    // Calculate the new basic pay
    var newBasicPay = basicPay * fitmentFactor;

    // Update the output cell with the new basic pay
    document.getElementById('newBasicPayOutput').innerText = newBasicPay.toFixed(2);
  }

  // This is DA  DA dropdown options and calculate DA output based on the selected DA percentage.
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
      var basicPay = parseFloat(document.getElementById('newBasicPayOutput').textContent);
      var calculatedDA = basicPay * selectedDA;
      daOutput.textContent = calculatedDA.toFixed(2);
    });
  });

  // This is HRA Dropdown function to Calculate HRA output based on selected HRA percentage and basic pay value.
document.addEventListener('DOMContentLoaded', function () {
    var hraDropdown = document.getElementById('hraDropdown');
    var hraOutput = document.getElementById('hraOutput');
  
    // Update HRA output when HRA dropdown value changes
    hraDropdown.addEventListener('change', function () {
      var selectedHRA = parseFloat(hraDropdown.value) / 100;
      var basicPay = parseFloat(document.getElementById('newBasicPayOutput').textContent);
      var calculatedHRA = basicPay * selectedHRA;
      hraOutput.textContent = calculatedHRA.toFixed(2);
    });
  });

    // This is Transport Allowance (TA) Dropdown function to Calculate TA output based on selected TA percentage and basic pay value.
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

 // This is Secretariat Allowance (SA) Dropdown function to Calculate Secretariat Allowance output based on selected Secretariat Allowance
  // Calculate Secretariat Allowance output based on selected Secretariat Allowance
document.addEventListener('DOMContentLoaded', function () {
    var secretariatDropdown = document.getElementById('SecretariatAllowanceDropdown');
    var secretariatOutput = document.getElementById('SecretariatAllowanceOutput');
  
    // Update Secretariat Allowance output when Secretariat Allowance dropdown value changes
    secretariatDropdown.addEventListener('change', function () {
      var selectedSecretariat = parseFloat(secretariatDropdown.value);
      secretariatOutput.textContent = selectedSecretariat.toFixed(2);
    });
  });

  // This is City Compensatory Allowance (CCA) Dropdown function to Calculate CCA output based on selected CCA value
  // Calculate CCA output based on selected CCA value
document.addEventListener('DOMContentLoaded', function () {
    var ccaDropdown = document.getElementById('ccaDropdown');
    var ccaOutput = document.getElementById('ccaOutput');
  
    // Update CCA output when CCA dropdown value changes
    ccaDropdown.addEventListener('change', function () {
      var selectedCCA = parseFloat(ccaDropdown.value);
      ccaOutput.textContent = selectedCCA.toFixed(2);
    });
  });


// This is Medical Allowance (MA) Dropdown function to Calculate MA output based on selected MA value
  // Calculate MA output based on selected MA value
document.addEventListener('DOMContentLoaded', function () {
    var maDropdown = document.getElementById('maDropdown');
    var maOutput = document.getElementById('maOutput');
  
    // Update MA output when MA dropdown value changes
    maDropdown.addEventListener('change', function () {
      var selectedMA = parseFloat(maDropdown.value);
      maOutput.textContent = selectedMA.toFixed(2);
    });
  });

// This is Other Allowances (OA) Dropdown function to Calculate OA output based on selected OA value
  // Function to update Other Allowances output
function updateAllowances() {
    var otherAllowancesInput = document.getElementById('otherAllowances');
    var otherAllowancesOutput = document.getElementById('otherAllowancesOutput');
    var selectedOtherAllowances = parseFloat(otherAllowancesInput.value);

    // Check if it's a valid number
    if (!isNaN(selectedOtherAllowances)) {
      otherAllowancesOutput.textContent = selectedOtherAllowances.toFixed(2);
    } else {
      // Handle the case when it's not a valid number (NaN)
      otherAllowancesOutput.textContent = "0";
    }
  }

  // Add event listener to Other Allowances input
  document.getElementById('otherAllowances').addEventListener('input', updateAllowances);



// This is Gross Salary Calculation function to Calculate Gross Salary based on the values of all the allowances.
  document.addEventListener('DOMContentLoaded', (event) => {
    function calculateGross() {
        const newBasicPay = parseFloat(document.getElementById('newBasicPayOutput').textContent) || 0;
        const da = parseFloat(document.getElementById('daOutput').textContent) || 0;
        const hra = parseFloat(document.getElementById('hraOutput').textContent) || 0;
        const ta = parseFloat(document.getElementById('taOutput').textContent) || 0;
        const secretariatAllowance = parseFloat(document.getElementById('SecretariatAllowanceOutput').textContent) || 0;
        const cca = parseFloat(document.getElementById('ccaOutput').textContent) || 0;
        const ma = parseFloat(document.getElementById('maOutput').textContent) || 0;
        const otherAllowances = parseFloat(document.getElementById('otherAllowancesOutput').textContent) || 0;

        const gross = newBasicPay + da + hra + ta + secretariatAllowance + cca + ma + otherAllowances;

        document.getElementById('gross').textContent = gross.toFixed(2);
    }

    // Initial calculation
    calculateGross();

    // List of elements to observe
    const elementsToWatch = [
        'newBasicPayOutput',
        'daOutput',
        'hraOutput',
        'taOutput',
        'SecretariatAllowanceOutput',
        'ccaOutput',
        'maOutput',
        'otherAllowancesOutput'
    ];

    // Add event listeners to elements
    elementsToWatch.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // Observing changes to text content
            new MutationObserver(calculateGross).observe(element, { childList: true });

            // Observing input changes if elements are input fields
            element.addEventListener('input', calculateGross);
        }
    });
});




// This is Subscription Calculation function to Calculate Subscription based on the selected subscription type and input value.
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
    var basicPay = parseFloat(document.getElementById('newBasicPayOutput').textContent) || 0;
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


// This is Deducation Calculation function to Calculate Deductions based on the input value.
function updateDeductionsOutput() {
    // Get the value from the deductions input field
    var deductionsInput = document.getElementById('deductions').value;
  
    // Parse the input as a float and ensure it's a number
    var deductionsValue = parseFloat(deductionsInput) || 0;
  
    // Update the output in the DeductionsOutput cell
    document.getElementById('DeductionsOutput').textContent = deductionsValue.toFixed(2); // Display the output with two decimal places
  }



// This is Net Salary Calculation function to Calculate Net Salary based on the Gross Salary, Subscription and Deductions.
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
