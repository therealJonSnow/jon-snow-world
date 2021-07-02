<template>
  <div class="page">
    <div class="banner">
      <Banner :dot="true" :show-s="true" :full-stop="true">
        <template slot="title">
          Hi_I'm_<span class="span-highlight">Jonny.</span>
        </template>
        <template slot="subtitle-top">
          <!-- A front-end web developer who likes making -->
          SITE UNDER CONSTRUCTION
        </template>
      </Banner>
    </div>
    <component
      :is="dropper"
      ref="dropper"
    />
  </div>
</template>

<script>
import Banner from '../components/banner.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Dropper: () => import('../components/dropper.vue')
  },
  data () {
    return {
      dropper: '',
      images: '',
      title: 'Jonny Snow - Hampshire Based Front End Web Developer'
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.dropper = 'Dropper'
    })
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
