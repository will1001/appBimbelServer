const express = require("express")
const router = express.Router()
const mapelControllers = require("../controllers/mapelControllers")

router.get("/", mapelControllers.selectAll)
router.get("/:id", mapelControllers.selectId)
router.post("/create", mapelControllers.create)
router.put("/update/:id", mapelControllers.update)
router.delete("/delete/:id", mapelControllers.delete)

module.exports = router