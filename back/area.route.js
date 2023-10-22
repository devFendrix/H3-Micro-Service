const AreaController = require("./area.controller")
const { Router } = require("express");

const router = Router()

router.get("/areas", AreaController.areas)
router.post("/areas/create", AreaController.create)
router.put("/areas/update/:id", AreaController.update)

module.exports = router