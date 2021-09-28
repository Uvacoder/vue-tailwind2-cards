<template>
  <div class="max-w-[1535px] text-black/70 flex justify-between mx-auto">

    <!-- Left Content -->
    <div class="w-[20%]  flex flex-col justify-between bg-blue-600 text-white min-h-screen max-h-full py-5">

      <Sidebar />
      
    </div>
    <!-- End Left Content -->

    <!-- Right Content -->
    <div class="w-[80%] p-5">
      <router-view></router-view>
    </div>
    <!-- End Right Content -->

  </div>
</template>

<script>
import Sidebar from '@/components/zakat/zakatadmin/Sidebar.vue'

export default {
  components: {
    Sidebar,
  }
}
</script>

<style>
.hover-opacity{
  @apply opacity-50 hover:opacity-100 duration-150;
}
</style>