<template>
  <div class="container-fluid body">
    <navbar class="pt-3"></navbar>
    <h1 class="title-text">miles marcello hale</h1>
    <div class="subtitle">Illustrator and Concept Artist</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <post></post>
    <footer>
      <div class="row">
        <div class="col"></div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import navbar from "../components/navbar.vue";
import post from "../components/post.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    navbar,
    post
  }
};
</script>

<style>
.title-text {
  /* font-weight: bold; */
  font-size: 3em;
  line-height: 1.2;
  font-family: "karla", sans-serif;
  font-weight: 700;
}
.subtitle{
  font-family: 'Karla', helvetica, arial, sans-serif;
  font-size: 1.3em;
    line-height: 1.3;
    font-weight: 400;
}
.body{
  
}
</style>
