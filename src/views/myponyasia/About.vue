<template>
  <div class="bg-trueGray-800 min-h-screen max-h-full text-white">

    <!-- Header -->
    <Header />
    <!-- End Header -->

    <!-- Content -->
    <main class="max-w-[90rem] mx-auto text-center py-10">

      <!-- Social Media Section -->
      <p class="text-2xl font-bold">Follow Us On:</p>
      <div class="flex flex-wrap justify-center my-5 space-x-3">
        <a href="https://facebook.com/MyPonyAsia" class="flex mb-2 mr-2 items-center p-1.5 px-4 bg-trueGray-500 rounded-full space-x-1.5 group hover:opacity-80 duration-150">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 group-hover:text-blue-500 duration-150" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
          <p class="font-semibold text-lg">Facebook</p>
        </a>
        <a href="https://discord.gg/khXCyjYX" class="flex mb-2 mr-2 items-center p-1.5 px-4 bg-trueGray-500 rounded-full space-x-1.5 group hover:opacity-80 duration-150">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 group-hover:text-blue-500 duration-150" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"/>
            <path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"/>
          </svg>
          <p class="font-semibold text-lg">Discord</p>
        </a>
      </div>
      <!-- End Social Media Section -->

      <!-- Donate Section -->
      <p class="text-2xl font-bold">Support By Donate</p>
      <div class="flex justify-center my-5 space-x-3">
        <a href="https://ko-fi.com/myponyasia" class="flex items-center p-1.5 px-5 bg-trueGray-500 rounded-full space-x-1.5 group hover:opacity-60 duration-150">
        <p class="font-semibold text-lg">Ko-fi</p>
        </a>
        <a href="https://trakteer.id/MyPonyAsia" class="flex items-center p-1.5 px-5 bg-trueGray-500 rounded-full space-x-1.5 group hover:opacity-60 duration-150">
        <p class="font-semibold text-lg">Trakteer</p>
        </a>
      </div>
      <!-- End Donate Section -->

      <!-- Contact Us Section -->
      <p class="text-2xl font-bold">Need Something? </p>
      <div class="flex justify-center my-5 space-x-3">
        <a href="mailto:admin@mail.myponyasia.com" class="flex items-center p-1.5 px-5 bg-trueGray-500 rounded-full space-x-1.5 group hover:opacity-60 duration-150">
          <p class="font-semibold text-lg">Contact Us</p>
        </a>
      </div>
      <!-- Contact Us Section -->
      
    </main>
    <!-- End Content -->

    <!-- Footer -->
    <Footer />
    <!-- End Footer -->

  </div>
</template>

<script>
import Footer from '../../components/mpa/Footer.vue'
import Header from '../../components/mpa/Header.vue'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>
