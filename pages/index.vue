<template>
  <div class="relative">
    <NavBar class="absolute w-screen z-20" />
    <EventDialog/>
    <Main
      :bgImages="bgImages"
      :details="details"
      class="z-10"
      product="/interlock"
    />
  </div>
</template>

<script>
import EventDialog from '../components/EventDialog.vue'
export default {
  name: "index",
  components:{
    EventDialog

  },
  data() {
    return {
      details: {
        heading: "Paving Floors made for Indian Culture",
        subHeading:
          " Striking, durable and environment friendly, Excellent pavers have emerged as a choice of aesthetic and practical element for landscapes , parking lots, drive ways and patios ",
        link: "/",
      },
      bgImages: [ "interlockBg.jpg", "interlockBgTwo.jpg", "interlockBgThree.jpg", ],
      productImages: [],
    };
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
</style>
