<template>
  <div class="page relative ">
    <!-- <absolute :top="'906px'" :left="'120%'">
      <Tri
        :scale="'(0.1)'"
        :top="'0'"
        :left="'0'"
        :width="'2rem'"
        :center="'2rem'"
        :color="'var(--secondary)'"
      />
    </absolute> -->

    <div class="banner">
      <Banner :dot="true" :show-s="true" :full-stop="true">
        <template slot="title">
          <div class="span-highlight">About_Me</div>
        </template>
        <template slot="subtitle-top">
          <!-- A brief guide -->
        </template>
      </Banner>
    </div>

    <div class="container container--mt">
      <!-- <h4 class="contianer__header--indent" style="opacity: 0;">
        he's got a <span class="span-highlight">name</span>
      </h4>
      <Subtitle :color="'transparent'">
        Jonny_Snow
      </Subtitle> -->
      <p class="container__text">
        Hi there! I'm Jonny, a <span class="span-highlight">Creative Front-end Developer</span> and creative based out of Bristol, UK.
      </p>
      <p class="container__text">
        In my spare time I like making <span class="span-highlight">things.</span> Creating or developing my skills to bring ideas to life. Adding those extra touches that make peoples heads turn and take notice.
      </p>
      <p />

      <h4 class="contianer__header--indent">
        in emergency: <span class="span-highlight">add saltwater </span>
      </h4>
      <Subtitle :color="'transparent'">
        The_Essentials
      </Subtitle>
      <ul class="bullets bullets--mb">
        <Bullet :yellow="true">
          Water. Preferably in large amounts. Doesn't matter if its frozen as long as I'm up a mountain.
        </Bullet>
        <Bullet :yellow="true">
          Boardsports for sanity: windsurfing, skating, snowboarding, surfing, kitesurfing ...
        </Bullet>
        <Bullet :yellow="true">
          Campervan for those weekend trips; boards don't carry themselves
        </Bullet>
        <Bullet :yellow="true">
          Peanut butter.
        </Bullet>
      </ul>

      <h4 class="contianer__header--indent">
        a <span class="span-highlight">mixed bag </span>
      </h4>
      <Subtitle :color="'transparent'">
        My_Skillset
      </Subtitle>
      <p class="container__text">
        I am a strong communicator who enjoys working with diverse clients through a pragmatic and flexible process to deliver beautiful optimised digital solutions.
      </p>
      <p class="container__text">
        As a marine engineer turned developer I'm not your usual suspect, but if you need a website built underwater I'm your guy.
      </p>
      <p />
      <ul class="bullets bullets--mb">
        <Bullet :yellow="true">
          Strong HTML, CSS and JavaScript
        </Bullet>
        <Bullet :yellow="true">
          Experience with Vue, Nuxt.js and Laravel
        </Bullet>
        <Bullet :yellow="true">
          A love of css animations and ui transitions
        </Bullet>
        <Bullet :yellow="true">
          Comfortable with MODX and Directus CMS
        </Bullet>
        <Bullet :yellow="true">
          Knowledge of Git and Sourcetree
        </Bullet>
        <Bullet :yellow="true">
          MEng in Marine Engineering from Southampton University
        </Bullet>
      </ul>
      <p class="container__text" />
      <p />
    </div>

    <div>
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
import Bullet from '../components/bullet.vue'
import Contact from '../components/contact.vue'
import Social from '../components/social.vue'
import Subtitle from '../components/subtitle.vue'
import Tri from '../components/tri.vue'

export default {
  name: 'About',

  components: {
    Absolute,
    Banner,
    Bullet,
    Contact,
    Social,
    Subtitle,
    Tri
  },

  props: {
  },

  data () {
    return {
      // page: [],
      profile: '',
      title: 'All about me'
    }
  },
  mounted () {
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
