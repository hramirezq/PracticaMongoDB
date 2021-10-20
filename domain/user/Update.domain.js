const CodegymError = require('../../commons/errors/Codegym')
const UserRepository = require('../../infrastructure/User.repository')

const domainUserUpdate = {}

domainUserUpdate.run = (id, data) => {
    domainUserUpdate.validate(id, data)
    const user = UserRepository.updateUser(id, data)
    return user
}

domainUserUpdate.validate = async (id, data) => {
    try{
        if (!data.email){
            throw new CodegymError(400, 1, 11, "Ingrese el correo");
        }
        if (!data.password){
            throw new CodegymError(400, 1, 11, "Ingrese la contraseña");
        }
        if (!data.nickname){
            throw new CodegymError(400, 1, 11, "Ingrese el nickname");
        }
        if (!data.firstName){
            throw new CodegymError(400, 1, 11, "Ingrese el nombre");
        }
        if (!data.lastName){
            throw new CodegymError(400, 1, 11, "Ingrese un nombre válido");
        }
        if (!data.cellphone){
            throw new CodegymError(400, 1, 11, "Ingrese un apellido válido");
        }
        if (!data.profileId){
            throw new CodegymError(400, 1, 11, "Ingrese un perfil válido");
        }
        emailExists = await UserRepository.getByEmail(data.email)
        if(emailExists && emailExists._id != id){
            throw new CodegymError(400, 1, 11, "El correo ya se encuentre registrado");
        }
        nicknameExists = await UserRepository.getByNickname(data.email)
        if(nicknameExists && nicknameExists._id != id){
            throw new CodegymError(400, 1, 11, "El nickname ya se encuentre registrado");
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

module.exports = domainUserUpdate;