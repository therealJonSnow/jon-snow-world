<template>
  <div v-if="posts.length > 0" class="page">
    <div class="banner">
      <Banner>
        <template slot="title">
          <span class="span-highlight">bits</span> /n <span class="span-highlight">blogs </span>
        </template>
      </Banner>
    </div>

    <div class="container container--mt">
      <div class="blog-grid">
        <Card
          v-for="post in posts"
          :key="post.title"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script>

import Banner from '../../components/banner.vue'
import Card from '../../components/card.vue'

export default {
  name: 'Blog',
  components: {
    Banner,
    Card
  },
  props: {
  },
  data () {
    return {
      title: 'bits \'n\' blogs'
    }
  },
  async asyncData ({ $content }) {
    const posts = await $content('blogs')
      .sortBy('createdAt', 'desc')
      .fetch()
    console.log('posts', posts)
    return {
      posts
    }
  },
  methods: {
    // triggerModal (event) {
    //   const target = event.target
    //   const parent = target.closest('.container__row__item')
    //   const child = parent.firstElementChild.getAttribute('src')

    //   this.modalSrc = child
    //   this.modalVisible = true
    // }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss">
.blog-grid {
  @apply mb-32 grid grid-cols-1 md:grid-cols-2 w-full gap-y-8 md:gap-x-20 md:gap-y-14;
  // gap: 5.5rem 3.5rem;
}
</style>
