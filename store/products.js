// import take from 'lodash/fp/take'
import reduce from 'lodash/fp/reduce'

import data from '~/static/data.json'

export const state = () => ({
    list: data,
    cart: []
})

export const getters = {
    featuredProducts: (state) => (len) => {
        // const arr1 = state.list.filter((product) => product.tags.featured)

        // return take(len, arr1)
        return state.list.filter((product) => product.tags.featured)
    },

    productById: (state) => (id) => {
        return state.list.find((product) => product.id === id)
    },

    minPrice: (state) => {
        return Math.min(...state.list.map((el) => el.price))
    },

    maxPrice: (state) => {
        return Math.max(...state.list.map((el) => el.price))
    },

    cartTotal: (state) => {
        return reduce(
            (result, el) => {
                return result + el.price * el.quantity
            },
            0,
            state.cart
        )
    },

    getQuantity: (state) => (id) => {
        return state.cart.find((el) => el.id === id).quantity
    }
}

export const mutations = {
    addToCart(state, item) {
        const itemFound = state.cart.find((el) => el.id === item.id)

        if (itemFound) {
            itemFound.quantity += item.quantity
        } else {
            state.cart.push(item)
        }
    },

    modifyQuantity(state, { quantity, id }) {
        const itemFound = state.cart.find((el) => el.id === id)

        itemFound.quantity = quantity
    },

    remove: (state, id) => {
        const index = state.cart.findIndex((el) => el.id === id)
        state.cart.splice(index, 1)
    },

    emptyCart: (state) => {
        state.cart = []
    }
}

export const actions = {
    addToCart({ commit }, payload) {
        commit('addToCart', payload)
        commit('addNotificationMessage', 'The Watch is in your Cart!', {
            root: true
        })
    }
}
