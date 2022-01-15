<template>
    <div class="project-slide" data-cy="project" :style="style" loading="lazy">
        <div id="background"></div>
        <div class="container">
            <div class="flex-item">
                <h3 data-cy="project-title" class="h4">
                    {{ title }}
                </h3>
                <span data-cy="project-year" class="badge primary_background secondary_text badge-sm ml-1 p-5">2020</span>
                <span data-cy="project-language" class="badge complementary_background secondary_text badge-sm p-5">Python</span>
                <p class="f6">{{ description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Projects',
    props: {
        image: { type: Object },
        backgroundColor: { type: String },
        height: { type: Number },
        title: { type: String },
        year: { type: String },
        description: { type: String },
    },
    computed: {
        style: function () {
            const styles = {};
            if (this.img) {
                styles['backgroundImage'] = `url(${require('@/assets/images/projects/' + this.img)})`;
            }

            if (this.backgroundColor) {
                styles['backgroundColor'] = this.backgroundColor;
            }

            return styles;
        },
        img: function () {
            if (!this.image) {
                return '';
            }

            return this.image.src;
        },
    },
};
</script>
<style lang="scss" scoped>
.container {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.flex-item {
    padding: 5px;
    margin: 10px;
    line-height: 20px;
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
}
.project-slide {
    background: #42b983;
    background-size: cover;
    width: 100%;
    height: 400px;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
}
</style>
