var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(result) {
		cb(result);
		})
	},
	insertOne: function(cb) {
		orm.insertOne("burgers", function(result) {
		cb(result);
		})
	},
	updateOne: function(col, burgerInfo, cb) {
		orm.updateOne("burgers", function(result) {
		cb(result);
		})
	}
};

module.exports = burger;
