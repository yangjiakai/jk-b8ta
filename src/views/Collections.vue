<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <form>
              <h4>Product Category</h4>
              <v-select label="製品の種類" :items="items" v-model="value" autocomplete></v-select>
              <h4>Vendor</h4>
              <v-select label="ブランド" :items="items" v-model="value" autocomplete></v-select>
              <v-text-field dense flat label="Search" solo-inverted append-icon="mdi-magnify"></v-text-field>
            </form>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="60vh" rounded="lg" class="pa-5" elevation="3" width="1200">

            <!--  -->
            <v-row>
              <v-col v-for="i in 9" :key="i" md="4">
                <v-card class="pa-5">
                  <router-link to="/product/all">
                    <v-img
                      src="https://cdn.shopify.com/s/files/1/0455/8497/3975/products/c5503ce9338e1909ae4a1098bb80eef6_01165122-3695-4b43-aa4c-b90a21cf19da_600x600_crop_center.jpg?v=1608778223"
                      height="200px"></v-img>
                  </router-link>


                  <v-card-title>
                    Airdog X5s
                  </v-card-title>

                  <v-card-subtitle>
                    ¥26,400
                  </v-card-subtitle>

                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <template>
                <div class="text-center mx-auto ma-5">
                  <v-pagination v-model="page" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right">
                  </v-pagination>
                </div>
              </template>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        page: 1,
      }
    },
    components: {

    },

    created() {

    }
  }
</script>

<style scoped lang="stylus">
</style>