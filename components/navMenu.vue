<template>
  <div class="z-50 fixed top-0 left-0 flex py-16">
    <!-- <svg
      class="hidden lg:block logo scale-115"
      width="60"
      height="116"
      viewBox="0 0 60 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path class="letter-bg letter-bg-s" d="M2.93994 82.9946C2.93994 123.611 57.5823 124.365 57.5823 82.9946L2.93994 55.299C2.93994 15.3381 57.5823 17.3589 57.5823 56.5659" stroke-width="3" stroke-linecap="round" />
      <path class="letter-bg letter-bg-j" d="M2.93995 53.4792C2.93995 93.5808 57.5823 95.9593 57.5823 53.9014C57.5823 31.1963 57.2106 13.7496 57.5823 3.31665L2.93994 3.31665" stroke-width="3" stroke-linecap="round" />
      <path class="letter letter-j" d="M2.12159 51.9025C2.12159 92.0042 56.764 94.3826 56.764 52.3248C56.764 29.6196 56.3923 12.1729 56.764 1.73999L2.12158 1.73999" stroke-width="3" stroke-linecap="round" />
      <path class="letter letter-s" d="M2.12158 81.4177C2.12158 122.034 56.764 122.788 56.764 81.4177L2.12158 53.7221C2.12158 13.7612 56.764 15.782 56.764 54.989" stroke-width="3" stroke-linecap="round" />
    </svg> -->
    <div id="navMenu" class="flex justify-between items-center space-x-4 shadow-sm px-4 py-2 bg-secondary font-display">
      <nuxt-link to="/" class="navMenu__item">
        home
      </nuxt-link>
      <nuxt-link to="/about" class="navMenu__item">
        about
      </nuxt-link>
      <nuxt-link to="/blog" class="navMenu__item">
        blog
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      plus: true,
      open: false
    }
  },
  methods: {
    toggleMenu () {
      const vm = this
      const nav = document.getElementById('navMenu')
      if (nav.classList.contains('active')) {
        nav.classList.remove('active')
        setTimeout(function () {
          vm.plus = !vm.plus
        }, 100)
      } else {
        nav.classList.add('active')
        setTimeout(function () {
          vm.plus = !vm.plus
        }, 100)
      }
    }
  }
}
</script>

<style lang="scss">
    .navMenu__item {
      cursor: pointer;
      font-size: 1.25rem;
      cursor: pointer;
      font-weight: 700;
      padding: 0 5px;
      position: relative;
      transition: font-weight 0.5s ease;
      z-index: 1;
      width: min-content;

      &:after {
        @apply shadow-sm;
        background-color: var(--primary);
        bottom: 11%;
        content: '';
        height: 35%;
        left: 1px;
        position: absolute;
        transition: all 0.5s ease;
        width: 0%;
        z-index: -1;
      }

      &:hover:after {
        width: 95%;
      }

      &.nuxt-link-exact-active {
        &:after {
          width: 95%;
          background-color: var(--primary);
        }
      }
    }
</style>
