const UserSolutionRepository = require('../../infrastructure/UserSolution.repository')

const domainUserSolutionGetAll = {}

domainUserSolutionGetAll.run = () => {
    const userSolutions = UserSolutionRepository.getProblem()
    return userSolutions
}

module.exports = domainUserSolutionGetAll;