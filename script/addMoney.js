document.getElementById("add-money-btn")
    .addEventListener("click", function(){
        const bankName = getValueFromInput("add-money-bank");
        if(bankName === "Select bank"){
            alert("Please select a bank");
            return;
        }
        const accountNumber = getValueFromInput("bank-number");
        if(accountNumber.length !== 11){
            alert("Invalid Number");
            return;
        }
        const amount = getValueFromInput("add-amount");
        const pin = getValueFromInput("add-money-pin");
        if(pin === "1234"){
            alert(`Add money successful from ${bankName} at ${new Date()}`);
            const newBalance = getCurrentBalance() + Number(amount);
            setBalance(newBalance);
            
            inputMadeEmpty("bank-number");
            inputMadeEmpty("add-amount");
            inputMadeEmpty("add-money-pin");
        }
        else{
            alert("Wrong Pin");
        }
        // inputMadeEmpty("add-money-bank");

    })