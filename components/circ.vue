<template>

    <svg class="circle-containter" :style="style" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle" :class="styleBlock" :fill="color" :cx="center" :cy="center" :r="width" preserveAspectRatio="xMidYMid meet"/>
        <circle class="circle outline" :cx="center" :cy="center" :r="width" preserveAspectRatio="xMidYMid meet"/>
    </svg>

</template>

<style lang="scss">
.circle-containter {
    height: 200%;
    position: absolute;
    width: 200%;
    z-index: -10;
}

.circle {
    &.outline {
        fill: none;
        stroke: var(--outline);
        stroke-width: 2px;
        transform: translate(1%, -1.5%);
    }

    &.block {
        fill: none;
        stroke: transparent;
        stroke-width: 0px;
    }
}
</style>

<script>
/*jshint esversion: 6 */
export default {
  name: 'circ',

  props: {
    color: String,
    width: String,
    center: String,
    top: String,
    left: String
  },

    computed: {
        style () {
            return 'top: ' + this.top + 'em; left:' + this.left + 'em;';
        },
        styleBlock () {
            return 'fill:' + this.color + '; width:' + this.width + '; padding-top:' + this.width + ';';
        },
        styleOutline () {

            return 'width:' + this.width + '; padding-top:' + this.width + ';';
        }

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

