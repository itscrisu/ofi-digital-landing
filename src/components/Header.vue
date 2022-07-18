<template>
  <div>
    <v-app-bar app color="#080d12" hide-on-scroll>
      <v-app-bar-nav-icon
        right
        v-show="$vuetify.breakpoint.smAndDown"
        color="white"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Ofi.Digital Logo"
          class="mr-2"
          src="../assets/Ofidigital-fnegro.png"
          transition="scale-transition"
          width="90"
        />
      </div>

      <v-spacer></v-spacer>

      <v-tabs
        dark
        v-model="tab"
        right
        v-show="$vuetify.breakpoint.mdAndUp"
        slider-color="blue"
        color="white"
        class="mr-5"
      >
        <v-tab
          v-for="item in items"
          :key="item.text"
          @click="$vuetify.goTo(item.route, options)"
        >
          {{ item.text }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="black"
      dark
      fixed
      style="position: fixed"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--accent-4"
        >
          <v-list-item
            v-for="(item, index) in items"
            :key="item.text"
            @click="$vuetify.goTo(item.route, options)"
          >
            <v-list-item-title @click="tab = index">{{
              item.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      tab: null,
      items: [
        {
          text: "Inicio",
          route: "#welcome",
        },
        {
          text: "Productos",
          route: "#products",
        },
        {
          text: "Nosotros",
          route: "#about",
        },
        {
          text: "Contacto",
          route: "#contact",
        },
      ],
      group: null,
      offset: -50,
      easing: "easeInQuart",
      duration: 600,
      offsetNavbar: true,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    options() {
      return {
        offset: this.offset,
        easeInQuart: this.easing,
        duration: this.duration,
      };
    },
    goToOptions() {
      return {
        duration: 600,
        offset: 0,
        easing: "easeInQuart",
      };
    },
  },
};
</script>
