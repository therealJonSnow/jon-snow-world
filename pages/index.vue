<template>
  <div class="page h-full">
    <component
      :is="dropper"
      ref="dropper"
    />
    <Banner>
      <template slot="title">
        Hi_I'm_<span class="span-highlight block sm:inline">Jonny.</span>
        <span class="hidden sm:inline-block spacer w-0 sm:w-24 lg:w-32"></span>
        <div class="absolute top-1/2 -right-1/3 w-32 lg:w-48 transition-transform duration-500 hover:scale-110 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-full rotate-[-10deg] drop-shadow-sm">
          <img
            :style="'transform: rotate(' + headRotation + 'deg) scale(3)'"
            id="main-head"
            class="cursor-pointer"
            ref="head"
            src="../assets/images/Outline_Face.svg"
          />
        </div>
      </template>
      <template slot="subtitle-top">
        A front-end web developer who likes making things
      </template>
    </Banner>
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
import Banner from '../components/banner.vue'
import Card from '../components/card.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Card,
    Dropper: () => import('../components/dropper.vue')
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
      title: 'Jonny Snow - Bristol Based Front End Web Developer',
      headRotation: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.dropper = 'Dropper'
    })
    document.addEventListener('mousemove',  this.updateHeadPosition)
  },
  methods: {
    updateHeadPosition (e) {
      console.log(e.x)
      this.headRotation = ((e.screenX / window.innerWidth) + 0.5) * -45
    },
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
