<template>
    <v-app dark>
        <app-loader v-if="isPageLoaded === false"></app-loader>

        <app-header
            :class="isBlurred"
            @openCart="isCartVisible = true"
            @openMobileMenu="isMobileMenuVisible = true"
        />

        <cart v-model="isCartVisible" :class="isBlurred"></cart>

        <v-content :class="isBlurred">
            <v-container fluid class="pa-0">
                <nuxt />
            </v-container>
        </v-content>

        <app-footer :class="isBlurred" />

        <notification />

        <mobile-menu v-model="isMobileMenuVisible" />

        <main-overlay />
    </v-app>
</template>

//
<script>
import AppLoader from '~/components/ui/AppLoader'
import Notification from '~/components/ui/Notification'
import MainOverlay from '~/components/ui/MainOverlay'
import Cart from '~/components/Cart'

import AppHeader from '~/components/layout/Header'
import MobileMenu from '~/components/layout/MobileMenu'
import AppFooter from '~/components/layout/Footer'

export default {
    components: {
        AppLoader,
        AppFooter,
        Cart,
        AppHeader,
        MainOverlay,
        MobileMenu,
        Notification
    },

    data() {
        return {
            isPageLoaded: false,
            isCartVisible: false,
            isMobileMenuVisible: false
        }
    },

    computed: {
        isBlurred() {
            return [
                'can-blur',
                this.$store.state.isMainOverlayVisible ? 'is-blurred' : ''
            ]
        }
    },

    mounted() {
        this.isPageLoaded = true
    }
}
</script>
