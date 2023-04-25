const express = require("express");
const router = express.Router();

const {signup} = require('../Controllers/auth');

router.route("/").get(signup);

module.exports = router;