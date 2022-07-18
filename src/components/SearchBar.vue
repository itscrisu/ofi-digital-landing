<template>
  <v-row>
    <v-col class="mx-auto my-5" cols="6">
      <v-autocomplete
        v-model="select"
        :items="items"
        :search-input.sync="search"
        cache-items
        hide-no-data
        hide-details
        solo
        color="white"
        label="Buscar"
      ></v-autocomplete>
    </v-col>
  </v-row>
</template>

<script>
import { productsDetails } from "../data/productsDetails.js";

export default {
  name: "SearchBar",
  data() {
    return {
      select: null,
      items: [],
      search: null,
      products: productsDetails,
    };
  },
  watch: {
    search(value) {
      value && value !== this.select && this.querySelections(value);
    },
  },
  methods: {
    querySelections(value) {
      this.items = this.products.filter((product) => {
        return (
          (product.title || "").toLowerCase().indexOf((value || "").toLowerCase()) >
          -1
        );
      });
    },
  },
};
</script>
