const express = require('express');
const router = express.Router();
const DomainGetTags = require('../domain/tag/GetAll.domain')
const DomainCreateTag = require('../domain/tag/Create.domain')
const DomainUpdateTag = require('../domain/tag/Update.domain')
const DomainDeleteTag = require('../domain/tag/Delete.domain')


router.get("/", async function (req, res, next) {
    try {
        const result = await DomainGetTags.run()
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al obtener los tags", err);
        next(err);
    }
});

router.post("/", async function (req, res, next) {
    try {
        const { body } = req;
        const result = await DomainCreateTag.run(body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al crear un tag", err);
        next(err);
    }

});

router.put("/:id", async function (req, res, next) {
    try {
        const { body } = req;
        const id = req.params.id;
        console.log(id);
        const result = await DomainUpdateTag.run(id, body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al actualizar el tag", err);
        next(err);
    }

});

router.delete("/:id", async function (req, res, next) {
    try {
        const id = req.params.id;
        const result = await DomainDeleteTag.run(id);
        res.status(200).json("Se elimino correctamente");
    } catch (err) {
        console.log("Error al eliminar el tag", err);
        next(err);
    }

});


module.exports = router;