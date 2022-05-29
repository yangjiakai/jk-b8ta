<template>
  <div class="home">
    <v-carousel :show-arrows="true" hide-delimiters height="90vh" class="">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <v-container grid-list-md>
      <v-row>

      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {

    },
    data() {
      return {
        items: [{
            src: 'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2016/01/14/20/14/desk-1140699_1280.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2016/03/09/09/59/building-1245984_1280.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2017/06/23/11/49/laptop-2434393_1280.jpg',
          },
        ],
      }
    },

  }
</script>