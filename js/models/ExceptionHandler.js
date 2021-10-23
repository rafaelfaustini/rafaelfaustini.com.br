class ExceptionHandler {
    constructor(config) {
      this.config = config
    }

    handle(msg){
        if(this.config.isDev()){
            console.log(msg)
            return
        }
        console.log(this.config.exceptionMessage)
    }
  }