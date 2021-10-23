'use strict';
var app = new Vue({
    el: '#app',
    data: {
        config: null,
        created: null,
        exception: null,
        reps: 0,
        listaExperiencias: [],
        loaded: false,
        projetos: [],
        refreshcache: String.fromCharCode(Math.floor(Math.random() * 1000)),
        textos: null
        },
    async beforeMount() {
        this.config = new Config();
        await this.config.load()
        this.exception = new ExceptionHandler(this.config, app.$refs);
        this.getText();
    },
    mounted() {
        this.getProjetos();
    },
    methods: {
        getText() {
                axios.get(this.config.generalTextsPath).then(function (response) {
                    const data = JSON.parse(this.injectVariables(response.request.response));
                    this.textos = data.website;  
                }.bind(this)).catch(function (error) {
                    this.exception.handle(error)
                }.bind(this)) ;
        },
        getProjetos() {
            try {
                let stored = localStorage.getItem('projetos');
                if (stored) {
                    var projetosStored = JSON.parse(stored);
                    if (projetosStored.expiry > Date.now()) {
                        this.projetos = projetosStored.value;
                        return;
                    }
                }

                axios.get(this.config.projectTextsPath).then(function (response) {
                    this.projetos = response.data;
                    const projetos = {
                        value: response.data,
                        expiry: Date.now() + 6.048e8, // 1 Week
                    };
                    localStorage.setItem('projetos', JSON.stringify(projetos));
                }.bind(this)).catch(function (error) {
                    this.exception.handle(error)
                }.bind(this));

            } catch (error) {
                this.exception.handle(error)
            }
        },


        injectVariables(text) {
            // Replaces {variable} from json to a javascript variable
            let variables = {
                age: this.age, // {age} from the json is replaced with the dinamic variable
            };
            Object.keys(variables).forEach(function (key) {
                text = text.replace(`{${key}}`, variables[key]);
            });
            return text;
        },
    },
    computed: {
        age() {
            return moment().diff('1999-04-17', 'years');
        },
        envBadge() {
            let style = {}
            style['badge secondary_text badge-sm f7'] = true;
            style[this.config?.environment || "null"] = true;
            return style
        }
    },
});
