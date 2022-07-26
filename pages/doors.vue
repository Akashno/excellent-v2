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
        subHeading: " Our commercial and residential interior and exterior doors are tailored to your design and lifestyle and are made to optimize your space. At excellent , we display doors that range in size, operation, and style ",
        link: "/",
      },
      bgImages: ["doorBg.jpg", "doorBgTwo.jpg", "doorBgThree.jpg"],
    };
  },
};
</script>
