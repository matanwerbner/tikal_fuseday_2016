if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

let db = null;

function CreateObjectStore(dbName, storeName) {
        return new Promise((resolve, reject) => {
                if(db) {
                        resolve(db);
                        return;
                }
                var request = indexedDB.open(dbName);
                request.onsuccess = function (e) {
                        db = e.target.result;
                        var version = parseInt(db.version);
                        db.close();
                        var secondRequest = indexedDB.open(dbName, version + 1);
                        secondRequest.onupgradeneeded = function (e) {
                                db = e.target.result;
                                try {
                                        db.createObjectStore(storeName, {keyPath: 'uuid'});
                                } catch (e) {}
                        };
                        secondRequest.onsuccess= function(e) {
                                resolve(e.target.result);
                        }
                }
        })

}

const createDb = () => CreateObjectStore("articles", "articles");

export const add = (snapshot) => {
        return createDb().then((db) => {
                var request = db.transaction(["articles"], "readwrite")
                        .objectStore("articles")
                        .add(snapshot);

                request.onsuccess = function (event) {
                        console.log("added item");
                        //  console.log("Kenny has been added to your database.");
                };

                request.onerror = function (event) {
                        // alert("Unable to add data\r\nKenny is aready exist in your database! ");
                }
        });
}

export const read = (key) => {
        return createDb().then((db) => {
                return new Promise((resolve, reject) => {
                        var transaction = db.transaction(["articles"]);
                        var objectStore = transaction.objectStore("articles");
                        var request = objectStore.get(key);
                        request.onerror = function (event) {
                                reject("Unable to retrieve daa from database!");
                        };
                        request.onsuccess = function (event) {
                                // Do something with the request.result!
                                if (request.result) {
                                        resolve(request.result);
                                } else {
                                        reject("Key couldn't be found in your database!");
                                }
                        };
                })
        })

}

export const readAll = () => {
        return createDb().then((db) => {
                return new Promise((resolve, reject) => {
                        let retVal = [];
                        var objectStore = db
                                .transaction("articles")
                                .objectStore("articles");

                        objectStore
                                .openCursor()
                                .onsuccess = function (event) {
                                var cursor = event.target.result;
                                if (cursor) {
                                        retVal[cursor.key] = cursor.value;
                                        cursor.continue();
                                } else {
                                        resolve(retVal);
                                }
                        };
                });
        })

}
