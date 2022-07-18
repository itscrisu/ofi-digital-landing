<template>
  <v-container fluid class="px-0 py-0 mt-0">
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style="height: 30vh; width: 100%"
    >
      <path
        d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
        style="stroke: none; fill: #cdc3de"
      ></path>
    </svg>
    <v-row class="mt-6" align="center" justify="center">
      <v-col cols="12" sm="4">
        <v-card flat max-width="300" class="mx-auto px-2">
          <h1 class="text-left blue-text">Quienes somos</h1>
          <v-divider
            width="120"
            class="px-0 title--divider"
            color="#cdc3de"
          ></v-divider>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8">
        <v-list>
          <v-list-item v-for="(text, i) in content" :key="i">
            <v-list-item-icon>
              <v-icon color="#272727" size="8">mdi-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="py-0">
              {{ text.description }}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="pb-0 mt-5">
        <h3 class="text-center blue-text">Conocé nuestros métodos de pago:</h3>
      </v-col>
    </v-row>
    <PaymentOffer />
  </v-container>
</template>

<script>
import PaymentOffer from "./PaymentOffer.vue";

export default {
  name: "About",
  components: { PaymentOffer },
  data() {
    return {
      content: [
        {
          description:
            "Somos una empresa líder Argentina ubicada en Olivos dedicada a la importación de productos electrónicos.",
        },
        {
          description: "Ofrecemos ventas por mayor y menor",
        },
        {
          description:
            "Todos nuestros productos son originales, nuevos y con garantia",
        },
        {
          description: "Nos destaca nuestro trato, profesionalidad y calidad",
        },
      ],
    };
  },
};
</script>

<style>
.v-list-item__icon {
  margin-right: 0px !important;
  align-self: center !important;
}
</style>
