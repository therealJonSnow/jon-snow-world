<template>
  <div class="page">
    <PhotoModal :close-modal="modalVisible = false" :modal-src="modalSrc" :modal-visible="modalVisible" />

    <div v-parallax="0" class="banner">
      <Banner :dot="false" :show-s="true">
        <template slot="title">
          <span class="span-highlight">blog /n bits</span>
        </template>
      </Banner>
    </div>

    <div v-parallax="0" class="container container--mt">
      <Subtitle :margin="true" :color="'var(--secondary)'">
        Things_Finalfinal_1/*
      </Subtitle>
      <div class="container__row ">
        <div class="container__row__item">
          <a href="https://galaxy-maker.netlify.app">Galaxy Maker</a>
          <a href="https://3d-avo.netlify.app">3D Hotspots</a>
        </div>
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

import Absolute from '../components/absolute.vue'
import Banner from '../components/banner.vue'
import Contact from '../components/contact.vue'
import Circ from '../components/circ.vue'
import PhotoModal from '../components/photoModal.vue'
import Social from '../components/social.vue'
import Subtitle from '../components/subtitle.vue'
import Tri from '../components/tri.vue'

export default {
  name: 'Gallery',
  components: {
    Absolute,
    Banner,
    Contact,
    Circ,
    PhotoModal,
    Social,
    Subtitle,
    Tri
  },
  props: {
  },
  async asyncData ({ $axios }) {
    const posts = await $axios.$get('http://localhost:1337/posts')
    return { posts }
  },
  data () {
    return {
      modalSrc: '',
      modalVisible: false,
      page: [],
      title: 'Gallery of art and animation'
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
