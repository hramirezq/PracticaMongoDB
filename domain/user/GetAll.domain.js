const UserRepository = require('../../infrastructure/User.repository')

const domainUserGetAll = {}

domainUserGetAll.run = () => {
    const users = UserRepository.getUsers()
    return users
}

module.exports = domainUserGetAll;