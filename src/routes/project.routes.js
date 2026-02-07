const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const c = require("../controllers/project.controller");

router.post("/", auth, c.createProject);
router.get("/", auth, c.getProjects);

module.exports = router;