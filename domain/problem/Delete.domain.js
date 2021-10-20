const CodegymError = require('../../commons/errors/Codegym')
const ProblemRepository = require('../../infrastructure/Problem.repository')

const domainProblemDelete = {}

domainProblemDelete.run = (id) => {
    domainProblemDelete.validate(id)
    ProblemRepository.deleteProblem(id)
}

domainProblemDelete.validate = async (id) => {
    try{
        const problemExists = await ProblemRepository.getById(id)
        if(!problemExists){
            throw new CodegymError(400, 1, 11, "No existe el problema");
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

module.exports = domainProblemDelete;