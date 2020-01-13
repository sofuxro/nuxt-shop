<template>
    <div>
        {{ product.name }}
    </div>
</template>

<script>
export default {
    computed: {
        product() {
            return this.$store.getters['products/productById'](
                this.$route.params.id
            )
        }
    }
}
</script>
