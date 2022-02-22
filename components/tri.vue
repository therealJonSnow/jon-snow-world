<template>

<svg class="triangle" width="100" height="100" viewBox="0 0 729.743 809.064">

  <g class="triangle__g" transform="translate(-791.129 -1172.468)" >
    <path class="triangle__path triangle__path--block" :fill="color" d="M338,0,676,586H0Z" :transform="'matrix(-0.208, -0.978, 0.978, -0.208, 947.677, 1981.532) scale' + scale"/>
    <g class="triangle__g" transform="matrix(-0.208, -0.978, 0.978, -0.208, 931.677, 1955.532)" >
      <path class="triangle__path triangle__path--outline cls-3" d="M338,0,676,586H0Z" :style="'transform: scale' + scale" />
      <!-- <path class="cls-4" d="M 338 4.0029296875 L 3.46246337890625 584 L 672.5375366210938 584 L 338 4.0029296875 M 338 0 L 676 586 L 0 586 L 338 0 Z"/> -->
    </g>
  </g>

</svg>

</template>

<style lang="scss" scoped>
.triangle {
    position: absolute;
    right: 285px;
    top: 23em;
    transform: scale(10);
    z-index: -10;

    @media (max-width: 1000px) {
        right: 255px;
        transform: scale(9);
    }

    @media (max-width: 700px) {
        right: 233px;
        top: 28rem;
        transform: scale(8);
    }

    @media (max-width: 475px) {
        right: 180px;
        top: 25rem;
        transform: scale(6.5);
    }
}

.triangle__path, .triangle__g {
    vector-effect: non-scaling-stroke;

    &--outline {
        fill: none;
        stroke: var(--outline);
        stroke-width: 0.35px;
        vector-effect: non-scaling-stroke;
    }

    &--block {
        @apply shadow-sm;
        stroke: transparent;
        stroke-width: 0px;
    }
}

.triangle__path {
    vector-effect: non-scaling-stroke;
}
</style>

<script>
/*jshint esversion: 6 */
export default {
  name: 'tri',

  props: {
    color: String,
    width: String,
    center: String,
    top: String,
    left: String,
    scale: String
  },

    computed: {

        styleBlock () {
            return 'fill:' + this.color + '; width:' + this.width + '; padding-top:' + this.width + ';';
        },
        styleOutline () {

            return 'width:' + this.width + '; padding-top:' + this.width + ';';
        }

    },
}
</script>

