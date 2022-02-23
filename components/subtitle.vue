<template>
    <div class="mb-8 w-fit relative font-display" :class="{ 'mt-28 mb-20': margin }">   
        <div
            class="absolute top-1/2 h-[42%] w-[104%] -z-10"
            :class="{
                'bg-primary': color === 'blue',
                'bg-secondary': color === 'orange'
            }"
        />
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
        }
    },
}
</script>
