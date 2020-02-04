import { factoryMount } from '~/test/utils/factories'
import flushPromises from 'flush-promises'

import Component from '~/pages/products/_id'
import data from '~/static/data.json'

let wrapper
const mock = jest.fn()

beforeEach(() => {
    wrapper = factoryMount(Component, {
        store: {
            modules: {
                products: {
                    namespaced: true,

                    getters: {
                        productById: (state) => (id) => data[0]
                    },

                    actions: {
                        addToCart: mock
                    }
                }
            }
        },
        mocks: {
            $route: { params: '' }
        },
        stubs: ['Featured']
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Product page', () => {
    test('is fully functional', async () => {
        const btnAdd = wrapper.find('button')
        btnAdd.trigger('click')
        await flushPromises()
        expect(mock).toHaveBeenCalledTimes(1)

        // Snapshot
        expect(wrapper.element).toMatchSnapshot()
    })
})
