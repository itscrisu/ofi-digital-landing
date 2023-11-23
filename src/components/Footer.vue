<template>
  <v-footer padless app absolute>
    <v-card width="100vw" color="#080d12" class="lighten-1 text-center">
      <v-card-text class="white--text pb-0"
        >Escribinos por nuestras redes o envianos un mail:</v-card-text
      >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.id"
          class="mx-4"
          icon
          color="white"
          :href="icon.url"
          target="_blank"
        >
          <v-icon size="24px">
            {{ icon.logo }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Ofi.Digital</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        {
          id: 1,
          logo: "mdi-whatsapp",
          url: "https://api.whatsapp.com/send?phone=5491131421895&text=Hola Ofi.Digital! Quiero hacerles una consulta...",
        },
        {
          id: 2,
          logo: "mdi-instagram",
          url: "https://www.instagram.com/ofidigital/",
        },
        {
          id: 3,
          logo: "mdi-map-marker-outline",
          url: "https://goo.gl/maps/ZnPU5grDRKXqu5Gt9",
        },
        {
          id: 4,
          logo: "mdi-email-outline",
          url: "mailto:Ofi.digitalsrl@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
.v-sheet.v-card {
  border-radius: 0px !important;
}
</style>
