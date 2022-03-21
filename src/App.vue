<template>
    <div id="app" class="page-content">
        <Navbar></Navbar>
        <router-view />
    </div>
</template>
<style lang="scss">
@import '@/assets/scss/styles.scss';
</style>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'App',
    components: {
        Navbar,
    },
};
</script>
