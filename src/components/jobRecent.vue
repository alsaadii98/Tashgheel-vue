<template>
  <div class="flex justify-between items-center mt-10">
    <button
      class="border-2 text-gray-500 border-violet-500 px-7 py-3 rounded-2xl transform-all hover:scale-110 duration-300 ease-in"
    >
      المزيد
    </button>
    <div class="flex items-center justify-end">
      <div class="flex flex-col items-end justify-start space-y-5 mr-5">
        <div class="flex space-x-4">
          <h1 class="text-xl">مطور مواقع</h1>
          <img src="../assets/svg/bag1.svg" alt="" />
        </div>
        <div class="flex space-x-4">
          <h1>افق السماء للاتصلات</h1>
          <img src="../assets/svg/bu.svg" alt="" />
        </div>
        <div class="flex justify-end space-x-10">
          <div class="flex justify-end space-x-4">
            <h1>دوام كامل</h1>
            <img src="../assets/svg/clock.svg" alt="" />
          </div>
          <div class="flex space-x-4">
            <h1>بغداد</h1>
            <img src="../assets/svg/loc2.svg" alt="" />
          </div>
        </div>
      </div>
      <img src="../assets/jobPage.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "JobRecent",
};
</script>
