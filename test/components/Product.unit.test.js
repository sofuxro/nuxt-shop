import { factoryMount } from '~/test/utils/factories'

import Component from '~/components/Product'

let wrapper
const store = {
    modules: {
        products: {
            namespaced: true,
            getters: {
                getQuantity: (state) => (id) => 1
            },
            actions: {
                addToCart: jest.fn()
            }
        }
    }
}

beforeEach(() => {
    wrapper = factoryMount(Component, { store })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Product', () => {
    test('has default item prop', () => {
        expect(wrapper.vm.item).toBeTruthy()
    })

    test('gender showing the correct text', () => {
        // Male
        expect(wrapper.element).toMatchSnapshot()

        // Female
        wrapper.setProps({
            item: { ...wrapper.vm.item, tags: { gender: 'female' } }
        })
        expect(wrapper.element).toMatchSnapshot()
    })

    test('add to cart', () => {
        const button = wrapper.find('button')
        button.trigger('click')
        expect(store.modules.products.actions.addToCart).toHaveBeenCalled()
    })
})
