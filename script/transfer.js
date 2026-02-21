document.getElementById("transfer-btn")
    .addEventListener("click", function(){
        const accountNumber = getValueFromInput("transfer-account-number");
        if(accountNumber.length !== 11){
            alert("Invalid Number");
            return;
        }
        const transferAmount = getValueFromInput("transfer-amount");
        if(getCurrentBalance() < Number(transferAmount)){
            alert("Insufficient Balance");
            return;
        }

        const pin = getValueFromInput("transfer-pin");
        if(pin === '1234'){
            const newBalance = getCurrentBalance() - Number(transferAmount);
            alert(`${transferAmount} Taka Transferred at ${new Date()}`);
            setBalance(newBalance);
            inputMadeEmpty("transfer-pin");
            inputMadeEmpty("transfer-amount");
            inputMadeEmpty("transfer-account-number");
        }
        else{
            alert("Wrong pin");
            return;
        }
    })