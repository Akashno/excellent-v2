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
        subHeading: " A garden is never finished—it is a creation that evolves from season-to-season and year-to-year. EXCELLENT gardeners are well aware of this reality and will help you to enjoy the ephemeral nature of your landscapes.  ",
        link: "/",
      },
      bgImages: ["gardensBg.jpg", "gardensBgTwo.jpg", "gardensBgThree.jpg"],
    };
  },
};
</script>
