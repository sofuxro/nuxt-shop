import { factoryMount } from '~/test/utils/factories'
import flushPromises from 'flush-promises'

import Component from '~/components/layout/Page'

let wrapper
let updateFn = jest.fn()

global.requestAnimationFrame = (cb) => cb()

beforeEach(() => {
    wrapper = factoryMount(Component, {
        methods: {
            update: updateFn
        },
        attachToDocument: true
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Page', () => {
    test('is fully functional', () => {
        // Simulate Scroll
        window.dispatchEvent(new CustomEvent('scroll', { detail: 2000 }))

        expect(updateFn).toHaveBeenCalled()
    })
})
