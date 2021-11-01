'use strict';
var app = new Vue({
    el: '#app',
    data: {
        created: null,
        refreshcache: String.fromCharCode(Math.floor(Math.random() * 1000)),
        content: null,
    },
    async beforeMount() {
        Config.load(this.onConfigLoaded);
    },
    mounted() {},
    methods: {
        onTextLoaded(text) {
            this.content = {};
            this.content.text = text;
        },
        onConfigLoaded() {
            ContentTextManager.loadText(`${Config.generalTextsPath}`, this.textVariables, this.onTextLoaded);
        },
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
            let style = {};
            style['badge secondary_text badge-sm f7'] = true;
            style[Config.environment || 'null'] = true;
            return style;
        },
        buildVersion() {
            return `https://github.com/rafaelfaustini/rafaelfaustini.com.br/releases/tag/${Config.build?.version}`;
        },
    },
});
