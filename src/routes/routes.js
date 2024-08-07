const express = require("express");
const blocoNotasController = require("../controller/blocoNotasController");

const routes = express.Router();

routes.get("/blocoNotas", blocoNotasController.index);
routes.post("/blocoNotas", blocoNotasController.store);
// routes.put("/blocoNotas/:id", blocoNotasController.update);
// routes.delete("/blocoNotas/:id", blocoNotasController.destroy);

module.exports = routes;
