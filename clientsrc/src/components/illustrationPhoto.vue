<template>
    <div class="illustrationPhoto">


    </div>
</template>


<script>
export default {
    name: 'illustrationPhoto',
    data(){
        return {}
    },
    mounted(){
      this.$store.dispatch("getIllustrationPhotos")
  },
    computed:{},
    methods:{},
    components:{}
}
</script>


<style scoped>

</style>