<template>
    <transition name="fade">
        <div
            v-if="isMainOverlayVisible"
            @click="isMainOverlayVisible = false"
            class="main-overlay"
        >
            <div class="thank-you display-1 font-weight-thin text-center">
                <span class="orange--text text--lighten-1">Thank you</span> for
                buying from us. <br />The watches will <b>NOT</b> be sent as
                this is just a
                <b>Demo Online Store</b>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    computed: {
        isMainOverlayVisible: {
            get() {
                return this.$store.state.isMainOverlayVisible
            },
            set(value) {
                this.$store.commit('modifyMainOverlay', false)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.main-overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.2s ease-out;
    display: flex;
    z-index: 7;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
