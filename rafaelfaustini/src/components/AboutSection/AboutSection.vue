<template>
    <section id="about" class="about-section">
        <div class="container">
            <div class="about-info">
                <h1 class="title">{{ title }}</h1>
                <p class="paragraph" v-for="paragraph in paragraphs" :key="paragraph" v-html="paragraph"></p>
            </div>
            <div class="about-image">
                <img loading="lazy" src="/img/about/me.png" />
            </div>
        </div>
    </section>
</template>
  
  <script lang="ts">
  import Vue, {PropType} from 'vue';
  
  export default Vue.extend({
    name: 'AboutSection',
    props: {
        title: String,
        paragraphs: Array as PropType<string[]>
    },
    components: {
    }
  });
  </script>
  
  <style lang="scss">
    .about-section {
        background-color: transparent;
        .container {
            max-width: 1242px;
            margin: 0 auto;
            padding: 60px 0 20px 0;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            .about-info {
                flex: 11 1 100px;
                margin: 0px 10px;
                .title{
                    font-size: 3em;
                    margin-bottom: 0.5em;
                }
                .paragraph {
                    font-size: 1.35em;
                    line-height: 1.4;
                    margin-bottom: 1em;
                    color: #7c7c7c;
                }
                .destaque {
                        color: inherit;
                        border-bottom: solid 1px #d32f2f;
                        transition: font-weight .4s ease-out,text-shadow .4s ease-out,color .8s ease-out;
                        font-weight: 200;
                        &:hover {
                            font-weight: bolder;
                            color: #d32f2f;
                            text-shadow: 1px 1px 0px #dfdfdf, 2px 2px 0px #dfdfdf, 3px 3px 0px #dfdfdf;
                        }
                    }
            }
            .about-image {
                flex: 1 1 329px;
                margin: 0 10px;
                .img {
                    height: auto;
                    display: block;
                    max-width: 100%;
                }
            }

        }
    }
  </style>
  