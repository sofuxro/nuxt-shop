<template>
    <v-row>
        <hero />

        <div class="container">
            <v-row justify="space-around" class="pt-6">
                <v-col cols="4" md="3">
                    <v-card max-width="300" height="100%" class="mx-auto pa-4">
                        <v-img
                            :src="require('~/assets/img/icon-cal.svg')"
                            alt="24/7 CUSTOMER SERVICE"
                            max-width="100px"
                            class="mx-auto"
                        ></v-img>
                        <div class="text-center pt-4">
                            24/7 CUSTOMER SERVICE
                        </div>
                        <p class="text-center grey--text">Call us any time</p>
                    </v-card>
                </v-col>
                <v-col cols="4" md="3">
                    <v-card max-width="300" height="100%" class="mx-auto pa-4">
                        <v-img
                            :src="require('~/assets/img/icon-service.svg')"
                            alt="EASY ONLINE RETURNS"
                            max-width="100px"
                            class="mx-auto"
                        ></v-img>
                        <div class="text-center pt-4">EASY ONLINE RETURNS</div>
                        <p class="text-center grey--text">
                            Send Within 30 Days
                        </p>
                    </v-card>
                </v-col>
                <v-col cols="4" md="3">
                    <v-card max-width="300" height="100%" class="mx-auto pa-4">
                        <v-img
                            :src="require('~/assets/img/icon-package.svg')"
                            alt="FREE SHIPPING GLOBALLY"
                            max-width="100px"
                            class="mx-auto"
                        ></v-img>
                        <div class="text-center pt-4">
                            FREE SHIPPING GLOBALLY
                        </div>
                        <p class="text-center grey--text">
                            Delivery in 3-6 Days
                        </p>
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <featured />

        <div class="words-of-wisdom">
            <div class="words-of-wisdom__text text-center">
                "The surprising styles of watches are advanced for all seasons."
                <span>Oscar Jackson</span>
            </div>
        </div>
    </v-row>
</template>

<script>
import Hero from '~/components/common/Hero'
import Featured from '~/components/common/Featured'

export default {
    components: {
        Hero,
        Featured
    }
}
</script>

<style lang="scss" scoped>
.words-of-wisdom {
    width: 100%;
    height: 300px;
    position: relative;
    flex-grow: 1;
    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background-image: url('~assets/img/footer-watch.jpg');
        background-size: cover;
        background-position: center;
        position: absolute;
        top: 0;
        left: 0;
        filter: brightness(0.2);
    }

    & .words-of-wisdom__text {
        height: 100%;
        position: relative;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        flex-direction: column;
        display: flex;
        span {
            font-weight: 100;
        }
    }
}
</style>
