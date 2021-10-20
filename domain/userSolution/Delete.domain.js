const CodegymError = require('../../commons/errors/Codegym')
const UserSolutionRepository = require('../../infrastructure/UserSolution.repository')

const domainUserSolutionDelete = {}

domainUserSolutionDelete.run = (id) => {
    domainUserSolutionDelete.validate(id)
    UserSolutionRepository.deleteSolution(id)
}

domainUserSolutionDelete.validate = async (id) => {
    try{
        const userSolutionExists = await UserSolutionRepository.getById(id)
        if(!userSolutionExists){
            throw new CodegymError(400, 1, 11, "No existe la solución");
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

module.exports = domainUserSolutionDelete;