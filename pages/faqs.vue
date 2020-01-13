<template>
    <page title="FAQs" description="Frequently Asked Questions">
        <h3>Online Purchases</h3>
        <p>
            Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum.
            Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus
            dapibus. Sed consectetur, est vel tincidunt imperdiet, justo est
            dignissim lorem, nec tincidunt lacus lacus ac risus. Cras pretium
            enim nec vestibulum aliquam. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae
        </p>

        <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item, i) in items.slice(0, 4)" :key="i">
                <v-expansion-panel-header>{{
                    item.question
                }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas, qui. Illum aliquid molestias, libero dicta
                    voluptates odit tempore sed. Repudiandae fugiat velit
                    perspiciatis provident, placeat facere odit natus itaque
                    harum porro asperiores, ipsa fuga quaerat nam, facilis eaque
                    expedita quod doloribus minima eum est aperiam possimus?
                    Maiores a molestias, impedit non reprehenderit, tempore
                    illum fuga quasi, porro iusto quod esse.
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        <h3>Product Delivery</h3>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minus
            sunt nam voluptates placeat modi mollitia quis quisquam eum eos
            nostrum doloribus iste, inventore similique architecto atque
            nesciunt magnam maiores!
        </p>

        <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item, i) in items.slice(5, 9)" :key="i">
                <v-expansion-panel-header>{{
                    item.question
                }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </page>
</template>

<script>
import Page from '~/components/layout/Page'

export default {
    components: {
        Page
    },

    data() {
        return {
            items: [
                // Online Purchases
                {
                    question: `What is your international returns policy?`
                },
                {
                    question:
                        'How can I find your international delivery policy?'
                },
                {
                    question: `What should I do if my order hasn't been delivered yet?`
                },
                {
                    question: `How can I get a new returns note?`
                },
                {
                    question: `I'm an international customer, have you received my returned items?`
                },

                // Product Delivery
                {
                    question: `How can I find your international delivery policy?`
                },
                {
                    question: `What should I do if my order hasn't been delivered yet?`
                },
                {
                    question: `What is your international returns policy?`
                },
                {
                    question: `What should I do if my order hasn't been delivered yet?`
                },
                {
                    question: `I'm an international customer, have you received my returned items?`
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
h3 {
    padding-top: 30px;
    color: $appOrange;
}
p {
    font-weight: 100;
}

.theme--dark.v-expansion-panels .v-expansion-panel {
    background-color: transparent;
}
.v-expansion-panel {
    &::before {
        content: none;
    }

    &:not(:first-child)::after {
        border-top-width: 0;
    }
}
.v-expansion-panel-header {
    padding-left: 0;
    padding-bottom: 0;
    text-transform: uppercase;
}
.v-expansion-panel-content {
    font-weight: 100;

    // https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
    //     v
    & ::v-deep .v-expansion-panel-content__wrap {
        padding-left: 0;
    }
}
</style>
