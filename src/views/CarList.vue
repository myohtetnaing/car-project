<script setup>
import cars from "../data/cars.json";
</script>

<template>
  <div class="container">
    <div class="row mt-2">
      <div class="col-md-4" v-for="car in cars" :key="car.id">
        <div class="card mb-2">
          <div class="card-header">
            Brand New : {{ car.name }}<br />Model : {{ car.model }} <br />
            Price : $ {{ car.price }}
          </div>
          <div class="card-body">
            <img :src="car.image" alt="Not photo" />
          </div>
          <div class="card-footer">
            <router-link :to="`/car-list/${car.id}`">More detial</router-link>
            <button class="btn btn-sm btn-primary float-end">
              Pre-order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
