<template>
  <div class="relative">
    <NavBar class="absolute w-screen z-10" />
    <Main
      :bgImages="bgImages"
      :details="details"
      class="z-20"
      product="/doors"
    />
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      details: {
        heading: "Hand crafted wooden doors",
        subHeading:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore incidunt dicta et quod a amet illum doloribus, nulla sequi dolores facilis corrupti deserunt! Suscipit deserunt mollitia amet recu ",
        link: "/",
      },
      bgImages: ["doorBg.jpg", "doorBgTwo.jpg", "doorBgThree.jpg"],
    };
  },
};
</script>
