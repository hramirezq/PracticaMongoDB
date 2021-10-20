const CodegymError = require('../../commons/errors/Codegym')
const UserRepository = require('../../infrastructure/User.repository')

const domainUserDelete = {}

domainUserDelete.run = (id) => {
    domainUserDelete.validate(id)
    UserRepository.deleteUser(id)
}

domainUserDelete.validate = async (id) => {
    try{
        const userExists = await UserRepository.getById(id)
        if(!userExists){
            throw new CodegymError(400, 1, 11, "No existe el usuario");
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

module.exports = domainUserDelete;