function validateForm() {
    var email = document.forms["myForm"]["email"];
    var phone = document.forms["myForm"]["phone"];
    var psw = document.forms["myForm"]["psw"];

    if (email.value == ""){
        alert("please enter your name");
        email.focus();
        return false;
    }
    if (phone.value == ""){
        alert("please enter your telephone number");
        phone.focus();
        return false;
    }
    if (psw.value == ""){
        alert("please enter your password");
      
        psw.focus();
        return false;
    }
}

