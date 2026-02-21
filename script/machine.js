function getValueFromInput(id){
    const value = document.getElementById(id).value;
    return value;
}

function inputMadeEmpty(id){
    document.getElementById(id).value = '';
}

function getCurrentBalance(){
    const balance = document.getElementById("total-balance").innerText;
    return Number(balance);
}

function setBalance(value){
    document.getElementById("total-balance").innerText = value;
}

function formatDateTime(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-based
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function alertMessageForPayBill(){
    const bill = getValueFromInput("select-to-pay");
    const payAmount = getValueFromInput("pay-amount");
    const accountNumber = getValueFromInput("bill-account-number");
    const currentDate = new Date();
    alert(`${bill} ${payAmount} taka paid by ${accountNumber} at ${formatDateTime(currentDate)}`);
}

function transactionOfPayBill(){
    const bill = getValueFromInput("select-to-pay");
    const payAmount = getValueFromInput("pay-amount");
    const accountNumber = getValueFromInput("bill-account-number");
    const currentDate = new Date();
    const parent = document.getElementById("transaction-card-container");
            const newChild = document.createElement("div");
            
            newChild.innerHTML = `
            <div class="bg-white flex justify-between items-center max-w-sm mx-auto rounded-2xl p-2">
                <div class="content flex gap-2 items-center">
                    <div class="img h-11 w-11 rounded-full p-3 bg-base-200">
                        <img src="assets/opt-1.png" alt="">
                    </div>
                    <div class="content ">
                        <h3 class="text-neutral/80 font-semibold text-[16px]">${bill}</h3>
                        <p class="text-neutral/50">${formatDateTime(currentDate)}</p>
                    </div>
                </div>
                <button onclick= "alertMessageForPayBill()" class=" cursor-pointer p-1">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </div>
            `
            parent.appendChild(newChild);
}

function alertMessageForAddMoney(){
    const amount = getValueFromInput("add-amount");
    const bankName = getValueFromInput("add-money-bank");
    const currentDate = new Date();
    alert(`Add money successful ${amount} taka from ${bankName} at ${formatDateTime(currentDate)}`);
}

function transactionOfAddMoney(){
    const currentDate = new Date();
    const parent = document.getElementById("transaction-card-container");
            const newChild = document.createElement("div");
            
            newChild.innerHTML = `
            <div class="bg-white flex justify-between items-center max-w-sm mx-auto rounded-2xl p-2">
                <div class="content flex gap-2 items-center">
                    <div class="img h-11 w-11 rounded-full p-3 bg-base-200">
                        <img src="assets/opt-1.png" alt="">
                    </div>
                    <div class="content ">
                        <h3 class="text-neutral/80 font-semibold text-[16px]">Money Added</h3>
                        <p class="text-neutral/50">${formatDateTime(currentDate)}</p>
                    </div>
                </div>
                <button onclick= "alertMessageForAddMoney()" class=" cursor-pointer p-1">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </div>
            `
            parent.appendChild(newChild);
}

