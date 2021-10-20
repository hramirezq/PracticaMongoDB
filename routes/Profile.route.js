const express = require('express');
const router = express.Router();
const DomainGetProfiles = require('../domain/profile/GetAll.domain')
const DomainCreateProfile = require('../domain/profile/Create.domain')
const DomainUpdateProfile = require('../domain/profile/Update.domain')
const DomainDeleteProfile = require('../domain/profile/Delete.domain')


router.get("/", async function (req, res, next) {
    try {
        const result = await DomainGetProfiles.run()
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
        const result = await DomainCreateProfile.run(body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al crear un perfil", err);
        next(err);
    }

});

router.put("/:id", async function (req, res, next) {
    try {
        const { body } = req;
        const id = req.params.id;
        console.log(id);
        const result = await DomainUpdateProfile.run(id, body);
        res.status(200).json(result);
    } catch (err) {
        console.log("Error al actualizar un perfil", err);
        next(err);
    }

});

router.delete("/:id", async function (req, res, next) {
    try {
        const id = req.params.id;
        const result = await DomainDeleteProfile.run(id);
        res.status(200).json("Se elimino correctamente");
    } catch (err) {
        console.log("Error al eliminar un perfil", err);
        next(err);
    }

});


module.exports = router;