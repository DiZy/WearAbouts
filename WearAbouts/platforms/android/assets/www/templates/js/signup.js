$(document).ready(function() {
  Parse.initialize("MSEW9txqvEpGiAAWRTDGEkwkW2hdkdcWSG7i9hAR", "5Zbv70ZN4wBylpDB0R6w50R8gT4BJYBiXBWOfsAM");

  $("#signup").click(function() {
    var user = new Parse.User();
    user.set("username", $('#username').val());
    user.set("password", $('#password').val());
    user.set("email", $('#email').val());
    user.set("upload_number", 0);
    user.set("vote_a", 0);
    user.set("vote_b", 0);
    user.pinInBackground();
      
    user.signUp(null, {
      success: function(user) {
        window.location.replace("feed.html");
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  });
});