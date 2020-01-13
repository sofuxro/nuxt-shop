<template>
    <div class="section-loader-wrapper">
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
.section-loader-wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(31, 31, 31, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    justify-content: center;
    align-items: center;
    display: flex;
}
</style>
