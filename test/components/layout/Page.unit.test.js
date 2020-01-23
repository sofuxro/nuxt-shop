import { factoryMount } from '~/test/utils/factories'
import flushPromises from 'flush-promises'

import Component from '~/components/layout/Page'

let wrapper

global.requestAnimationFrame = (cb) => cb()

beforeEach(() => {
    wrapper = factoryMount(Component, {
        attachToDocument: true
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Page', () => {
    test('parallax scroll works on different screen sizes', async () => {
        // Simulate Scroll on large screen
        wrapper.setData({ $vuetify: { breakpoint: { name: 'lg' } } })
        await flushPromises()
        window.dispatchEvent(new CustomEvent('scroll', { detail: 2000 }))
        expect(wrapper.find('header').element).toHaveStyle(
            `background-position-y: -150px`
        )

        // Simulate Scroll on small screen
        wrapper.setData({ $vuetify: { breakpoint: { name: 'md' } } })
        await flushPromises()
        window.dispatchEvent(new CustomEvent('scroll', { detail: 2000 }))
        expect(wrapper.find('header').element).toHaveStyle(
            `background-position-y: -50px`
        )
    })

    test('request animation frame is called', async () => {
        const updateMock = jest.fn()
        wrapper.setMethods({ update: updateMock })
        wrapper.vm.onScroll()
        expect(updateMock).toBeCalledTimes(1)
    })

    test('request animation frame is NOT called when ticking true', async () => {
        const updateMock = jest.fn()
        wrapper.setMethods({ update: updateMock })
        wrapper.setData({ ticking: true })
        wrapper.vm.onScroll()
        expect(updateMock).not.toBeCalledTimes(1)
    })
})
