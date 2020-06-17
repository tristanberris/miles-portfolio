<template>
  <div class="post row justify-content-center">
    <div class="card col-lg-5 col-md-12  d-flex align-items-center image-container pb-3" style>
      <div class="text-container">
        <img
          class="card-img-top image rounded image-size"
          src="https://picsum.photos/200/200"
          alt="Card image cap"
        />
        <div class="card-body centered middle text">Test</div>
      </div>
    </div>
    <div class="card col-lg-5 col-md-12 align-items-center image-container" style>
     <div class="text-container">
        <img
          class="card-img-top image rounded image-size"
          src="https://picsum.photos/200/200"
          alt="Card image cap"
        />
        <div class="card-body centered middle text">Test</div>
      </div>
    </div>
    <div class="card col-lg-5 col-md-12 align-items-center image-container" style>
      <div class="text-container">
        <img
          class="card-img-top image rounded image-size"
          src="https://picsum.photos/200/200"
          alt="Card image cap"
        />
        <div class="card-body centered middle text">Test</div>
      </div>
    </div>
    <div class="card col-lg-5 col-md-12 align-items-center image-container" style>
      <div class="text-container">
        <img
          class="card-img-top image rounded image-size"
          src="https://picsum.photos/200/200"
          alt="Card image cap"
        />
        <div class="card-body centered middle text">Test</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "post",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.text {
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
.image-size {
  height: 300px;
  width: 500px;
}
.card {
  border: none;
}
.image {
  opacity: 1;
  transition: 0.5s ease;
  backface-visibility: hidden;
}
.text-container:hover .image {
  opacity: 0.5;
}
.text-container:hover .text {
  opacity: 1;
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.image-container {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>