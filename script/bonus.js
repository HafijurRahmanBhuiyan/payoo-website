document.getElementById("bonus-btn")
    .addEventListener("click",function(){
        const coupon = getValueFromInput("bonus-coupon");
        console.log(coupon, typeof(coupon),coupon.slice(-2));  //last two character of str --> str.slice(-2)
        if(coupon.length < 2){
            alert("Invalid Coupon Number");
            return;
        }
        const bonus = Number(coupon.slice(-2));
        const newBalance = getCurrentBalance() + getCurrentBalance()*(bonus/100);
        console.log(newBalance);

        setBalance(newBalance);
        alert("Bonus added with successful");

    })