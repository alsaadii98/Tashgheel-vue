<template>
  <div class="w-96 m-auto">
    <div class="flex justify-between items-center mt-10">
      <img class="w-16" src="../assets/svg/dots.svg" alt="" />
      <h1 class="text-4xl font-bold">تسجيل دخول</h1>
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
      <!-- Password -->
      <div
        class="flex items-center justify-evenly space-x-5 bg-white shadow-lg w-96 h-24 rounded-xl"
      >
        <img class="" src="../assets/svg/key.svg" alt="" />
        <input
          type="password"
          class="text-right focus:outline-none outline-none h-24"
          placeholder="كلمة السر"
        />
      </div>
      <!-- Remember me -->
      <div class="flex items-center justify-between space-x-32">
        <h1 class="text-blue-600 underline">هل نسيت كلمة السر؟</h1>
        <div class="flex items-center justify-start space-x-5">
          <h1>تذكرني</h1>
          <input type="checkbox" />
        </div>
      </div>
      <button
        class="bg-gradient-to-r from-purple-400 to-violet-800 text-white w-96 rounded-lg py-3 text-white"
      >
        تسجيل الدخول
      </button>
      <!-- OR -->
      <div class="flex flex-col justify-center items-center space-y-5">
        <div class="flex justify-center items-center space-x-10">
          <hr class="border border-gray-200 w-32 rounded-xl" />
          <h1>او</h1>
          <hr class="border border-gray-200 w-32 rounded-xl" />
        </div>
        <div
          class="flex items-center justify-center space-x-5 border-2 border-violet-500 w-96 rounded-lg py-3"
        >
          <img class="w-7" src="../assets/svg/google2.svg" alt="" />
          <h1 class="text-red-600">تسجيل دخول مع كوكل</h1>
        </div>
        <div
          class="flex items-center justify-center space-x-5 border-2 border-violet-500 w-96 rounded-lg py-3"
        >
          <img class="w-7" src="../assets/svg/face2.svg" alt="" />
          <h1 class="text-blue-600">تسجيل دخول مع فيسبوك</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginContent",
};
</script>
