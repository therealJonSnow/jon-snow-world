<template>
  <div v-if="posts.length > 0" class="page">
    <div class="banner">
      <Banner>
        <template slot="title">
          <span class="span-highlight">bits</span> 'n' <span class="span-highlight">blogs </span>
        </template>
      </Banner>
    </div>

    <div class="blog-grid">
      <Card
        v-for="post in posts"
        :key="post.title"
        :post="post"
      />
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
    return {
      posts
    }
  },
  methods: {
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
