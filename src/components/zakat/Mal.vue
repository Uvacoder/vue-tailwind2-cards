<template>
  <div class="bg-white rounded-xl shadow-xl mx-40 p-5 px-10">
    
    <!-- Zakat Mal Penghasilan -->
    <div v-show="secondaryTabProp == 'penghasilan'">

      <!-- Content -->
      <div class="flex justify-between space-x-10">
        
        <!-- Left Content -->
        <div class="w-1/2 space-y-4">
          
          <div class="flex flex-col space-y-1">
            <label for="nama">Nama Muzaki</label>
            <input v-model="nama" type="text" id="nama" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150">
          </div>

          <div class="flex flex-col space-y-1">
            <label for="penghasilan">Penghasilan per bulan</label>
            <input v-model="penghasilan" type="number" id="penghasilan" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150" placeholder="0">
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
        <div v-if="penghasilan > nisabPenghasilan" class="w-1/2 flex flex-col justify-center items-center">
          <h2>Total Zakat yang perlu dibayar</h2>
          <h3 class="font-semibold text-lg"> {{ sumZakatPenghasilan }} </h3>
        </div>
        <div v-else class="w-1/2 flex flex-col justify-center items-center">
          <h2 class="font-semibold capitalize"> Total Penghasilan Anda belum memenuhi Nisab</h2>
          <h3 class="text-sm">Minimal Nisab Penghasilan adalah {{ covertToCurrency(nisabPenghasilan) }} </h3>
        </div>
        <!-- End Right Content -->

      </div>
      <!-- End Content -->

      <!-- Button -->
      <div class="flex justify-end space-x-5 mt-10">
        <button @click="resetInput()" class="font-semibold hover:opacity-50 duration-150">Reset</button>
        <button class="font-semibold ring-2 ring-[#1dad52] text-[#1dad52] hover:text-white hover:bg-[#1dad52] p-2 px-5 rounded-xl duration-150">Simpan</button>
      </div>
      <!-- End Button -->

    </div>
    <!-- End Zakat Mal Penghasilan -->

    <!-- Zakat Mal Emas -->
    <div v-show="secondaryTabProp == 'emas'">
      
      <!-- Content -->
      <div class="flex justify-between space-x-10">
        
        <!-- Left Content -->
        <div class="w-1/2 space-y-4">
          
          <div class="flex flex-col space-y-1">
            <label for="nama">Nama Muzaki</label>
            <input v-model="nama" type="text" id="nama" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150">
          </div>

          <div class="flex flex-col space-y-1">
            <label for="totalEmas">Total Emas</label>
            <input v-model="totalEmas" type="number" id="totalEmas" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150" placeholder="0">
          </div>

          <div class="flex flex-col space-y-1">
            <label for="hargaEmas">Harga Emas saat ini</label>
            <input v-model="hargaEmas" type="number" id="hargaEmas" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150" placeholder="0">
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
        <div v-if="totalEmas > nisabEmas" class="w-1/2 flex flex-col justify-center items-center">
          <h2 class="">Total Zakat yang perlu dibayar</h2>
          <h3 class="font-semibold text-lg"> {{ sumZakatEmas }} </h3>
        </div>

        <div v-else class="w-1/2 flex flex-col justify-center items-center">
          <h2 class="font-semibold capitalize"> Total Emas anda belum memenuhi Nisab</h2>
          <h3 class="text-sm">Nisab Emas adalah {{ nisabEmas }} gram </h3>
        </div>
        <!-- End Right Content -->

      </div>
      <!-- End Content -->

      <!-- Button -->
      <div class="flex justify-end space-x-5 mt-10">
        <button  class="font-semibold hover:opacity-50 duration-150">Reset</button>
        <button class="font-semibold ring-2 ring-[#1dad52] text-[#1dad52] hover:text-white hover:bg-[#1dad52] p-2 px-5 rounded-xl duration-150">Simpan</button>
      </div>
      <!-- End Button -->

    </div>
    <!-- End Zakat Mal Emas -->

    <!-- Zakat Mal Sapi -->
    <div v-show="secondaryTabProp == 'sapi'">
      
      <!-- Content -->
      <div class="flex justify-between space-x-10">
        
        <!-- Left Content -->
        <div class="w-1/2 space-y-4">
          
          <div class="flex flex-col space-y-1">
            <label for="nama">Nama Muzaki</label>
            <input v-model="nama" type="text" id="nama" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150">
          </div>

          <div class="flex flex-col space-y-1">
            <label for="totalSapi">Total Sapi</label>
            <input v-model="totalSapi" type="number" id="totalSapi" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150" placeholder="0">
          </div>

        </div>
        <!-- End Left Content -->

        <!-- Right Content -->
        <div v-if="totalSapi >= nisabSapi" class="w-1/2 flex flex-col justify-center items-center">
          <h2 class="">Total Zakat yang perlu dibayar</h2>
          <h3 class="font-semibold text-lg text-center mt-3" v-html="sumZakatSapi" ></h3>
        </div>

        <div v-else class="w-1/2 flex flex-col justify-center items-center">
          <h2 class="font-semibold capitalize"> Total {{ secondaryTabProp }} anda belum memenuhi Nisab</h2>
          <h3>Minimal Nisab adalah {{ nisabSapi }} ekor sapi </h3>
        </div>
        <!-- End Right Content -->

      </div>
      <!-- End Content -->

      <!-- Button -->
      <div class="flex justify-end space-x-5 mt-10">
        <button  class="font-semibold hover:opacity-50 duration-150">Reset</button>
        <button class="font-semibold ring-2 ring-[#1dad52] text-[#1dad52] hover:text-white hover:bg-[#1dad52] p-2 px-5 rounded-xl duration-150">Simpan</button>
      </div>
      <!-- End Button -->

    </div>
    <!-- End Zakat Mal Sapi -->

    <!-- Zakat Mal Kambing -->
    <div v-show="secondaryTabProp == 'kambing'">
      
      <!-- Content -->
      <div class="flex justify-between space-x-10">
        
        <!-- Left Content -->
        <div class="w-1/2 space-y-4">
          
          <div class="flex flex-col space-y-1">
            <label for="nama">Nama Muzaki</label>
            <input v-model="nama" type="text" id="nama" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150">
          </div>

          <div class="flex flex-col space-y-1">
            <label for="totalKambing">Total Kambing</label>
            <input v-model="totalKambing" type="number" id="totalKambing" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150" placeholder="0">
          </div>

        </div>
        <!-- End Left Content -->

        <!-- Right Content -->
        <div v-if="totalKambing >= nisabKambing" class="w-1/2 flex flex-col justify-center items-center">
          <h2 class="">Total Zakat yang perlu dibayar</h2>
          <h3 class="font-semibold text-lg text-center mt-3" v-html="sumZakatKambing" ></h3>
        </div>

        <div v-else class="w-1/2 flex flex-col justify-center items-center">
          <h2 class="font-semibold capitalize"> Total {{ secondaryTabProp }} anda belum memenuhi Nisab</h2>
          <h3>Minimal Nisab adalah {{ nisabKambing }} ekor kambing </h3>
        </div>
        <!-- End Right Content -->

      </div>
      <!-- End Content -->

      <!-- Button -->
      <div class="flex justify-end space-x-5 mt-10">
        <button  class="font-semibold hover:opacity-50 duration-150">Reset</button>
        <button class="font-semibold ring-2 ring-[#1dad52] text-[#1dad52] hover:text-white hover:bg-[#1dad52] p-2 px-5 rounded-xl duration-150">Simpan</button>
      </div>
      <!-- End Button -->

    </div>
    <!-- End Zakat Mal Kambing -->

    <!-- Zakat Mal Pertanian -->
    <div v-show="secondaryTabProp == 'pertanian'">
      
      <!-- Content -->
      <div class="flex justify-between space-x-10">
        
        <!-- Left Content -->
        <div class="w-1/2 space-y-4">
          
          <div class="flex flex-col space-y-1">
            <label for="nama">Nama Muzaki</label>
            <input v-model="nama" type="text" id="nama" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150">
          </div>

          <div class="flex flex-col space-y-1">
            <label for="totalPanen">Total Panen (kg)</label>
            <input v-model="totalPanen" type="number" id="totalPanen" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150" placeholder="0">
          </div>

          <div class="flex flex-col space-y-1">
            <label for="hargaPanen">Harga per kg</label>
            <input v-model="hargaPanen" type="number" id="hargaPanen" class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150" placeholder="0">
          </div>

          <div class="flex flex-col space-y-3">
            <div class="flex items-center space-x-2">
            <input v-model="tipePertanian" type="radio" id="denganBiaya" value="0.05">
            <label for="denganBiaya">Dengan Biaya (Irigasi)</label>
            </div>
            <div class="flex items-center space-x-2">
              <input v-model="tipePertanian" type="radio" id="tanpaBiaya" value="0.10" >
              <label for="tanpaBiaya">Tanpa Biaya (Hujan/sungai)</label>
            </div>
            <div class="flex items-center space-x-2">
              <input v-model="tipePertanian" type="radio" id="campuran" value="0.07" >
              <label for="campuran">Campuran (Irigasi + Hujan/Sungai)</label>
            </div>
          </div>

        </div>
        <!-- End Left Content -->

        <!-- Right Content -->
        <div v-if="totalPanen > nisabPanen" class="w-1/2 flex flex-col justify-center items-center">
          <h2 class="">Total Zakat yang perlu dibayar</h2>
          <h3 class="font-semibold text-lg text-center mt-3"> {{ sumZakatPertanian }} </h3>
        </div>

        <div v-else class="w-1/2 flex flex-col justify-center items-center">
          <h2 class="font-semibold capitalize"> Total panen anda belum memenuhi Nisab</h2>
          <h3>Nisab pertanian adalah {{ nisabPanen }} kg </h3>
        </div>
        <!-- End Right Content -->

      </div>
      <!-- End Content -->

      <!-- Button -->
      <div class="flex justify-end space-x-5 mt-10">
        <button  class="font-semibold hover:opacity-50 duration-150">Reset</button>
        <button class="font-semibold ring-2 ring-[#1dad52] text-[#1dad52] hover:text-white hover:bg-[#1dad52] p-2 px-5 rounded-xl duration-150">Simpan</button>
      </div>
      <!-- End Button -->

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

      // Zakat Mal Emas
      totalEmas: '',
      hargaEmas: '',

      // Zakat Mal Sapi
      totalSapi: '',

      // Zakat Mal Kambing
      totalKambing: '',

      // Zakat Mal Pertanian
      totalPanen: '',
      hargaPanen: '',
      tipePertanian: '',

      // Nisab
      nisabPenghasilan: 100000,
      nisabEmas: 80,
      nisabSapi: 30,
      nisabKambing: 40,
      nisabPanen: 750,

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

    resetInput(){
      this.nama = '',
      this.keperluan = '',
      this.hutang = '',
      this.penghasilan = '',
      this.totalEmas = '',
      this.hargaEmas = '',
      this.totalSapi = '',
      this.totalKambing = '',
      this.totalPanen = '',
      this.hargaPanen = '',
      this.tipePertanian = ''
    },

  },


  computed: {
    sumZakatPenghasilan(){
      return this.covertToCurrency((this.penghasilan - this.keperluan - this.hutang) * 0.025)
    },

    sumZakatEmas(){
      return this.covertToCurrency(((this.totalEmas * this.hargaEmas) - this.keperluan - this.hutang) * 0.025)
    },

    // sumZakatSapi(){
    //     let x = 40
    //     let y = 60
    //     let jumlah = 1
    //     let next = false

    //     do {
    //       if (this.totalSapi < x ) {
    //         return jumlah + ' ekor sapi tabi <br> <span class="text-sm"> (Umur 1 tahun, masuk tahun ke-2) </span>'
    //       } else if (this.totalSapi < y){
    //         return jumlah + ' ekor sapi musinnah <br> <span class="text-sm"> (Umur 2 tahun, masuk tahun ke-3) </span>'
    //       }

    //       x += 40
    //       y += 60
    //       next = true

    //       console.log('jumlah = '+ jumlah++);
    //       console.log('x = '+ x);
    //       console.log('y = '+ y);

    //     } while (next == true);

          

    //     return jumlah
    // },

    sumZakatSapi(){
      let min = 0
      let jumlah = 1
      let maxX = 39
      let maxY = 59

      if (this.totalSapi <= maxX) {
        return jumlah + ' ekor sapi tabi <br> <span class="text-sm"> (Umur 1 tahun, masuk tahun ke-2) </span>'
      } else if (this.totalSapi <= maxY){
        return jumlah + ' ekor sapi musinnah <br> <span class="text-sm"> (Umur 2 tahun, masuk tahun ke-3) </span>'
      }

      maxX = 59
      maxY = 39

      while (min < jumlah) {

        // if totalSapi <= MaxX
        if (this.totalSapi <= maxY) {
          return jumlah + ' ekor sapi tabi <br> <span class="text-sm"> (Umur 1 tahun, masuk tahun ke-2) </span>'
        } else if (this.totalSapi <= maxX){
          return jumlah + ' ekor sapi musinnah <br> <span class="text-sm"> (Umur 2 tahun, masuk tahun ke-3) </span>'
        }

        // If not, maxX + 30,  MaxY + 40
        maxX += 30
        maxY += 40
        // add++
        min++
        jumlah++

        console.log(jumlah);
        console.log(maxX);
        console.log(maxY);
      }

      return ''
      
    },

    sumZakatKambing(){
      let min = 0
      let max = 1
      let maxKambing = 100

      if (this.totalKambing <= 120) {
        return '1 ekor kambing umur 2 tahun'
      }

      while (min < max) {
        
        // if totalkambing <= maxKambing
        if (this.totalKambing <= maxKambing) {
          return max + ' ekor kambing umur 2 tahun'
        }
        
        // If not, maxKambing + 100
        maxKambing += 100
        // add++
        min++
        max++
      }

      return false
    },

    sumZakatPertanian(){
      return this.covertToCurrency((this.hargaPanen * this.totalPanen) * this.tipePertanian)
    },

  },

  watch: {
    secondaryTabProp(){
      // Watch if secondaryTabProp is change
      return this.resetInput()
    }
  }

}
</script>
