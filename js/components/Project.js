'use strict';
Vue.component('project', {
    props: {
        data: { type: Object },
    },
    template: `
    <div data-cy="project">
        <div class="container-projetos">
            <div class="col" v-if="!data.image" :style="{'background-color': data.fundo,'height': data.height+'vh'}">
                <p class="projeto-titulo" style="margin-top: calc(15vh - 1em);">{{data.title}}</p>
            </div>
            <div class="col" v-else>
                <img loading="lazy" class="img-responsiva" :src="data.image.src" :alt="data.image.alt">
            </div>
            <div class="col">
                <h3 class="h3">{{data.title}}
                    <span
                        v-if="data.year" class="badge primary_background secondary_text badge-sm ml-1">{{data.year}}</span>
                    <span v-if="data.linguagem" class="badge complementary_background secondary_text badge-sm">{{data.linguagem}}</span>
                </h3>
                <p class="showcase__description mb-4 color-gray" v-html="data.description" v-if="data.description"></p>
                <div class="projeto-botoes">
                    <a :href="data.site" v-if="data.site" class="btn btn-primary" target="_blank">{{data.siteName}}</a>
                    <a :href="data.source.src" v-if="data.source" class="btn btn-outline-primary" target="_blank">{{data.source.name}}</a>
                </div>
            </div>
        </div>
    </div>

    `,
});
