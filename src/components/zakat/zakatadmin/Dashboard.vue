<template>
  <div class="overflow-hidden flex flex-col justify-between w-full h-full">

    <!-- Zakat Fitrah & Dates Section -->
    <div class="h-[40%] flex justify-between items-center">
      
      <!-- Zakat Fitrah -->
      <div class="w-[50%] mr-5 mb-1 shadow-md rounded-lg">
        <h2 class="text-lg font-bold text-center bg-gradient-to-r from-[#00e396] to-[#008ffb] text-white rounded-t-lg">Zakat Fitrah</h2>
        <div class="flex">

        <!-- Pie Chart -->
        <div class="w-[50%]">
          <VueApexCharts type="pie" :options="fitrahChart.chartOptions" :series="fitrahChart.series" />
        </div>
        <!-- End Pie Chart -->
        
        <!-- Cards -->
        <div class="w-[60%] flex flex-col items-center justify-center space-y-4">
          
          <!-- Beras Card -->
          <div class="flex flex-col w-[60%] bg-white p-2 border-l-4 border-[#00e396] rounded-md shadow-lg">
            
            <!-- Top Card Section -->
            <div class="flex space-x-3 px-10 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="font-semibold">15 orang</span>
            </div>
            <!-- End Top Card Section -->

            <!-- Bottom Card Section -->
            <div class="text-center font-bold">500 Liter</div>
            <!-- End Bottom Card Section -->

          </div>
          <!-- End Beras Card -->

          <!-- Uang Card -->
          <div class="flex flex-col w-[60%] bg-white p-2 border-l-4 border-[#008ffb] rounded-md shadow-lg">
            
            <!-- Top Card Section -->
            <div class="flex space-x-3 px-10 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="font-semibold">25 orang</span>
            </div>
            <!-- End Top Card Section -->

            <!-- Bottom Card Section -->
            <div class="text-center font-bold truncate px-2"> {{ convertToCurrency('5000000000000') }} </div>
            <!-- End Bottom Card Section -->

          </div>
          <!-- End Uang Card -->

        </div>
        <!-- Cards -->

        </div>
      </div>
      <!-- End Zakat Fitrah -->
      
      <!-- Dates Fitrah -->
      <div class="w-[50%] flex flex-col text-center space-y-5 shadow-md p-[10px] rounded-lg">
        <div class="space-y-2">
          <label class="block font-semibold" for="tanggalAwal">Dari Tanggal {{ startDate }} </label>
          <input type="date" v-bind="startDate" id="tanggalAwal" class="ring-2 ring-blue-500 ring-opacity-50 rounded-lg px-5 p-1.5">
        </div>
        <div class="space-y-2">
          <label class="block font-semibold" for="tanggalAkhir">Sampai Tanggal {{ endDate }} </label>
          <input type="date" v-bind="endDate" id="tanggalAkhir" class="ring-2 ring-blue-500 ring-opacity-50 rounded-lg px-5 p-1.5">
        </div>
        <div>
          <button class="bg-blue-500 hover:bg-blue-600 duration-150 px-5 p-1.5 rounded-lg text-white font-semibold">Tampilkan</button>
        </div>
      </div>
      <!-- End Dates Fitrah -->

    </div>
    <!-- End Zakat Fitrah & Dates Section -->

    <!-- Infaq Section -->
    <div class="h-[60%] mt-2 mb-3 flex justify-between">

      <!-- infaq -->
      <div class="w-full shadow-lg rounded-lg mr-5">
        <div class="flex flex-col justify-between">
        <h2 class="text-lg font-bold text-center bg-gradient-to-r from-[#00e396] to-[#008ffb] text-white rounded-t-lg">Infaq</h2>
        <VueApexCharts type="bar" height="300" :options="infaqChart.chartOptions" :series="infaqChart.series" />    
        </div>
      </div>
      <!-- End infaq -->

    </div>
    <!-- End Infaq Section -->

  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts"

export default {
  components:{
    VueApexCharts
  },

  data() {
    return {

      startDate: null,
      endDate: null,

      infaqChart: {
        series: [{
            name: '',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }],
          chartOptions: {
            chart: {
              toolbar: {
                show: false,
              }
            },
            tooltip: {
              enabled: true,
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
          },
      },

      fitrahChart: {
        series: [44, 55],
        chartOptions: {
          chart: {
            type: 'pie',
          },
          labels: ['Beras', 'Uang'],
          tooltip: {
            enabled: false,
          },
        },
      }

    }
  },

  methods: {
    convertToCurrency(params){
      return  new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR'} )
              .format(params)
    },
  },

}
</script>
