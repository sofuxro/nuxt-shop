import { factoryMount } from '~/test/utils/factories'
import flushPromises from 'flush-promises'

import Component from '~/components/common/Hero'

let wrapper

beforeEach(() => {
    wrapper = factoryMount(Component, {})
})

afterEach(() => {
    wrapper.destroy()
})

describe('Hero', () => {
    test('is fully functional', async () => {
        // Mock data
        wrapper.setData({
            watches: [
                {
                    title: 'Title 1',
                    img: 'watch-big-01.jpg',
                    description: 'Description 1'
                },
                {
                    title: 'Title 2',
                    img: 'watch-big-01.jpg',
                    description: 'Description 2'
                },
                {
                    title: 'Title 3',
                    img: 'watch-big-01.jpg',
                    description: 'Description 3'
                }
            ]
        })

        // Wait for the new date to be render (<=> $nextTick)
        await flushPromises()

        // Snapshot
        expect(wrapper.element).toMatchSnapshot()
    })
})
