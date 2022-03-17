$(document).ready(function () {

    $("#editbtn").click(function () {
        $('.update').toggle(500, "swing");
        $(".del").hide(500, "swing");
    });

    $(".uclose").click(function () {
        $(".update").hide(500, "swing");
    });

    $("#dltbtn").click(function () {
        $('.del').toggle(500, "swing");
        $(".update").hide(500, "swing");
    });

    $(".uclosed").click(function () {
        $(".del").hide(500, "swing");
    });

    $("#no").click(function () {
        $(".del").hide(500, "swing");
    });

});