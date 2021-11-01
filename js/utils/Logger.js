class Logger {
    static log(message) {
        if (Config.isDev()) {
            console.log(message);
        }
    }
}
