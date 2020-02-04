<template>
    <page
        title="Shop with confidence"
        description="The place to be when you want to excel in Life"
    >
        <div class="container has-filters">
            <aside>
                <div>
                    <h3 class="subtitle-2">PRODUCT CATEGORIES</h3>
                    <div>
                        <v-checkbox
                            v-model="genderSelected"
                            label="Gents"
                            color="orange lighten-1"
                            value="male"
                            hide-details
                        ></v-checkbox>
                        <v-checkbox
                            v-model="genderSelected"
                            label="Ladies"
                            color="orange lighten-1"
                            value="female"
                            hide-details
                        ></v-checkbox>
                    </div>
                </div>

                <div>
                    <h3 class="subtitle-2 pt-md-12 pt-xs-0">
                        FILTER BY PRICE
                    </h3>
                    <v-range-slider
                        v-model="priceRange"
                        :max="priceMax"
                        :min="priceMin"
                        hide-details
                        step="10"
                        class="align-center"
                        color="orange lighten-1"
                    ></v-range-slider>
                    <p>
                        Price: {{ $priceFormat(priceRange[0], false) }} -
                        {{ $priceFormat(priceRange[1], false) }}
                    </p>
                </div>
            </aside>

            <div>
                <p v-if="watchesFiltered.length">
                    Showing all {{ watchesFiltered.length }} results
                </p>
                <p v-else>There are no results for these filters</p>

                <transition-group
                    @before-leave="beforeLeave"
                    name="product-list"
                    tag="section"
                    class="product-list"
                >
                    <product
                        v-for="watch in watchesFiltered"
                        :key="watch.id"
                        :item="watch"
                    >
                    </product>
                </transition-group>
            </div>
        </div>
    </page>
</template>

<script>
import curry from 'lodash/fp/curry'
import debounce from 'lodash/fp/debounce'
import flow from 'lodash/fp/flow'

import Page from '@/components/layout/Page'
import Product from '@/components/Product'

export default {
    components: {
        Page,
        Product
    },

    data() {
        return {
            genderSelected: [],

            priceMin: 0,
            priceMax: 0,
            priceRange: [0, 0],

            watches: [...this.$store.state.products.list],
            watchesFiltered: [...this.$store.state.products.list]
        }
    },

    watch: {
        genderSelected(newValue, oldValue) {
            this.$router.push({
                path: this.$route.path,
                query: newValue.length === 1 ? { gender: newValue[0] } : {}
            })
        },

        priceRange(newValue, oldValue) {
            this.debounceFilter()
        },

        '$route.query': {
            handler() {
                if (
                    this.genderSelected.length < 2 ||
                    this.$route.query.gender
                ) {
                    this.genderSelected = this.$route.query.gender
                        ? [this.$route.query.gender]
                        : []
                }
                this.filter()
            },
            immediate: true
        }
    },

    beforeMount() {
        this.priceMin = this.$store.getters['products/minPrice']
        this.priceMax = this.$store.getters['products/maxPrice']
        this.priceRange[1] = this.priceMax
    },

    methods: {
        filter() {
            this.watchesFiltered = flow(
                this.genderFilter(this.genderSelected),
                this.priceFilter(this.priceRange)
            )(this.watches)
        },

        // Only for price slider
        debounceFilter: debounce(300, function() {
            this.filter()
        }),

        genderFilter: curry((gendersSelected, arr) => {
            if (gendersSelected.length) {
                return arr.filter((el) =>
                    gendersSelected.includes(el.tags.gender)
                )
            } else {
                return arr
            }
        }),

        priceFilter: curry((range, arr) => {
            return arr.filter(
                (el) => range[0] <= el.price && el.price <= range[1]
            )
        }),

        /* Because of transition-group position:absolute */
        /* https://stackoverflow.com/questions/59650480/vue-transition-group-item-with-flex-grid-wrapper-moves-to-top-left/59650481#59650481 */
        beforeLeave(el) {
            const {
                marginLeft,
                marginTop,
                width,
                height
            } = window.getComputedStyle(el)

            el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`
            el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`
            el.style.width = width
            el.style.height = height
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.has-filters {
    grid-template-columns: 1fr 3fr;
    display: grid;

    aside {
        padding-right: 20px;
    }

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
        display: block;
        aside {
            display: flex;
            & > div {
                flex-grow: 1;
            }
        }
    }
}

.product-list-enter-active,
.product-list-leave-active {
    transition: all 0.3s;
}
.product-list-enter,
.product-list-leave-to {
    opacity: 0;
    transform: scale(0.5);
}
.product-list-leave-active {
    position: absolute;
}
</style>
