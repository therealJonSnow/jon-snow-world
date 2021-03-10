<template>
    <div class="page">

        <PhotoModal :closeModal="modalVisible = false" :modalSrc="modalSrc" :modalVisible="modalVisible"></PhotoModal>

        <absolute v-parallax="0.3" :top="'200px'" :left="'70%'">
            <Circ :top="'0'" :left="'0'" :width="'1rem'" :center="'100px'" :color="'var(--primary)'"></Circ>
        </absolute>
        <absolute v-parallax="0.1" :top="'125rem'" :left="'0%'" :height="'300px'" :width="'300px'">
            <Circ :top="'0'" :left="'0'" :width="'7rem'" :center="'150px'" :color="'var(--primary)'"></Circ>
        </absolute>
        <absolute v-parallax="0.4" :top="'150px'" :left="'120%'">
            <Tri :scale="'(0.1)'" :top="'0'" :left="'0'" :width="'2rem'" :center="'2rem'" :color="'var(--secondary)'"></Tri>
        </absolute>

        <div v-parallax="0" class="banner">
            <Banner :dot="false" :showS="true">
                <template slot="title"><span class="span-highlight">Gallery</span></template>
                <template slot="subtitle-top">Here's some</template>
                <template slot="subtitle-btm">I've been working on.</template>
            </Banner>
        </div>

        <div v-parallax="0" class="container container--mt">                
                <Rectangle class="" :top="'-3'" :left="'-3em'" :width="'80%'" :height="'100%'" :color="'var(--primary)'" :middle="true"></Rectangle>
                <Subtitle :margin="true" :color="'var(--secondary)'">Things_Finalfinal_1/*</Subtitle>
                <div class="container__row ">
                    <!-- <div v-for="image in page.GalleryList.GalleryItem" @click="triggerModal" class="container__row__item">
                        <img :src="image.Image.url" :alt="image.Title">
                        <button class="container__button container__button--small">view</button> 
                    </div> -->
                </div>
        </div>

        <div v-parallax="0">  
            <Contact/>
        </div>

        <div class="container container--social">  
            <Social></Social>
        </div>

    </div>

</template>

<script>
// import pageQuery from '~/apollo/queries/page'

import Absolute from '../components/absolute.vue'
import Banner from '../components/banner.vue'
import Bullet from '../components/bullet.vue'
import Contact from '../components/contact.vue'
import Circ from '../components/circ.vue'
import PhotoModal from '../components/photoModal.vue'
import Rectangle from '../components/rectangle.vue'
import Social from '../components/social.vue'
import Subtitle from '../components/subtitle.vue'
import Tri from '../components/tri.vue'

export default {
    name: 'Gallery',

    props: {
    },

    components: {
        Absolute,
        Banner,
        Bullet,
        Contact,
        Circ,
        PhotoModal,
        Rectangle,
        Social,
        Subtitle,
        Tri,
    },

    data: function () {
        return {
            modalSrc: '',
            modalVisible: false,
            page: [],
            title: 'Gallery of art and animation'
        }
    },

    head () {
        return {
            title: this.title,
        }
    },

    // apollo: {
    //     page: {
    //         prefetch: true,
    //         query: pageQuery
    //     }
    // },

    methods: {
        triggerModal: function(event) {
            var target = event.target;
            var parent = target.closest('.container__row__item');
            var child = parent.firstElementChild.getAttribute('src');

            var modal = document.getElementById("photo-modal");
            this.modalSrc = child;
            this.modalVisible = true;
        },
    },

    mounted() {
    }
}
</script>
