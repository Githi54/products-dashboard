import { faker } from '@faker-js/faker'

export const categories = [
    {
        id: 1,
        name: 'Gadgets',
    },
    {
        id: 2,
        name: 'Food',
    },
    {
        id: 3,
        name: 'Health',
    }
]

const productNames = [
    ['Iphone', 'Ipad', 'Apple watch', 'MacBook'], 
    ['Bananas', 'Oranges', 'Apples', 'Beef'], 
    ['Thermometer', 'Medicaments', 'Vitamins', 'Glasses']
]

const { string: { uuid }, finance: { amount: getRandomAmount }, date: { between: getRandomDate }} = faker

const getRandomProductName = (categoryID) => productNames[categoryID][Math.floor(Math.random() * productNames[categoryID].length)]

class Product {
    constructor(categoryID = Math.floor(Math.random() * categories.length)) {
        this.id = uuid()
        this.categoryID = categoryID
        this.date = getRandomDate({from: '2023-12-01T00:00:00.000Z', to: '2023-12-31T00:00:00.000Z'})
        this.name = getRandomProductName(categoryID)
        this.revenue = getRandomAmount(100, 100000, 0)
        this.unitSold = getRandomAmount(5, 1000, 0)
        this.profitMargins = getRandomAmount(0, 1)
    }
}

const seedProductList = (size = 10, productList = []) => {
    if (size > productNames.length) {
        throw new Error('There are not enough products to create a list of this size')
    }

    if (productList.length === size) {
        return productList
    }

    const newProduct = new Product()
    const isUuidDuplicate = productList.some(product => product.id === newProduct.id)
    const isNameDuplicate = productList.some(product => product.name === newProduct.name)

    if (!isUuidDuplicate && !isNameDuplicate) {
        return seedProductList(size, [...productList, newProduct])
    } else {
        return seedProductList(size, productList)
    }
}


export const productListData = seedProductList()
