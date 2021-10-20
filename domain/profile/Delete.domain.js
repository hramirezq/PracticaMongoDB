const CodegymError = require('../../commons/errors/Codegym')
const ProfileRepository = require('../../infrastructure/Profile.repository')

const domainProfileDelete = {}

domainProfileDelete.run = (id) => {
    domainProfileDelete.validate(id)
    ProfileRepository.deleteProfile(id)
}

domainProfileDelete.validate = async (id) => {
    try{
        const profileExists = await ProfileRepository.getById(id)
        if(!profileExists){
            throw new CodegymError(400, 1, 11, "No existe el perfil");
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

module.exports = domainProfileDelete;