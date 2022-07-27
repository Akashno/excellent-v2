<template>
  <div>
    <div
      class="backgroundImage min-h-screen mx-auto grid md:grid-cols-12 grid-cols-1"
      :style="`background-image: url('static/${bgImage}');background-repeat;no-repeat;background-size:cover;`"


    >
    <img v-show="false" :src="`static/${tempBgImage}`">
      <div
        class="col-span-5 bg-primary text-white text-5xl flex justify-center items-center pt-36 md:pl-10 cover"
        style="background-color: rgba(68, 68, 66, 0.75)"
      >
        <div class="w-4/5 leading-snug text-center md:text-left box">
          {{ details.heading }}
          <p class="text-xs mt-10 leading-loose">{{ details.subHeading }}</p>
          <button
            v-if="hasImages"
            class="outline rounded-xs text-xs px-10 py-5 mt-10 mb-10"
            @click="onExplore()"
          >
            Explore
          </button>
          <button
            v-else
            class="bg-white text-black rounded-xs text-xs px-10 py-5 mt-10 mb-10 cursor-auto"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap py-36 justify-center gap-10"
      ref="images"
      v-if="hasImages"
    >
      <div v-for="(image, index) in productImages" :key="index" class="card">
        <img class="w-72 h-72" :src="image" :alt="index" />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      tempBgImage:null,
      bgImage: null,
      productImages: [],
    };
  },
  props: {
    details: {
      type: Object,
    },
    bgImages: {
      type: Array,
    },
    product: {
      type: String,
    },
  },

  computed: {
    hasImages() {
      return this.productImages.length;
    },
  },
  mounted() {
    gsap.set(".box", { opacity: 0, x: "-100px" });
    gsap.to(".box", { opacity: 1, duration: 1, x: "0px" });
  },
  methods: {
    onExplore() {
      this.$refs.images.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },

    setImage(i) {
      this.bgImage = this.bgImages[i];
    },
  },
  created() {
    this.tempBgImage = this.bgImages[0]
    setTimeout(()=>{
    this.tempBgImage = this.bgImages[1]
    },10)

    setTimeout(()=>{
    this.tempBgImage = this.bgImages[2]
    },10)

    const setProducts = (url) => {
      this.productImages.push(url);
    };
    const ref = this.$fire.storage.ref();
    ref
      .child(this.product)
      .listAll()
      .then(function (result) {
        result.items.forEach(function (imageRef) {
          imageRef.getDownloadURL().then((url) => {
            setProducts(url);
          });
        });
      });
    //
    this.setImage(0)
    let i = 1
    setInterval(()=>{
      if(i<=2){
        this.setImage(i)
        i++
      } else{
        this.setImage(0)
        i = 0
      }
    },3000)

  },
};
</script>

<style>
.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
