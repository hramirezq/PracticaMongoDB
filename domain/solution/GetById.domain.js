const CodegymError = require('../../commons/errors/Codegym')
const SolutionRepository = require('../../infrastructure/Solution.repository')

const domainSolutionFindById = {}

domainSolutionFindById.run = (id) => {
    domainSolutionFindById.validate(id)
    const solution = SolutionRepository.getById(id)
    return solution
}

domainSolutionFindById.validate = async (id) => {
    try{
        if (!id){
            throw new CodegymError(400, 1, 11, "Ingrese un id válido");
        }
        const solutionExists = await SolutionRepository.getById(id)
        if (!solutionExists){
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

module.exports = domainSolutionFindById;