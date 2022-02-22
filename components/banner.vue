<template>
  <div class="mt-4 mb-24 lg:mx-32 xl:mx-0">
    <div class="">
      <!-- <div class="rect-container">
        <div class="rect rect--block shadow-sm" />
        <div class="rect rect--outline" />
      </div> -->
      <h1 class="font-display p-0 w-fit text-6xl lg:text-8xl ">
        <slot name="title" />
      </h1>
    </div>
    <div class="mt-10">
      <h3 class="text-4xl font-normal">
        <slot name="subtitle-top" />
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',

  props: {
  }

}
</script>

<style lang="scss">
.rect-container {
  margin-right: 3rem;
  position: relative;
  height: 100%;

  .rect {
    border-radius: 20px;
    box-sizing: border-box;
    height: 6.25rem;
    position: absolute;
    width: 3rem;

    &--outline {
      border: 2px solid var(--outline);
      left: -0.5rem;
      top: -0.4rem;
    }

    &--block {
      background-color: var(--secondary);
      left: 0;
      top: 0.4rem;
    }
  }
}
</style>
