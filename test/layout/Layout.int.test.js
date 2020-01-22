import { factoryMount } from '~/test/utils/factories'

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
            }
        }
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Layout', () => {
    test('is fully functional', () => {
        // Initial snapshot
        expect(wrapper.element).toMatchSnapshot()
    })
})
