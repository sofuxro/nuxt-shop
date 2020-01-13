<template>
    <div class="shop-loader-wrapper">
        <loader />
    </div>
</template>

<script>
import Loader from './Loader'

export default {
    components: {
        Loader
    }
}
</script>

<style lang="scss">
.shop-loader-wrapper {
    width: 100vw;
    height: 100vh;
    background-color: #1f1f1f;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    justify-content: center;
    align-items: center;
    display: flex;
}
</style>
