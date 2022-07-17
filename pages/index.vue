<template>
  <div class="relative">
    <NavBar class="absolute w-screen z-20" />
    <Main
      :bgImages="bgImages"
      :details="details"
      class="z-10"
      product="/interlock"
    />
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      details: {
        heading: "Paving Floors made for Indian Culture",
        subHeading:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore incidunt dicta et quod a amet illum doloribus, nulla sequi dolores facilis corrupti deserunt! Suscipit deserunt mollitia amet recu ",
        link: "/",
      },
      bgImages: [
        "interlockBg.jpg",
        "interlockBgTwo.jpg",
        "interlockBgThree.jpg",
      ],
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
