<template>
  <div>
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto bg-black bg-opacity-70 fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex" @click="toggleModal()">
      <div class="relative">
            <img src="/onam.jpeg" class="mx-auto md:w-1/2 w-100" height="200px"/>
            <div class="absolute -top-2 right-72">
            <p @click="toggleModal()" class="text-xl w-8 h-8 rounded-full  flex justify-center align-middle  text-black bg-white  cursor-pointer">x</p>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "large-modal",
  data() {
    return {
      showModal: true
    }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    }
  }
}
</script>