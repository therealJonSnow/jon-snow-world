<template>
  <div class="page">
    <div v-parallax="0" class="banner">
      <Banner :dot="false" :show-s="true">
        <template slot="title">
          <span class="span-highlight">bits </span> /n <span class="span-highlight">blogs </span>
        </template>
      </Banner>
    </div>

    <div class="container container--mt">
      <div class="blog-grid">
        <Card
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
        />
      </div>
    </div>

    <div v-parallax="0">
      <Contact />
    </div>

    <div class="container container--social">
      <Social />
    </div>
  </div>
</template>

<script>

import Banner from '../components/banner.vue'
import Contact from '../components/contact.vue'
import Social from '../components/social.vue'
import Card from '../components/card.vue'

export default {
  name: 'Blog',
  components: {
    Banner,
    Contact,
    Social,
    Card
  },
  props: {
  },
  async fetch () {
    this.posts = await fetch(
      'https://jon-snow-world-backend.herokuapp.com/posts'
    ).then(res => res.json())
  },
  data () {
    return {
      posts: [],
      modalSrc: '',
      modalVisible: false,
      page: [],
      title: 'Blogs n Bits'
    }
  },
  mounted () {
  },
  methods: {
    triggerModal (event) {
      const target = event.target
      const parent = target.closest('.container__row__item')
      const child = parent.firstElementChild.getAttribute('src')

      this.modalSrc = child
      this.modalVisible = true
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5.5rem 3.5rem;
  width: 100%;
}
</style>
