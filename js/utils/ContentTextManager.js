class ContentTextManager {

    static injectVariables(text, variables) {
        // Replaces {variable} from json to a javascript variable
        Object.keys(variables).forEach(function (key) {
            text = text.replace(`{${key}}`, variables[key]);
        });
        return text;
    }

    static loadText(path, variables, onComplete){
        axios.get(path).then(function (response) {
            const data = JSON.parse(ContentTextManager.injectVariables(response.request.response, variables));
            onComplete(data.website);  
        }.bind(this)).catch(function (error) {
            ExceptionHandler.handle(error)
        }.bind(this)) ;
    }
  }