<template>
  <v-app>
    <Header />
    <v-main>
      <Welcome id="welcome" />
      <Products id="products" />
      <About id="about" />
      <WhatsappButton />
    </v-main>
    <Footer id="contact" />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

export default {
  name: "App",
  components: {
    Header,
    Welcome,
    Products,
    About,
    Footer,
    WhatsappButton,
  },
  data() {
    return {};
  },
};
</script>
