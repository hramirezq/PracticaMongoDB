const express = require('express');
const router = express.Router();
const DomainGetCategoryById = require('../domain/categories/GetById.domain')
const DomainGetCategories = require('../domain/categories/GetAll.domain')
const DomainCreateCategory = require('../domain/categories/Create.domain')
const DomainUpdateCategory = require('../domain/categories/Update.domain')
const DomainDeleteCategory = require('../domain/categories/Delete.domain')


router.get("/", async function (req, res, next) {
    try {
        const result = await DomainGetCategories.run()
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al obtener los perfiles", err);
        next(err);
    }
});

router.post("/", async function (req, res, next) {
    try {
        const { body } = req;
        const result = await DomainCreateCategory.run(body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al crear una categoria", err);
        next(err);
    }

});

router.put("/:id", async function (req, res, next) {
    try {
        const { body } = req;
        const id = req.params.id;
        console.log(id);
        const result = await DomainUpdateCategory.run(id, body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al actualizar una categoria", err);
        next(err);
    }

});

router.delete("/:id", async function (req, res, next) {
    try {
        const id = req.params.id;
        const result = await DomainDeleteCategory.run(id);
        res.status(200).json("Se elimino correctamente");
    } catch (err) {
        console.log("Error al eliminar una categoria", err);
        next(err);
    }

});


module.exports = router;