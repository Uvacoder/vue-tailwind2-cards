<template>

  <header class="max-w-[1400px] mx-auto relative">
    <h1 class="bg-clip-text bg-[#22C55E] text-transparent text-center text-5xl font-bold p-10">
      <router-link to="zakathome">
        Masjid Al-Istiqomah
      </router-link>
    </h1>

    <!--Time -->
    <div class="absolute top-5 left-5">
      <h1 class="text-2xl font-extrabold text-[#22C55E]">{{ time }}</h1>
    </div>
    <!--End Time -->

  </header>

  <main class="relative max-w-[1400px] mx-auto min-h-[50vh] max-h-full">

    <!-- Primary Switcher -->
    <section class="flex justify-center">
      <div class="text-white shadow-xl ring-2 ring-[#22C55E] rounded-xl">
        <button @click="primaryTab = 'fitrah'; secondaryTab = 'beras'" :class="[primaryTab == 'fitrah' ? 'text-white bg-[#22C55E]' : 'bg-white text-[#22C55E]' ]" class="py-2 px-5 duration-200 font-semibold rounded-l-xl">Zakat Fitrah</button>
        <button @click="primaryTab = 'mal'; secondaryTab = 'penghasilan'" :class="[primaryTab == 'mal' ? 'text-white bg-[#22C55E]' : 'bg-white text-[#22C55E]' ]" class="py-2 px-5 duration-200 font-semibold">Zakat Mal</button>
        <button @click="primaryTab = 'infaq'" :class="[primaryTab == 'infaq' ? 'text-white bg-[#22C55E]' : 'bg-white text-[#22C55E]' ]" class="py-2 px-5 duration-200 font-semibold rounded-r-xl">Infaq</button>
      </div>
    </section>
    <!-- End Primary Switcher -->

    <!-- Secondary Switcher -->
    <section class="flex justify-center mt-5">
      
      <!-- Fitrah Secondary Tab -->
      <div v-show="primaryTab == 'fitrah'" class="text-white shadow-xl ring-2 ring-[#22C55E] rounded-xl">
        <button @click="secondaryTab = 'beras'" :class="[secondaryTab == 'beras' ? 'text-white bg-[#22C55E]' : 'bg-white text-[#22C55E]' ]" class="py-2 px-5 duration-200 font-semibold rounded-l-xl">Beras</button>
        <button @click="secondaryTab = 'uang'" :class="[secondaryTab == 'uang' ? 'text-white bg-[#22C55E]' : 'bg-white text-[#22C55E]' ]" class="py-2 px-5 duration-200 font-semibold rounded-r-xl">Uang</button>
      </div>
      <!-- End Fitrah Secondary Tab -->

      <!-- Mal Secondary Tab -->
      <div v-show="primaryTab == 'mal'" class="text-white shadow-xl ring-2 ring-[#22C55E] rounded-xl">
        <button @click="secondaryTab = 'penghasilan'" :class="[secondaryTab == 'penghasilan' ? 'text-white bg-[#22C55E]' : 'bg-white text-[#22C55E]' ]" class="py-2 px-5 duration-200 font-semibold rounded-l-xl">Penghasilan</button>
        <button @click="secondaryTab = 'emas'" :class="[secondaryTab == 'emas' ? 'text-white bg-[#22C55E]' : 'bg-white text-[#22C55E]' ]" class="py-2 px-5 duration-200 font-semibold">Emas</button>
        <button @click="secondaryTab = 'sapi'" :class="[secondaryTab == 'sapi' ? 'text-white bg-[#22C55E]' : 'bg-white text-[#22C55E]' ]" class="py-2 px-5 duration-200 font-semibold">Sapi</button>
        <button @click="secondaryTab = 'kambing'" :class="[secondaryTab == 'kambing' ? 'text-white bg-[#22C55E]' : 'bg-white text-[#22C55E]' ]" class="py-2 px-5 duration-200 font-semibold">Kambing</button>
        <button @click="secondaryTab = 'unggas'" :class="[secondaryTab == 'unggas' ? 'text-white bg-[#22C55E]' : 'bg-white text-[#22C55E]' ]" class="py-2 px-5 duration-200 font-semibold">Unggas</button>
        <button @click="secondaryTab = 'dagangan'" :class="[secondaryTab == 'dagangan' ? 'text-white bg-[#22C55E]' : 'bg-white text-[#22C55E]' ]" class="py-2 px-5 duration-200 font-semibold">Dagangan</button>
        <button @click="secondaryTab = 'pertanian'" :class="[secondaryTab == 'pertanian' ? 'text-white bg-[#22C55E]' : 'bg-white text-[#22C55E]' ]" class="py-2 px-5 duration-200 font-semibold rounded-r-xl">Pertanian</button>
      </div>
      <!-- End Mal Secondary Tab -->

    </section>
    <!-- End Secondary Switcher -->

    <!-- Calculate Section -->
    <section class="mt-5 px-20 w-full">

      <!-- Zakat Fitrah Beras -->
      <div v-show="primaryTab == 'fitrah' && secondaryTab == 'beras'" class="bg-white rounded-xl shadow-xl mx-40 p-5 px-10">

        <!-- Content -->
        <h1>Nama Muzaki</h1>
        <div class="flex space-x-5">
           <input v-model="pezakatTemp" type="text" class="ring-2 ring-[#22C55E] rounded-lg px-3 p-1.5 focus:outline-none" placeholder="30000">
           <button @click="addPezakat(pezakatTemp, tipeZakat)" type="button" class="font-semibold text-white bg-[#22C55E] p-2 px-5 rounded-xl duration-150">Tambah</button>
           <form class="space-x-3">
              <input type="radio" id="beras" value="beras" v-model="tipeZakat">
              <label for="beras">Beras</label>
              <input type="radio" id="uang" value="uang" v-model="tipeZakat">
              <label for="uang">Uang</label>
           </form>
        </div>
        <!-- End Content -->
        
        <!-- Table -->
        <table class="table-auto w-full my-3">
          
          <thead>
            <tr class="text-white bg-[#22C55E]">
              <td>No</td>
              <td>Nama</td>
              <td>Jenis Zakat</td>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(data, index) in pezakat" :key="index">
              <td> {{ index + 1 }} </td>
              <td> {{ data.pezakat }} </td>
              <td> {{ data.tipeZakat }} </td>
            </tr>
            <tr>
              <td></td>
              <td>Total</td>
              <td> {{ pezakat.leng }} </td>
            </tr>
          </tbody>

        </table>
        <!-- End Table -->

        <!-- Button -->
        <div class="flex justify-end space-x-5">
          <button class="font-semibold hover:text-[#22C55E] duration-150">Reset</button>
          <button class="font-semibold ring-2 ring-[#22C55E] text-[#22C55E] hover:text-white hover:bg-[#22C55E] p-2 px-5 rounded-xl duration-150">Simpan</button>
        </div>
        <!-- Button -->

      </div>
      <!-- End Zakat Fitrah Beras -->

      <!-- Template -->
      <!-- <div  class="bg-white rounded-xl h-96 shadow-xl">
         {{ primaryTab }} {{ secondaryTab }}
      </div> -->
      <!-- End Template -->
    </section>
    <!-- End Calculate Section -->

  </main>

  <footer class="max-w-[1400px] mx-auto mt-[-110px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#22C55E" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,90.7C384,75,480,53,576,80C672,107,768,181,864,181.3C960,181,1056,107,1152,96C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>

    <div class="bg-[#22C55E] absolute"></div>
  </footer>

</template>

<script>
import {useRoute} from 'vue-router'

export default {
  data() {
    return {
      primaryTab: useRoute().query.tab || 'fitrah',
      secondaryTab: useRoute().query.tab || 'beras',
      interval: null,
      time: null,

      pezakatTemp: '',
      tipeZakat: '',
      pezakat: [],
    }
  },

  methods: {
    addPezakat (name, type) {
      // console.log(data);
      this.pezakat.push({
                          'pezakat': name,
                          'tipeZakat': type,
                        })
      this.pezakatTemp = ''
    },
  },

  beforeUnmount() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Navigator.language = system locale.
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    // 1000 milisec = 1 sec
    }, 1000)
  }

}
</script>

<style>
.primary {
  background-color: #22C55E;
}
</style>