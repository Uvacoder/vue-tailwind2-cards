<template>

  <Header />

  <main class="relative max-w-[1400px] mx-auto min-h-[50vh] max-h-full">

    <Switcher
      @update-primary-tab = 'getPrimaryTab'
      @update-secondary-tab = 'getSecondaryTab'
    />

    <!-- Calculate Section -->
    <section class="mt-5 px-20 w-full">
      
      <div v-show="primaryTab == 'fitrah'" >
        <ZakatFitrah 
          :secondaryTabProp = secondaryTab 
        />
      </div>

      <div v-show="primaryTab == 'mal'" >
        <ZakatMal 
          :secondaryTabProp = secondaryTab  
        />
      </div>

      <!-- Template -->
      <!-- <div  class="bg-white rounded-xl h-96 shadow-xl">
         {{ primaryTab }} {{ secondaryTab }}
      </div> -->
      <!-- End Template -->

    </section>
    <!-- End Calculate Section -->

  </main>

  <Footer />

</template>

<script>
import Header from '@/components/zakat/ZakatHeader.vue'
import Footer from '@/components/zakat/ZakatFooter.vue'
import Switcher from '@/components/zakat/Switcher.vue'

import ZakatFitrah from '@/components/zakat/Fitrah.vue'
import ZakatMal from '@/components/zakat/Mal.vue'

export default {
  data() {
    return {
      primaryTab: 'fitrah',
      secondaryTab: 'beras',
    }
  },

  components: {
    Header,
    Footer,
    Switcher,
    ZakatFitrah,
    ZakatMal,
  },

  methods: {

    getPrimaryTab (params){
      this.primaryTab = params
    },

    getSecondaryTab (params){
      this.secondaryTab = params
    },
  },

}
</script>

<style lang="css">

/* To Remove number +- in number input field */
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  
</style>