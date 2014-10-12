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

	var query = new Parse.Query(Parse.User);
	var random_user;
	function random_user_post() {
		alert("hello");
		query.exists("username");
		query.find({
		  success: function(results) {
		  	var userList = results;
		    var randomIndex = Math.round(Math.random() * userList.length);
		    random_user = userList[randomIndex];
			var first_picture = random_user.get("picture_pair1a");
			var second_picture = random_user.get("picture_pair1b");
			$("#pic1").src = first_picture.url();
			$("#pic2").src = second_picture.url();
			alert(random_user.get("username"));
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	}

	random_user_post();
	$("#picture1").click(function() {
		random_user.set(random_user.get("vote_a") + 1);
		random_user.save();
		random_user_post();
	});
	$("#picture2").click(function() {
		random_user.set(random_user.get("vote_b") + 1);
		random_user.save();
		random_user_post();
	});
	$("#neither").click(function() {
		random_user_post();
	}
});