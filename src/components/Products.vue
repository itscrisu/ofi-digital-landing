<template>
  <v-container fluid class="py-0 my-0">
    <h1 class="text-center py-10">Te ofrecemos lo último en tecnología</h1>
    <!-- <SearchBar /> -->
    <v-row dense align="center" justify="center">
      <v-col
        align="center"
        justify="center"
        cols="12"
        md="4"
        v-for="card in cards"
        :key="card.id"
      >
        <v-card max-width="330" class="pt-5 mb-8" elevation="10" color="#eee">
          <v-carousel height="350" hide-delimiters>
            <v-carousel-item
              v-for="(image, i) in card.images"
              :key="i"
              :src="image"
            >
            </v-carousel-item>
          </v-carousel>

          <v-card-title
            v-text="card.title"
            class="justify-center"
          ></v-card-title>

          <v-card-text>
            <v-row align="center" justify="center" class="mx-0">
              <v-rating
                :value="card.value"
                color="amber"
                dense
                half-increments
                readonly
                size="24"
              ></v-rating>

              <div class="grey--text ms-4">{{ card.ratings }}</div>
            </v-row>
          </v-card-text>
          <v-card-subtitle v-if="card.colors">
            Colores disponibles: {{ card.colors }}
            <p class="font-weight-bold mb-0">
              Consultar disponibilidad en colores
            </p>
          </v-card-subtitle>
          <v-dialog max-width="450">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="indigo darken-3"
                class="mx-auto font-weight-bold mb-2"
                text
                plain
                v-bind="attrs"
                v-on="on"
              >
                Ver más información
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h6">
                Especificaciones del producto
              </v-card-title>
              <v-card-text v-html="card.description" class="text-body-1">
              </v-card-text>
            </v-card>
          </v-dialog>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              color="indigo darken-3"
              class="mx-auto font-weight-bold"
              text
              plain
              @click="scrollToContact"
              >Consultar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="12" align="center" justify="center" class="pb-0">
        <h4 class="mb-5">¿Buscás otro producto?</h4>
        <v-btn
          elevation="10"
          dark
          color="#080d12"
          rounded
          @click="scrollToContact"
        >
          <span class="mx-2">Comunicate con nosotros</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { productsDetails } from "../data/productsDetails.js";
// import SearchBar from "./SearchBar";

export default {
  name: "Products",
  components: {
    // SearchBar,
  },
  data() {
    return {
      cards: productsDetails,
    };
  },
  methods: {
    scrollToContact() {
      document.getElementById("contact").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  },
};
</script>

<style scoped>
.container {
  background: #cdc3de !important;
  background: linear-gradient(
    0deg,
    #cdc3de 0%,
    #cdc3de 13%,
    #fff 100%
  ) !important;
}
h1 {
  color: #000;
  text-shadow: #bbb 1px 0 10px;
}
</style>
