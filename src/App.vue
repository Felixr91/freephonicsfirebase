<template>
  <v-app>
    <div>
      <v-app-bar dense>
        
        <router-link to="/">
          <v-toolbar-title>Freephonics</v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>

        <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        

      </v-app-bar>
    </div>


    <!-- Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="category in categories" v-bind:key="category.id">

            <router-link v-bind:to="{name:'category', params: {id: category.name}}">
              <v-list-item-title>{{category.name}}</v-list-item-title>
            </router-link>

          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- App Content - Router View -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- Footer -->
    <v-footer color="primary lighten-1" padless>
    <v-layout justify-center wrap>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-footer-link`"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <v-flex primary lighten-2 py-4 text-center white--text xs12>
        {{ new Date().getFullYear() }} — <strong>Vuetify Dashboard</strong>
      </v-flex>
    </v-layout>
  </v-footer>

  </v-app>
    
  

</template>

<script>

import db from '@/components/firebaseInit'

export default {
  name: "App",
  data: () => ({
    categories: [],
    drawer: false,
    group: null,
    links: [
      {
        label: 'Home',
        url: '/'
      }, 
      {
        label: 'About', 
        url: '/about'
      }
    ]
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
  created() {
    db.collection('categories').orderBy('name').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id':  doc.id,
          'category_id': doc.data().category_id, 
          'name': doc.data().name
        }
        this.categories.push(data)
      })
    })
  }
};
</script>

<style>
  h1, h2, h3, h4, h5, h6{
    font-family: 'Raleway', sans-serif;
  }

  .v-toolbar__title{
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    color: white;
  }

  .v-toolbar__content{
    background-color: #00127b91;
  }

  p{
    font-family: 'Lato', sans-serif;
  }

  .v-application--wrap {
    background: linear-gradient(-45deg, #ee7752, #ce4b7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

</style>