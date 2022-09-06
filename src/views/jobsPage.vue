<template>
  <div class="bg-gray-50 max-w-[80rem] m-auto">
    <Header />
    <div>
      <!-- Title -->
      <div class="flex justify-end space-x-10 items-center mt-10">
        <img class="w-16" src="../assets/svg/dots.svg" alt="" />
        <h1 class="text-4xl font-bold">الوظائف</h1>
      </div>
      <div class="flex items-center justify-center mt-10">
        <div class="w-3/4 mt-5">
          <!-- Title -->
          <h1 class="text-right text-2xl">الوظائف الشاغرة</h1>
          <div>
            <JobRecent />
            <hr class="w-full mt-3" />
            <JobRecent />
            <hr class="w-full mt-3" />
            <JobRecent />
            <hr class="w-full mt-3" />
            <JobRecent />
          </div>
        </div>
        <!-- 2 -->
        <div class="w-1/4 flex flex-col space-y-5 mx-10">
          <div class="flex flex-col space-y-5">
            <div
              class="bg-white flex items-center justify-around shadow-lg rounded-lg px-3"
            >
              <img src="../assets/svg/search.svg" alt="" />
              <input placeholder="بحث" class="text-right h-14" type="text" />
            </div>
            <div
              class="bg-white flex items-center justify-around shadow-lg rounded-lg px-3"
            >
              <img src="../assets/svg/loc2.svg" alt="" />
              <input
                placeholder="بحث عن موقع"
                class="text-right h-14"
                type="text"
              />
            </div>
          </div>
          <div class="flex flex-col justify-start items-end space-y-3 mt-5">
            <h1 class="text-xl">تاريخ النشر</h1>
            <hr class="border-1 border-gray-300 w-32" />
            <div class="flex items-center justify-end space-x-5">
              <h1>آخر ساعة</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>آخر ٢٤ ساعة</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>آخر ٧ ايام</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>آخر ١٤ يوم</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>آخر ٣٠ يوم</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>الكل</h1>
              <input type="checkbox" />
            </div>
          </div>
          <div class="flex flex-col justify-start items-end space-y-3 mt-5">
            <h1 class="text-xl">نوع الوظيفة</h1>
            <hr class="border-1 border-gray-300 w-32" />
            <div class="flex items-center justify-end space-x-5">
              <h1>دوام كامل</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>دوام جزئي</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>تدريب</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>عقد مؤقت</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>متطوع</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>دراسة عمل</h1>
              <input type="checkbox" />
            </div>
          </div>
          <div class="flex flex-col justify-end items-end space-y-3 mt-5">
            <h1 class="text-xl">التخصصات</h1>
            <hr class="border-1 border-gray-300 w-32" />
            <div class="flex items-center justify-end space-x-5">
              <h1>خدمات تنظيف</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>برمجة</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>كهرباء</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>اتصلات</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>مجال طبي</h1>
              <input type="checkbox" />
            </div>
            <div class="flex items-center justify-end space-x-5">
              <h1>تسويق</h1>
              <input type="checkbox" />
            </div>
          </div>
        </div>
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
import JobRecent from "@/components/jobRecent.vue";
export default {
  name: "JobsPage",
  components: { Header, FooterMain, JobRecent },
};
</script>
