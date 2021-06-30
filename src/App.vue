<template>
    <!-- Tambahkan komponen header -->
    <Header 
    @show-tasks="showTasks()"
    :showAddStatus="showAddTask"
    title="tes passing data (props) dari main" />
    <!-- Bisa pake v-show atau v-if, intinya true = tampilkan -->

     <h1 class="text-green-500 text-2xl font-bold">HALO {{ namaAwal }} {{ namaAkhir }} || Jumlah = {{jumlah}}</h1>
    <!-- Kalo mao bind gambar pake v-bind:src="nama variabel" || bisa juga bind class-->
      <!-- <img class="rounded-full shadow-xl" v-bind:src="gambar" v-bind:alt="namaAwal"> -->
    <!-- Kalau pakai 2 variabel -->
      <!-- <img class="rounded-full shadow-xl" v-bind:src="gambar" v-bind:alt="`${namaAwal} ${namaAkhir}`"> -->
    <!-- Shortcut dari v-bind  adalah : -->
      <img class="rounded-full shadow-xl" :src="gambar" :alt="`${namaAwal} ${namaAkhir}`">
      <button v-on:click="tambah()" class="p-2 bg-blue-500 my-5 text-white rounded-lg shadow-lg">Tambah</button>
      <button v-on:click="kurang()" class="p-2 bg-red-500 my-5 text-white rounded-lg shadow-lg mx-5">Kurang</button>
      <br>
      <button v-on:click="randomUser()" class="p-2 bg-red-500 my-5 text-white rounded-lg shadow-lg mx-5">Random User</button>
      <!-- lempar ke view, lalu tangkap sebagai props -->
      <router-view :showAddTask="showAddTask"></router-view>
  <Footer />
</template>

<script>

// Import file component header
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    // register component header
    Header,
    Footer,
  },
  data(){
    return {
      namaAwal: 'John',
      namaAkhir: 'Doe',
      jumlah: 1,
      // variabel = Gambar dari google
      gambar: 'https://randomuser.me/api/portraits/men/10.jpg',
      showAddTask: true,
      
    }
  },
  methods: {
    tambah(){
      this.jumlah = this.jumlah + 1
    },
    kurang(){
      this.jumlah = this.jumlah - 1
    },

    // Fungsi ambil data random
    // Pakai async await
    async randomUser(){
      // Ambil data dari API randomUser
       const res = await fetch('https://randomuser.me/api')
      // Taruh data dengan format json
       const {results} = await res.json()
        // console.log(results)
        // akses dari json [0]{name{first, last}}
        this.namaAwal = results[0].name.first
        this.namaAkhir = results[0].name.last
        // Akses dari json [0]{picture{large}}
        this.gambar = results[0].picture.large
    },

    // Fungsi show form tambah task
    showTasks(){
      // !(variabel)  itu jika false, maka jadi true dan sebaliknya (semacam toggle)
      this.showAddTask = !this.showAddTask
    },
  },
}

</script>
