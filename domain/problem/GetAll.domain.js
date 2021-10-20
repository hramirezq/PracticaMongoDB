const ProblemRepository = require('../../infrastructure/Problem.repository')

const domainProblemGetAll = {}

domainProblemGetAll.run = () => {
    const problems = ProblemRepository.getProblem()
    return problems
}

module.exports = domainProblemGetAll;