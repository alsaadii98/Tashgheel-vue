<template>
  <div class="bg-gray-50 max-w-[80rem] m-auto">
    <Header />
    <div class="w-96 m-auto">
      <div class="flex justify-between items-center mt-10">
        <img class="w-16" src="../assets/svg/dots.svg" alt="" />
        <h1 class="text-4xl font-bold">تسجيل دخول</h1>
      </div>
      <!-- inputs -->
      <div class="flex flex-col justify-center space-y-5">
        <div class="flex flex-col justify-center items-center space-y-5 mt-10">
          <!-- email -->
          <div
            class="flex items-center justify-evenly space-x-5 bg-white shadow-lg w-96 h-24 rounded-xl"
          >
            <img class="" src="../assets/svg/user.svg" alt="" />
            <input
              class="text-right focus:outline-none outline-none h-24"
              placeholder="الاسم الكامل"
            />
          </div>
        </div>
        <!-- inputs -->
        <div class="flex flex-col justify-center items-center space-y-5 mt-10">
          <!-- email -->
          <div
            class="flex items-center justify-evenly space-x-5 bg-white shadow-lg w-96 h-24 rounded-xl"
          >
            <img class="" src="../assets/svg/mail.svg" alt="" />
            <input
              class="text-right focus:outline-none outline-none h-24"
              placeholder="البريد الالكتروني"
            />
          </div>
        </div>
        <!-- Password -->
        <div
          class="flex items-center justify-evenly space-x-5 bg-white shadow-lg w-96 h-24 rounded-xl"
        >
          <img class="" src="../assets/svg/key.svg" alt="" />
          <input
            type="password"
            class="text-right focus:outline-none outline-none"
            placeholder="كلمة السر"
          />
        </div>
        <div
          class="flex items-center justify-evenly space-x-5 bg-white shadow-lg w-96 h-24 rounded-xl"
        >
          <img class="" src="../assets/svg/phone2.svg" alt="" />
          <input
            type="text"
            class="text-right focus:outline-none outline-none"
            placeholder="رقم الهاتف"
          />
        </div>
        <button
          class="bg-gradient-to-r from-purple-400 to-violet-800 text-white w-96 rounded-lg py-3 text-white"
        >
          تسجيل
        </button>
      </div>
    </div>
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
import FooterMain from "@/components/FooterMain.vue";
export default {
  name: "CreateAcc",
  components: { Header, FooterMain },
};
</script>
