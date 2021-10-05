<template>

  <!-- Content -->
  <div class="mt-8">

    <!-- Tab -->
    <div class="flex justify-between">
      
      <!-- Left Tab -->
      <div class="space-x-5">
        <button @click="tab = 'penghasilan'" :class="[ tab == 'penghasilan' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Penghasilan</button>
        <button @click="tab = 'emas'" :class="[ tab == 'emas' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Emas</button>
        <button @click="tab = 'sapi'" :class="[ tab == 'sapi' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Sapi</button>
        <button @click="tab = 'kambing'" :class="[ tab == 'kambing' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Kambing</button>
        <button @click="tab = 'pertanian'" :class="[ tab == 'pertanian' ? 'border-blue-500' : 'border-transparent opacity-50 hover:opacity-100 duration-150' ]" class="border-b-2 font-semibold capitalize">Pertanian</button>
      </div>
      <!-- End Left Tab -->

      <!-- Search -->
      <div class="flex relative items-center opacity-75">
        <input v-model="keyword" type="text" class="pl-6 focus:outline-none shadow-lg focus:ring-2 ring-blue-500 duration-150 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute left-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <!-- End Search -->

    </div>
    <!-- End Tab -->

    <!-- Content -->
    <div class="mt-10">

      <!-- Table -->
      <table class="w-full table-fixed">

        <!-- Table Header -->
        <thead>
          <tr class="rounded-lg">
            <th class="p-1.5 w-[5%] bg-gray-200 rounded-tl-lg">No</th>
            <th class="w-[25%] bg-gray-200">Nama</th>
            <th class="w-[10%] bg-gray-200">Jenis Zakat</th>
            <th class="w-[25%] bg-gray-200">Jumlah</th>
            <th class="w-[15%] bg-gray-200">Tanggal Zakat</th>
            <th class="w-[20%] bg-gray-200 rounded-tr-lg">Aksi</th>
          </tr>
        </thead>
        <!-- End Table Header -->
        
        <!-- Table Content -->

        <!-- If Data -->
        <tbody v-if="items.length > 0 && !isLoading">
          <tr v-for="(item, index) in items" :key="index" class="text-sm mb-16 text-center cursor-default even:bg-gray-100 duration-150">
            <td class="py-2 truncate px-1"> {{ (index + 1)  + (perPage * (currentPage - 1)) }} </td>
            <td class="py-2 truncate px-1"> {{ item.nama }} </td>
            <td class="truncate px-1"> {{ item.jenis }} </td>
            <td class="truncate px-1"> {{ item.jenis != 'sapi' && item.jenis != 'kambing' ? convertToCurrency(item.total) : item.total }} </td>
            <td class="truncate px-1"> {{ item.created_at }} </td>
            <td class="truncate px-1">
              <div class="flex justify-center items-center text-black/40 space-x-4">
                
                <!-- Info button -->
                <button @click="detailZakat(index)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-blue-500 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <!-- End Info button -->

                <!-- Delete button -->
                <button @click="deleteZakat(item.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-red-500 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <!-- End Delete button -->
                
              </div>
            </td>
          </tr> 
        </tbody>
        <!-- End If Data -->

        <!-- Getting Data -->
          <tbody v-else-if="isLoading">
            <tr>
              <td colspan="6" class="text-center pt-5">Sedang Mengambil data...</td>
            </tr>
          </tbody>
          <!-- End Getting Data -->

        <!-- If No Data -->
        <tbody v-else>
          <tr>
            <td colspan="6" class="text-center text-red-500 text-sm pt-5">Data tidak ditemukan</td>
          </tr>
        </tbody>
        <!-- End If No Data -->
        <!-- End Table Content -->

      </table>
      <!-- End Table -->

      <!-- Pagination -->
      <ul class="flex justify-end space-x-3 mt-5">
        <li v-for="(item, index) in pagination" :key="index">
          <button 
            v-show="item.url" 
            @click="getPagination(item.url)"
            :class="[item.active ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white duration-150']"
            class="ring-2 ring-blue-500 rounded-md p-1.5 px-3" 
            v-html="item.label"></button>
        </li>
      </ul>
      <!-- End Pagination -->

    </div>
    <!-- End Content -->

    <!-- Modal -->
  <div v-show="modalOpen" class="absolute inset-0 flex items-center justify-center">
    <div @click="modalOpen = false" class="absolute inset-0 bg-black/50" />
    <div class="relative bg-white w-1/3 h-1/2 z-10 rounded-lg shadow-lg">

      <!-- close button -->
      <div class="absolute top-2 right-2">
        <button @click="modalOpen = false">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      <!-- End close button -->

      <!-- Modal Header -->
      <div class="text-center py-2 bg-gray-50 rounded-t-lg">
        <h2 class="text-xl font-semibold">Detail</h2>
      </div>
      <!-- End Modal Header -->

      <!-- Modal Content -->
      <div class="flex flex-col w-full px-10 py-2">
        <label for="nama">Nama</label>
        <input disabled v-model="nama" type="text" id="nama" class="ring-2 ring-trueGray-300 focus:ring-blue-600 rounded-lg p-1.5 focus:outline-none outline-none duration-150">
        
        <label for="jenis" class="pt-2">Jenis Zakat</label>
        <select disabled v-model="jenis" id="jenis" class="ring-2 ring-trueGray-300  rounded-lg p-1.5 focus:outline-none outline-none duration-150">
          <option value="penghasilan">Penghasilan</option>
          <option value="emas">Emas</option>
          <option value="sapi">Sapi</option>
          <option value="kambing">Kambing</option>
          <option value="pertanian">Pertanian</option>
        </select>
        
        <label for="total" class="pt-2">Total Zakat</label>
        <input disabled v-model="total" type="text" id="total" class="ring-2 ring-trueGray-300 focus:ring-blue-600 rounded-lg p-1.5 focus:outline-none outline-none duration-150">
      </div>
      <!-- End Modal Content -->

    </div>
  </div>
  <!-- End Modal -->

  </div>
  <!-- End Content -->
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tab: 'penghasilan',
      items: {},
      pagination: {},
      perPage: '',
      currentPage: '',

      isLoading: false,
      modalOpen: false,

      nama: '',
      jenis: '',
      total: '',
      id: '',

      keyword: '',
      delaySearch: true
    }
  },

  methods: {
    convertToCurrency(params){
      return  new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR'} )
              .format(params)
    },

    resetData(){
      this.nama = ''
      this.jenis = ''
      this.total = ''
      this.id = ''
      this.flashMessage = ''
    },

    getDataZakat(params){
      
      // Is Loading
      this.isLoading = true

      axios.get('http://127.0.0.1:8000/api/zakat/mal/'+params)
      
      .then((res) => {
        // console.log(res.data);
        this.pagination = res.data.links
        this.items = res.data.data
        this.perPage = res.data.per_page
        this.currentPage = res.data.current_page
        // console.log(this.pagination);
        return this.isLoading = false
      })

      .catch((err) => {
        this.isLoading = false
        console.log(err.response);
      })
    },

    getPagination(url){
      // Is Loading
      this.isLoading = true

      axios.get(url)
      
      .then((res) => {
        // console.log(res.data);
        this.pagination = res.data.links
        this.items = res.data.data
        this.perPage = res.data.per_page
        this.currentPage = res.data.current_page
        // console.log(this.pagination);
        return this.isLoading = false
      })

      .catch((err) => {
        this.isLoading = false
        console.log(err.response);
      })
    },

    deleteZakat(id){
      axios.patch('http://127.0.0.1:8000/api/zakat/mal/' + id)
        
      .then(() => {
        // get Updated data
        return this.getDataZakat(this.tab)
      })

      .catch((err) => {
        console.log(err.response);
      })
    },

    detailZakat(index){
      this.modalOpen = true
      this.nama = this.items[index].nama
      this.jenis = this.items[index].jenis
      this.total = this.items[index].total
      this.id = this.items[index].id
    },

    searchData(params){
      // Is Loading
      this.isLoading = true

      axios.get('http://127.0.0.1:8000/api/zakat/mal/' +params+ '/' +this.keyword)

      .then((res) => {
        // console.log(res.data.data);
        
        this.pagination = res.data.links
        this.items = res.data.data
        this.perPage = res.data.per_page
        this.currentPage = res.data.current_page
        return this.isLoading = false
      })

      .catch((err) => {
        this.isLoading = false
        console.log(err.response);
      })
    },

  },

  watch: {
    tab(){
      this.getDataZakat(this.tab)
    },

    keyword(){
      if (this.delaySearch) {
        setTimeout(() => {
          this.searchData(this.tab)
          this.delaySearch = true
        }, 1000);
      }
      
      this.delaySearch = false
    }
  },

  created(){
    this.getDataZakat(this.tab)
  }
}
</script>

<style>

</style>