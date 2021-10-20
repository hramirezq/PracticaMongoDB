const StatusModel = require('../models/Status.model')

const statusRepository = {}

statusRepository.getStatus = async () => {
    const status = await StatusModel.find()
    return status
}

statusRepository.getById = async (idStatus) => {
    const status = await StatusModel.findById(idStatus)
    return status
}

statusRepository.createStatus = async (data) => {
    const newStatus = new StatusModel(data)
    await newStatus.save()
    return newStatus
}

statusRepository.updateStatus = async (id, data) => {
    const newStatus = await StatusModel.findByIdAndUpdate(id, data, { new: true })
    return newStatus
}

statusRepository.deleteStatus = async (id) => {
    await StatusModel.findByIdAndDelete(id)
}

module.exports = statusRepository