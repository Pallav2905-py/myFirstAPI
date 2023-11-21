const express = require("express");
const router = express.Router();
const{getAllProucts,getAllProuctsTest} = require("../controllers/products")

router.route("/").get(getAllProucts);
router.route("/testing").get(getAllProuctsTest);

module.exports = router;
