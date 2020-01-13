<template>
    <v-snackbar
        v-model="snackbar"
        :timeout="3000"
        bottom
        right
        class="orange--text text--lighten-1"
    >
        {{ message }}
        <v-btn @click="close" dark text>
            <v-icon color="orange lighten-1">mdi-close</v-icon>
        </v-btn>
    </v-snackbar>
</template>

<script>
export default {
    data() {
        return {
            snackbar: false
        }
    },

    computed: {
        message() {
            return this.$store.state.notificationMessage
        }
    },

    watch: {
        message() {
            if (this.message !== '') {
                this.snackbar = true
            }
        },

        snackbar() {
            if (this.snackbar === false) {
                this.$store.commit('removeNotificationMessage')
            }
        }
    },

    methods: {
        close() {
            this.snackbar = false
        }
    }
}
</script>

<style lang="scss" scoped>
.v-btn {
    height: 31px;
}
</style>
