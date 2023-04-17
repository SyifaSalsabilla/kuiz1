<script setup>
</script>

<template>
  <main>
    <div class="bg-image"></div>

    <div class="bg-text">
      <h2>Welcome To Home Page My Portofolio</h2>
      <h1 style="font-size:50px">Syifa Salsabilla</h1>
      <p>And I'm a college student</p>
    </div>

  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

.bg-image {
  /* The image used */
  background-image: url("src/assets/patern-home.jpg");

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Position text in the middle of the page/image */
.bg-text {
  background-color: rgba(0, 0, 0, 0.8); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}
</style>
