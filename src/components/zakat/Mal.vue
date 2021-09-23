<template>
  <div class="bg-white rounded-xl shadow-xl mx-40 p-5 px-10">
    
    <!-- Zakat Mal Penghasilan -->
    <div v-show="secondaryTabProp == 'penghasilan'" class="">
      <div class="flex justify-between space-x-10">
        
        <!-- Left Content -->
        <div class="w-1/2 space-y-4">
          
          <div class="flex flex-col space-y-1">
            <label for="nama">Nama Muzaki</label>
            <input v-model="nama" type="text" id="nama" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150">
          </div>

          <div class="flex flex-col space-y-1">
            <label for="penghasilan">Penghasilan per bulan</label>
            <input v-model="penghasilan" type="number" id="penghasilan" :class="[(isNaN(penghasilan)) ? 'ring-red-500' : 'ring-trueGray-300']" class="ring-2  focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150" placeholder="0">
          </div>

          <div class="flex flex-col space-y-1">
            <label for="keperluan">Keperluan per bulan</label>
            <input v-model="keperluan" type="number" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150" placeholder="0">
          </div>

          <div class="flex flex-col space-y-1">
            <label for="hutang">Hutang</label>
            <input v-model="hutang" type="number" id="hutang" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150" placeholder="0">
          </div>

        </div>
        <!-- End Left Content -->

        <!-- Right Content -->
        <div class="w-1/2 flex flex-col justify-center items-center">
          <h2 class="">Total Zakat yang perlu dibayar</h2>
          <h3 class="font-semibold text-lg"> {{ sumZakatPenghasilan }} </h3>
        </div>
        <!-- End Right Content -->

      </div>

      <!-- Button -->
      <div class="flex justify-end space-x-5 mt-10">
        <button  class="font-semibold hover:opacity-50 duration-150">Reset</button>
        <button class="font-semibold ring-2 ring-[#1dad52] text-[#1dad52] hover:text-white hover:bg-[#1dad52] p-2 px-5 rounded-xl duration-150">Simpan</button>
      </div>
      <!-- Button -->

    </div>
    <!-- End Zakat Mal Penghasilan -->

    <!-- Zakat Mal Emas -->
    <div v-show="secondaryTabProp == 'emas'" class="">
      {{ secondaryTabProp }}
    </div>
    <!-- End Zakat Mal Emas -->

    <!-- Zakat Mal Sapi -->
    <div v-show="secondaryTabProp == 'sapi'" class="">
      {{ secondaryTabProp }}
    </div>
    <!-- End Zakat Mal Sapi -->

    <!-- Zakat Mal Kambing -->
    <div v-show="secondaryTabProp == 'kambing'" class="">
      {{ secondaryTabProp }}
    </div>
    <!-- End Zakat Mal Kambing -->

    <!-- Zakat Mal Unggas -->
    <div v-show="secondaryTabProp == 'unggas'" class="">
      {{ secondaryTabProp }}
    </div>
    <!-- End Zakat Mal Unggas -->
    
    <!-- Zakat Mal Dagangan -->
    <div v-show="secondaryTabProp == 'dagangan'" class="">
      {{ secondaryTabProp }}
    </div>
    <!-- End Zakat Mal Dagangan -->

    <!-- Zakat Mal Pertanian -->
    <div v-show="secondaryTabProp == 'pertanian'" class="">
      {{ secondaryTabProp }}
    </div>
    <!-- End Zakat Mal Pertanian -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: '',
      keperluan: '',
      hutang: '',

      // Zakat Mal Penghasilan
      penghasilan: '',

    }
  },

  props: {
    secondaryTabProp: {
      type: String,
      default: 'beras'
    }
  },
  methods: {
    covertToCurrency(params){
        return new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR'} )
               .format(params)
      },
  },


  computed: {
    // isNumber(params){
    //   if (condition) {
        
    //   }
    // },
    
    sumZakatPenghasilan(){
      return this.covertToCurrency((this.penghasilan - this.keperluan - this.hutang) * 0.025)
    }
  }
}
</script>
