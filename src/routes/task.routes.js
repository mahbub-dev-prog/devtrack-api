const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const c = require("../controllers/task.controller");

router.post("/", auth, c.createTask);
router.get("/:projectId", auth, c.getTasks);
router.put("/:id", auth, c.updateTask);

module.exports = router;