$(document).ready(function () {

    $("#buser").click(function () {
        $("#buser").hide(500);
        $('.ulogin').show(500, "swing");
        $(".alogin").hide(500, "swing");
        $("#badmin").show(500);
    });

    $("#badmin").click(function () {
        $("#badmin").hide(500);
        $('.alogin').show(500, "swing");
        $(".ulogin").hide(500, "swing");
        $("#buser").show(500);
    });


    $(".uclose").click(function () {
        $(".ulogin").hide(500, "swing");
        $("#buser").show(500);
    });

    $(".aclose").click(function () {
        $(".alogin").hide(500, "swing");
        $("#badmin").show(500);
    });

});







// ! User Verification

var e = document.getElementById("ebox");
var pwd = document.getElementById("pwdbox");
var em = document.getElementById("emailMessage");
var pwdm = document.getElementById("pwdMessage");
var ev, pwdv;

function emailValidate() {
    // var eregexp = /^([\w]+)@([\w]+).([\w]{2,3})(.[\w]{2,3})?$/;
    var eregexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if (eregexp.test(e.value)) {
        em.innerHTML = "Valid Format";
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
        pwdm.innerHTML = "Valid Format";
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


// ! Admin Verification

var ae = document.getElementById("aebox");
var aid = document.getElementById("aidbox");
var apwd = document.getElementById("apwdbox");
var aem = document.getElementById("aemailMessage");
var aidm = document.getElementById("aidMessage");
var apwdm = document.getElementById("apwdMessage");
var aev, aidv, apwdv;

function aemailValidate() {
    // var eregexp = /^([\w]+)@([\w]+).([\w]{2,3})(.[\w]{2,3})?$/;
    var aeregexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if (aeregexp.test(ae.value)) {
        aem.innerHTML = "Valid Format";
        aem.style.color = "green";
        ae.style.border = "";
        aev = true;
    } else {
        aem.innerHTML = "Email format should be in example@domain.xxx or example@domain.xxx.xxx";
        aem.style.fontSize = "14px";
        aem.style.color = "red";
        ae.style.border = "3px solid red";
        aev = false;
    }
}

function aidValidate() {
    var aleg = aid.value.length;
    var aN = /[0-9]/;

    if ((aleg == 4) && (aN.test(aid.value))) {
        aidm.innerHTML = "Valid Format";
        aidm.style.color = "green";
        aid.style.border = "";
        aidv = true;
        // if ((leg >= 8) && (leg <= 12)) {
        //     pwd.style.border = "3px solid orange";
        // } else {
        //     pwd.style.border = "3px solid green";
        // }
    } else {
        aidm.innerHTML = "Admin Id Format Invalid";
        aidm.style.fontSize = "14px";
        aidm.style.color = "red";
        aid.style.border = "3px solid red";
        aidv = false;

    }
}


function apwdValidate() {
    var aleg = apwd.value.length;
    var aL = /[a-z]/;
    var aU = /[A-Z]/;
    var aN = /[0-9]/;

    if ((aleg >= 8) && (aL.test(apwd.value)) && (aU.test(apwd.value)) && (aN.test(apwd.value))) {
        apwdm.innerHTML = "Valid Format";
        apwdm.style.color = "green";
        apwd.style.border = "";
        apwdv = true;
        // if ((leg >= 8) && (leg <= 12)) {
        //     pwd.style.border = "3px solid orange";
        // } else {
        //     pwd.style.border = "3px solid green";
        // }
    } else {
        apwdm.innerHTML = "Password should contain minimum 8 characters and at least one uppercase, one lowercase and a number";
        apwdm.style.fontSize = "14px";
        apwdm.style.color = "red";
        apwd.style.border = "3px solid red";
        apwdv = false;

    }
}


function avalidate() {
    if (aev && aidv && apwdv) {
        // alert("LogIn is Successful.");
        return true;
    } else {
        alert("Please check if the data entered is following the specified format.");
        return false;
    }
}