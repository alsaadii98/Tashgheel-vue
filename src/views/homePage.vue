<template>
  <div class="max-w-[80rem] m-auto">
    <HeaderOne />
  </div>
  <MainCo />
</template>

<script>
import HeaderOne from "@/components/Header.vue";
import MainCo from "../components/MainCo";

export default {
  name: "homePage",

  components: { HeaderOne, MainCo },
};
</script>
