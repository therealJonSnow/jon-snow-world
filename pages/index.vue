<template>
  <div class="page">
    <!-- <component
      :is="dropper"
      ref="dropper"
    /> -->
    <Banner>
      <template slot="title">
        Hi_I'm_<span class="span-highlight">Jonny.</span><span class="drop-shadow-sm">&#128075;</span>
      </template>
      <template slot="subtitle-top">
        A front-end web developer who likes making things
      </template>
    </Banner>
    <div class="container">
      <div class="blog-grid">
        <Card
          v-for="post in posts"
          :key="post.title"
          :post="post"
        />
      </div>
    </div>
    <!-- <a :href="`/blog/${post.slug}`" v-for="post in posts" :key="post.title">
      <h2 class="mt-2 text-3xl font-semibold">
        {{ post.title }}
      </h2>
      <nuxt-content :document="{ body: post.excerpt }" />
    </a> -->
  </div>
</template>

<script>
import Banner from '../components/banner.vue'
import Card from '../components/card.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Card,
    // Dropper: () => import('../components/dropper.vue')
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
  data () {
    return {
      dropper: '',
      images: '',
      title: 'Jonny Snow - Bristol Based Front End Web Developer'
    }
  },
  mounted () {
    // this.$nextTick(function () {
    //   this.dropper = 'Dropper'
    // })
  },
  methods: {
    closeModal (event) {
      const modal = document.getElementById('photo-modal')
      modal.classList.remove('visible')
    },
    nudgeNav () {
      const navMenu = document.getElementById('navMenu')
      setTimeout(function () {
        navMenu.classList.add('active')
      }, 1500)
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

</style>
