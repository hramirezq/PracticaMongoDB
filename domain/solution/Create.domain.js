const CodegymError = require('../../commons/errors/Codegym')
const SolutionRepository = require('../../infrastructure/Solution.repository')
const ProblemRepository = require('../../infrastructure/Problem.repository')

const domainSolutionCreate = {}

domainSolutionCreate.run = (data) => {
    console.log("HOLALALALAL");
    domainSolutionCreate.validate(data)
    const solution = SolutionRepository.createSolution(data)
    return solution
}

domainSolutionCreate.validate = async (data) => {
    try{
        console.log(data);
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
        console.log("dddd",problemExists);
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

module.exports = domainSolutionCreate;