<template>
  <div class="bg-gray-50 max-w-[80rem] m-auto">
    <Header />
    <LoginContent />
  </div>
  <div class="relative">
    <img src="../assets/svg/dots.svg" class="absolute -top-12 left-64" alt="" />
    <div class="bg-gray-100 pt-8 mt-20">
      <div class="max-w-[80rem] m-auto">
        <FooterMain />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LoginContent from "@/components/LoginContent.vue";
import FooterMain from "@/components/FooterMain.vue";
export default {
  name: "LoginPage",
  components: { Header, LoginContent, FooterMain },
};
</script>
