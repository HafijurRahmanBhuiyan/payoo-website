document.getElementById('login-btn')
    .addEventListener('click', function(){
        const numberInput = document.getElementById('number-input').value;
        document.getElementById('number-input').value = '';
        const pinInput = document.getElementById('pin-input').value;
        document.getElementById('pin-input').value = '';
        
        if(numberInput === '01786444587' && pinInput === '1234'){
            alert('Login Success');
            // window.location.replace("home.html");
            window.location.assign("home.html");
        }
        else{
            alert('Login Failed');
            return;
        }

    })