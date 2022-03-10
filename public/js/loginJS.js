var e = document.getElementById("ebox");
var pwd = document.getElementById("pwdbox");
var em = document.getElementById("emailMessage");
var pwdm = document.getElementById("pwdMessage");
var ev, pwdv;

function emailValidate() {
    // var eregexp = /^([\w]+)@([\w]+).([\w]{2,3})(.[\w]{2,3})?$/;
    var eregexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if (eregexp.test(e.value)) {
        em.innerHTML = "Valid";
        em.style.color = "green";
        e.style.border = "";
        ev = true;
    } else {
        em.innerHTML = "Email format should be in example@domain.xxx or example@domain.xxx.xxx";
        em.style.fontSize = "14px";
        em.style.color = "red";
        e.style.border = "3px solid red";
        ev = false;
    }
}

function pwdValidate() {
    var leg = pwd.value.length;
    var L = /[a-z]/;
    var U = /[A-Z]/;
    var N = /[0-9]/;

    if ((leg >= 8) && (L.test(pwd.value)) && (U.test(pwd.value)) && (N.test(pwd.value))) {
        pwdm.innerHTML = "Valid";
        pwdm.style.color = "green";
        pwd.style.border = "";
        pwdv = true;
        // if ((leg >= 8) && (leg <= 12)) {
        //     pwd.style.border = "3px solid orange";
        // } else {
        //     pwd.style.border = "3px solid green";
        // }
    } else {
        pwdm.innerHTML = "Password should contain minimum 8 characters and at least one uppercase, one lowercase and a number";
        pwdm.style.fontSize = "14px";
        pwdm.style.color = "red";
        pwd.style.border = "3px solid red";
        pwdv = false;

    }
}


function validat() {
    if (ev && pwdv) {
        // alert("LogIn is Successful.");
        return true;
    } else {
        alert("Please check if the data entered is following the specified format.");
        return false;
    }
}