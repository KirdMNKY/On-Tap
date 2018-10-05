const router = require("express").Router();
const registersController = require("../../controllers/registersController");

router.route("/signup")
    // .get(registersController.create)
    .post(registersController.create);
   

module.exports = router;