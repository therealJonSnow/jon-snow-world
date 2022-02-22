<template>
  <div v-if="posts.length > 0" class="page">
    <div class="banner">
      <Banner>
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

    <div >
      <Contact />
    </div>

    <div class="container container--social">
      <Social />
    </div>
  </div>
</template>

<script>

import Banner from '../../components/banner.vue'
import Contact from '../../components/contact.vue'
import Social from '../../components/social.vue'
import Card from '../../components/card.vue'

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
    console.log(this.posts)
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
