import { factoryMount } from '~/test/utils/factories'

import Component from '~/pages/faqs'

let wrapper

beforeEach(() => {
    wrapper = factoryMount(Component, {
        data() {
            return {
                items: [
                    { question: `What is your international returns policy?` }
                ]
            }
        }
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('FAQs', () => {
    test('is fully functional', async () => {
        // Snapshot
        expect(wrapper.element).toMatchSnapshot()
    })
})
