<template>
  <!-- Navbar -->
      <div class="flex justify-between bg-trueGray-900 p-4 rounded-b shadow-xl">
        <div>
          <a href="/myAnimeAsia/homepage">
            <img class="w-40" src="../../assets/images/myponyasia/logo-myponyasia.png" alt="" />
          </a>
        </div>
        <div class="mr-0 md:mr-10">
          <button @click="$emit('loading-state')" v-text="LoadingStateProps ? 'Normal State' : 'Loading State'" class="bg-trueGray-600 p-1 rounded-lg font-semibold px-3 hover:bg-blue-700 duration-200"></button>
        </div>
      </div>
    <!-- End Navbar -->
</template>

<script>
export default {
  props:{
    LoadingStateProps: Boolean
  },

  emits: ['loading-state']
}
</script>