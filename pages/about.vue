<template>
  <div class="page relative ">
    <Banner :dot="true" :show-s="true" :full-stop="true">
      <template slot="title">
        <div class="hidden lg:block span-highlight">About_Me</div>
        <div class="block lg:hidden span-highlight">About Me</div>
      </template>
    </Banner>
    <div class="prose lg:prose-lg xl:prose-2xl mx-auto">
      <p>
        Hi there! I'm Jonny, a <span class="span-highlight">Front-end Developer</span> and creative based out of Bristol, UK.
      </p>
      <p>
        In my spare time I like making <span class="span-highlight">things.</span> Creating or developing my skills to bring ideas to life. Adding those extra touches that make peoples heads turn and take notice.
      </p>
      <p />

      <h6 class="ml-8">
        in emergency: <span class="span-highlight">add saltwater </span>
      </h6>
      <Subtitle>
        The_<wbr>Essentials
      </Subtitle>
      <ul class="mb-12">
          <li>Water. Preferably in large amounts. Doesn't matter if its frozen as long as I'm up a mountain.</li>
          <li>Boardsports for sanity: windsurfing, skating, snowboarding, surfing, kitesurfing ...</li>
          <li>Campervan for those weekend trips; boards don't carry themselves</li>
          <li>Peanut butter.</li>
      </ul>

      <h6 class="ml-8">
        a <span class="span-highlight">mixed bag </span>
      </h6>
      <Subtitle>
        My_<wbr>Skillset
      </Subtitle>
      <p class="">
        I am a strong communicator who enjoys working with diverse clients through a pragmatic and flexible process to deliver beautiful optimised digital solutions.
      </p>
      <p class="">
        As a marine engineer turned developer I'm not your usual suspect, but if you need a website built underwater I'm your guy.
      </p>
      <p />
      <ul class="mb-12">
          <li>Strong HTML, CSS and JavaScript</li>
          <li>Experience with Vue, Nuxt.js and Laravel</li>
          <li>A love of css animations and ui transitions</li>
          <li>Knowledge of Git, GitFlow, CI & CD</li>
          <li>MEng in Marine Engineering from Southampton University</li>
      </ul>
      <Contact />
    </div>

  </div>
</template>

<script>

import Banner from '../components/banner.vue'
import Contact from '../components/contact.vue'
import Subtitle from '../components/subtitle.vue'

export default {
  name: 'About',

  components: {
    Banner,
    Contact,
    Subtitle
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
