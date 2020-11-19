const express = require("express")
const router = express.Router()
const babSoalControllers = require("../controllers/babSoalControllers")

router.get("/", babSoalControllers.selectAll)
router.get("/:id", babSoalControllers.selectId)
router.post("/create", babSoalControllers.create)
router.put("/update/:id", babSoalControllers.update)
router.delete("/delete/:id", babSoalControllers.delete)

module.exports = router