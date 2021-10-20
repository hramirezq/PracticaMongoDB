const UserModel = require('../models/User.models')

const userRepository = {}

userRepository.getUsers = async () => {
    const users = await UserModel.find()
    return users
}

userRepository.getById = async (id) => {
    const user = await UserModel.findById(id)
    return user
}

userRepository.getByEmail = async (email) => {
    const user = await UserModel.find({ email: email})
    return user
}

userRepository.getByNickname = async (nickname) => {
    const user = await UserModel.find({ nickname: nickname})
    return user
}

userRepository.createUser = async (data) => {
    const newUser = new UserModel(data)
    await newUser.save()
    return newUser
}

userRepository.updateUser = async (id, data) => {
    const updateUser = await UserModel.findByIdAndUpdate(id, data, { new: true })
    return updateUser
}

userRepository.deleteUser = async (id) => {
    await UserModel.findByIdAndDelete(id)
}

module.exports = userRepository