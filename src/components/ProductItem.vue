<template>
    <div class="col-md-4 mb-2">
        <div class="card">
            <img :src="product.image" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, aut.</p>
                <p>
                    <span class="badge text-danger">
                    ${{ product.price }}
                </span>
                </p>
                <button @click="data.addToCart(product)" class="btn btn-primary text-white">
                    <i class="bi bi-cart-check"> add to cart</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/useCartStore';
import { defineProps, computed } from 'vue';

    const data = useCartStore()

    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })

    const product = computed(() => props.product)
</script>