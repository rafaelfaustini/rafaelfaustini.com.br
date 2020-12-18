'use strict';
Vue.component('projetos', {
    props: {
        dados: { type: Array, default: null, required: true },
        tamanho: { type: Number, default: 50 },
        placeholder: { type: String, default: 'Busque por uma palavra chave, tecnologia ou ano' },
    },
    data: function () {
        return {
            filtro: '',
        };
    },
    computed: {
        filtrada: function () {
            var resultado;
            if (this.filtro) {
                resultado = this.dados.filter(item => {
                    let result = false;
                    for (var [, value] of Object.entries(item)) {
                        if (typeof value === 'string') {
                            result = result || value.toLowerCase().trim().includes(this.filtro.toLowerCase().trim());
                        }
                    }
                    return result;
                });
            } else {
                resultado = this.dados;
            }
            let sortBy = [
                {
                    prop: 'ano',
                    direction: -1,
                },
                {
                    prop: 'destaque',
                    direction: -1,
                },
                {
                    prop: 'titulo',
                    direction: 1,
                },
            ];
            return resultado.sort(function (a, b) {
                let i = 0,
                    result = 0;
                while (i < sortBy.length && result === 0) {
                    result = sortBy[i].direction * (a[sortBy[i].prop].toString() < b[sortBy[i].prop].toString() ? -1 : a[sortBy[i].prop].toString() > b[sortBy[i].prop].toString() ? 1 : 0);
                    i++;
                }
                return result;
            });
        },
    },
    template: `
    <div class="container section">
        <div class="row">
          <div class="col-md-12 py-2">
            <div class="md-input">
                <input v-model="filtro" required></input>
                <label>Buscar por palavra chave</label>
            </div>
          </div>
        </div>   
        <div id="projetos_" :style="{
            'min-height': tamanho+'vh',  
            'max-height': tamanho+'vh',
            'overflow-y': 'auto',
            'overflow-x':'hidden'
            }">
        <div class="pj" v-for="projeto in filtrada">    
         <div class="container-projetos">
            <div class="col" v-if="!projeto.imagem" :style="{  
          'background-color': projeto.fundo,
          'height': projeto.height+'vh',
          }
          ">
                <p class="projeto-titulo" style="margin-top: calc(15vh - 1em);">{{projeto.titulo}}</p>
            </div>
            <div class="col" v-else>
                <img class="img-responsiva" :src="projeto.imagem" :alt="projeto.descricao">
                </div>
            <div class="col">
                    <h3 class="h3">{{projeto.titulo}}
                        <span
            v-if="projeto.ano" class="badge primary_background secondary_text badge-sm ml-1">{{projeto.ano}}</span>
                        <span v-if="projeto.linguagem" class="badge complementary_background secondary_text badge-sm">{{projeto.linguagem}}</span>
                    </h3>
                    <p class="showcase__description mb-4 color-gray" v-html="projeto.descricao" v-if="projeto.descricao"></p>
                    <div class="projeto-botoes">
                    <a :href="projeto.site" v-if="projeto.site" class="btn btn-primary" target="_blank">{{projeto.siteName}}</a>
                    <a :href="projeto.source" v-if="projeto.source" class="btn btn-outline-primary" target="_blank">{{projeto.sourceName}}</a>
                    </div>
                </div>
                </div>
                <hr class="text-white">
            </div>
            </div>
        </div>
    `,
});
