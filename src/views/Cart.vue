<script></script>

<template>
  <div class="container">
    <h1>Cart page</h1>
    <div class="card">
      <div class="card-body">
        <table class="table">
          <tr>
            <th>No</th>
            <th>Car Brand</th>
            <th>Car Model</th>
            <th>Car Image</th>
            <th>Car Color</th>
            <th>Car Price</th>
            <th>Qty</th>
            <th>+ / -</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>1</td>
            <td>BMW</td>
            <td>2022</td>
            <td><img src="" alt="Not Image" /></td>
            <td>Red</td>
            <td>$ 120000</td>
            <td>1</td>
            <td>
              <button class="btn btn-sm btn-primary me-2">+</button
              ><button class="btn btn-sm btn-danger">-</button>
            </td>
            <td>$ 120000</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
div p {
  color: rgb(255, 115, 0);
}
.container {
  padding: 30px;
}
</style>
