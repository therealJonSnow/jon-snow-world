---
title: Using GSAP with Vue
description: A brief guide featuring the basics along with some tips & tricks I have learn't along the way.
category: Code
---
*   [Getting Started](#getting-started)
*   [Vue Transitions](#philosophy)
*   [Page Transitions](#html)

---

GSAP, published by the guys and girls over at GreenSock, is a brilliant Javascript animation library aimed at creating fast, robust animations for the web.
As someone who uses Vue at work and in my personal projects I have spent a lot of time working out the best usage of GSAP in my projects and this is my attempt at sharing some of that information.

## Getting Started

*As a prerequisite I'm expecting some knowledge of Vue.*

For this blog I am going to use the basic Vue 3 template with vue router and our first step is to set this up. I will make use of the vue cli:

```
vue create gsap-demo-app
```

When offered the presets select Vue 3:

```
Vue CLI v4.5.11
┌──────────────────────────────────────────┐
│                                          │
│   New version available 4.5.11 → 5.0.1   │
│     Run npm i -g @vue/cli to update!     │
│                                          │
└──────────────────────────────────────────┘

? Please pick a preset: (Use arrow keys)
  test-preset ([Vue 2] node-sass, babel, pwa, router, vuex, eslint)
  Default ([Vue 2] babel, eslint)
❯ Default (Vue 3 Preview) ([Vue 3] babel, eslint)
  Manually select features
```

Now add vue router:

```
cd gsap-demo-app
yarn serve
vue add router 
```
We are setup and ready to begin!

## Basic Transitions

The most basic transition in Vue is when changing between two DOM elements, using `v-show` or `v-if` statements. For this example lets add another instance of the Vue logo and hue-rotate it so we can tell the difference. Then add a `v-if / v-else` directive modelled to a `showPinkLogo` data property.

```
<template>
  <div class="home">
    <img v-if="showGreenLogo" alt="Vue logo" src="../assets/logo.png">
    <img v-else style="filter: hue-rotate(180deg)" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      showGreenLogo: true
    }
  }

}
</script>
```
_*** work in progress ***_