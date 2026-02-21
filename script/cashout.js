document.getElementById("withdraw-btn")
    .addEventListener('click',function(){
        const agentNumber = getValueFromInput("cashout-agent");
        if(agentNumber.length !== 11){
            alert("Invalid Number");
            // inputMadeEmpty("cashout-agent");
            // inputMadeEmpty("cashout-amount");
            // inputMadeEmpty("cashout-pin");
            return;
        }

        const cashoutAmount = getValueFromInput("cashout-amount");
        const currentBalance = getCurrentBalance();
        if(currentBalance < Number(cashoutAmount)){
            alert("Insufficient Balance");
            // inputMadeEmpty("cashout-agent");
            // inputMadeEmpty("cashout-amount");
            // inputMadeEmpty("cashout-pin");
            return;
        }

        const pin = getValueFromInput("cashout-pin");
        if(pin === '1234'){
            alert('Cashout Successful');
            const newBalance = currentBalance - Number(cashoutAmount);
            setBalance(newBalance);

            inputMadeEmpty("cashout-agent");
            inputMadeEmpty("cashout-amount");
            inputMadeEmpty("cashout-pin");
        }
        else{
            alert("Wrong Pin")
        }
        

        
    })