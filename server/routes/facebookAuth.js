const { Router } = require("express");

const router = Router();
const {
  getLongLivedToken,
  getFBUserId,
  getPageAccessToken,
} = require("../controllers/facebookAuth");

router.post(
  "/facebook/long-lived/get",
  getLongLivedToken,
  getFBUserId,
  getPageAccessToken
);

module.exports = router;
