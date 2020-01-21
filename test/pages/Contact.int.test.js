import { factoryMount } from '~/test/utils/factories'

import Component from '~/pages/contact'

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

describe('Contact Page', () => {
    test('- extending  components/layout/Page - is fully functional', () => {
        wrapper.setData({
            techs: [
                {
                    title: 'Title 1',
                    subtitle: 'Subtitle 1'
                },
                {
                    title: 'Title 2',
                    subtitle: 'Subtitle 2'
                }
            ]
        })
        // Initial snapshot
        expect(wrapper.element).toMatchSnapshot()
    })
})
