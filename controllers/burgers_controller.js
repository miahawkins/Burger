var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(request, response) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		response.render("index", hbsObject);
	});
});

router.post("/burgers/create", function(request, response) {
	burger.insertOne([
		"burger_name"
	], [
		request.body.burger_name
	], function(data) {
		response.redirect("/");
	});
});

router.put("/burgers/:id", function(request, response) {
	var condition = "id = " + request.params.id;

	burger.updateOne({
		devoured: true
	}, condition, function(data) {
		response.redirect("/");
	});
});

module.exports = router;
