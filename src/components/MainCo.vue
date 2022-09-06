<template>
  <div>
    <div
      class="max-w-[80rem] m-auto flex justify-around items-center text-right"
    >
      <div>
        <img class="w-[50rem]" src="../assets/Main.png" alt="Main" />
      </div>
      <div class="flex flex-col space-y-5">
        <h1
          class="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-violet-800"
        >
          نحن هنا لتسهيل
        </h1>
        <h2 class="text-4xl">الامور عليك</h2>
        <h3 class="text-3xl">سواد كنت تبحث عن وظيفة <br />او عن موهبين</h3>
      </div>
    </div>
    <div
      class="max-w-[80rem] m-auto flex justify-around items-center h-24 rounded-3xl bg-white shadow-lg"
    >
      <button
        class="bg-gradient-to-r from-purple-400 to-violet-800 text-white px-10 py-5 rounded-2xl shadow-lg"
      >
        بحث
      </button>
      <div class="flex justify-center items-center space-x-2">
        <!-- <img class="w-7" src="../assets/svg/down.svg" alt="" /> -->
        <!-- <div class="relative inline-block text-left">
          <div>
            <button
              @click="hideAndShowSelected()"
              type="button"
              class="inline-flex items-center w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              المحافظة
            </button>
          </div>
          <div
            v-if="value1"
            id="#hidden"
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1 text-right" role="none">
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
                >بغداد</a
              >
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
                >كربلاء</a
              >
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
                >النجف</a
              >
            </div>
          </div>
        </div> -->
        <select
          class="h-24 focus:outline-none outline-none"
          name="city_id"
          @change="onChange($event)"
        >
          <option value="city">المحافظة</option>
          <option value="baghdad">بغداد</option>
          <option>النجف</option>
          <option>كربلاء</option>
          <option>البصرة</option>
          <option>اربيل</option>
          <option>سليمانية</option>
          <option>كركوك</option>
          <option>الكوت</option>
          <option>العمارة</option>
        </select>
        <img class="mx-2 w-7" src="../assets/svg/loc.svg" alt="" />
      </div>
      <div class="flex justify-center items-center space-x-2">
        <input
          class="w-56 h-24 outline-none focus:outline-none text-right"
          placeholder="المسمى الوظيفي"
        />
        <img class="w-7" src="../assets/svg/bag.svg" alt="" />
      </div>
    </div>
    <!-- steps -->
    <div class="max-w-[80rem] m-auto mt-20 flex justify-around items-center">
      <img class="w-[40rem]" src="../assets/steps.png" alt="" />
      <div class="relative">
        <img
          class="absolute bottom-20 right-44"
          src="../assets/svg/dots.svg"
          alt=""
        />
        <h1 class="leading-relaxed text-5xl font-bold text-right">
          خطوات<br />
          يجب اتباعها
        </h1>
      </div>
    </div>
    <!-- newest jobs in iraq -->
    <div class="relative">
      <img
        src="../assets/svg/dots.svg"
        class="absolute -top-12 left-64"
        alt=""
      />
      <div class="bg-gray-100 p-14 mt-20">
        <div class="max-w-[80rem] m-auto text-right space-y-5">
          <h1 class="text-2xl font-bold">أحدث الوظائف في العراق</h1>
          <p>
            ابحث عن الوظائف باستخدام تشغيل، محرك البحث الأكثر شمولاً للوظائف.
          </p>
          <!-- Cards -->
          <div class="flex justify-center items-center space-x-5">
            <!-- hhhhh -->
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
          <!-- Cards -->
          <div class="flex justify-center items-center space-x-5">
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
          <router-link to="/jobs"><ShowAllBtn /></router-link>
        </div>
      </div>
    </div>
    <!-- Newest blogs -->
    <div class="text-right max-w-[80rem] m-auto mt-20">
      <div class="flex items-center justify-center space-x-5">
        <img class="w-14 mb-2" src="../assets/svg/dots.svg" alt="" />
        <h1 class="text-3xl font-bold">أحدث المدونات</h1>
      </div>
      <!-- BlogCard -->
      <div class="flex justify-center items-center space-x-5 mt-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <router-link to="/blogs"><ShowAllBtn /></router-link>
    </div>
    <!-- max-w-[80rem] m-auto mt-20 -->

    <!-- Training Centers -->
    <div class="relative">
      <img
        src="../assets/svg/dots.svg"
        class="absolute -top-12 left-64"
        alt=""
      />
      <div class="bg-gray-100 p-24 mt-20">
        <div class="text-right flex flex-col space-y-3 max-w-[80rem] m-auto">
          <h1 class="text-2xl font-bold">مراكز التدريب و التطوير</h1>
          <p>
            تعمل تشغيل على تكوين شراكة متبادلة مع مراكز التدريب و التطوير و
            التركيز على الدورات تساهم في تطوير سوق العمل.
          </p>
          <div class="flex items-center justify-center space-x-10">
            <img src="../assets/image5.png" alt="" />
            <img src="../assets/image4.png" alt="" />
            <img src="../assets/image2.png" alt="" />
            <img src="../assets/image3.png" alt="" />
            <img src="../assets/image6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <img
        src="../assets/svg/dots.svg"
        class="absolute -top-12 left-64"
        alt=""
      />
      <div class="bg-gray-100 pt-8 mt-20">
        <div class="max-w-[80rem] m-auto">
          <FooterMain />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BlogCard from "./BlogCard.vue";
import ShowAllBtn from "./ShowAllBtn";
import JobCard from "./JobCard.vue";
import FooterMain from "./FooterMain.vue";
export default {
  name: "MainCo",
  components: { BlogCard, ShowAllBtn, JobCard, FooterMain },
  data() {
    return {
      value1: false,
    };
  },
  methods: {
    hideAndShowSelected() {
      if (this.value1 == true) {
        this.value1 = false;
      } else {
        this.value1 = true;
      }
    },
  },
};
</script>
