var e = document.getElementById("ebox");
var ph = document.getElementById("phbox");
var pwd = document.getElementById("pwdbox");
var pwdc = document.getElementById("pwdcbox");
var em = document.getElementById("emailMessage");
var phm = document.getElementById("phMessage");
var pwdm = document.getElementById("pwdMessage");
var pwdcm = document.getElementById("pwdcMessage");
var ev, phv, pwdv, pwdcv;

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

function phValidate() {
    var phregexp = /^([0-9]{3})([. -]?[0-9]{3})([. -]?[0-9]{4})$/;
    // var phregexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phregexp.test(ph.value)) {
        phm.innerHTML = "Valid";
        phm.style.color = "green";
        ph.style.border = "";
        phv = true;
    } else {
        phm.innerHTML = "Phone number format should be in XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX or XXXXXXXXXX";
        phm.style.fontSize = "14px";
        phm.style.color = "red";
        ph.style.border = "3px solid red";
        phv = false;
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
        if ((leg >= 8) && (leg <= 12)) {
            pwd.style.border = "3px solid orange";
        } else {
            pwd.style.border = "3px solid green";
        }
    } else {
        pwdm.innerHTML = "Password should contain minimum 8 characters and at least one uppercase, one lowercase and a number";
        pwdm.style.fontSize = "14px";
        pwdm.style.color = "red";
        pwd.style.border = "3px solid red";
        pwdv = false;

    }
}

function pwdcValidate() {
    if ((pwd.value) == (pwdc.value)) {
        pwdcm.innerHTML = "Both the passwords are matching";
        pwdcm.style.color = "green";
        pwdc.style.border = "";
        pwdcv = true;
    } else {
        pwdcm.innerHTML = "Entered passwords is not matching the above one!";
        pwdcm.style.fontSize = "14px";
        pwdcm.style.color = "red";
        pwdc.style.border = "3px solid red";
        pwdcv = false;
    }
}

function validat() {
    pwdcValidate();
    if (ev && phv && pwdv && pwdcv) {
        alert("Your account has been successfully created. Press OK to enter the LogIn page.");
        return true;
    } else {
        alert("Please check if the data entered is following the specified format.");
        return false;
    }
}