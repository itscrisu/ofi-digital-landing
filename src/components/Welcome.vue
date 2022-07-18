<template>
  <v-container fluid class="pb-0 mb-0">
    <v-row>
      <v-col class="px-0 py-0">
        <video-background
          :src="require('../../public/ipad-pro-video.mp4')"
          style="height: 90vh; width: 100vw"
        >
        </video-background>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Welcome",

  data() {
    return {
      sources: [
        {
          autoplay: true,
          objectFit: "none",
        },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  background-color: #bbb !important; 
}
</style>