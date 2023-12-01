import { describe, test, expect } from "vitest";
import { seedProductList } from '@data'

describe('Seeding data test', () => {
    test('Should error if size bigger than products', () => {
        expect(() => seedProductList(1000)).toThrowError()
    })

    test('Should only unique names in products', () => {
        const productList = seedProductList(7)
        const uniqueProductNames = [...new Set(productList.map(({ name }) => name))]

        expect(productList.length).toEqual(uniqueProductNames.length)
    })

    test('Should result length equal size', () => {
        const randomSize = Math.floor(Math.random() * 10)
        expect(seedProductList(randomSize).length).toEqual(randomSize)
    })
})
