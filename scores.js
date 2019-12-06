$(document).ready(function() {


    var userArray = JSON.parse(localStorage.getItem("scoresInitials"));


    console.log(userArray);

    $(".insert").text(userArray.userInitials + ": " + userArray.score);
    // userArray.forEach(function(element) {
    //     var liTag = $("<li>");
    //     // console.log(element.userInials);
    //     liTag.textContent = element.userInials + " scored " + element.score;
    //     $(".insert").append(liTag.textContent);
    //     $(".insert").append("<br>");

    // });








});