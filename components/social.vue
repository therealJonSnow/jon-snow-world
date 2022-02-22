<template>
    <div class="social">
        <a href="https://www.instagram.com/jdsn0w/" target="_blank"><p><fa :icon="['fab', 'instagram']"/></p></a>
        <a href="https://dribbble.com/itsJS" target="_blank"><p><fa :icon="['fab', 'dribbble']"/></p></a>
        <a href="https://www.linkedin.com/in/jonathan-snow-452753150/" target="_blank"><p><fa :icon="['fab', 'linkedin']"/></i></p></a>
    </div>
</template>

<style lang="scss" scoped> 
.social {
    align-items: center;
    background-color: var(--primary);
    display: flex;
    justify-content: space-around;

    a{
    	color: var(--base);
        cursor: pointer;
        font-size: 26px;
    }

    i {
        cursor: pointer;
    }
}
</style>

<script>
/*jshint esversion: 6 */
export default {
  name: 'social',
}
</script>