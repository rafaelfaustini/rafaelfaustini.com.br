'use strict';
var app = new Vue({
    el: '#app',
    data: {
        config: null,
        created: null,
        exception: null,
        refreshcache: String.fromCharCode(Math.floor(Math.random() * 1000)),
        textos: null
        },
    async beforeMount() {
        this.config = new Config();
        await this.config.load()
        this.exception = new ExceptionHandler(this.config, this.$refs);
        ContentTextManager.loadText(`../${this.config?.generalTextsPath}`, this.textVariables, this.onTextLoaded)
    },
    mounted() {
    },
    methods: {
        onTextLoaded(text){
            this.textos = text;
        }
    },
    computed: {
        textVariables() {
            return {
                age: this.age, // {age} from the json is replaced with the dinamic variable
            };
        },
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
