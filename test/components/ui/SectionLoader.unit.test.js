import { factoryMount } from '~/test/utils/factories'

import Component from '~/components/ui/SectionLoader'

let wrapper

beforeEach(() => {
    wrapper = factoryMount(Component, {})
})

afterEach(() => {
    wrapper.destroy()
})

describe('SectionLoader', () => {
    test('is fully functional', () => {
        // Initial snapshot
        expect(wrapper.element).toMatchSnapshot()
    })
})
