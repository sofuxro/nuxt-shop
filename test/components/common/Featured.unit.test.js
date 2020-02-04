import { factoryMount } from '~/test/utils/factories'
import flushPromises from 'flush-promises'

import Component from '~/components/common/Featured'

const mockFn = jest.fn((len) => [])
const store = {
    modules: {
        products: {
            namespaced: true,
            getters: {
                featuredProducts: (state) => mockFn
            }
        }
    }
}

let wrapper

beforeEach(() => {
    wrapper = factoryMount(Component, {
        store,
        stubs: {
            Product: { template: '<div />' }
        }
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Featured', () => {
    test('vuetify breakpoints are working', async () => {
        // Snapshot
        expect(wrapper.element).toMatchSnapshot()

        wrapper.setData({ $vuetify: { breakpoint: { name: 'xl' } } })
        await flushPromises()
        expect(mockFn).toHaveBeenCalledWith(5)

        wrapper.setData({ $vuetify: { breakpoint: { name: 'lg' } } })
        await flushPromises()
        expect(mockFn).toHaveBeenCalledWith(4)

        wrapper.setData({ $vuetify: { breakpoint: { name: 'md' } } })
        await flushPromises()
        expect(mockFn).toHaveBeenCalledWith(3)
    })
})
