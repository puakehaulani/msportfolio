const router = require("express").Router();
const userController = require("../controllers/userController");
const projectController = require("../controllers/projectController");

router.route("/api/user/:email")
    .get(userController.findUser);

router.route("/api/project")
    .get(projectController.getProjects)

router.route("/api/project/new")
    .post(projectController.createProject)

module.exports = router