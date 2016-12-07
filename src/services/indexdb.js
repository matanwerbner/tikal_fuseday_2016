if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

var db;
var request = window
        .indexedDB
        .open("articlesDb", 1);

request.onerror = function (event) {
        console.log("error: ");
};

request.onsuccess = function (event) {
        db = request.result;
        console.log("success: " + db);
};

request.onupgradeneeded = function (event) {}

export const add = (snapshot) => {
        var request = db.transaction(["articles"], "readwrite")
                .objectStore("articles")
                .add(snapshot);

        request.onsuccess = function (event) {
                alert("Kenny has been added to your database.");
        };

        request.onerror = function (event) {
                alert("Unable to add data\r\nKenny is aready exist in your database! ");
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
