
// create Acc button
$("#createAccountButton").click(function () {
    $("#createAccountDiv").css("display", "initial");
    $("body").attr("id", "greyBody");
    $(this).css("visibility", "hidden");
    $("#popUpLogIn").css("visibility", "hidden");
});
// logIn button
$("#popUpLogIn").click(function () {
    $("#logInDiv").css("display", "initial");
    $("body").attr("id", "greyBody");
    $(this).css("visibility", "hidden");
    $("#createAccountButton").css("visibility", "hidden");
});
// X mark press
$(".xMark").click(function () {
    $(this).parent().css("display", "none");
    $("#createAccountButton").css("visibility", "initial");
    $("#popUpLogIn").css("visibility", "initial");
    $("#greyBody").removeAttr("id");
});
