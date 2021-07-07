<template>
  <div class="card">
    <div class="card__title">
      <span v-if="post.categories[0]" class="card__category">{ {{ post.categories[0].Name }} }</span>
      {{ post.Title }}
    </div>
    <div class="card__content">
      {{ post.Content }}
    </div>
  </div>
</template>

<script>
/* jshint esversion: 6 */
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
    font-size: 3rem;
    line-height: 1;
    text-align: left;
    position: relative;
    background-color: var(--secondary);
    border-radius: 20px;
    padding: 2.5rem 1.5rem;
    margin-bottom: 2rem;

    &::after {
      pointer-events: none;
      border-radius: 20px;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid $outline;
      left: -0.6rem;
      top: -1rem;
    }
  }
  &__content {
    font-size: 1.25rem;
    font-family: $fontSecondary;
    text-align: left;
    position: relative;
    background-color: var(--primary);
    border-radius: 20px;
    padding: 1.5rem 1.5rem;

    &::after {
      pointer-events: none;
      border-radius: 20px;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid $outline;
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
