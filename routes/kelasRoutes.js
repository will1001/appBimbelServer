const express = require("express")
const router = express.Router()
const kelasControllers = require("../controllers/kelasControllers")

router.get("/", kelasControllers.selectAll)
router.get("/:id", kelasControllers.selectId)
router.post("/create", kelasControllers.create)
router.put("/update/:id", kelasControllers.update)
router.delete("/delete/:id", kelasControllers.delete)

module.exports = router