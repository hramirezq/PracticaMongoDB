const ProfileModel = require('../models/Profile.model')

const profileRepository = {}

profileRepository.getProfiles = async () => {
    const profiles = await ProfileModel.find()
    return profiles
}

profileRepository.getById = async (idCategory) => {
    const profile = await ProfileModel.findById(idCategory)
    return profile
}

profileRepository.createProfile = async (data) => {
    const newProfile = new ProfileModel(data)
    await newProfile.save()
    return newProfile
}

profileRepository.updateProfile = async (id, data) => {
    const newProfile = await ProfileModel.findByIdAndUpdate(id, data, { new: true })
    return newProfile
}

profileRepository.deleteProfile = async (id) => {
    await ProfileModel.findByIdAndDelete(id)
}

module.exports = profileRepository