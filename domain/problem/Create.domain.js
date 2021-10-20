const CodegymError = require('../../commons/errors/Codegym')
const ProblemRepository = require('../../infrastructure/Problem.repository')
const CategoryRepository = require('../../infrastructure/Category.repository')
const Constant = require("../../commons/utils/Constant");

const domainProblemCreate = {}

domainProblemCreate.run = (data) => {
    domainProblemCreate.validate(data)
    data.status = 0
    const problem = ProblemRepository.createProblem(data)
    return problem
}

domainProblemCreate.validate = (data) => {
    try{
        if (!data.title){
            throw new CodegymError(400, 1, 11, "Ingrese el título");
        }
        if (!data.description){
            throw new CodegymError(400, 1, 11, "Ingrese la descripción");
        }
        if (!data.categoryId){
            throw new CodegymError(400, 1, 11, "Ingrese el id de la categoria");
        }
        if (!data.complexity){
            throw new CodegymError(400, 1, 11, "Ingrese la complejidad");
        }
        if (!data.tags){
            throw new CodegymError(400, 1, 11, "Ingrese un tag válido");
        }
        categoryExists = CategoryRepository.getById(data.categoryId)
        if(!categoryExists){
            throw new CodegymError(400, 1, 11, "La categoria no existe");
        }
        const complexityIsValid = Constant.COMPLEXITY.hasOwnProperty(data.complexity)

        if(!complexityIsValid){
            throw new CodegymError(400, 1, 11, "La complejidad no es válida");
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

module.exports = domainProblemCreate;