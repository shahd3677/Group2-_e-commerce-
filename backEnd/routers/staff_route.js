const staff_controll = require("../controllers/staff_controller");
const {
  verifyAdmin,
  verifyAuthorization,
} = require("../middleware/verifyToken");
const express = require("express");
const router = express.Router();

router.route("/login").post(staff_controll.login_staff);

router
  .route("")
  .get(verifyAdmin, staff_controll.allStaff)
  .post(verifyAdmin, staff_controll.add_staff);
router
  .route("/:id")
  .delete(verifyAdmin, staff_controll.deleteStaff)
  .post(verifyAuthorization, staff_controll.resetPassword);
module.exports = router;
