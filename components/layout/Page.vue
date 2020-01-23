<template>
    <div class="static-page">
        <header ref="header">
            <div class="container">
                <h1>{{ title }}</h1>
                <div class="description">{{ description }}</div>
            </div>
        </header>
        <div class="content container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
let rAFID = null
let lastScrollY = 0

export default {
    props: {
        title: { type: String, default: 'This is a static page' },
        description: { type: String, default: 'This is the page description' }
    },

    data() {
        return {
            ticking: false
        }
    },

    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },

    beforeDestroy() {
        cancelAnimationFrame(rAFID)
    },

    methods: {
        onScroll() {
            lastScrollY = window.scrollY
            this.requestTick()
        },

        update() {
            const bp = this.$vuetify.breakpoint.name
            const offset = bp === 'xl' || bp === 'lg' ? 150 : 50
            this.$refs.header.style.backgroundPositionY = `${lastScrollY / 2 -
                offset}px`

            this.ticking = false
        },

        requestTick() {
            if (this.ticking === false) {
                rAFID = requestAnimationFrame(this.update)
                this.ticking = false
            }
        }
    }
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.static-page {
    height: 100%;
    background-color: #242424;
    header {
        background-image: url('~assets/img/header-watch.jpg');
        background-position: center -150px;
        background-size: cover;
        padding: 70px 0 80px;
        .description {
            margin-top: -10px;
            color: $appOrange;
            font-weight: 100;
        }

        @media #{map-get($display-breakpoints, 'md-and-down')} {
            background-position: center -50px;
        }
    }
}
</style>
