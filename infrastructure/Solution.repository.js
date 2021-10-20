const SolutionModel = require('../models/Solution.models')

const solutionRepository = {}

solutionRepository.getProblem = async () => {
    const solutions = await SolutionModel.find()
    return solutions
}

solutionRepository.getById = async (id) => {
    const solution = await SolutionModel.findById(id)
    return solution
}

solutionRepository.createSolution = async (data) => {
    const newSolution = new SolutionModel(data)
    await newSolution.save()
    return newSolution
}

solutionRepository.updateSolution = async (id, data) => {
    const updateSolution = await SolutionModel.findByIdAndUpdate(id, data, { new: true })
    return updateSolution
}

solutionRepository.deleteSolution = async (id) => {
    await SolutionModel.findByIdAndDelete(id)
}

module.exports = solutionRepository