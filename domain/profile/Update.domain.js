const CodegymError = require('../../commons/errors/Codegym')
const ProfileRepository = require('../../infrastructure/Profile.repository')

const domainProfileUpdate = {}

domainProfileUpdate.run = (id, data) => {
    domainProfileUpdate.validate(id, data)
    const profile = ProfileRepository.updateProfile(id, data)
    return profile
}

domainProfileUpdate.validate = async (id, data) => {
    try{
        if (!data.name){
            throw new CodegymError(400, 1, 11, "Ingrese un nombre válido");
        }
        if (!data.description){
            throw new CodegymError(400, 1, 11, "Ingrese una descripción válida");
        }
        const profileExists = await ProfileRepository.getById(id)
        if (!profileExists){
            throw new CodegymError(400, 1, 11, "Ingrese un id válido");
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

module.exports = domainProfileUpdate;