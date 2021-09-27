<template>
  <!-- Zakat Fitrah Beras -->
    <div class="bg-white rounded-xl shadow-xl mx-40 p-5 px-10">

      <!-- Form -->
      <form class="flex space-x-5 items-end">

        <!-- Textbox nama -->
        <div class="flex flex-col space-y-1">
          <label for="nama">Nama</label>
          <input id="nama" v-model="nama" type="text"  class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150" >
          <span v-if="saveDataStatus.fail" class="text-red-500 text-xs"> {{ saveDataStatus.fail.nama }} </span>
        </div>
        <!-- End Textbox nama -->

        <!-- Textbox Jumlah Zakat -->
        <div class="flex flex-col space-y-1">
          <label for="jumlahInfaq">Jumlah Zakat </label>
          <input id="jumlahInfaq" type="number" v-model="jumlahInfaq" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg p-1.5 focus:outline-none outline-none duration-150">
          <span v-if="saveDataStatus.fail" class="text-red-500 text-xs"> {{ saveDataStatus.fail.jumlah }} </span>
        </div>
        <!-- End Textbox Jumlah Zakat -->

      </form>
      <!-- End Form -->

      <!-- Content -->
      <div class="my-5 text-center">
        <h1 class="text-lg">Anda akan berinfaq sebesar</h1>
        <h2 :class="[saveDataStatus.success ? 'text-[#1dad52]' : 'text-black']" class="text-2xl font-bold"> {{ convertToCurrency(jumlahInfaq) }} </h2>
      </div>
      <!-- End Content -->
      
      <!-- Bottom Section -->
      <div class="flex justify-between mt-10">

        <!-- Left Section -->
        <div>
          <!-- Loading Message -->
          <div v-if="saveDataStatus.loading == true">
            <p class="text-black font-semibold">Loading...</p>
          </div>
          <!-- Loading Message -->

          <!-- Fail Message -->
            <div v-if="saveDataStatus.fail">
              <p class="text-red-500 font-semibold">Data gagal disimpan</p>
            </div>
          <!-- End Fail Message -->

          <!-- Success Message -->
            <div v-if="saveDataStatus.success">
              <p class="text-black font-semibold">Data <span class="text-[#1dad52]">berhasil</span> disimpan</p>
            </div>
          <!-- Success Message -->
        </div>
        <!-- End Left Section -->

        <!-- Button -->
        <div class="space-x-5">
          <button @click="resetInput()" class="font-semibold hover:opacity-50 duration-150">Reset</button>
          <button 
            v-show="saveDataStatus.success == null"
            :disabled="!jumlahInfaq || !nama" 
            @click="saveInfaq()"
            :class="[jumlahInfaq && nama ? 'ring-[#1dad52] text-[#1dad52] hover:bg-[#1dad52] hover:text-white' : 'ring-gray-500 text-gray-500' ]" 
            class="font-semibold ring-2 p-2 px-5 rounded-xl duration-150 transition-all"
          >
          Simpan</button>
        </div>
        <!-- End Button -->

      </div>
      <!-- End Bottom Section -->

    </div>
  <!-- End Zakat Fitrah Beras -->
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      nama: '',
      jumlahInfaq: '',
      saveDataStatus: {
        loading: false,
        success: null,
        fail: null,
      }
    }
  },

  methods: {
    convertToCurrency(params){
      return  new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR'} )
              .format(params)
    },

    resetInput(){
      this.nama = ''
      this.jumlahInfaq = ''
      this.saveDataStatus = {loading: false, success: null, fail: null}
    },

    saveInfaq(){
      // Save With Axios
      axios.post('http://127.0.0.1:8000/api/zakat/infaq', {
        nama: this.nama,
        jumlah: this.jumlahInfaq,
      })
      
      .then( () => {
        this.saveDataStatus.loading = false
        this.saveDataStatus.success = true
      })

      .catch( (err) => {
        this.saveDataStatus.loading = false
        // Form Validation nama
        return this.saveDataStatus.fail = err.response.data.errors
      })
      // End Save With Axios
    }
  },

}
</script>