'use strict';
Vue.component('project', {
    props: {
        data: { type: Object },
    },
    template: `
    <div data-cy="project">
        <div class="container-projetos">
            <div class="col" v-if="!data.image" :style="{'background-color': data.style?.backgroundColor,'height': data.style?.height+'vh'}" data-cy="project-generated-img">
                <p class="projeto-titulo" data-cy="project-generated-title" style="margin-top: calc(15vh - 1em);">{{data.title}}</p>
            </div>
            <div class="col" v-else>
                <img loading="lazy" class="img-responsiva" data-cy="project-img" :src="data.image?.src" :alt="data.image?.alt">
            </div>
            <div class="col">
                <h3 class="h3" data-cy="project-title">{{data.title}}
                    <span
                        v-if="data.year" class="badge primary_background secondary_text badge-sm ml-1" data-cy="project-year">{{data.year}}</span>
                    <span v-if="data.language" class="badge complementary_background secondary_text badge-sm" data-cy="project-language">{{data.language}}</span>
                </h3>
                <p class="showcase__description mb-4 color-gray" v-html="data.description" v-if="data.description" data-cy="project-description"></p>
                <div class="projeto-botoes" data-cy="project-buttons">
                    <a :href="data.site?.url" v-if="data.site" class="btn btn-primary" target="_blank" data-cy="project-visit">{{data.site?.name}}</a>
                    <a :href="data.source?.src" v-if="data.source" class="btn btn-outline-primary" target="_blank" data-cy="project-source">{{data.source?.name}}</a>
                </div>
            </div>
        </div>
    </div>

    `,
});
