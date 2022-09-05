<template>
  <div class="bg-gray-50 max-w-[80rem] m-auto">
    <Header />
    <div>
      <!-- Title -->
      <div class="flex justify-end space-x-10 items-center mt-10">
        <img class="w-16" src="../assets/svg/dots.svg" alt="" />
        <h1 class="text-4xl font-bold">أحدث المدونات</h1>
      </div>
      <div class="mt-10 flex items-start justify-evenly">
        <!-- left -->
        <div class="flex flex-col space-y-4">
          <div class="flex items-center justify-start space-x-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div class="flex items-center justify-start space-x-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <!-- Right -->
        <div>
          <div
            class="bg-white flex items-center justify-around shadow-lg rounded-lg px-3"
          >
            <img src="../assets/svg/search.svg" alt="" />
            <input placeholder="بحث" class="text-right h-14" type="text" />
          </div>
          <div class="flex flex-col justify-end items-end space-y-3 mt-5">
            <h1 class="font-bold">التخصصات</h1>
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
import BlogCard from "@/components/BlogCard.vue";
export default {
  name: "RecentBlog",
  components: { Header, FooterMain, BlogCard },
};
</script>
