const express = require('express');
const router = express.Router();
const DomainGetStatus = require('../domain/status/GetAll.domain')
const DomainCreateStatus = require('../domain/status/Create.domain')
const DomainUpdateStatus = require('../domain/status/Update.domain')
const DomainDeleteStatus = require('../domain/status/Delete.domain')


router.get("/", async function (req, res, next) {
    try {
        const result = await DomainGetStatus.run()
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al obtener los estados", err);
        next(err);
    }
});

router.post("/", async function (req, res, next) {
    try {
        const { body } = req;
        const result = await DomainCreateStatus.run(body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al crear un estado", err);
        next(err);
    }

});

router.put("/:id", async function (req, res, next) {
    try {
        const { body } = req;
        const id = req.params.id;
        console.log(id);
        const result = await DomainUpdateStatus.run(id, body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al actualizar el estado", err);
        next(err);
    }

});

router.delete("/:id", async function (req, res, next) {
    try {
        const id = req.params.id;
        const result = await DomainDeleteStatus.run(id);
        res.status(200).json("Se elimino correctamente");
    } catch (err) {
        console.log("Error al eliminar el estado", err);
        next(err);
    }

});


module.exports = router;