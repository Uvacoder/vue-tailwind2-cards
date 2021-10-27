<template>
  <div class="overflow-hidden flex flex-col justify-between w-full h-full">

    <!-- Zakat Fitrah -->
    <div class="flex">
      
      <!-- Zakat Fitrah -->
      <div class="w-full mr-5 mb-1 shadow-md rounded-lg">
        <h2 class="text-lg font-bold text-center bg-gradient-to-r from-[#00e396] to-[#008ffb] text-white rounded-t-lg">Zakat Fitrah {{ fitrahChart.year }} </h2>
        <div class="flex justify-around">

          <!-- Pie Chart -->
          <div class="w-[300px]">
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
                <span class="font-semibold"> {{ fitrahChart.series[0] }} Orang </span>
              </div>
              <!-- End Top Card Section -->

              <!-- Bottom Card Section -->
              <div class="text-center font-bold"> {{ fitrahChart.totalBeras }} Liter </div>
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
                <span class="font-semibold">{{ fitrahChart.series[1] }} Orang</span>
              </div>
              <!-- End Top Card Section -->

              <!-- Bottom Card Section -->
              <div class="text-center font-bold truncate px-2"> {{ convertToCurrency(fitrahChart.totalUang) }} </div>
              <!-- End Bottom Card Section -->

            </div>
            <!-- End Uang Card -->

          </div>
          <!-- Cards -->

        </div>
      </div>
      <!-- End Zakat Fitrah -->
      
    </div>
    <!-- End Zakat Fitrah -->

    <!-- Infaq Section -->
    <div class="h-[60%] mt-2 mb-3 flex justify-between">

      <!-- infaq -->
      <div class="w-full shadow-lg rounded-lg mr-5">
        <div class="flex flex-col justify-between">
        <h2 class="text-lg font-bold text-center bg-gradient-to-r from-[#00e396] to-[#008ffb] text-white rounded-t-lg">Infaq {{ infaqChart.year }} </h2>
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
import ApexCharts from "apexcharts";
import axios from 'axios'

export default {
  components:{
    VueApexCharts
  },

  data() {
    return {
      fitrahChart: {
        year: null,
        totalBeras: null,
        totalUang: null,
        series: [],
        chartOptions: {
          chart: {
            id: 'fitrahChart',
            type: 'pie',
          },
          labels: ['Beras', 'Uang'],
          tooltip: {
            enabled: false,
          },
          fill: {
            colors: ['#00e396', '#269ffb'],
          }
        },
      },

      infaqChart: {
        year: null,
        series: [{
          name: 'Total',
          data: [],
        }],
        chartOptions: {
          chart: {
            id: 'infaqChart',
            toolbar: {
              show: false,
            }
          },
          tooltip: {
            enabled: true,
            y: {
              formatter: function (val) {
                return new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR'} ).format(val);
              },
            }
          },
          dataLabels: {
            enabled: false,
            
          },
          yaxis: {
            labels: {
              formatter: function (val) {
              return new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR'} ).format(val);
              },
            }
          },
          xaxis: {
            categories: []
          }
        },
      },

      axiosConfig: {
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer '+ localStorage.getItem('token')
        },
        timeout: 5000,
        withCredentials: true
      },

    }
  },
  methods: {
    convertToCurrency(params){
      return  new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR'} )
              .format(params)
    },

    getData(){
      const baseURL = 'http://127.0.0.1:8000/'

      axios.get(baseURL+'api/zakat/dashboard', this.axiosConfig)

      .then(res => {
        // console.log(res.data);
        this.infaqChart.year = res.data.infaq.year

        this.fitrahChart.year = res.data.fitrah.year
        this.fitrahChart.series = [res.data.fitrah.totalData[0].muzakkiBeras, res.data.fitrah.totalData[0].muzakkiUang]
        this.fitrahChart.totalBeras = res.data.fitrah.totalData[0].totalBeras
        this.fitrahChart.totalUang = res.data.fitrah.totalData[0].totalUang

        // Update infaqChart ChartSeries using Apexchart method
        ApexCharts.exec('infaqChart', 'updateSeries', [{
          data: res.data.infaq.totalInfaq.map(($value) => {
            return $value.total
          })
        }])
        
        // Update infaqChart Chartoption using Apexchart method 
          ApexCharts.exec('infaqChart', 'updateOptions', {
            xaxis: {
              categories: res.data.infaq.totalInfaq.map(($value) => {
                return $value.month
              })
            }
          })
        })

      .catch(err => {
        console.log(err);
        
        if (err.response.status == 401) {
          return this.$router.push('/login?error=kicked')
        }
      })
    }
  },

  mounted() {
    this.getData()
  },

}
</script>
