<template>
  <header class="max-w-[1400px] mx-auto relative">
    <h1 class="bg-clip-text bg-[#1dad52] text-transparent text-center text-5xl font-bold p-10">
      <router-link to="zakathome">
        Masjid Al-Istiqomah
      </router-link>
    </h1>

    <!--Time -->
    <div class="absolute top-5 left-5">
      <h1 class="text-2xl font-extrabold text-[#1dad52]">{{ time }}</h1>
    </div>
    <!--End Time -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      time: null,
    }
  },

  beforeUnmount() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Navigator.language = system locale.
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    // 1000 milisec = 1 sec
    }, 1000)
  }
}
</script>