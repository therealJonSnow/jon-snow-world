<template>
    <div class="subtitle mb-8 relative" :class="{ 'mt-28 mb-20': margin }">   
        <div class="absolute top-1/2 h-[42%] w-[104%] -z-10" :class="color !== 'transparent' ? 'shadow-sm' : ''" :style="styleHighlight"></div>
        <div class="text-5xl leading-10 lg:leading-none"><slot/></div>
    </div>

</template>

<script>
export default {
  name: 'subtitle',

  props: {
    color: String,
    margin: Boolean
  },

    computed: {
        style () {
            return 'top: ' + this.top + 'em; left:' + this.left + 'em;';
        },
        styleHighlight () {
            return 'background-color:' + this.color + ';';
        }

    },
}
</script>
