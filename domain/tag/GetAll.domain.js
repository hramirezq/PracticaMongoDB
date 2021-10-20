const TagRepository = require('../../infrastructure//Tag.repository')

const domainTagGetAll = {}

domainTagGetAll.run = () => {
    const tags = TagRepository.getTag()
    return tags
}

module.exports = domainTagGetAll;