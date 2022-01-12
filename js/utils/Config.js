class Config {
    static base_path = 'config';
    static filename = 'config.json';
    static environment = 'dev';
    static language = 'en';
    static generalTextsPath = 'config/website_en.json';
    static projectTextsPath = 'config/projetos_en.json';
    static exceptionMessage = 'Unexpected Error, try again later.';
    static build = null;

    static isDev() {
        return this.environment == 'dev';
    }

    static isProd() {
        return this.environment == 'prod';
    }

    static isBeta() {
        return this.environment == 'beta';
    }

    static isEnglish() {
        return this.language == 'en';
    }

    static async _loadBuild() {
        try {
            let build = (await axios.get('build.json')) || null;
            if (build) {
                this.build = build.data;
            }
        } catch (error) {
            console.log('Could not load the build file');
        }
    }

    static _load(response = null) {
        Config.environment = response?.environment || 'dev';
        let lang = response?.language || 'en';
        Config.language = lang;
        Config.generalTextsPath = `${Config.base_path}/website_${lang}.json`;
        Config.projectTextsPath = `${Config.base_path}/projetos_${lang}.json`;
        Config.exceptionMessage = response?.exception_message || Config.exceptionMessage;
    }

    static load(onLoad) {
        debugger
        axios
            .get(`${Config.base_path}/${Config.filename}`)
            .then(
                function (response) {
                    response = response.data;
                    this._loadBuild();
                    this._load(response);
                    onLoad();
                }.bind(this)
            )
            .catch(
                function (error) {
                    this._loadBuild();
                    this._load();
                    onLoad();
                    // handle error
                    console.log('Could not load website config, loaded defaults');
                }.bind(this)
            )
            .then(function () {
                // always executed
            });
    }
}
