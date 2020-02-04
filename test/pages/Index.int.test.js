import { factoryMount } from '~/test/utils/factories'

import Component from '~/pages/index'

let wrapper

beforeEach(() => {
    wrapper = factoryMount(Component, {
        store: {
            modules: {
                products: {
                    namespaced: true,
                    getters: {
                        featuredProducts: (state) => jest.fn((len) => [])
                    }
                }
            }
        }
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Index (homepage)', () => {
    test('is fully functional', () => {
        // Snapshot
        expect(wrapper.element).toMatchSnapshot()
    })
})
