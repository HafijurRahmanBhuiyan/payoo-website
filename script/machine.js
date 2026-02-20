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