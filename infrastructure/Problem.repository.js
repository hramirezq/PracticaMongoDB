const ProblemModel = require('../models/Problem.model')

const problemRepository = {}

problemRepository.getProblem = async () => {
    const problems = await ProblemModel.find()
    return problems
}

problemRepository.getById = async (id) => {
    const problem = await ProblemModel.findById(id)
    return problem
}

problemRepository.createProblem = async (data) => {
    const newProblem = new ProblemModel(data)
    await newProblem.save()
    return newProblem
}

problemRepository.updateProblem = async (id, data) => {
    const updateProblem = await ProblemModel.findByIdAndUpdate(id, data, { new: true })
    return updateProblem
}

problemRepository.deleteProblem = async (id) => {
    await ProblemModel.findByIdAndDelete(id)
}

module.exports = problemRepository