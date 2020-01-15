<template>
    <v-app dark>
        <!-- <div
            :class="[
                'can-blur',
                $store.state.isMainOverlayVisible ? 'is-blurred' : ''
            ]"
        > -->
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

            <!-- this.$vuetify.breakpoint.name -->
            <template v-slot:extension>
                <v-btn @click.stop="isMenuVisible = !isMenuVisible" icon>
                    <v-icon>mdi-menu</v-icon>
                </v-btn>

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

        <cart v-model="isCartVisible" :class="isBlurred"></cart>

        <v-content :class="isBlurred">
            <v-container fluid class="pa-0">
                <nuxt />
            </v-container>
        </v-content>

        <app-footer :class="isBlurred" />

        <notification />

        <v-navigation-drawer
            v-model="isMenuVisible"
            temporary
            fixed
            width="300"
            class="py-4"
        >
            <v-list nav class="pt-12">
                <v-list-item-group>
                    <v-list-item
                        v-for="item in links"
                        :key="item.route"
                        :to="item.route"
                        router
                    >
                        <v-list-item-icon
                            ><v-icon class="white--text">{{
                                'mdi-' + item.icon
                            }}</v-icon></v-list-item-icon
                        >
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <main-overlay />
    </v-app>
</template>

<script>
import AppLoader from '~/components/ui/AppLoader'
import Notification from '~/components/ui/Notification'
import MainOverlay from '~/components/ui/MainOverlay'
import Cart from '~/components/Cart'
import AppFooter from '~/components/layout/Footer'

export default {
    components: {
        AppLoader,
        AppFooter,
        Cart,
        MainOverlay,
        Notification
    },

    data() {
        return {
            isPageLoaded: false,
            isCartVisible: false,
            isMenuVisible: false,

            links: [
                { icon: 'home', text: 'Home', route: '/' },
                {
                    icon: 'photo_camera',
                    text: 'All',
                    route: '/interests'
                },
                {
                    icon: 'person',
                    text: 'Ladies',
                    route: '/products?gender=female'
                },
                {
                    icon: 'person',
                    text: 'Gents',
                    route: '/products?gender=male'
                },
                { icon: 'person', text: 'About', route: '/about' }
            ]
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
