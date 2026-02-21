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
            const currentDate = new Date();
            alert(`Add money successful ${amount} taka from ${bankName} at ${formatDateTime(currentDate)}`);
            const newBalance = getCurrentBalance() + Number(amount);
            setBalance(newBalance);
            transactionOfAddMoney();
            // inputMadeEmpty("bank-number");
            // inputMadeEmpty("add-amount");
            // inputMadeEmpty("add-money-pin");
        }
        else{
            alert("Wrong Pin");
        }
        // inputMadeEmpty("add-money-bank");

    })