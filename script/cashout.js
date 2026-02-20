document.getElementById("withdraw-btn")
    .addEventListener('click',function(){
        const agentNumber = document.getElementById("cashout-agent").value;
        if(agentNumber.length !== 11){
            alert("Invalid Number");
            document.getElementById("cashout-agent").value = '';
            document.getElementById("cashout-amount").value = '';
            document.getElementById("cashout-pin").value = '';
            return;
        }

        const cashoutAmount = document.getElementById("cashout-amount").value;
        const totalBalance = document.getElementById("total-balance").innerText;
        if(Number(totalBalance) < Number(cashoutAmount)){
            alert("Insufficient Balance");
            document.getElementById("cashout-agent").value = '';
            document.getElementById("cashout-amount").value = '';
            document.getElementById("cashout-pin").value = '';
            return;
        }

        const pin = document.getElementById("cashout-pin").value;
        if(pin === '5875'){
            alert('Cashout Successful');
            const newBalance = Number(totalBalance) - Number(cashoutAmount);
            document.getElementById("total-balance").innerText = newBalance;
        }
        else{
            alert("Wrong Pin")
        }
        
        document.getElementById("cashout-agent").value = '';
        document.getElementById("cashout-amount").value = '';
        document.getElementById("cashout-pin").value = '';
        
    })