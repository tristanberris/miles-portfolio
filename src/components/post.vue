<template>
  <div class="post row justify-content-center mt-3 p-5">
    <div class="card col-lg-5 col-md-12 d-flex align-items-center image-container pb-3" style>
      <div class="text-container">
          <router-link to="/Illustrations" >

        <a href="">
          <img
            class="card-img-top image rounded image-size thumbnail-image"
            src="https://carbon-media.accelerator.net/0000000kpVi/cHttr0KvPT3c8zIHlNm2hb;crop(1502,952,1340,1005)/480x360/lossless.png?auto=webp"
            alt="Card image cap"
          />
          <div class="card-body centered middle text">Illustration</div>
        </a>
          </router-link>
      </div>
    </div>
    <div class="card col-lg-5 col-md-12 align-items-center image-container pb-3" style>
      <div class="text-container">
        <a href>
          <img
            class="card-img-top image rounded image-size thumbnail-image"
            src="https://carbon-media.accelerator.net/0000000kpVi/0R6y1YO1g8VcmA5cWw7JZE;crop(0,876,2983,2237)/460x345.png?auto=webp"
            alt="Card image cap"
          />
          <div class="card-body centered middle text">Character Development</div>
        </a>
      </div>
    </div>
    <div class="card col-lg-5 col-md-12 align-items-center image-container pb-3" style>
      <div class="text-container">
        <a href>
          <img
            class="card-img-top image rounded image-size thumbnail-image"
            src="https://carbon-media.accelerator.net/0000000kpVi/5z34i4ETwB4dvP8eMsauIg;crop(449,204,704,528)/480x360.jpeg"
            alt="Card image cap"
          />
          <div class="card-body centered middle text">Colour Studies</div>
        </a>
      </div>
    </div>
    <div class="card col-lg-5 col-md-12 align-items-center image-container pb-3" style>
      <div class="text-container">
        <a href>
          <img
            class="card-img-top image rounded image-size thumbnail-image"
            src="https://picsum.photos/480/360"
            alt="Card image cap"
          />
          <div class="card-body centered middle text">Animations</div>
        </a>
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
  /* background-color: rgba(87, 87, 87, 0.924); */

  color: black;
  font-size: 24px;
  padding: 16px 32px;
}
.image-size {
  /* height: 348px;
  width: 460px; */
  height: 100%;
  width: 100%;
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
  opacity: 0.4;
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
.thumbnail-image {
  display: block;
  /* height: 100%; */
  left: 0;
  /* opacity: 0; */
  /* position: absolute; */
  top: 0;
 
}
</style>