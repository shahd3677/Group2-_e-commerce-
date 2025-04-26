const staff_controll = require("../controllers/staff_controller");
const express = require("express");
const router = express.Router();

router.route("").post(staff_controll.add_staff);

module.exports = router;
