<template>

  <header class="max-w-[1400px] mx-auto">
    <h1 class="text-[#22C55E] text-transparent text-center text-5xl font-bold p-10">
      Masjid Al-Istiqomah
    </h1>
  </header>

  <main class="relative max-w-[1400px] mx-auto">
    <div class="absolute z-10">
      <div class="mx-20 grid grid-cols-3 gap-10 justify-items-center rounded-3xl">
        <router-link to="zakatCalculate" v-for="loop in 5" :key="loop">
          <img src="../../assets/images/myponyasia/landscape3.png" class="hover:scale-110 hover:shadow-xl transition-all rounded-xl">
        </router-link>
      </div>
    </div>

  </main>

  <footer class="relative max-w-[1400px] mx-auto mt-[212px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#22C55E" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,90.7C384,75,480,53,576,80C672,107,768,181,864,181.3C960,181,1056,107,1152,96C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>

    <div class="bg-[#22C55E] absolute"></div>
  </footer>

</template>

<script>
export default {

}
</script>

<style>
.primary {
  background-color: #22C55E;
}
</style>