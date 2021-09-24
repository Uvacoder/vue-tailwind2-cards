<template>

  <!-- Primary Switcher -->
    <section class="flex justify-center">
      <div class="text-white shadow-xl ring-2 ring-[#1dad52] rounded-xl">
        <button @click="updatePrimaryTab('fitrah'); updateSecondaryTab('beras')" :class="[primaryTab == 'fitrah' ? 'text-white bg-[#1dad52]' : 'bg-white text-[#1dad52]' ]" class="py-2 px-5 duration-200 font-semibold rounded-l-xl">Zakat Fitrah</button>
        <button @click="updatePrimaryTab('mal'); updateSecondaryTab('penghasilan')" :class="[primaryTab == 'mal' ? 'text-white bg-[#1dad52]' : 'bg-white text-[#1dad52]' ]" class="py-2 px-5 duration-200 font-semibold">Zakat Mal</button>
        <button @click="updatePrimaryTab('infaq'); updateSecondaryTab('')" :class="[primaryTab == 'infaq' ? 'text-white bg-[#1dad52]' : 'bg-white text-[#1dad52]' ]" class="py-2 px-5 duration-200 font-semibold rounded-r-xl">Infaq</button>
      </div>
    </section>
    <!-- End Primary Switcher -->

    <!-- Secondary Switcher -->
    <section class="flex justify-center mt-5">
      
      <!-- Fitrah Secondary Tab -->
      <div v-show="primaryTab == 'fitrah'" class="text-white shadow-xl ring-2 ring-[#1dad52] rounded-xl">
        <button @click="updateSecondaryTab('beras')" :class="[secondaryTab == 'beras' ? 'text-white bg-[#1dad52]' : 'bg-white text-[#1dad52]' ]" class="py-2 px-5 duration-200 font-semibold rounded-l-xl">Beras</button>
        <button @click="updateSecondaryTab('uang')" :class="[secondaryTab == 'uang' ? 'text-white bg-[#1dad52]' : 'bg-white text-[#1dad52]' ]" class="py-2 px-5 duration-200 font-semibold rounded-r-xl">Uang</button>
      </div>
      <!-- End Fitrah Secondary Tab -->

      <!-- Mal Secondary Tab -->
      <div v-show="primaryTab == 'mal'" class="text-white shadow-xl ring-2 ring-[#1dad52] rounded-xl">
        <button @click="updateSecondaryTab('penghasilan')" :class="[secondaryTab == 'penghasilan' ? 'text-white bg-[#1dad52]' : 'bg-white text-[#1dad52]' ]" class="py-2 px-5 duration-200 font-semibold rounded-l-xl">Penghasilan</button>
        <button @click="updateSecondaryTab('emas')" :class="[secondaryTab == 'emas' ? 'text-white bg-[#1dad52]' : 'bg-white text-[#1dad52]' ]" class="py-2 px-5 duration-200 font-semibold">Emas</button>
        <button @click="updateSecondaryTab('sapi')" :class="[secondaryTab == 'sapi' ? 'text-white bg-[#1dad52]' : 'bg-white text-[#1dad52]' ]" class="py-2 px-5 duration-200 font-semibold">Sapi</button>
        <button @click="updateSecondaryTab('kambing')" :class="[secondaryTab == 'kambing' ? 'text-white bg-[#1dad52]' : 'bg-white text-[#1dad52]' ]" class="py-2 px-5 duration-200 font-semibold">Kambing</button>
        <button @click="updateSecondaryTab('pertanian')" :class="[secondaryTab == 'pertanian' ? 'text-white bg-[#1dad52]' : 'bg-white text-[#1dad52]' ]" class="py-2 px-5 duration-200 font-semibold rounded-r-xl">Pertanian</button>
      </div>
      <!-- End Mal Secondary Tab -->

    </section>
    <!-- End Secondary Switcher -->

</template>

<script>
import {useRoute} from 'vue-router'

export default {
  data() {
    return {
      primaryTab: useRoute().query.tab || 'fitrah',
      secondaryTab: useRoute().query.tab || 'beras',
    }
  },

  methods: {
    updatePrimaryTab (primary) {
      this.$emit('update-primary-tab', primary)
      this.primaryTab = primary
    },

    updateSecondaryTab (secondary) {
      this.$emit('update-secondary-tab', secondary)
      this.secondaryTab = secondary
    }
  },

  emits: ['update-primary-tab', 'update-secondary-tab'],

}
</script>

<style>

</style>