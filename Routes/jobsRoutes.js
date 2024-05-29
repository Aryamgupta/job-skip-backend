const express = require("express");


const router = express.Router();

router.route("/").post(registerAdmin);
router.route("/login").post(authAdmin);

module.exports = router;