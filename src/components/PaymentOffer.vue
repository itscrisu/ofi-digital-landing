<template>
  <v-card max-width="1200" class="mx-auto mt-10 mb-15" elevation="12">
    <v-row align="center" justify="center">
      <v-col v-for="payment in paymentInfo" :key="payment.id">
        <v-row align="center" justify="center">
          <v-col class="d-flex justify-center align-center">
            <v-icon class="mr-3" color="blue">{{ payment.icon }}</v-icon>
            <p class="mb-0">{{ payment.title }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "PaymentOffer",
  data() {
    return {
      paymentInfo: [
        {
          id: 1,
          title: "Tarjeta de débito",
          details: "Ver más",
          icon: "mdi-credit-card-fast-outline",
        },
        {
          id: 2,
          title: "Tarjeta de crédito",
          details: "Ver más",
          icon: "mdi-credit-card-fast",
        },
        {
          id: 3,
          title: "Efectivo",
          details: "Consultanos",
          icon: "mdi-cash-fast",
        },
        {
          id: 4,
          title: "Promociones",
          details: "Consultanos",
          icon: "mdi-cash-multiple",
        },
      ],
    };
  },
};
</script>

<style>
.title--divider {
  height: 3px !important;
  max-height: 3px !important;
}
.theme--light.v-divider {
  border-color: transparent !important;
}
</style>
