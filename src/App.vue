<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MISCELANEA</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">
                <i class="b bi-house"></i>
                SHOPPING CART
              </router-link>
            </li>
            <li class="nav-item pr">
              <router-link class="nav-link active" aria-current="page" to="/cart">
                <i class="b bi-cart-check"></i>
                Cart ({{data.countCartItems}})
              </router-link>
            </li>

            <li class="nav-item pr">
              <router-link class="nav-link active" aria-current="page" to="/eTracker">
                <i class="bi bi-cash-coin"></i>
                EXPENSE TRACKER
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link class="rl" to="/about">
                  <i class="bi bi-thermometer-half"></i>
                  WEATHER APP
                </router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
</template>

<script setup>
import { useCartStore } from './stores/useCartStore'

const data = useCartStore()
</script>

<style>

.rl {
  text-decoration: none;
  color: rgba(238, 238, 238, 0.903);
}

.navbar-brand {
  display: inline-block;
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  font-weight: black;
  background: linear-gradient(to top left,#ff75c3,#ffa647,#ffe83f,#9fff5b,#70e2ff,#cd93ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-right: 25px;
}

.pr {
  padding-right: 27px;
}
</style>
