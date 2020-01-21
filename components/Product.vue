<template>
    <nuxt-link :to="`/products/${item.id}`" class="product-in-list">
        <v-img :src="require('~/assets/img/watches/' + item.image)"></v-img>
        <div class="product-in-list__gender">{{ gender }}</div>
        <div>{{ item.name }}</div>
        <div class="product-in-list__product_action">
            <div class="price">{{ $priceFormat(item.price) }}</div>
            <button v-ripple @click.prevent="addToCart">ADD TO CART</button>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default() {
                return {
                    id: -1,
                    image: 'marina-02-350x380.jpg',
                    name: 'No Name',
                    price: '-1.00',
                    tags: { gender: 'male' }
                }
            }
        }
    },

    computed: {
        gender() {
            return this.item.tags.gender === 'male'
                ? 'MENS WATCHES'
                : 'WOMENS WATCHES'
        }
    },

    methods: {
        addToCart() {
            this.$store.dispatch('products/addToCart', {
                ...this.item,
                quantity: 1
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.product-in-list {
    padding: 0 0 10px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
    transform: translateY(0);
    transition: box-shadow 0.2s ease-out, transform 0.2s ease-out;
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.3);
        transform: translateY(-3px);
    }
}

.product-in-list__gender {
    padding: 15px 0 0;
    color: $appOrange;
    font-weight: 100;
    font-size: 12px;
    line-height: 14px;
}
.product-in-list__product_action {
    height: 30px;
    overflow: hidden;

    div,
    button {
        transform: translateY(0);
        transition: transform 0.2s ease-out;
    }
    div {
        height: 28px;
        font-weight: 300;
        opacity: 0.6;
    }
    button {
        width: 100px;
        height: 23px;
        background-color: $appOrange;
        border-radius: 3px;
        font-size: 12px;
        outline: none;
        color: white;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        &:hover {
            background-color: lighten($appOrange, 5%);
        }
    }
}
.product-in-list:hover .product-in-list__product_action {
    div,
    button {
        transform: translateY(-28px);
    }
}
</style>
