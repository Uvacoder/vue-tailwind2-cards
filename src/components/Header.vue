<template>
    <header>
        <h1 class="bg-gray-500">{{ title }}</h1>
        <!-- Tambahkan komponen Button -->
        <!-- : itu sama dengan v-bind -->
        <Button
        v-show="homePage" 
        @btn-click="$emit('show-tasks')"
        :text="showAddStatus ? 'Tutup' : 'Tambah' " 
        :btnBg=" showAddStatus ? 'bg-red-500' : 'bg-green-500' " 
        btnColor="text-white" 
        />
    </header>
</template>

<script>
// Import file Button
import Button from './Button'

export default {
    name: 'Header',
    components: {
        // Deklarasi file Button
        Button,
    },
    computed: {
        homePage(){
            // Kalau router path = /
            if(this.$route.path === '/'){
                return true 
            } else {
                return false
            }
        }
    },
    emits: ['show-tasks'],

    // Ambil data passing (props) dari main
    // versi 1
        // props: ['title']

    // versi 2
        props: {
            // kasih tipe
            title: String,
            showAddStatus: Boolean,
        }

    // versi 3
        // props: {
        //     title: {
                    // kasih tipe
        //         type: String,
                    // Kasih value default
        //         default: "Hello World",
        //     }
        // }
}
</script>