<template>
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
            <v-btn @click.stop="$emit('openCart')" icon>
                <v-icon class="orange--text text--lighten-1"
                    >mdi-shopping-outline</v-icon
                >
            </v-btn>
        </v-badge>

        <template v-slot:extension>
            <v-btn
                @click.stop="$emit('openMobileMenu')"
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
</template>

<script>
import MainMenu from '~/components/layout/MainMenu'

export default {
    components: {
        MainMenu
    },

    computed: {
        nrOfWatches() {
            return this.$store.state.products.cart.length
        }
    }
}
</script>

<style lang="scss" scoped>
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
