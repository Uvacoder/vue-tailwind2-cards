<template>
    <form @submit="onSubmit" class="flex flex-between" action="">
        <div>
            <div class="flex space-x-3 items-center p-2">
                <label for="task">Task</label>
                <input class="ring-2 ring-gray-200 rounded-lg pl-2" type="text" v-model="task" name="task" id="task">
            </div>
            <div class="flex space-x-3 items-center p-2">
                <label for="time">Day & Time</label>
                <input class="ring-2 ring-gray-200 rounded-lg pl-2" type="text" v-model="time" name="time" id="task">
            </div>
            <div class="flex space-x-3 items-center p-2">
                <label for="reminder">Reminder</label>
                <input class="ring-2 ring-gray-200 rounded-lg pl-2" type="checkbox" v-model="reminder" name="reminder" id="reminder">
            </div>
        </div>
        <div>
            <input class="p-1.5 bg-blue-500 rounded-lg font-semibold text-gray-50 cursor-pointer hover:bg-blue-600 duration-200" type="submit" value="Tambah Task">
        </div>
    </form>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            // Deklarasi variabel
            task: '',
            time: '',
            reminder: false
        }
    },
    methods: {
        onSubmit(event){
            event.preventDefault()
            // Input task, required
            if (!this.task) {
                alert("Task harus diisi")
                return
            }
            const newTask = {
                // Masukkan data ke variabel
                text: this.task,
                day: this.time,
                reminder: this.reminder,
            }
            // console.log(
            this.$emit('add-task', newTask)
            // Lalu clean input 
            this.task = ''
            this.time = ''
            this.reminder = false
        }
    },
    emits: ['add-task']
}
</script>