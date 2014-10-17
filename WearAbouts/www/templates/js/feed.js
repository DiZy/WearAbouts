$(document).ready(function() {
	Parse.initialize("MSEW9txqvEpGiAAWRTDGEkwkW2hdkdcWSG7i9hAR", "5Zbv70ZN4wBylpDB0R6w50R8gT4BJYBiXBWOfsAM");

	var user = Parse.User.current();

	if (!user) {
	  window.location.replace("login.html");
	}
	user.fetch();

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

	var query = new Parse.Query(Parse.User);
	var random_user = Parse.User.current();
	function random_user_post() {
		query.exists("picture_pair1a");
		query.find({
		  success: function(results) {
		  	var userList = results;
		    var randomIndex = Math.round(Math.random() * (userList.length - 1));
		    random_user = userList[randomIndex];
		    if(random_user.get("username") == user.get("username")){
		    	random_user_post();
		    }else{
		    	var first_picture = random_user.get("picture_pair1a");
				var second_picture = random_user.get("picture_pair1b");
				console.log(first_picture.url());
				document.getElementById("pic1").src = first_picture.url();
				document.getElementById("pic2").src = second_picture.url();
		    }
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	}

	random_user_post();
	$("#pic1").click(function() {
		random_user.set("vote_a", random_user.get("vote_a") + 1);
		random_user.save();

		//new code
		var Post = Parse.Object.extend("Post");
		var query = new Parse.Query(Post);
		query.equalTo("user", random_user.get("username"));
		query.find({
		  success: function(results) {
		    console.log("Successfully retrieved " + results.length + " scores.");
		    var post = results[0];
		    post.set("count_a", post.get("count_a") + 1);
		    post.save();
		  },
		  error: function(error) {
		    console.log("Error: " + error.code + " " + error.message);
		  }
		});

		alert("Vote Counted");
		random_user_post();
	});
	$("#pic2").click(function() {
		random_user.set("vote_b", random_user.get("vote_b") + 1);
		random_user.save();

		//new code
		var Post = Parse.Object.extend("Post");
		var query = new Parse.Query(Post);
		query.equalTo("user", random_user.get("username"));
		query.find({
		  success: function(results) {
		    console.log("Successfully retrieved " + results.length + " scores.");
		    var post = results[0];
		    post.set("count_b", post.get("count_b") + 1);
		    post.save();
		  },
		  error: function(error) {
		    console.log("Error: " + error.code + " " + error.message);
		  }
		});

		alert("Vote Counted");
		random_user_post();
	});
	$("#neither").click(function() {
		random_user_post();
	});
});