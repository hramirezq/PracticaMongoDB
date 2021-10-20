const CodegymError = require('../../commons/errors/Codegym')
const ProfileRepository = require('../../infrastructure/Profile.repository')

const domainProfileFindById = {}

domainProfileFindById.run = (idProfile) => {
    domainProfileFindById.validate(idProfile)
    const profile = ProfileRepository.getById(idProfile)
    return profile
}

domainProfileFindById.validate = async (idProfile) => {
    try{
        if (!idProfile){
            throw new CodegymError(400, 1, 11, "Ingrese un id válido");
        }
        const profileExists = await ProfileRepository.getById(idProfile)
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

module.exports = domainProfileFindById;