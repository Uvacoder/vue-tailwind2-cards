<template>

  <Header />

  <main class="relative max-w-[1400px] mx-auto min-h-[50vh] max-h-full">
    <div class="absolute z-10">
      <div class="mx-20 grid grid-cols-3 gap-10 justify-items-center rounded-3xl">
        <router-link to="zakatCalculate" v-for="loop in 5" :key="loop">
          <img src="../../assets/images/myponyasia/landscape3.png" class="hover:scale-110 hover:shadow-xl transition-all rounded-xl">
        </router-link>
      </div>
    </div>
  </main>

  <Footer />

</template>

<script>
import Header from '@/components/zakat/ZakatHeader.vue'
import Footer from '@/components/zakat/ZakatFooter.vue'

export default {
  components: {
    Header,
    Footer,
  }
}

</script>