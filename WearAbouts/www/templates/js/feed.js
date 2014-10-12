$(document).ready(function() {
	Parse.initialize("MSEW9txqvEpGiAAWRTDGEkwkW2hdkdcWSG7i9hAR", "5Zbv70ZN4wBylpDB0R6w50R8gT4BJYBiXBWOfsAM");

	var currentUser = Parse.User.current();
	if (!currentUser) {
	  window.location.replace("login.html");
	}

	$("#camera_button").click(function() {
		window.location.replace("camera.html");
	});

	$("#feed_button").click(function() {
		window.location.replace("feed.html");
	});

	$("#stats_button").click(function() {
		window.location.replace("stats.html");
	});

	$("#logout_button").click(function() {
		Parse.User.logOut();
		var currentUser = Parse.User.current();
		window.location.replace("login.html");
	});
});