<template>
    <div class="loader"></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~vuetify/src/styles/settings/_colors';

.loader {
    width: 70px;
    height: 70px;
    position: relative;
    border: 3px solid $appOrange;
    border-radius: 50%;
    display: block;

    &::before,
    &::after {
        width: 3px;
        content: '';
        position: absolute;
        background-color: $appOrange;
        border-radius: 1.5px;
        transform-origin: 50% 0%;
        display: block;
    }

    &::after {
        height: 25px;
        left: 31px;
        top: 50%;
        animation: spin 500ms linear infinite;
    }
    &::before {
        height: 20px;
        left: 31px;
        top: 50%;
        animation: spin 2000ms linear infinite;
    }

    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
}
</style>
