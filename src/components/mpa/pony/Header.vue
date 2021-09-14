<template>
  <header class="">
      <div class="flex justify-between bg-trueGray-900 p-4 rounded-b shadow-xl max-w-[90rem] mx-auto">
        <router-link to="/myponyasia/pony/home">
          <img class="w-40" src="@/assets/images/myponyasia/logo-myponyasia.png" alt="" />
        </router-link>

        <!-- Loading State button -->
        <div class="mr-0 md:mr-10 flex space-x-3">
          <button @click="$emit('loading-state')" v-text="LoadingStateProps ? 'Normal State' : 'Loading State'" class="bg-trueGray-600 p-1 rounded-lg font-semibold px-3 hover:bg-blue-700 duration-200"></button>
        </div>
        <!-- End Loading State button -->
      </div>

  </header>
    <!-- End Navbar -->
</template>

<script>
export default {

  props:{
    LoadingStateProps: Boolean
  },

  emits: ['loading-state'],
}
</script>