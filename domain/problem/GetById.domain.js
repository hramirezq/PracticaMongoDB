const CodegymError = require('../../commons/errors/Codegym')
const ProblemRepository = require('../../infrastructure/Problem.repository')

const domainProblemFindById = {}

domainProblemFindById.run = (id) => {
    domainProblemFindById.validate(id)
    const problem = ProblemRepository.getById(id)
    return problem
}

domainProblemFindById.validate = (id) => {
    try{
        if (!id){
            throw new CodegymError(400, 1, 11, "Ingrese un id válido");
        }
        const problemExists = ProblemRepository.getById(id)
        if (!problemExists){
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

module.exports = domainProblemFindById;