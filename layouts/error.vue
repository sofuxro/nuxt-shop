<template>
    <page
        :title="
            error.statusCode === 404 ? 'Page not Found!' : 'An error occurred'
        "
        description="Something went somewhat wrong..."
    >
        <v-img
            :src="require('~/assets/img/404.jpg')"
            class="mt-12"
            max-height="365px"
            contain
        ></v-img>
    </page>
</template>

<script>
import Page from '~/components/layout/Page'

export default {
    layout: 'empty',
    components: {
        Page
    },
    props: {
        error: {
            type: Object,
            default: null
        }
    },
    head() {
        const title =
            this.error.statusCode === 404 ? this.pageNotFound : this.otherError
        return {
            title
        }
    },
    data() {
        return {
            title: '',
            pageNotFound: '404 Not Found',
            otherError: 'An error occurred'
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 20px;
}
</style>
