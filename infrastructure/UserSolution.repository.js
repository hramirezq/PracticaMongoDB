const UserSolutionModel = require('../models/UserSolution.models')

const userSolutionRepository = {}

userSolutionRepository.getProblem = async () => {
    const userSolutions = await UserSolutionModel.find()
    return userSolutions
}

userSolutionRepository.getById = async (id) => {
    const userSolution = await UserSolutionModel.findById(id)
    return userSolution
}

userSolutionRepository.createUserSolution = async (data) => {
    const newUserSolution = new UserSolutionModel(data)
    await newUserSolution.save()
    return newUserSolution
}

userSolutionRepository.updateUserSolution = async (id, data) => {
    const updateUserSolution = await UserSolutionModel.findByIdAndUpdate(id, data, { new: true })
    return updateUserSolution
}

userSolutionRepository.deleteUserSolution = async (id) => {
    await UserSolutionModel.findByIdAndDelete(id)
}

module.exports = userSolutionRepository