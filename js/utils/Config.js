class Config {
    static base_path="config"
    static name = "config.json"
    static environment = "dev";
    static language = "en";
    static generalTextsPath = "config/website_en.json";
    static projectTextsPath = "config/projetos_en.json";
    static exceptionMessage = "Unexpected Error, try again later.";

    static isDev() {
        return this.environment == "dev"
    }

    static isProd() {
        return this.environment == "prod"
    }

    static isBeta() {
        return this.environment == "beta"
    }

    static isEnglish() {
        return this.language == "en";
    }

    static load(onLoad) {
           return axios.get(`${Config.base_path}/${Config.name}`)
            .then(function (response) {
                response = response.data;
                Config.environment = response?.environment || "dev"
                let lang = response?.language || "en"
                Config.language = lang
                Config.generalTextsPath = `${Config.base_path}/website_${lang}.json`
                Config.projectTextsPath = `${Config.base_path}/projetos_${lang}.json`
                Config.exceptionMessage = response?.exception_message || Config.exceptionMessage
                onLoad();
            }.bind(this))
            .catch(function (error) {
              // handle error
              console.log("Could not load website config");
            })  .then(function () {
                // always executed
            });
    }
  }