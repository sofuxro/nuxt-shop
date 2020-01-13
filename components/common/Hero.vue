<template>
    <v-carousel
        cycle
        height="700"
        hide-delimiter-background
        show-arrows-on-hover
    >
        <v-carousel-item
            v-for="(watch, i) in watches"
            :key="i"
            class="container"
        >
            <v-img
                :src="require('~/assets/img/watches/' + watch.img)"
                max-height="100%"
                position="right center"
                eager
            >
                <v-sheet height="100%" color="transparent">
                    <v-row class="fill-height" align="center" justify="center">
                        <div class="pa-7">
                            <div class="display-2 pb-4 text-center">
                                {{ watch.title }}
                            </div>
                            <div class="grey--text text--lighten-1">
                                {{ watch.description }}
                                <b
                                    >This is a Demo Online Store. No orders
                                    shall be fulfilled.</b
                                >
                            </div>
                        </div>
                    </v-row>
                </v-sheet>
            </v-img>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data() {
        return {
            watches: [
                {
                    title: 'Speedmaster Chronograph',
                    img: 'watch-big-01.jpg',
                    description:
                        'Lorem ipsum dolor amet aesthetic gentrify vaporware hot chicken kickstarter pickled tattooed. Banh mi bicycle rights meggings tumblr unicorn post-ironic glossier authentic, cardigan retro synth disrupt chillwave. Raclette sartorial jianbing, echo park hashtag fanny pack slow-carb. Typewriter +1 tilde hashtag viral, DIY brooklyn.'
                },
                {
                    title: 'Jules Audemars',
                    img: 'watch-big-02.jpg',
                    description:
                        'Lorem ipsum dolor amet aesthetic gentrify vaporware hot chicken kickstarter pickled tattooed. Banh mi bicycle rights meggings tumblr unicorn post-ironic glossier authentic, cardigan retro synth disrupt chillwave. Raclette sartorial jianbing, echo park hashtag fanny pack slow-carb. Typewriter +1 tilde hashtag viral, DIY brooklyn.'
                },
                {
                    title: 'Tag Heuer Carrera',
                    img: 'watch-big-03.jpg',
                    description:
                        'Lorem ipsum dolor amet aesthetic gentrify vaporware hot chicken kickstarter pickled tattooed. Banh mi bicycle rights meggings tumblr unicorn post-ironic glossier authentic, cardigan retro synth disrupt chillwave. Raclette sartorial jianbing, echo park hashtag fanny pack slow-carb. Typewriter +1 tilde hashtag viral, DIY brooklyn.'
                },
                {
                    title: 'Seamaster 300 Spectre',
                    img: 'watch-big-04.jpg',
                    description:
                        'Lorem ipsum dolor amet aesthetic gentrify vaporware hot chicken kickstarter pickled tattooed. Banh mi bicycle rights meggings tumblr unicorn post-ironic glossier authentic, cardigan retro synth disrupt chillwave. Raclette sartorial jianbing, echo park hashtag fanny pack slow-carb. Typewriter +1 tilde hashtag viral, DIY brooklyn.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.v-carousel {
    background-color: #202020;

    // https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
    //     v
    & ::v-deep .v-image__image--cover {
        background-size: auto;
    }

    .v-sheet {
        max-width: 550px;
        margin-left: 400px;

        @media #{map-get($display-breakpoints, 'lg-and-down')} {
            margin-left: 0;
        }

        & > .row {
            background-color: rgba(32, 32, 32, 0.7);
        }
    }
}
</style>
