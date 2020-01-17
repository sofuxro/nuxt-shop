<template>
    <v-navigation-drawer
        :value="value"
        @input="(value) => $emit('input', value)"
        app
        fixed
        temporary
        right
        width="300"
        class="py-4"
    >
        <v-btn
            @click="$emit('input', false)"
            fab
            dark
            small
            depressed
            absolute
            right
            color="grey darken-4"
            class="ma-n3 btn-close"
            ><v-icon color="white">mdi-close</v-icon></v-btn
        >

        <v-list-item>
            <v-list-item-icon class="mr-3">
                <v-icon class="orange--text text--lighten-1"
                    >mdi-shopping-outline</v-icon
                >
            </v-list-item-icon>
            <v-list-item-title class="headline text-uppercase">
                Shopping Cart
            </v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <p
            v-if="watches.length === 0"
            class="title pt-12 px-5  text-center orange--text text-lighten-1"
        >
            Your shopping bag is empty
        </p>

        <template v-else>
            <v-list class="cart-watches">
                <cart-product
                    v-for="watch in watches"
                    :key="watch.id"
                    :product="watch"
                ></cart-product>
            </v-list>

            <v-divider />

            <v-row class="pl-5 pt2 pb-5">
                <v-col
                    cols="6"
                    class="grey--text title font-weight-thin text-uppercase"
                    >Total</v-col
                >
                <v-col cols="6" class="headline font-weight-thin">{{
                    $priceFormat(cartTotal)
                }}</v-col>
            </v-row>

            <div class="text-center pa-4">
                <v-btn @click="buy" color="orange lighten-1" block depressed
                    >Pretend to Buy</v-btn
                >
            </div>

            <p class="px-4 grey--text">
                * This is a Demo Online Store. No orders shall be fulfilled.
            </p>
        </template>

        <section-loader v-if="isLoading" />
    </v-navigation-drawer>
</template>

<script>
import delay from 'lodash/fp/delay'
import SectionLoader from '~/components/ui/SectionLoader'
import CartProduct from '~/components/CartProduct'

export default {
    components: {
        CartProduct,
        SectionLoader
    },

    props: {
        value: { type: Boolean }
    },

    data() {
        return {
            age: 12,
            isLoading: false
        }
    },

    computed: {
        watches() {
            return this.$store.state.products.cart
        },

        cartTotal() {
            return this.$store.getters['products/cartTotal']
        }
    },

    methods: {
        buy() {
            // Show thank you message
            this.$store.commit('modifyMainOverlay', true)
            // Empty cart
            this.$store.commit('products/emptyCart')

            delay(3000, () => {
                this.$store.commit('modifyMainOverlay', false)
                this.$router.push('/')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-close {
    transform: scale(0.9);
}
</style>
