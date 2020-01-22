import Vue from 'vue'
import Vuetify from 'vuetify'
import VueTestUtils from '@vue/test-utils'

Vue.use(Vuetify)

// Mock plugins (helper functions)
VueTestUtils.config.mocks['$priceFormat'] = (price, hasFraction = true) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: hasFraction ? 2 : 0
    }).format(price)

// Mock Nuxt components
VueTestUtils.config.stubs['nuxt'] = '<div />'
VueTestUtils.config.stubs['nuxt-link'] = '<a><slot /></a>'
VueTestUtils.config.stubs['no-ssr'] = '<span><slot /></span>'
