const CategoryRepository = require('../../infrastructure/Category.repository')

const domainCategoryGetAll = {}

domainCategoryGetAll.run = () => {
    const categories = CategoryRepository.getCategories()
    return categories
}

module.exports = domainCategoryGetAll;