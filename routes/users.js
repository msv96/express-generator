var express = require("express");
var router = express.Router();
var fs = require("fs");
var date = Date.now();

fs.writeFile("date-time.txt", date.toString(), (err) => {
	if (err) throw err;
});

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("file created successfully");
});

module.exports = router;
