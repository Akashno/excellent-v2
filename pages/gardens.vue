<template>
  <div class="relative">
    <NavBar class="absolute w-screen z-10" />
    <Main :bgImages="bgImages" :details="details" product="/garden" />
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      details: {
        heading: "LandScape & Gardening",
        subHeading:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore incidunt dicta et quod a amet illum doloribus, nulla sequi dolores facilis corrupti deserunt! Suscipit deserunt mollitia amet recu ",
        link: "/",
      },
      bgImages: ["gardensBg.jpg", "gardensBgTwo.jpg", "gardensBgThree.jpg"],
    };
  },
};
</script>
