<template>
    <div class="row my-4" style="padding-inline: 30px;">
        <ProductItem v-for="product in data.products" :key="product.id" :product="product" />
    </div>
</template>

<script setup>
    import ProductItem from './ProductItem.vue'
    import { useCartStore } from '@/stores/useCartStore';

    const data = useCartStore()
    console.log(data)
</script>