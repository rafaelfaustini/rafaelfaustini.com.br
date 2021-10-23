class ExceptionHandler {
    constructor(config, refs) {
      this.config = config;
      this.refs = refs;
    }

    handle(msg){
        if(this.config.isDev()){
            console.log(msg)
        }
        this.refs.alertError?.alert(this.config.exceptionMessage)
        console.log(this.config.exceptionMessage)
    }
  }