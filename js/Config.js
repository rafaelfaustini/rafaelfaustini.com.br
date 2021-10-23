class Config {
    constructor() {
      this.base_path="config"
      this.name = "config.json"
      this.environment = "dev";
      this.language = "en";
      this.generalTextsPath = "config/website_en.json";
      this.projectTextsPath = "config/projetos_en.json";
      this.exceptionMessage = "Unexpected Error, try again later.";
      this.load();
    }

    isDev() {
        return this.environment == "dev"
    }

    isProd() {
        return this.environment == "prod"
    }

    isBeta() {
        return this.environment == "beta"
    }

    load() {
           return axios.get(`${this.base_path}/${this.name}`)
            .then(function (response) {
                response = response.data;
                this.environment = response?.environment || "dev"
                let lang = response?.language || "en"
                this.language = lang
                this.generalTextsPath = `${this.base_path}/website_${lang}.json`
                this.projectTextsPath = `${this.base_path}/projetos_${lang}.json`
                this.exceptionMessage = response?.exception_message || this.exceptionMessage
            }.bind(this))
            .catch(function (error) {
              // handle error
              console.log("Could not load website config");
            })  .then(function () {
                // always executed
            });
    }
  }