<template>
  <div class="mt-4 xl:mb-24 mb-10 lg:mb-16 mx-auto w-fit">
    <h1 class="sm:mx-auto w-fit relative font-display p-0 text-6xl lg:text-8xl ">
      <slot name="title" />
    </h1>
    <h3 v-if="this.$slots['subtitle-top']" class="mt-10 text-2xl font-normal">
      <slot name="subtitle-top" />
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Banner',

  props: {
  }

}
</script>