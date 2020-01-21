import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

export function factoryMount(component, { store, ...options }) {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    return mount(component, {
        store: new Vuex.Store(store),
        localVue,
        vuetify: new Vuetify(),
        ...options
    })
}
