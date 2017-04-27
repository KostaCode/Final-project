
// create Acc button
$("#createAccountButton").click(function () {
    $("#createAccountDiv").css("display", "initial");
    $("body").attr("id", "greyBody");
    $(this).css("visibility", "hidden");
    $("#popUpLogInButton").css("visibility", "hidden");
});
// logIn button
$("#popUpLogInButton").click(function () {
    $("#logInDiv").css("display", "initial");
    $("body").attr("id", "greyBody");
    $(this).css("visibility", "hidden");
    $("#createAccountButton").css("visibility", "hidden");
});
// X mark press
$(".xMark").click(function () {
    $(this).parent().css("display", "none");
    $("#createAccountButton").css("visibility", "initial");
    $("#popUpLogInButton").css("visibility", "initial");
    $("#greyBody").removeAttr("id");
});
// $("#greyBody").click(function(){
//     $("#createAccountDiv").css("display", "none");
//     $("#logInDiv").css("display", "none");
//     $("#greyBody").removeAttr("id");
// });

