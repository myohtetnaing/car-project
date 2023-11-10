<script setup>
import { ref } from "vue";
import cars from "../data/cars.json";

let num = Math.floor(Math.random() * cars.length) + 1;
const car = cars.find((c) => c.id === num);

// for car description dynamic background color function
const hslColor = ref(0);
const onMouseMove = (e) => {
  hslColor.value = e.clientX;
};
</script>

<template>
  <div class="container">
    <h3>Latest Brand New 2023 Model</h3>
    <div class="card">
      <div class="card-header">
        Brand New : {{ car.name }}<br />Model : {{ car.model }} <br />
        Price : $ {{ car.price }}
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <img :src="car.image" alt="" />
          </div>
          <div class="col-md-6">
            <div
              class="car-description"
              @mousemove="onMouseMove"
              :style="{ backgroundColor: `hsla(${hslColor}, 50%, 50%, .8)` }"
            >
              <p>{{ car.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-sm btn-primary float-end">Pre-order Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 10px 30px;
}
.card-body img {
  width: 100%;
}
.car-description {
  margin: 30px 0;
  padding: 50px 20px;
  border-radius: 5px;
  box-shadow: 20px 20px 50px 10px rgba(192, 217, 255, 0.5) inset;
  transition: 0.3s background-color ease;
}
</style>
