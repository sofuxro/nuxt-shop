<template>
    <div class="container watch-page">
        <div class="item">
            <v-img
                class="item__image"
                :src="require('~/assets/img/watches/' + product.image)"
            ></v-img>

            <div class="item__content">
                <div class="display-1">{{ product.name }}</div>

                <div class="price headline font-weight-thin py-4">
                    {{ $priceFormat(product.price) }}
                </div>

                <div class="font-weight-thin">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores voluptatibus illum maiores illo quod repellat
                    dolores, sapiente pariatur, assumenda vitae cum aperiam
                    excepturi ullam modi alias magnam animi hic quia blanditiis
                    id saepe, rem nobis. Fugiat corrupti quae obcaecati
                    inventore repudiandae facilis tenetur voluptate, quisquam ex
                    temporibus illo praesentium distinctio provident vel ducimus
                    eius libero veniam exercitationem. Vero impedit
                    necessitatibus magnam perferendis! Dolorum culpa explicabo
                    aliquam praesentium rem, ipsum repellat ea aspernatur
                    obcaecati consequuntur suscipit odio autem sed libero animi
                    tempora odit iusto ab, in assumenda totam vitae a,
                    blanditiis sapiente. Voluptatem voluptates enim commodi
                    soluta corporis iure labore ipsa.
                    <br />
                    <b
                        >This is a Demo Online Store. No orders shall be
                        fulfilled.</b
                    >
                </div>

                <v-btn
                    @click.prevent="addToCart"
                    class="mt-6"
                    color="orange lighten-1"
                    min-width="240px"
                    depressed
                    >ADD TO CART</v-btn
                >
            </div>
        </div>

        <featured />
    </div>
</template>

<script>
import Featured from '~/components/common/Featured'

export default {
    components: {
        Featured
    },

    computed: {
        product() {
            return this.$store.getters['products/productById'](
                this.$route.params.id
            )
        }
    },

    methods: {
        addToCart() {
            this.$store.dispatch('products/addToCart', {
                ...this.product,
                quantity: 1
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.watch-page {
    .item {
        margin-top: 24px;
        margin-bottom: 48px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 30px;

        .item__content {
        }

        @media #{map-get($display-breakpoints, 'xs-only')} {
            grid-template-columns: 1fr;
            justify-items: center;

            .item__image {
                max-width: 320px;
            }
        }
    }
}
</style>
