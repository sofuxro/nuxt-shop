<template>
    <v-list-item class="mb-1 pb-1">
        <v-img
            :src="require('~/assets/img/watches/' + product.image)"
            max-width="70"
            class="mr-3"
        ></v-img>

        <v-list-item-content class="pa-0">
            <v-list-item-title class="subtitle-2 text-uppercase">{{
                product.name
            }}</v-list-item-title>
            <v-list-item-subtitle>{{
                $priceFormat(product.price)
            }}</v-list-item-subtitle>
            <v-list-item-subtitle
                >Qty:
                <vue-numeric-input
                    v-model="quantity"
                    :min="1"
                    :max="10"
                    size="100px"
                    align="center"
                ></vue-numeric-input
            ></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action class="ma-0 mt-1">
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn
                        @click="remove"
                        v-on="on"
                        icon
                        small
                        color="grey darken-2"
                        class="btn-delete"
                    >
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </template>
                <span>Remove watch</span>
            </v-tooltip>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
import debounce from 'lodash/fp/debounce'
import VueNumericInput from 'vue-numeric-input'

export default {
    components: {
        VueNumericInput
    },

    props: {
        product: {
            type: Object,
            default() {
                return {
                    id: -1,
                    image: 'marina-02-350x380.jpg',
                    name: 'No Name',
                    price: '-1.00',
                    quantity: 0
                }
            }
        }
    },

    computed: {
        quantity: {
            get() {
                return this.$store.getters['products/getQuantity'](
                    this.product.id
                )
            },
            set: debounce(300, function(quantity) {
                this.$store.commit('products/modifyQuantity', {
                    quantity,
                    id: this.product.id
                })
            })
        }
    },

    methods: {
        remove() {
            this.$store.commit('products/remove', this.product.id)
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-delete {
    &:hover .v-icon {
        color: #ff5252;
    }
}

.v-list-item__action {
    align-self: flex-start;
}

.v-list-item {
    & ::v-deep .vue-numeric-input {
        .numeric-input {
            border: 0 none;
        }
        .btn {
            box-shadow: none;
            cursor: pointer;
            &:disabled {
                cursor: default;
            }
        }
    }
}

.v-list-item__title {
    padding-top: 5px;
}
.v-list-item__content {
    align-self: flex-start;
}
</style>
