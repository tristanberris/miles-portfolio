<template>
  <div class="illustrations">
    <navbar></navbar>
    <h1>Illustrations</h1>
    <!-- Button trigger modal -->
    <!-- add this for authentication -->
      <!-- v-if="$auth.isAuthenticated" -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModalCenter"
    >Add photos</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Add photos</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addPhoto()">
              <div class="form-group">
                <label for="exampleInputEmail1">Image Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter image name"
                  v-model="newPhoto.imageName"
                />
                
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Image URL</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="image url"
                 v-model="newPhoto.imgUrl"

                />
              </div>
              
              <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
          </div>
          <!-- <div class="modal-footer">
            
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import navbar from "../components/navbar.vue";
export default {
  name: "illustrations",
  data() {
    return {newPhoto: {}};
  },
  mounted(){
     let data =  this.$store.dispatch("getIllustrationPhotos")
      console.log(data)
  },
  computed: {},
  methods: {
      addPhoto(){
          this.$store.dispatch("addPhoto", this.newPhoto)
          console.log(this.newPhoto)
      }
  },
  components: {
    navbar
  }
};
</script>


<style scoped>
</style>