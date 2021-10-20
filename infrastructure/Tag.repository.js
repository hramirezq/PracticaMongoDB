const TagModel = require('../models/Tag.models')

const tagRepository = {}

tagRepository.getTag = async () => {
    const tags = await TagModel.find()
    return tags
}

tagRepository.getById = async (id) => {
    const tag = await TagModel.findById(id)
    return tag
}

tagRepository.createTag = async (data) => {
    const newTag = new TagModel(data)
    await newTag.save()
    return newTag
}

tagRepository.updateTag = async (id, data) => {
    const newTag = await TagModel.findByIdAndUpdate(id, data, { new: true })
    return newTag
}

tagRepository.deleteTag = async (id) => {
    await TagModel.findByIdAndDelete(id)
}

module.exports = tagRepository