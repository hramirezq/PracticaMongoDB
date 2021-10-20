const express = require('express');
const router = express.Router();
const DomainGetUserSolutions = require('../domain/userSolution/GetAll.domain')
const DomainCreateUserSolution = require('../domain/userSolution/Create.domain')
const DomainUpdateUserSolution = require('../domain/userSolution/Update.domain')
const DomainDeleteUserSolution = require('../domain/userSolution/Delete.domain')


router.get("/", async function (req, res, next) {
    try {
        const result = await DomainGetUserSolutions.run()
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al obtener los la solución de los usuarios", err);
        next(err);
    }
});

router.post("/", async function (req, res, next) {
    try {
        const { body } = req;
        const result = await DomainCreateUserSolution.run(body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al crear el la solución", err);
        next(err);
    }

});

router.put("/:id", async function (req, res, next) {
    try {
        const { body } = req;
        const id = req.params.id;
        console.log(id);
        const result = await DomainUpdateUserSolution.run(id, body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al actualizar el solución", err);
        next(err);
    }

});

router.delete("/:id", async function (req, res, next) {
    try {
        const id = req.params.id;
        const result = await DomainDeleteUserSolution.run(id);
        res.status(200).json("Se elimino correctamente");
    } catch (err) {
        console.log("Error al eliminar el solución", err);
        next(err);
    }

});


module.exports = router;