<template>
	<div class="rectangle" >
		<svg class="rectangle__block" :width="width" :height="height" :style="styleBlock" :class="{ 'rectangle__block--middle': middle }">
			<rect class="rectangle__block__item" :fill="color" width="100%" height="100%"/>
		</svg>
		<svg class="rectangle__outline"  :width="width" :height="height" :style="styleOutline" :class="{ 'rectangle__outline--middle': middle }">
			<rect class="rectangle__outline__item" width="100%" height="100%"/>
		</svg>
		
	</div>

</template>

<style lang="scss" scoped>

.rectangle {
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -10;
}

.rectangle__block, .rectangle__outline {
    position: absolute;
    vector-effect: non-scaling-stroke;
    z-index: -10;
}

.rectangle__block {     
    stroke: transparent;
    stroke-width: 0px;

    &--middle {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -40%) rotate(-32deg);

        @media (max-width: 575px) {
            transform: translate(-50%, -47%) rotate(0);
            width: 100%;
        }
    }
}

.rectangle__outline {
    fill: none;
    stroke: var(--outline);
    stroke-width: 4px;
    transform: translate(1.5rem, -1.5rem);

    &--middle {
        left: 50%;
        top: 50%;
        transform: translate(-48.5%, -44%) rotate(-32deg);

        @media (max-width: 575px) {
            transform: translate(-46.5%, -48%) rotate(0);
            width: 100%;
        }
    }    
}
</style>

<script>
/*jshint esversion: 6 */
export default {
  name: 'rectangle',

  props: {
    color: String,
    width: String,
    height: String,
    center: String,
    top: String,
    left: String,
    middle: Boolean
  },

    computed: {
		styleBlock () {
			if(this.middle) {
				//return 'top: 50%; left: 50%; transform: translate(-50%, -40%) rotate(-32deg)';
			} else {
				return 'top: ' + this.top + 'em; left:' + this.left + ';';     		
			}
		},
		styleOutline () {
			if(this.middle) {
				//return 'top: 50%; left: 50%; transform: translate(-48%, -43%) rotate(-32deg)';
			} else {
				return 'top: ' + this.top + 'em; left:' + this.left + ';';     		
			}
		},
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
