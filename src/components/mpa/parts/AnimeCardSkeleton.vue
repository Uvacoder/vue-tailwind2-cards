<template >
<div v-for="(card, index) in cards" :key="index">
  <div className="relative p-2 flex flex-col w-[151px] md:w-[212px] bg-black bg-opacity-25 rounded-xl animate-pulse">
    <div className="rounded-xl bg-trueGray-600 w-[133px] md:w-[195px] h-52 md:h-[278px]"/>
    <div className="absolute p-2 bg-blue-700 text-blue-700 top-0 left-0 rounded-tl-xl font-bold text-sm cursor-default">Specials</div>
    <div className="absolute p-2 bg-blue-700 text-blue-700 top-0 right-0 rounded-tr-xl font-bold text-sm cursor-default">TBA :3</div>
    <div className="h-10 md:h-20"></div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    cards: Number,
  }
}
</script>
