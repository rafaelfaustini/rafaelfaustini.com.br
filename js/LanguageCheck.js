"use strict";
Vue.component("language-check", {
    props: {
        dados: { type: Array, default: null, required: false },
    },
    data: function () {
        return {
            show: false,
        };
    },
    mounted(){
        this.checkLang();
    },
    methods: {
        chooseEnglish() {
            window.location.href = 'http://rafaelfaustini.com';
            localStorage.setItem('lang', 'en');
        },
        choosePortuguese() {
            this.$refs.modalLang.close();
            localStorage.setItem('lang', 'pt');
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
                app.exception.handle(error)
            }
        },
    },
    template: `
    <modal ref="modalLang">
        <h2 class="f2">Please select an option</h2>
        <p class="f7 my-7">We've detected that you are accessing from a non portuguese speaker location, choose the language that you feel more comfortable</p>
        <button class="btn btn-primary f9" @click="choosePortuguese()">Português</button>
        <button class="btn btn-secondary f9" @click="chooseEnglish();">English</button>
    </modal>
    `,
});
