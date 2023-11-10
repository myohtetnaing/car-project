<script setup>
import cars from "../data/cars.json";
import { useRoute } from "vue-router";

const route = useRoute();

const car = cars.find((c) => c.id === parseInt(route.params.id));
</script>

<template>
  <div class="container">
    <h3>Detial Car Specification</h3>
    <div class="card">
      <div class="card-header">
        Brand Name : {{ car.name }}<br />Model : {{ car.model }} <br />
        Price : $ {{ car.price }}
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <img :src="car.image" alt="" />
          </div>
          <div class="col-md-6">
            <span>{{ car.description }}</span>
          </div>
        </div>
      </div>
      <!-- <div class="card-footer"></div> -->
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 15px 30px;
}
img {
  width: 100%;
}
</style>
