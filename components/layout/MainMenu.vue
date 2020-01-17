<template>
    <div class="main-menu hidden-sm-and-down">
        <nuxt-link to="/"> Home</nuxt-link>
        <nuxt-link to="/products"> All</nuxt-link>
        <nuxt-link to="/products?gender=female">Ladies</nuxt-link>
        <nuxt-link to="/products?gender=male">Gents</nuxt-link>
        <nuxt-link to="/about"> About</nuxt-link>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-menu {
    a {
        position: relative;
        padding: 0 17px;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        transition: color 0.2s ease-out;

        &::before,
        &::after {
            content: '';
            width: 1px;
            height: 14px;
            background-color: rgba(255, 255, 255, 0.3);
            position: absolute;
            top: 6px;
            opacity: 1;
        }
        &::before {
            left: 0;
        }
        &::after {
            right: 0;
        }
        &:hover {
            color: $appOrange;
            &::before {
                opacity: 1;
            }
        }

        &.exact-active-link {
            color: $appOrange;
        }
    }
}
</style>
