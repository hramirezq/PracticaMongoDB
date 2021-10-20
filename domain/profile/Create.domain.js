const CodegymError = require('../../commons/errors/Codegym')
const ProfileRepository = require('../../infrastructure/Profile.repository')

const domainProfileCreate = {}

domainProfileCreate.run = (data) => {
    domainProfileCreate.validate(data)
    data.status = 1
    const profile = ProfileRepository.createProfile(data)
    return profile
}

domainProfileCreate.validate = (data) => {
    try{
        if (!data.name){
            throw new CodegymError(400, 1, 11, "Ingrese un nombre válido");
        }
        if (!data.description){
            throw new CodegymError(400, 1, 11, "Ingrese una descripción válida");
        }
    } catch (error){
        throw new CodegymError(
            400,
            0,
            10,
            "Error interno al validar los campos"
        );
    }
}

module.exports = domainProfileCreate;