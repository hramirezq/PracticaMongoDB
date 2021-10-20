const express = require('express');
const router = express.Router();
const DomainGetUsers = require('../domain/user/GetAll.domain')
const DomainCreateUser = require('../domain/user/Create.domain')
const DomainUpdateUser = require('../domain/user/Update.domain')
const DomainDeleteUser = require('../domain/user/Delete.domain')


router.get("/", async function (req, res, next) {
    try {
        const result = await DomainGetUsers.run()
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al obtener los usuarios", err);
        next(err);
    }
});

router.post("/", async function (req, res, next) {
    try {
        const { body } = req;
        const result = await DomainCreateUser.run(body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al crear el usuario", err);
        next(err);
    }

});

router.put("/:id", async function (req, res, next) {
    try {
        const { body } = req;
        const id = req.params.id;
        console.log(id);
        const result = await DomainUpdateUser.run(id, body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al actualizar el usuario", err);
        next(err);
    }

});

router.delete("/:id", async function (req, res, next) {
    try {
        const id = req.params.id;
        const result = await DomainDeleteUser.run(id);
        res.status(200).json("Se elimino correctamente");
    } catch (err) {
        console.log("Error al eliminar el usuario", err);
        next(err);
    }

});


module.exports = router;