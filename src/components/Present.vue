<template>
    <div class="container">

      <div class="row">
        <div class="col-12">
          
          <div class="aspect-outer" @click="nextCard()">
            <div class="aspect-inner">
              <div class="word" :style="{ 'color': slides.slides_array[0].color }">
                {{slides.slides_array[0].word}}
              </div>
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
      slides: [], 
      deckPosition: 0
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
  }, 
  methods:{
    nextCard(){
      this.deckPosition = deckPosition++
    }
  }
};
</script>

<style scoped>
.aspect-outer{
	width: 100%;
	padding-bottom: 56.25%; /* 16:9 */
	position: relative;
  border-radius: 25px;
}

.aspect-inner{
  position: absolute;
	top: 0; bottom: 0; left: 0; right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.word{
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 10vw;
}
</style>