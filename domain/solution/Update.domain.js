const CodegymError = require('../../commons/errors/Codegym')
const SolutionRepository = require('../../infrastructure/Solution.repository')
const ProblemRepository = require('../../infrastructure/Problem.repository')

const domainSolutionUpdate = {}

domainSolutionUpdate.run = (id, data) => {
    domainSolutionUpdate.validate(id, data)
    const solution = SolutionRepository.updateSolution(id, data)
    return solution
}

domainSolutionUpdate.validate = async (id, data) => {
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
        problemExists = await ProblemRepository.getById(data.problemId)
        if(!problemExists){
            throw new CodegymError(400, 1, 11, "El problema no existe");
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

module.exports = domainSolutionUpdate;