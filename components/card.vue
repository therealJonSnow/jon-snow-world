<template>
  <nuxt-link class="block" :to="`/blog/${ post.slug }`">
    <div class="relative px-6 py-10 bg-secondary text-5xl mb-3 md:mb-6">
      <span v-if="post.category" class="z-10 absolute text-2xl right-6 top-4 font-display">{ {{ post.category }} }</span>
      <div class="font-display mb-4">{{ post.title }}</div>
      <div class="text-xl">{{ post.description }}</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Card',

  props: {
    post: Object
  },

  computed: {
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.card {

  &__content {
    @apply shadow-sm;

    font-size: 1.25rem;
    // font-family: var(--fontSecondary);
    text-align: left;
    position: relative;
    background-color: var(--primary);
    // border-radius: 20px;
    padding: 1.5rem 1.5rem;

    &::after {
      display: none;
      pointer-events: none;
      border-radius: 20px;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid var(--outline);
      left: -0.6rem;
      top: -1rem;
    }
  }

  &__category {
    position: absolute;
    font-size: 1.2rem;
    right: 1.5rem;
    top: 1rem;
  }
}
</style>
