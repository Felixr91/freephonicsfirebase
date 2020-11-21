<template>
  <div>
    <v-container>
      <v-row class="d-flex justify-content-center">
        <v-card
          color="#385F73"
          dark
        >
          <v-card-title class="headline">
            Welcome to Freephonics!
          </v-card-title>

          <v-card-subtitle>
            To get started click the navigation icon above. 
          </v-card-subtitle>

          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="250"
            max-width="350"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>

          <v-card-actions>
            <v-btn text>
              Listen Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>



export default {
  name: 'Home',
  components: {}
};
</script>
