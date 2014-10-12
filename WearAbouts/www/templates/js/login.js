$(document).ready(function() {
  Parse.initialize("MSEW9txqvEpGiAAWRTDGEkwkW2hdkdcWSG7i9hAR", "5Zbv70ZN4wBylpDB0R6w50R8gT4BJYBiXBWOfsAM");

  var currentUser = Parse.User.current();
  if (currentUser) {
      window.location.replace("profile.html");
  }

  $("#login").click(function() {
    Parse.User.logIn($('.username').val(), $('.password').val(), {
      success: function(user) {
        window.location.replace("../html/profile.html");
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        alert("Sorry, your username or password was incorrect. Please try again.");
      }
    });
  });

  $("#signup").click(function () {
      location.href = "signup.html";
  });
});