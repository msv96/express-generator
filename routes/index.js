var express = require("express");
var router = express.Router();
var path = require('path');
var filepath = path.win32.basename("../date-time.txt");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.send({ path: filepath });
});

module.exports = router;
