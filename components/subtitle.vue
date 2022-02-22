<template>
    <div class="subtitle" :class="{ 'subtitle--tall': margin }">   
        <div class="subtitle__highlight " :class="color !== 'transparent' ? 'shadow-sm' : ''" :style="styleHighlight"></div>
        <div class="subtitle__title"><slot/></div>
    </div>

</template>

<style lang="scss" scoped>
.subtitle {
    margin-bottom: 2rem;
    position: relative;

    &--tall {
        margin-bottom: 5rem;
        margin-top: 7rem;
    }
}

.subtitle__title {
    // font-family: var(--fontPrimary);
    font-size: 3.25rem;
    font-weight: 300;
    text-align: left;
}

.subtitle__highlight{
    top: 50%;
    // font-family: var(--fontSecondary);
    height: 42%;
    position: absolute;
    width: 104%;
    z-index: -1;
}
</style>

<script>
/*jshint esversion: 6 */
export default {
  name: 'subtitle',

  props: {
    color: String,
    margin: Boolean
  },

    computed: {
        style () {
            return 'top: ' + this.top + 'em; left:' + this.left + 'em;';
        },
        styleHighlight () {
            return 'background-color:' + this.color + ';';
        }

    },
}
</script>
