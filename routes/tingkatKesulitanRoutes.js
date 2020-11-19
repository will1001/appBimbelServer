const express = require("express")
const router = express.Router()
const tingkatKesulitanControllers = require("../controllers/tingkatKesulitanControllers")

router.get("/", tingkatKesulitanControllers.selectAll)
router.get("/:id", tingkatKesulitanControllers.selectId)
router.post("/create", tingkatKesulitanControllers.create)
router.put("/update/:id", tingkatKesulitanControllers.update)
router.delete("/delete/:id", tingkatKesulitanControllers.delete)

module.exports = router