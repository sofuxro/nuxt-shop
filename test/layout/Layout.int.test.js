import { factoryMount } from '~/test/utils/factories'
import flushPromises from 'flush-promises'

import Component from '~/layouts/default'

let wrapper

beforeEach(() => {
    wrapper = factoryMount(Component, {
        store: {
            state: {
                products: {
                    cart: []
                },
                isMainOverlayVisible: false
            },

            mutations: {
                modifyMainOverlay(state, isVisible = true) {
                    state.isMainOverlayVisible = isVisible
                }
            }
        }
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Layout', () => {
    test('is fully functional', async () => {
        // Initial snapshot
        expect(wrapper.element).toMatchSnapshot()

        // Make everything blurred
        wrapper.vm.$store.commit('modifyMainOverlay', true)
        await flushPromises()
        expect(wrapper.element).toMatchSnapshot()
    })
})
