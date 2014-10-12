$(document).ready(function() {
	Parse.initialize("MSEW9txqvEpGiAAWRTDGEkwkW2hdkdcWSG7i9hAR", "5Zbv70ZN4wBylpDB0R6w50R8gT4BJYBiXBWOfsAM");

	$("#logout").click(function() {
		console.log("hello");
		Parse.User.logOut();
		var currentUser = Parse.User.current();
		window.location.replace("../html/login.html");
	});
});