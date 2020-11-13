<template>
    <div class="container">

      <div class="row">
        <h1>Show Slides here!</h1>
      </div>

      <div class="row">
        <div class="col-12" v-for="slide in slides.slides_array" v-bind:key="slide.id">
          <Slides></Slides>
          <div class="aspect-outer" :style="{ 'background-color': slide.color }">
            <div class="aspect-inner">
              {{slide.word}}
            </div>
          </div>
          
        </div>
      </div>

    </div>
</template>

<script>


import db from './firebaseInit'

export default {
  data(){
    return{
      slides: {}
    }
  }, 
  created() {

    console.log(this.$route.params.id)

    db.collection('presentations').where("name", "==", this.$route.params.id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'slides_array': doc.data().slides
        }
        console.log(data)
        this.slides = data
      })
    })
  }
};
</script>

<style scoped>
.aspect-outer{
	width: 100%;
	padding-bottom: 56.25%; /* 16:9 */
	position: relative;
}

.aspect-inner{
  position: absolute;
	top: 0; bottom: 0; left: 0; right: 0;
}
</style>