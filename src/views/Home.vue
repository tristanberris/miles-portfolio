<template>
  <div class=" container-fluid">
    <navbar> </navbar>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <post> </post>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import navbar from '../components/navbar.vue'
import post from '../components/post.vue'
export default {
  
  name: 'Home',
  components: {
    HelloWorld,
    navbar,
    post
  }
}
</script>
