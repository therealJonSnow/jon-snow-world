<template>
  <div class="page">
    <Banner>
      <template slot="title">
        <span class="span-highlight">{{post.title}}</span>
      </template>
    </Banner>
    <nuxt-content
      :document="post"
      class=" mb-36 prose lg:prose-lg xl:prose-2xl mx-auto"
    />
  </div>
</template>
<script>
import Banner from '../../components/banner.vue'
// import Contact from '../../components/contact.vue'
// import Social from '../../components/social.vue'

export default {
  name: 'Blog',
  components: {
    Banner
  },
  props: {
  },
  async asyncData ({ $content, params }) {
    const post = await $content('blogs', params.slug).fetch()
    return { post } 
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        { hid: 'og:description', property: 'og:description', content: this.post.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.description }
      ]
    }
  },
  data () {
    return {
    }
  }
}
</script>

