const express = require("express");
const { registerAdmin, authAdmin } = require("../Controllers/adminControllers");


const router = express.Router();

router.route("/").post(registerAdmin);
router.route("/login").post(authAdmin);

module.exports = router;