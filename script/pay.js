document.getElementById("pay-btn")
    .addEventListener("click", function(){
        const bank = getValueFromInput("select-to-pay");
        console.log(bank)
        if(bank === "Select to pay bill"){
            alert("Please select to pay bill");
            return;
        }
        const accountNumber = getValueFromInput("bill-account-number");
        if(accountNumber.length !== 11){
            alert("Invalid Number");
            return;
        }
        const payAmount = getValueFromInput("pay-amount");
        if(getCurrentBalance() < Number(payAmount)){
            alert("Insufficient Balance");
            return;
        }
    })