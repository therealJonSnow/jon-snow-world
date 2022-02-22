<template>
  <nuxt-link class="block" :to="`/blog/${ post.slug }`">
    <div class="card__title font-display">
      <span v-if="post.category" class="z-50 card__category">{ {{ post.category }} }</span>
      {{ post.title }}
    </div>
    <div class="card__content">
      {{ post.description }}
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
  &__title {
    @apply shadow-sm;
    
    font-size: 3rem;
    line-height: 1;
    text-align: left;
    position: relative;
    background-color: var(--secondary);
    // border-radius: 20px;
    padding: 2.5rem 1.5rem;
    margin-bottom: 1.5rem;

    // &::after {
    //   display: none;
    //   pointer-events: none;
    //   border-radius: 20px;
    //   content: '';
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   border: 2px solid var(--outline);
    //   left: -0.6rem;
    //   top: -1rem;
    // }

  }
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
