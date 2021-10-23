class ExceptionHandler {

    static handle(msg){
        if(Config.isDev()){
            console.log(msg)
        }
        app.$refs.alertError?.alert(Config.exceptionMessage)
        console.log(Config.exceptionMessage)
    }
  }