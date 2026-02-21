document.getElementById("pay-btn")
    .addEventListener("click", function(){
        const bill = getValueFromInput("select-to-pay");
        
        if(bill === "Select to pay bill"){
            alert("Please select to pay bill");
            return;
        }
        const accountNumber = getValueFromInput("bill-account-number");
        if(accountNumber.length !== 11){
            alert("Invalid Number");
            return;
        }
        const payAmount = getValueFromInput("pay-amount");
        // console.log(payAmount)
        if(getCurrentBalance() < Number(payAmount)){
            alert("Insufficient Balance");
            return;
        }
        else if(payAmount === ''){
            alert("Please set the amount");
            return;
        }
        const pin = getValueFromInput("pay-pin");
        if(pin === '1234'){
            transactionOfPayBill();
        }
        else{
            alert('Wrong pin');
        }
    })