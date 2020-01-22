import { factoryMount } from '~/test/utils/factories'

import Component from '~/components/CartProduct'

let wrapper

beforeEach(() => {
    wrapper = factoryMount(Component, {
        store: {
            modules: {
                products: {
                    namespaced: true,
                    getters: {
                        getQuantity: (state) => (id) => 1
                    }
                }
            }
        }
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Cart Product', () => {
    test('has default product prop', () => {
        expect(wrapper.vm.product).toBeTruthy()
    })
})
