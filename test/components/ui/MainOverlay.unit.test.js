import { factoryMount } from '~/test/utils/factories'

import Component from '~/components/ui/MainOverlay'

let wrapper
const store = {
    state: {
        isMainOverlayVisible: true
    },
    commit: jest.fn()
}

beforeEach(() => {
    wrapper = factoryMount(Component, { store }, true)
})

afterEach(() => {
    wrapper.destroy()
})

describe('MainOverlay', () => {
    test('when clicked its calling the modifyMainOverlay mutation with false as argument', async () => {
        wrapper.find('.main-overlay').trigger('click')
        expect(store.commit).toBeCalledWith('modifyMainOverlay', false)
    })
})
