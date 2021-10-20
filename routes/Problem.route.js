const express = require('express');
const router = express.Router();
const DomainGetProblems = require('../domain/problem/GetAll.domain')
const DomainCreateProblems = require('../domain/problem/Create.domain')
const DomainUpdateProblems = require('../domain/problem/Update.domain')
const DomainDeleteProblems = require('../domain/problem/Delete.domain')


router.get("/", async function (req, res, next) {
    try {
        const result = await DomainGetProblems.run()
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al obtener los problemas", err);
        next(err);
    }
});

router.post("/", async function (req, res, next) {
    try {
        const { body } = req;
        const result = await DomainCreateProblems.run(body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al crear un problema", err);
        next(err);
    }

});

router.put("/:id", async function (req, res, next) {
    try {
        const { body } = req;
        const id = req.params.id;
        console.log(id);
        const result = await DomainUpdateProblems.run(id, body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al actualizar un problema", err);
        next(err);
    }

});

router.delete("/:id", async function (req, res, next) {
    try {
        const id = req.params.id;
        const result = await DomainDeleteProblems.run(id);
        res.status(200).json("Se elimino correctamente");
    } catch (err) {
        console.log("Error al eliminar un problema", err);
        next(err);
    }

});


module.exports = router;