import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

export function factoryMount(
    component,
    { store, ...options },
    ownVuex = false
) {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    return mount(component, {
        store: ownVuex ? store : new Vuex.Store(store),
        localVue,
        vuetify: new Vuetify(),
        ...options
    })
}

export function factoryShallowMount(component, { store, ...options }) {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    return shallowMount(component, {
        store: new Vuex.Store(store),
        localVue,
        vuetify: new Vuetify(),
        ...options
    })
}
