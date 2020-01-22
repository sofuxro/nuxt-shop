import { factoryMount } from '~/test/utils/factories'
import flushPromises from 'flush-promises'

import Component from '~/components/Cart'

jest.mock('lodash/fp/debounce', () => jest.fn((nr, fn) => fn))

let wrapper

const productsMutations = {
    emptyCart: jest.fn(),
    modifyQuantity: jest.fn(),

    addToCart(state, item) {
        const itemFound = state.cart.find((el) => el.id === item.id)

        if (itemFound) {
            itemFound.quantity += item.quantity
        } else {
            state.cart.push(item)
        }
    },

    remove: (state, id) => {
        const index = state.cart.findIndex((el) => el.id === id)
        state.cart.splice(index, 1)
    }
}
const mutations = {
    modifyMainOverlay: jest.fn()
}

const store = {
    modules: {
        products: {
            namespaced: true,

            state: {
                cart: []
            },

            getters: {
                cartTotal: (state) => 10,

                getQuantity: (state) => (id) => 1
            },

            mutations: productsMutations
        },

        global: {
            mutations
        }
    }
}

const $router = { push: jest.fn() }

jest.useFakeTimers()

beforeEach(() => {
    wrapper = factoryMount(Component, {
        store,
        mocks: { $router }
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Cart', () => {
    test('is fully functional', async () => {
        // Initial snapshot - empty cart
        expect(wrapper.element).toMatchSnapshot()

        // Add product
        wrapper.vm.$store.commit('products/addToCart', {
            id: '1',
            name: 'test Name',
            price: 20,
            image: 'audemars-02-350x380.jpg',
            tags: { gender: 'male' },
            quantity: 1
        })
        await flushPromises()
        expect(wrapper.element).toMatchSnapshot()

        // Increase quantity
        const inputQty = wrapper.find('.numeric-input')
        inputQty.element.value = 3
        inputQty.trigger('input')
        expect(productsMutations.modifyQuantity).toHaveBeenCalled()

        // Add another product
        wrapper.vm.$store.commit('products/addToCart', {
            id: '2',
            name: 'test Name 2',
            price: 30,
            image: 'audemars-02-350x380.jpg',
            tags: { gender: 'male' },
            quantity: 2
        })
        await flushPromises()
        expect(wrapper.element).toMatchSnapshot()

        // Delete product
        const cartListOfWatches = wrapper.find('.cart-watches')
        expect(cartListOfWatches.element.children.length).toBe(2)
        const btnDelete = wrapper.find('.btn-delete')
        btnDelete.trigger('click')
        await flushPromises()
        expect(cartListOfWatches.element.children.length).toBe(1)

        // Buy
        const btnBuy = wrapper.find('.btn-buy')
        btnBuy.trigger('click')
        // -- Show Thank you Message
        expect(mutations.modifyMainOverlay).toHaveBeenCalledTimes(1)
        // -- Empty the cart
        expect(productsMutations.emptyCart).toHaveBeenCalledTimes(1)
        // -- Wait for 3s
        jest.runAllTimers()
        // -- Hide the Thank you Message
        expect(mutations.modifyMainOverlay).toHaveBeenCalledTimes(2)
        // -- Redirect to home
        expect($router.push).toHaveBeenCalledWith('/')
    })
})
