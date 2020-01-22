<template>
    <page :title="title" description="Why this dummy e-commerce store">
        <h2 class="mt-12 mb-12 display-1">
            This is just a showcase for the latest front-end technologies:
        </h2>

        <v-list-item v-for="item in techs" :key="item.title" three-line>
            <v-list-item-content>
                <v-list-item-title class="title orange--text text--lighten-1">{{
                    item.title
                }}</v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle" />
            </v-list-item-content>
        </v-list-item>

        <p class="mt-12 subtitle-1 font-weight-thin">
            You can view the open source code on
            <a href="#" class="simple-link">github</a>
        </p>
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
            title: 'About',

            techs: [
                {
                    title: 'Vue.js',
                    subtitle:
                        'The Progressive JavaScript Framework - FAST, VERSATILE and APPROACHABLE'
                },
                {
                    title: 'Nuxt.js',
                    subtitle: 'A Layer on top of Vue.js - SSR and JAMStack'
                },
                {
                    title: 'Vuetify.js',
                    subtitle:
                        'Vue UI Library with beautifully handcrafted Material Components'
                },
                {
                    title: 'Netlify',
                    subtitle:
                        'Build, deploy and host your static site or app with a drag and drop interface and automatic delpoy'
                },
                {
                    title: 'Lodash FP',
                    subtitle:
                        'A Lodash version that promotes a more functional programming (FP) friendly style by exporting methods wrapped to produce immutable auto-curried iteratee-first data-last methods. (bext explained <a class="simple-link" href="https://dev.to/ifarmgolems/what-is-lodash-fp-even-4ohd" target="_blank">here</a>)'
                },
                {
                    title: 'Integration and Unit testing with Jest',
                    subtitle: 'Delightful JavaScript Testing'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.v-list-item__subtitle ::v-deep .simple-link {
    transform: scale(0.9);
    display: inline-block;
}
</style>
