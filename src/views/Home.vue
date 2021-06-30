<template>
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

export default {
   name: 'Home',
   props: { 
      showAddTask: Boolean,
   },
   components: {
      Tasks,
      AddTask
   },
   data() { 
      return {
         // showAddTask: true,
         tasks: [],
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
  },

}
</script>