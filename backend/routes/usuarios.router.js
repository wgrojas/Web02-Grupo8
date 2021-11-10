const express = require("express")
const router = express.Router()
const usuariosController = require("../controllers/users.controller")
router.post("/login", usuariosController.login)
module.exports = router