<template>
    <div class="container">
        <h2>Featured Products <span></span></h2>

        <div class="product-list">
            <product v-for="watch in watches" :key="watch.id" :item="watch">
            </product>
        </div>
    </div>
</template>

<script>
import Product from '~/components/Product'

export default {
    components: {
        Product
    },

    computed: {
        watches() {
            const bp = this.$vuetify.breakpoint.name
            const len = bp === 'xl' ? 5 : bp === 'lg' ? 4 : 3

            return this.$store.getters['products/featuredProducts'](len)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

h2 {
    position: relative;
    padding-bottom: 20px;
    align-items: center;
    display: flex;

    span {
        height: 4px;
        background-color: rgba(255, 255, 255, 0.3);
        margin-left: 20px;
        flex-grow: 1;
    }
}

.product-list {
    @media #{map-get($display-breakpoints, 'lg-only')} {
        & ::v-deep .product-in-list:nth-child(5) {
            display: none;
        }
    }

    @media #{map-get($display-breakpoints, 'md-and-down')} {
        & ::v-deep .product-in-list {
            &:nth-child(4),
            &:nth-child(5) {
                display: none;
            }
        }
    }
}
</style>
