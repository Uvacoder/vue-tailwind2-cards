<template>
  <!-- Zakat Fitrah Beras -->
    <div class="bg-white rounded-xl shadow-xl mx-40 p-5 px-10">
      <!-- Content -->
        <form class="flex space-x-5 items-end">

          <!-- Textbox Pezakat -->
          <div class="flex flex-col">
            <label for="pezakat">Nama Muzaki</label>
            <input 
              id="pezakat"
              v-model="nama" 
              type="text" 
              class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg px-3 p-1.5 focus:outline-none outline-none duration-150" 
            >
          </div>
          <!-- End Textbox Pezakat -->

          <!-- Textbox Jumlah Zakat -->
          <div class="flex flex-col">
            <label for="jumlahZakat">Jumlah Zakat {{ secondaryTabProp }} </label>
            <input
              id="jumlahZakat"
              type="number"
              v-model="jumlahZakat"
              class="ring-2 ring-trueGray-300 focus:ring-[#1dad52] rounded-lg p-1.5 focus:outline-none outline-none duration-150" 
              :placeholder="secondaryTabProp == 'beras' ? '3.5' : '40000'"
            >
          </div>
          <!-- End Textbox Jumlah Zakat -->

          <button 
            @click="addPezakat(nama, secondaryTabProp, jumlahZakat)" 
            type="button"
            :disabled="!nama || !jumlahZakat"
            :class="[nama && jumlahZakat ? 'text-white bg-[#1dad52]' : 'text-white bg-gray-500']" 
            class="font-semibold px-5 p-2 rounded-xl duration-150"
          >Tambah</button>

        </form>
      <!-- End Content -->
      
      <!-- Table -->
      <table class="table-fixed w-full my-3 bg-gray-100 rounded-xl mt-5">
        
        <thead>
          <tr class="text-white font-semibold">
            <td class="w-[5%] bg-[#1dad52] text-center p-2 rounded-tl-xl">No</td>
            <td class="w-[40%] bg-[#1dad52] px-5">Nama</td>
            <td class="w-[15%] bg-[#1dad52] text-center">Jenis Zakat</td>
            <td class="w-[20%] bg-[#1dad52] text-center">Zakat Beras</td>
            <td class="w-[20%] bg-[#1dad52] rounded-tr-xl text-center ">Zakat Uang</td>
          </tr>
        </thead>

        <tbody class="divide-y-[1px] divide-gray-300">
          <tr v-for="(data, index) in pezakat" :key="index" class="bg-none" :class="[data.status == 'success' ? 'bg-green-100' : ( data.status == 'failed' ? 'bg-red-100' : 'bg-none')]">
            <td class="text-center p-1.5"> {{ index + 1 }} </td>
            <td class="truncate px-5"> {{ data.pezakat }} </td>
            <td class="text-center"> {{ data.tipeZakat }} </td>
            <td class="text-center"> {{ (data.tipeZakat == 'beras' ? data.jumlahZakat + ' Liter' : '-' ) }} </td>
            <td class="text-center"> {{ (data.tipeZakat == 'uang' ? covertToCurrency(data.jumlahZakat) : '-' ) }} </td>
          </tr>

          <tr v-show="pezakat.length > 1" class="border-t-2 font-semibold">
            <td />
            <td />
            <td class="py-3"> Total </td>
            <td class="text-center"> {{ sumZakatBeras }} Liter </td>
            <td class="text-center"> {{ sumZakatUang }} </td>
          </tr>
        </tbody>

      </table>
      <!-- End Table -->

      <!-- Button -->
      <div class="flex justify-end space-x-5 mt-10">
        <button  @click="pezakat = []; saveDataStatus = {}" class="font-semibold hover:opacity-50 duration-150">Reset</button>
        <button 
          v-show="saveDataStatus.success == null && saveDataStatus.fail == null" 
          @click="saveData()" 
          class="font-semibold ring-2 ring-[#1dad52] text-[#1dad52] hover:text-white hover:bg-[#1dad52] p-2 px-5 rounded-xl duration-150"
        >
        Simpan</button>
      </div>
      <!-- Button -->

      <!-- Loading Message -->
      <div v-if="saveDataStatus.loading == true">
        <p class="text-black font-semibold"> Loading...</p>
      </div>
      <!-- Loading Message -->

      <!-- Fail Message -->
        <div v-if="saveDataStatus.fail">
          <p class="text-red-500 font-semibold">{{ saveDataStatus.fail }} Data gagal disimpan</p>
        </div>
      <!-- End Fail Message -->

      <!-- Success Message -->
        <div v-if="saveDataStatus.success">
          <p class="text-black font-semibold"> {{ saveDataStatus.success }} Data berhasil disimpan</p>
        </div>
      <!-- Success Message -->
      

    </div>
  <!-- End Zakat Fitrah Beras -->
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      nama: '',
      jumlahZakat: '',
      pezakat: [],
      saveDataStatus: {
        loading: false,
        success: null,
        fail: null,
      }
    }
  },

  props: {
    secondaryTabProp: {
      type: String,
    },
  },

  methods: {
    addPezakat (nama, tab, jumlah) {
      this.pezakat.push({
                          'pezakat': nama,
                          'tipeZakat': tab,
                          'jumlahZakat': jumlah,
                          'status': '',
                        })
      this.nama = ''
    },

    covertToCurrency(params){
      return  new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR'} )
              .format(params)
    },

    saveData(){
      // Reset SaveData Status
      this.saveDataStatus.success = null
      this.saveDataStatus.fail = null
      this.saveDataStatus.loading = true

      for (let i = 0; i < this.pezakat.length; i++) {
        
        axios.post('http://127.0.0.1:8000/api/zakat/fitrah',{
          nama: this.pezakat[i].pezakat,
          jenis: this.pezakat[i].tipeZakat,
          jumlah: this.pezakat[i].jumlahZakat
        })

        .then( () => {
          this.pezakat[i].status = 'success' 
          this.saveDataStatus.success++;
          this.saveDataStatus.loading = false
        })

        .catch( (err)=>{
          this.pezakat[i].status = 'failed'
          this.saveDataStatus.fail++
          console.log(err);
        })
      }

    }
    
  },
  
  computed: {
    sumZakatBeras(){
      return  this.pezakat
              // Filter for beras only
              .filter((e) => {return e.tipeZakat == 'beras'})
              // Sum all beras 
              .reduce((sum, i) => {
                return sum += i.jumlahZakat
              // 0 = initial number || '0'
              }, 0)
    },

    sumZakatUang(){
      return this.covertToCurrency(
          this.pezakat
          // Filter for uang only
          .filter((e) => {return e.tipeZakat == 'uang'})
          // Sum all uang
          .reduce((sum, i) => {
            return sum += i.jumlahZakat
          }, 0)
      )

    },
  },

  watch: {
    secondaryTabProp(){
      // Watch if secondaryTabProp is change
      return this.jumlahZakat = ''
    }
  }

}
</script>