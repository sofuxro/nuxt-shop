import { factoryMount } from '~/test/utils/factories'

import Component from '~/components/layout/Header'

let wrapper

beforeEach(() => {
    wrapper = factoryMount(Component, {
        store: {
            state: {
                products: {
                    cart: []
                }
            }
        }
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Header', () => {
    test('is fully functional', () => {
        // Initial snapshot
        expect(wrapper.element).toMatchSnapshot()

        // Click cart btn
        wrapper.find('.v-badge .v-btn').trigger('click')
        expect(wrapper.emitted('openCart').length).toBe(1)

        // Intermediate snapshot
        expect(wrapper.element).toMatchSnapshot()

        // Click mobile menu btn
        wrapper.find('.main-menu-btn').trigger('click')
        expect(wrapper.emitted('openMobileMenu').length).toBe(1)

        // Final snapshot
        expect(wrapper.element).toMatchSnapshot()
    })
})
