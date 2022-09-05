<template>
  <nav class="flex text-gray-500 justify-between items-center my-5">
    <div class="flex items-center space-x-5">
      <router-link to="/login"><BTNFill /></router-link>
      <router-link to="/signup"><BTNStrock /></router-link>
    </div>
    <ul class="flex justify-center items-center space-x-5 text-xl">
      <li
        class="hover:text-violet-500 cursor-pointer hover:transition-all duration-500 outline-none"
      >
        <router-link to="/">الرئسية</router-link>
      </li>
      <li
        class="hover:text-violet-500 cursor-pointer hover:transition-all duration-500 outline-none"
      >
        <router-link to="/blogs">المدونة</router-link>
      </li>
      <li
        class="hover:text-violet-500 cursor-pointer hover:transition-all duration-500 outline-none"
      >
        الوظائف
      </li>
    </ul>
    <div>
      <img src="../assets/Logo.png" alt="Logo" />
    </div>
  </nav>
</template>
<script>
import BTNFill from "./BTNFill.vue";
import BTNStrock from "./BTNStrock.vue";

export default {
  name: "HeaderOne",
  components: { BTNFill, BTNStrock },
};
</script>
<style scoped></style>
