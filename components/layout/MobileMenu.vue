<template>
    <v-navigation-drawer
        :value="value"
        @input="(value) => $emit('input', value)"
        temporary
        fixed
        width="300"
        class="mobile-menu py-12"
    >
        <nuxt-link v-for="item in links" :key="item.route" :to="item.route">
            <v-icon class="is-big white--text">{{ 'mdi-' + item.icon }}</v-icon>
            <v-icon class="white--text">{{ 'mdi-' + item.icon }}</v-icon>
            {{ item.text }}
        </nuxt-link>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        value: { type: Boolean }
    },

    data() {
        return {
            links: [
                { icon: 'home', text: 'Home', route: '/' },
                { icon: 'watch', text: 'All', route: '/products' },
                {
                    icon: 'gender-female',
                    text: 'Ladies',
                    route: '/products?gender=female'
                },
                {
                    icon: 'gender-male',
                    text: 'Gents',
                    route: '/products?gender=male'
                },
                { icon: 'information-outline', text: 'About', route: '/about' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.mobile-menu {
    background-color: #333;

    a {
        padding: 20px 20px;
        color: white;
        font-size: 24px;
        text-decoration: none;
        text-transform: uppercase;
        display: block;
        .v-icon {
            margin-right: 10px;
            font-size: 30px;
        }
        .is-big {
            position: absolute;
            margin-top: -72px;
            margin-left: 10px;
            opacity: 0;
            transform: scale(1);
            filter: blur(8px);
            font-size: 350px;
            z-index: -1;
        }

        &.exact-active-link {
            color: $appOrange;
            .is-big {
                opacity: 0.1;
            }
        }
    }
}
</style>
