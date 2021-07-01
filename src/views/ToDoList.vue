<template>
    <!-- Tambahkan komponen header -->

    <h1 class="text-2xl"> HOLA {{ testEnv }} </h1>
    TESTING
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
      <button v-on:click="kurang()" class="p-2 bg-red-500 my-5 text-white rounded-lg shadow-jlg mx-5">Kurang</button>
      <br>
      <button v-on:click="randomUser()" class="p-2 bg-red-500 my-5 text-white rounded-lg shadow-lg mx-5">Random User</button>
      <!-- lempar ke view, lalu tangkap sebagai props -->
      <router-view :showAddTask="showAddTask"></router-view>
  <Footer />

    <!-- Atas Dari Home (Ubah Lagi) -->

   <AddTask 
      v-show="showAddTask"
      @add-task="newTask()" 
   />
    <!-- Komponen Tasks, bind props tasks (komponen tasks), dengan data tasks (komponen ini) -->
    <!-- Dari $emit di tasks,  -->
    <Tasks 
      @delete-task="deleteTask()" 
      @toggle-reminder="toggleReminder()" 
      :tasks='tasks' 
    />
</template>

<script>

import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
   name: 'Home',
   components: {
      Tasks,
      AddTask,

      
      Header,
      Footer,
   },
   data() { 
      return {
         // showAddTask: true,
         tasks: [],
         testEnv: process.env.TEST_KEY,

      // Bawah Dari home (Ubah Lagi)
      namaAwal: 'John',
      namaAkhir: 'Doe',
      jumlah: 1,
      // variabel = Gambar dari google
      gambar: 'https://randomuser.me/api/portraits/men/10.jpg',
      showAddTask: true,
      }
   },
   methods: {
   async created() {
      this.tasks = await this.fetchTasks()
   },
    // Fungsi hapus task
    async deleteTask(id){
      if (confirm('Yakin dihapus?')) {
        // Ambil data dari REST API
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
          // hapus dengan method DELETE
          method: 'DELETE'
        })
        // Jika kode == 200 (berhasil)
        // Ubah data tasks, hilangkan array dengan id == id
        res.status === 200 ? this.tasks = this.tasks.filter((task) => task.id !== id) : alert('Pesan Gagal Dihapus')
      }
    },

    async fetchTask(id){
      // Ambil dari RESt API (lokal)
      // Pake single backtick agar bisa masuk variabel
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      // Taruh data di variabel data
      const data = await res.json()
      // Kembalikan data
      return data
    },
    
    async toggleReminder(id){
      const taskToggle = await this.fetchTask(id)
      const updateTask = {...taskToggle, reminder: !taskToggle.reminder }
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json' 
        },
        body: JSON.stringify(updateTask)
      })
      // Masukkan ke variabel data
      const data = await res.json()
      // Ubah reminder(di dalam array )
      // Cari id
      // Pakai spread (baca javascript spread)
      // Ubah reminder jika true, maka ubah false dan sebaliknya
      this.tasks = this.tasks.map((task) => task.id === id 
                                    ? {...task, reminder: data.reminder} 
                                    : task)
    },

    // Fungsi ambil Semua data
    async fetchTasks(){
      // Ambil dari RESt API (lokal)
      const res = await fetch("http://localhost:5000/tasks/")
      // Taruh data di variabel data
      const data = await res.json()
      // Kembalikan data
      return data
    },

    // Fungsi buat task baru
    async newTask(task){
      console.log( task )
      const res = await fetch("http://localhost:5000/tasks", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })
      console.log(res)
      const data = await res.json()
      // console.log( this.tasks )
      this.tasks = [...this.tasks, data]
    },

    // Bawah Dari home (Ubah Lagi)
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