<template>
    
    <!-- v-for ( caranya kebali dari foreach jadi "value in 'variabel'"   butuh :key(id) ) -->
    <div class="bg-black px-4 py-2 w-1/2 rounded-md">
        <p class="text-center bg-gray-200 rounded-xl text-xl font-semibold">Task List</p>
        <!-- Cara kedua mengirim data emit -->
        <div class="my-2" v-for="value in tasks" :key="value.id">

            <!-- dengan ternary (pengkondisian) 
               ? Jika benar : jika salah , Selalu ada
            -->
            <div @dblclick="$emit('toggle-reminder', value.id)"  :class="[value.reminder == true ? 'border-green-500' : 'border-red-500 ', 'border-l-4 bg-gray-200 p-2 rounded-lg flex justify-between items-center cursor-pointer']">
                <div>
                    <p class="font-semibold">{{ value.text }}</p> 
                    <p class="text-sm">{{ value.day }}</p>
                </div>
                <!-- Lempar data value.id ke app.vue, delete-task  -->
                <div @click="$emit('delete-task', value.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tasks',
    props: {
        tasks: Array,
    },
    methods: {
        // onDelete(id){
        //     // Kirim fungsi ke app / naik 1 level
        //     // Karena data berada di file app
        //     this.$emit('delete-task', id)
        // }
    },
    // Register semua event emit
    emits: ['delete-task', 'toggle-reminder'],
}
</script>