$('.message a').click(function() {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

$(document).ready(function() {
    $('a#show-hide').click(function() {
        alert("button was clicked");
    });
});