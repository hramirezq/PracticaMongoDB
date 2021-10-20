const CodegymError = require('../../commons/errors/Codegym')
const UserSolutionRepository = require('../../infrastructure/UserSolution.repository')
const ProblemRepository = require('../../infrastructure/Problem.repository')

const domainUserSolutionUpdate = {}

domainUserSolutionUpdate.run = (id, data) => {
    domainUserSolutionUpdate.validate(id, data)
    const userSolution = UserSolutionRepository.updateSolution(id, data)
    return userSolution
}

domainUserSolutionUpdate.validate = async (id, data) => {
    try{
        if (!data.solution){
            throw new CodegymError(400, 1, 11, "Ingrese la solución");
        }
        if (!data.language){
            throw new CodegymError(400, 1, 11, "Ingrese el lenguaje de programación usado");
        }
        if (!data.problemId){
            throw new CodegymError(400, 1, 11, "Ingrese el id del problema");
        }
        if (!data.userId){
            throw new CodegymError(400, 1, 11, "Ingrese el id del usuario");
        }
        problemExists = await ProblemRepository.getById(data.problemId)
        if(!problemExists){
            throw new CodegymError(400, 1, 11, "El problema no existe");
        }
        userExists = await UserRepository.getById(data.userId)
        if(!userExists){
            throw new CodegymError(400, 1, 11, "El usuario no existe");
        }
        userSolutionExists = await UserSolutionRepository.getById(id)
        if(!userSolutionExists){
            throw new CodegymError(400, 1, 11, "La solución no existe");
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

module.exports = domainUserSolutionUpdate;