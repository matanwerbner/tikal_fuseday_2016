if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
}


CreateObjectStore("articles","articles");

let db = null;

function CreateObjectStore(dbName, storeName) {
    var request = indexedDB.open(dbName);
    request.onsuccess = function (e){
        db = e.target.result;
        var version =  parseInt(db.version);
        db.close();
        var secondRequest = indexedDB.open(dbName, version+1);
        secondRequest.onupgradeneeded = function (e) {
            db = e.target.result;
            try{
                db.createObjectStore(storeName, {
                        keyPath: 'uuid'
                });
            }catch(e) {

            }
        };
    }
}

export const add = (snapshot) => {
        var request = db.transaction(["articles"], "readwrite")
                .objectStore("articles")
                .add(snapshot);

        request.onsuccess = function (event) {
              //  console.log("Kenny has been added to your database.");
        };

        request.onerror = function (event) {
               // alert("Unable to add data\r\nKenny is aready exist in your database! ");
        }
}

export const read = (key) => {
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
}

export const readAll = () => {
        return new Promise((resolve, reject) => {
                var retVal = [];
                var objectStore = db
                        .transaction("articles")
                        .objectStore("articles");

                objectStore
                        .openCursor()
                        .onsuccess = function (event) {
                        var cursor = event.target.result;
                        if (cursor) {
                                retval[cursor.key] = cursor.value;
                                cursor.continue();
                        } else {
                                resolve(retVal);
                        }
                };
        });
}
