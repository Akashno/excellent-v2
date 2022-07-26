<!-- Please remove this file from your project -->
<template>
  <div
    class="flex flex-wrap justify-center md:justify-between items-center px-4 md:px-10 py-4 mx-auto bg-primary"
  >
    <nuxt-link to="/">
      <img class="h-10 logo" src="/logo.png" alt="" />
    </nuxt-link>
    <div class="space-x-10  flex flex-wrap text-white text-xs mt-4 mb-2 md:my-0">
      <nuxt-link to="/">Interlock</nuxt-link>
      <nuxt-link to="/doors">Doors</nuxt-link>
      <nuxt-link to="/gardens">Gardening</nuxt-link>
    
      <a href="https://api.whatsapp.com/send?phone=919400327227&text=Hey">
        <span class="px-3 py-1 rounded-full bg-white text-black">
          Contact us
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
