const router = require("express").Router();
const userController = require("../controllers/userController");
const projectController = require("../controllers/projectController");

router.route("/user/:email")
    .get(userController.findUser);

router.route("/project")
    .get(projectController.getProjects)

router.route("/project/new")
    .post(projectController.createProject)

module.exports = router;