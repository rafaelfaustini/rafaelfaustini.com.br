'use strict';
new Vue({
    el: '#app',
    data: {
        created: null,
        reps: 0,
        listaExperiencias: [],
        loaded: false,
        projetos: [],
        refreshcache: String.fromCharCode(Math.floor(Math.random() * 1000)),
        textos: null,
    },
    mounted() {
        this.getText();
        this.getProjetos();
        this.checkLang();
    },
    methods: {
        async getText() {
            try {
                const response = await axios.get('website.json');
                this.textos = response.data.website;
                console.log(this.textos);
            } catch (error) {
                console.log(error);
                return false;
            }
        },
        async getProjetos() {
            try {
                let stored = localStorage.getItem('projetos');
                if (stored) {
                    var projetosStored = JSON.parse(stored);
                    if (projetosStored.expiry > Date.now()) {
                        this.projetos = projetosStored.value;
                        return;
                    }
                }

                const response = await axios.get('projetos.json');
                this.projetos = response.data;
                const projetos = {
                    value: response.data,
                    expiry: Date.now() + 6.048e8, // 1 Week
                };
                localStorage.setItem('projetos', JSON.stringify(projetos));
            } catch (error) {
                console.log(error);
                return false;
            }
        },
        async checkLang() {
            var lang = localStorage.getItem('lang');
            if (!lang) {
                var foreigner = await this.checkLocation();
                if (foreigner) {
                    this.$refs.modalLang.open();
                }
            } else {
                if (lang === 'pt') return;
                if (lang === 'en') window.location.href = 'http://rafaelfaustini.com';
            }
        },
        async checkLocation() {
            try {
                var loc = localStorage.getItem('foreigner');
                if (loc === undefined) {
                    const response = await axios.get(`http://api.ipstack.com/check`, {
                        params: {
                            // eslint-disable-next-line camelcase
                            access_key: GEOLOCATIONKEY,
                        },
                    });
                    let foreigner = true;
                    let linguas = response.data.location.languages;
                    linguas.forEach(elemento, () => {
                        if (elemento.code === 'pt') {
                            foreigner = false;
                        }
                    });
                    localStorage.setItem('foreigner', foreigner);
                    return foreigner;
                }
                return loc === 'true';
            } catch (error) {
                console.log(error);
                return false;
            }
        },
        chooseEnglish() {
            window.location.href = 'http://rafaelfaustini.com';
            localStorage.setItem('lang', 'en');
        },
        choosePortuguese() {
            this.$refs.modalLang.close();
            localStorage.setItem('lang', 'pt');
        },
    },
    computed: {
        age() {
            return moment().diff('1999-04-17', 'years');
        },
    },
});
