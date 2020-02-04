import { factoryMount } from '~/test/utils/factories'
import flushPromises from 'flush-promises'

import Component from '~/components/ui/Notification'

let wrapper
const store = {
    state: {
        notificationMessage: ''
    },

    mutations: {
        addNotificationMessage(state, message) {
            state.notificationMessage = message
        },
        removeNotificationMessage: jest.fn((fn) => {
            store.state.notificationMessage = ''
        })
    }
}

beforeEach(() => {
    wrapper = factoryMount(Component, { store })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Notification (a.k.a. snackbar - Vuetify term)', () => {
    test('initially is hidden', () => {
        expect(wrapper.find('.v-snack').exists()).toBe(false)
        // Final snapshot
        expect(wrapper.element).toMatchSnapshot()
    })

    test('closes when the button is clicked', async () => {
        wrapper.vm.$store.commit('addNotificationMessage', 'dummy message')
        await flushPromises()

        // Initial snapshot (when the notification is visible)
        expect(wrapper.element).toMatchSnapshot()

        // Clicking the close button
        wrapper.find('button').trigger('click')
        await flushPromises()
        expect(store.mutations.removeNotificationMessage).toBeCalled()

        expect(wrapper.find('.v-snack').exists()).toBe(false)
        // Final snapshot
        expect(wrapper.element).toMatchSnapshot()
    })
})
