<template>
    <!-- :class untuk inject ke class -->
    <button @click="onClick()" :class="[btnColor, btnBg]" class="my-5 ml-5 rounded-lg p-2 font-bold">{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    // Deklarasi props yang diterima
    props: {
        text: String,
        btnColor: String,
        btnBg: String,
    },
    methods: {
        onClick(){
            this.$emit('btn-click')
        },
    },
    emits: ['btn-click']
}
</script>