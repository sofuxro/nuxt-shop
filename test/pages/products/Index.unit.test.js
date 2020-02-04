import { factoryMount } from '~/test/utils/factories'
import flushPromises from 'flush-promises'

import Component from '~/pages/products/index'
import data from '~/static/data.json'

let wrapper

const $router = {
    push: jest.fn()
}

jest.mock('lodash/fp/debounce', () => jest.fn((nr, fn) => fn))

beforeEach(() => {
    wrapper = factoryMount(Component, {
        store: {
            modules: {
                products: {
                    namespaced: true,

                    state: {
                        list: data
                    },

                    getters: {
                        minPrice: () => 5,
                        maxPrice: () => 10000.0
                    }
                }
            }
        },
        mocks: {
            $router,
            $route: { path: '/products', query: '' }
        }
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Products List', () => {
    test('looks good', () => {
        expect(wrapper.element).toMatchSnapshot()
    })

    test('gender selection is working', async () => {
        const allInputs = wrapper.findAll(
            '.v-input--selection-controls__input input'
        )
        const maleInput = allInputs.at(0)
        const femaleInput = allInputs.at(1)

        // Select Gents watches
        maleInput.trigger('click')
        await flushPromises()
        expect($router.push).toHaveBeenLastCalledWith({
            path: '/products',
            query: { gender: 'male' }
        })
        // Snapshot
        expect(wrapper.element).toMatchSnapshot()

        // Select all watches (by having both gents and ladies checkbox selected)
        femaleInput.trigger('click')
        await flushPromises()
        expect($router.push).toHaveBeenLastCalledWith({
            path: '/products',
            query: {}
        })
        expect(wrapper.element).toMatchSnapshot()

        // Setting the route query to something
        wrapper.setData({ $route: { query: { gender: 'female' } } })
        await flushPromises()
        expect(wrapper.element).toMatchSnapshot()
    })

    test('price range is working', async () => {
        wrapper.setData({ priceRange: [5, 1000] })
        await flushPromises()
        expect(wrapper.element).toMatchSnapshot()
    })

    test('route query is working', async () => {
        wrapper.setData({ $route: { query: { gender: 'female' } } })
        await flushPromises()
        wrapper.setData({
            genderSelected: ['male', 'female'],
            $route: { query: '' }
        })
        await flushPromises()
        expect(wrapper.element).toMatchSnapshot()
    })
})
