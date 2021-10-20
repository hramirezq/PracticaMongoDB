const CodegymError = require('../../commons/errors/Codegym')
const StatusRepository = require('../../infrastructure/Status.repository')

const domainStatusGetAll = {}

domainStatusGetAll.run = () => {
    const status = StatusRepository.getStatus()
    return status
}

module.exports = domainStatusGetAll;