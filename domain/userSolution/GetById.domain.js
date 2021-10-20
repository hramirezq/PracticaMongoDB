const CodegymError = require('../../commons/errors/Codegym')
const UserSolutionRepository = require('../../infrastructure/UserSolution.repository')

const domainUserSolutionFindById = {}

domainUserSolutionFindById.run = (id) => {
    domainUserSolutionFindById.validate(id)
    const userSolution = UserSolutionRepository.getById(id)
    return userSolution
}

domainUserSolutionFindById.validate = async (id) => {
    try{
        if (!id){
            throw new CodegymError(400, 1, 11, "Ingrese un id válido");
        }
        const userSolutionExists = await UserSolutionRepository.getById(id)
        if (!userSolutionExists){
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

module.exports = domainUserSolutionFindById;