<template>
    <div class="absolute bottom-0 space-x-16 left-1/2 -translate-x-1/2 social shadow-sm px-6 py-3">
        <a class="flex items-center justify-center" href="https://www.instagram.com/its_jonny_snow/" target="_blank">
            <img class="w-8 h-8" src="../assets/images/instagram-brands.svg"/>
        </a>
        <a class="flex items-center justify-center" href="https://dribbble.com/itsJS" target="_blank">
            <img class="w-8 h-8" src="../assets/images/dribbble-brands.svg"/>
        </a>
        <a class="flex items-center justify-center" href="https://www.linkedin.com/in/jonathan-snow-452753150/" target="_blank">
            <img class="w-8 h-8" src="../assets/images/linkedin-in-brands.svg"/>
        </a>
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