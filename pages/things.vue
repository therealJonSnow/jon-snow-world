<template>
  <div class="page">
    <!-- <PhotoModal :close-modal="modalVisible = false" :modal-src="modalSrc" :modal-visible="modalVisible" /> -->

    <!-- <absolute v-parallax="0.3" :top="'200px'" :left="'70%'">
      <Circ :top="'0'" :left="'0'" :width="'1rem'" :center="'100px'" :color="'var(--primary)'" />
    </absolute>
    <absolute v-parallax="0.1" :top="'135rem'" :left="'0%'" :height="'300px'" :width="'300px'">
      <Circ :top="'0'" :left="'0'" :width="'7rem'" :center="'150px'" :color="'var(--primary)'" />
    </absolute>
    <absolute v-parallax="0.4" :top="'390px'" :left="'95%'">
      <Tri
        :scale="'(0.1)'"
        :top="'0'"
        :left="'0'"
        :width="'2rem'"
        :center="'2rem'"
        :color="'var(--secondary)'"
      /> -->
    <!-- </absolute> -->

    <div v-parallax="0" class="banner">
      <Banner :dot="false" :show-s="true" :full-stop="false" :things="false">
        <template slot="title">
          Here's_Some_<span class="span-highlight">Things</span>
        </template>
        <!--                 <template slot="subtitle-top">What kind of</template>
                <template slot="subtitle-btm">can I help you create?</template>
 -->
      </Banner>
    </div>

    <!-- <div v-parallax="0.2" class="container">
      <Circ :top="'-14'" :left="'-4'" :width="'4rem'" :center="'8rem'" :color="'var(--primary)'" />
      <Circ :top="'-5.5'" :left="'-6'" :width="'22rem'" :center="'25rem'" :color="'var(--secondary)'" />
      <Subtitle :color="'var(--primary)'">
        Skate_For_Surf
      </Subtitle>
      <ul class="bullets">
        <Bullet>
          When I was 16 I had the idea of skateboarding from Southend-on-sea (my hometown) to Newquay for a surf
        </Bullet>
        <Bullet>
          At 21 I finally did it; in aid of Surfers Against sewage
        </Bullet>
        <Bullet>
          370 miles, 11 days and over £1000 later I made it to Newquay, broken, and realising what an amazing invention the combustion engine is
        </Bullet>
      </ul>
      <router-link to="/things/skate-for-surf" class="nav-link button">
        <button class="button--no-margin">
          coming soon
        </button>
      </router-link>
    </div>

    <div v-parallax="0" class="container container--right">
      <Tri
        :scale="'(1)'"
        :top="'21em'"
        :left="'150px'"
        :width="'19rem'"
        :center="'25.1rem'"
        :color="'var(--primary)'"
      />
      <Subtitle :color="'var(--secondary)'">
        Creating_Crush
      </Subtitle>
      <ul class="bullets bullets--alt">
        <Bullet :yellow="true">
          Feburary 2019, Beth and I bought our first van ( lifegoal &#9989; )
        </Bullet>
        <Bullet :yellow="true">
          Since then we have been converting it into a camper, slowly but surely
        </Bullet>
        <Bullet :yellow="true">
          I haven't been very good at recording our process so I'm going to start doing so here
        </Bullet>
        <router-link to="/gallery" class="nav-link button">
          <button class="button button--no-margin">
            coming soon
          </button>
        </router-link>
      </ul>
    </div> -->

    <div v-parallax="0" class="container container--mt">
      <!-- <Rectangle
        class=""
        :top="'10'"
        :left="'-3em'"
        :width="'80%'"
        :height="'100%'"
        :color="'var(--primary)'"
        :middle="true"
      /> -->
      <Subtitle :margin="true" :color="'var(--secondary)'">
        Things_Finalfinal_1/*
      </Subtitle>

      <div class="container__row container__row--gallery ">
        <!-- <div v-for="image in page.GalleryList.GalleryItem.slice(0, 4)" @click="triggerModal" class="container__row__item">
                        <img :src="image.Image.url" :alt="image.Title">
                        <button class="container__button container__button--small button">view</button>
                    </div> -->
        <router-link to="/gallery" class="nav-link">
          <button class="container__button container__button">
            see more
          </button>
        </router-link>
      </div>
    </div>

    <div id="contact" v-parallax="0">
      <Contact />
    </div>

    <div class="container container--social">
      <Social />
    </div>
  </div>
</template>

<script>
// import pageQuery from '~/apollo/queries/page'

// import Absolute from '../components/absolute.vue'
import Banner from '../components/banner.vue'
// import Bullet from '../components/bullet.vue'
import Contact from '../components/contact.vue'
// import Circ from '../components/circ.vue'
// import PhotoModal from '../components/photoModal.vue'
import Rectangle from '../components/rectangle.vue'
import Social from '../components/social.vue'
import Subtitle from '../components/subtitle.vue'
import Tri from '../components/tri.vue'

export default {
  name: 'Things',

  components: {
    // Absolute,
    Banner,
    // Bullet,
    Contact,
    // Circ,
    // PhotoModal,
    Rectangle,
    Social,
    Subtitle,
    Tri
  },

  props: {
    // msg: String
  },

  data () {
    return {
      modalSrc: '',
      modalVisible: false,
      page: [],
      title: 'I like making things'
    }
  },

  mounted () {
  },

  // apollo: {
  //     page: {
  //         prefetch: true,
  //         query: pageQuery
  //     }
  // },

  methods: {
    triggerModal (event) {
      const target = event.target
      const parent = target.closest('.container__row__item')
      const child = parent.firstElementChild.getAttribute('src')

      //   const modal = document.getElementById('photo-modal')
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
