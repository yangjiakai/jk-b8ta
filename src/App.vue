<template>
  <v-app>
    <v-app-bar app color="#2D3753" dark>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>
        <v-toolbar-items>
          <v-btn text to="/">home</v-btn>
          <v-btn text to="/about">about</v-btn>
          <v-btn text to="/news">news</v-btn>
          <v-menu open-on-hover bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text to="/collections/all" v-bind="attrs" v-on="on">
                collections
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in collectionItems" :key="index">
                <v-list-item-title>
                  <router-link :to="item.router">{{ item.title }}</router-link>
                </v-list-item-title>

              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>


        <v-spacer></v-spacer>
        <v-btn text @click="goBack()">back</v-btn>
        <v-responsive max-width="260">
          <v-text-field dense flat hide-details rounded solo-inverted></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {

    },

    data: () => ({
      collectionItems: [{
          title: 'tv',
          router: 'tv'
        },
        {
          title: 'pc',
          router: 'pc'
        },
        {
          title: 'phone',
          router: 'phone'
        },
        {
          title: 'game',
          router: 'game'
        },
      ],
    }),

    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    },
  };
</script>
