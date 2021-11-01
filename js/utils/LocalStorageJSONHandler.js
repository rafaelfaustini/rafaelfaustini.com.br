class LocalStorageJSONHandler {
    static expiryTime = 6.048e8;

    static isVersionExpired(obj) {
        return obj?.expiry < Date.now();
    }

    static isVersionPassed(obj) {
        return obj?.version != Config.build?.version;
    }

    static get(key, callback) {
        let stored = localStorage.getItem(key);
        if (!stored) {
            return null;
        }
        let jsonObj = JSON.parse(stored);
        if (this.isVersionExpired(jsonObj) || this.isVersionPassed(jsonObj)) {
            return null;
        }
        Logger.log(`Using cached object ${key}`);
        callback(jsonObj);
    }

    static _getExpiredDate() {
        return Date.now() + this.expiryTime;
    }

    static set(key, obj) {
        const model = JSON.stringify({
            value: obj,
            expiry: this._getExpiredDate(),
            version: Config.build.version,
        });

        localStorage.setItem(key, model);
    }
}
