<template>
	<div class="z-50 fixed top-16 right-0 lg:px-8 py-3 px-4 bg-secondary shadow-sm">
        <img @click="showPrimary = !showPrimary" class="cursor-pointer w-5 h-5 mt-0.5" src="../assets/images/palette-solid.svg"/>
        <!-- <div  class="theme__icon">
            <div class="icon__section" :style="{ 'background-color': colors[0] }"></div>
            <div class="icon__section" :style="{ 'background-color': colors[1] }"></div>
            <div class="icon__section" :style="{ 'background-color': colors[2] }"></div>
            <div class="icon__section" :style="{ 'background-color': colors[3] }"></div>
        </div> -->
        <div class="flex flex-col justify-center items-center">
          <div
            v-for="(color) in colors"
            :key="color"
            :class="{
                active: showPrimary,
                'pointer-events-none': !showPrimary
            }"
            :style="{ 'background-color': color }"
            @click="colorPrimary(); showPrimary = !showPrimary; showSecondary = !showSecondary;"
            class="theme__item shadow-sm"
          ></div>
        </div>
        <div class="themes flex flex-col">
          <div
            v-for="(color) in colors"
            :key="color"
            :class="{
                active: showSecondary,
                'pointer-events-none': !showSecondary
            }"
            :style="{ 'background-color': color }"
            @click="colorSecondary(); showSecondary = !showSecondary;"
            class="theme__item shadow-sm"
          ></div>
        </div>
	</div>

</template>

<style lang="scss" scoped>
    .theme__item {
        border-radius: 50%;
        cursor: pointer;
        height: 1rem;
        margin: -0.5rem 0;
        opacity: 0;
        transition: margin 0.5s ease, opacity 0.5s ease;
        width: 1rem;

        &:first-of-type.active {
            margin-top: 1rem
        }

        &.active {
            margin: 0.5rem 0;
            opacity: 1;
        }
    }
    .theme__icon {
        border-radius: 50%;
        display: flex;
        flex-wrap: wrap;
        height: 1rem;
        margin: 0.5rem 0;
        overflow: hidden;
        width: 1rem;

        .icon__section {
            width: 50%;
        }
    }
</style>

<script>
    /*jshint esversion: 6 */
    export default {
        name: 'themes',

        data: function() {
            return {
                colors: ['#C3FFFA', '#FFCE80', '#ff8fae', '#96f5c0', '#Cda8ff', '#ff7272'],
                showPrimary: false,
                showSecondary: false,
            }
        },

        methods: {
            colorPrimary: function() {
                var targetColor = event.target.style.backgroundColor;
                document.documentElement.style.setProperty('--primary', targetColor);
            },
            colorSecondary: function() {
                var targetColor = event.target.style.backgroundColor;
                document.documentElement.style.setProperty('--secondary', targetColor);
            }
        }

}
</script>
