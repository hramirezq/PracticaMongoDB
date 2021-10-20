const SolutionRepository = require('../../infrastructure/Solution.repository')

const domainSolutionGetAll = {}

domainSolutionGetAll.run = () => {
    const solutions = SolutionRepository.getProblem()
    return solutions
}

module.exports = domainSolutionGetAll;