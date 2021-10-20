const CategoryModel = require('../models/Category.model')

const categoryRepository = {}

categoryRepository.getCategories = async () => {
    const categories = await CategoryModel.find()
    return categories
}

categoryRepository.getById = async (idCategory) => {
    const category = await CategoryModel.findById(idCategory)
    return category
}

categoryRepository.createCategory = async (data) => {
    const newCategory = new CategoryModel(data)
    await newCategory.save()
    return newCategory
}

categoryRepository.updateCategory = async (id, data) => {
    const newCategory = await CategoryModel.findByIdAndUpdate(id, data, { new: true })
    return newCategory
}

categoryRepository.deleteCategory = async (id) => {
    await CategoryModel.findByIdAndDelete(id)
}

module.exports = categoryRepository