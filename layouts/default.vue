<template>
    <v-app dark>
        <app-loader v-if="isPageLoaded === false"></app-loader>

        <v-app-bar :class="isBlurred" absolute app flat>
            <v-spacer />

            <v-toolbar-title class="logo">
                <div>ShoppingFor</div>
                <span>Watches</span>
            </v-toolbar-title>

            <v-spacer />

            <v-badge
                :content="nrOfWatches"
                :value="nrOfWatches"
                color="orange lighten-1"
                overlap
                offset-y="20px"
            >
                <v-btn @click.stop="isCartVisible = !isCartVisible" icon>
                    <v-icon class="orange--text text--lighten-1"
                        >mdi-shopping-outline</v-icon
                    >
                </v-btn>
            </v-badge>

            <template v-slot:extension>
                <v-btn
                    @click.stop="isMenuVisible = !isMenuVisible"
                    class="main-menu-btn hidden-md-and-up"
                    icon
                >
                    <v-icon>mdi-menu</v-icon>
                </v-btn>

                <v-spacer />

                <main-menu />

                <v-spacer />
            </template>
        </v-app-bar>

        <cart v-model="isCartVisible" :class="isBlurred"></cart>

        <v-content :class="isBlurred">
            <v-container fluid class="pa-0">
                <nuxt />
            </v-container>
        </v-content>

        <app-footer :class="isBlurred" />

        <notification />

        <mobile-menu v-model="isMenuVisible" />

        <main-overlay />
    </v-app>
</template>

<script>
import AppLoader from '~/components/ui/AppLoader'
import Notification from '~/components/ui/Notification'
import MainOverlay from '~/components/ui/MainOverlay'
import Cart from '~/components/Cart'
import AppFooter from '~/components/layout/Footer'
import MainMenu from '~/components/layout/MainMenu'
import MobileMenu from '~/components/layout/MobileMenu'

export default {
    components: {
        AppLoader,
        AppFooter,
        Cart,
        MainOverlay,
        MainMenu,
        MobileMenu,
        Notification
    },

    data() {
        return {
            isPageLoaded: false,
            isCartVisible: false,
            isMenuVisible: false
        }
    },

    computed: {
        nrOfWatches() {
            return this.$store.state.products.cart.length
        },

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

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_colors';

.logo {
    margin-right: -37px;
    padding: 10px 0 0;
    text-align: center;
    transition: margin 0 0.2s ease-out;
    div {
        margin-bottom: -8px;
    }
    span {
        width: 60px;
        position: relative;
        color: $appOrange;
        font-size: 13px;
        display: inline-block;

        &::after,
        &::before {
            content: '';
            width: 23px;
            height: 1px;
            background-color: white;
            position: absolute;
            top: 8px;
        }
        &::after {
            right: -23px;
        }
        &::before {
            left: -23px;
        }
    }
}

.main-menu-btn {
    margin-top: -108px;
}
</style>
