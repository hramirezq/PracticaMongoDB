const CodegymError = require('../../commons/errors/Codegym')
const ProfileRepository = require('../../infrastructure/Profile.repository')

const domainProfileGetAll = {}

domainProfileGetAll.run = () => {
    const profiles = ProfileRepository.getProfiles()
    return profiles
}

module.exports = domainProfileGetAll;