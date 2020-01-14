<template>
    <v-app dark>
        <app-loader v-if="isPageLoaded === false"></app-loader>

        <v-app-bar absolute app flat>
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
                <v-btn @click.stop="shoppingCart = !shoppingCart" icon>
                    <v-icon class="orange--text text--lighten-1"
                        >mdi-shopping-outline</v-icon
                    >
                </v-btn>
            </v-badge>

            <template v-slot:extension>
                <v-spacer />
                <div class="main-menu">
                    <nuxt-link to="/"> Home</nuxt-link>
                    <nuxt-link to="/products"> All</nuxt-link>
                    <nuxt-link to="/products?gender=female">Ladies</nuxt-link>
                    <nuxt-link to="/products?gender=male">Gents</nuxt-link>
                    <nuxt-link to="/about"> About</nuxt-link>
                </div>
                <v-spacer />
            </template>
        </v-app-bar>

        <cart v-model="shoppingCart"></cart>

        <v-content>
            <v-container fluid class="pa-0">
                <nuxt />
            </v-container>
        </v-content>

        <app-footer />

        <notification />
    </v-app>
</template>

<script>
import AppLoader from '~/components/ui/AppLoader'
import Cart from '~/components/Cart'
import AppFooter from '~/components/layout/Footer'
import Notification from '~/components/ui/Notification'

export default {
    components: {
        AppLoader,
        AppFooter,
        Cart,
        Notification
    },

    data() {
        return {
            isPageLoaded: false,
            shoppingCart: false,

            hover: false
        }
    },

    computed: {
        nrOfWatches() {
            return this.$store.state.products.cart.length
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

.main-menu {
    a {
        position: relative;
        padding: 0 17px;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        transition: color 0.2s ease-out;

        &::before,
        &::after {
            content: '';
            width: 1px;
            height: 14px;
            background-color: rgba(255, 255, 255, 0.3);
            position: absolute;
            top: 6px;
            opacity: 1;
        }
        &::before {
            left: 0;
        }
        &::after {
            right: 0;
        }
        &:hover {
            color: $appOrange;
            &::before {
                opacity: 1;
            }
        }

        &.exact-active-link {
            color: $appOrange;
        }
    }
}
</style>
