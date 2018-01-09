var connection = require("./connection.js");

var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table, cb], function(error, result) {
			cb(result);
		});
	},
	insertOne: function(table, cb) {
		var queryString = "INSERT INTO ??";
		connection.query(queryString, [table, cb], function(error, result) {
			cb(result);
		});
	},
	updateOne: function(table, col, burgerInfo, cb) {
		var queryString = "UPDATE ?? SET ?? = ??";
		connection.query(queryString, [table, col, burgerInfo], function(error, result) {
			cb(result);
		});
	},
};

module.exports = orm;
