<template>
    <li class="bullets__item">
        <span class="bullets__item--slot" :class="[yellow ? 'yellow' : '', '']"><slot/></span>
    </li>

</template>

<style lang="scss">
.bullets {
    margin-bottom: 0;
    max-width: 39rem;
    padding-left: 18px;

    @media (max-width: 400px) {
        margin-bottom: 0;
        padding-left: 10px;
    }
}

.bullets--mb {
    margin-bottom: 2.5rem;
}

.bullets--alt {
    max-width: 32rem;
    
    @media (min-width: 1000px) {
        max-width: 32rem;
    }
}

.bullets__item {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 1.25px;
    line-height: 1.5;
    list-style: none;
    position: relative;
    margin-bottom: 15px;
    margin-left: 1rem;
    text-align: left;

    &:last-of-type {
        @media (max-width: 400px) {
            margin-bottom: 0;
        }
    }
}

.bullets__item--slot:before {
    @apply shadow-sm;
    background-color: var(--primary);
    border-radius: 50%;
    content: '';
    height: 1.2rem;
    left: -31px;
    position: absolute;
    width: 1.2rem;
    top: 0.7rem;
}

.bullets__item--slot:after {
    border: 2px solid var(--outline);
    border-radius: 50%;
    content: '';
    height: 1.2rem;
    position: absolute;
    left: -28px;
    top: 0.45rem;
    width: 1.2rem;
}

.bullets__item--slot.yellow:before {
    background-color: var(--secondary);
    border-radius: 50%;
    content: '';
    height: 1.2rem;
    left: -31px;
    position: absolute;
    top: 0.6rem;
    width: 1.2rem;
}

.bullets__item--slot .span-highlight {
    position: relative;

    span:before {
        background-color: var(--primary);
        bottom: 0.5rem;
        content: '';
        height: 1rem;
        position: absolute;
        width: 100%;
        z-index: -1;
    }
}
</style>

<script>
/*jshint esversion: 6 */
export default {
  name: 'subtitle',

  props: {
    yellow: Boolean,
  },

    computed: {

    },
  created() {
    // var circ = document.getElementsByClassName('circ');
    // console.log(circ);
    // console.log(this.top);
    // circ.style.top = this.top;
    // circ.style.left = this.left;
  }
}
</script>
