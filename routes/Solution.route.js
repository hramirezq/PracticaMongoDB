const express = require('express');
const router = express.Router();
const DomainGetSolutions = require('../domain/solution/GetAll.domain')
const DomainCreateSolution = require('../domain/solution/Create.domain')
const DomainUpdateSolution = require('../domain/solution/Update.domain')
const DomainDeleteSolution = require('../domain/solution/Delete.domain')


router.get("/", async function (req, res, next) {
    try {
        const result = await DomainGetSolutions.run()
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al obtener las soluciones", err);
        next(err);
    }
});

router.post("/", async function (req, res, next) {
    try {
        const { body } = req;
        const result = await DomainCreateSolution.run(body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al crear una solución", err);
        next(err);
    }

});

router.put("/:id", async function (req, res, next) {
    try {
        const { body } = req;
        const id = req.params.id;
        console.log(id);
        const result = await DomainUpdateSolution.run(id, body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al actualizar la solución", err);
        next(err);
    }

});

router.delete("/:id", async function (req, res, next) {
    try {
        const id = req.params.id;
        const result = await DomainDeleteSolution.run(id);
        res.status(200).json("Se elimino correctamente");
    } catch (err) {
        console.log("Error al eliminar la solución", err);
        next(err);
    }

});


module.exports = router;