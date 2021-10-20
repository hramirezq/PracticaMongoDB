const CodegymError = require('../../commons/errors/Codegym')
const SolutionRepository = require('../../infrastructure/Solution.repository')

const domainSolutionDelete = {}

domainSolutionDelete.run = (id) => {
    domainSolutionDelete.validate(id)
    SolutionRepository.deleteSolution(id)
}

domainSolutionDelete.validate = async (id) => {
    try{
        const solutionExists = await SolutionRepository.getById(id)
        if(!solutionExists){
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

module.exports = domainSolutionDelete;