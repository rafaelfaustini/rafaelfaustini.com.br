<template>
    <div class="home">
        <HomeHeader></HomeHeader>
        <About></About>
        <ProfessionalExperience></ProfessionalExperience>
    </div>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader.vue';
import About from '@/components/home/About.vue';
import ProfessionalExperience from '@/components/home/ProfessionalExperience.vue';

export default {
    name: 'Home',
    components: {
        HomeHeader,
        About,
        ProfessionalExperience,
    },
};
</script>
