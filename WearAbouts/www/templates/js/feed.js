$(document).ready(function() {
	Parse.initialize("MSEW9txqvEpGiAAWRTDGEkwkW2hdkdcWSG7i9hAR", "5Zbv70ZN4wBylpDB0R6w50R8gT4BJYBiXBWOfsAM");

	var user = Parse.User.current();
	if (!user) {
	  window.location.replace("login.html");
	}

	$("#camera_button").click(function() {
		window.location.replace("camera.html");
	});

	$("#stats_button").click(function() {
		window.location.replace("stats.html");
	});

	$("#logout_button").click(function() {
		Parse.User.logOut();
		var currentUser = Parse.User.current();
		window.location.replace("login.html");
	});


	var userList = Parse.Query(Parse.User);
	var randomIndex = Math.random() * userList.length;
	console.log(userList[randomIndex]);

});