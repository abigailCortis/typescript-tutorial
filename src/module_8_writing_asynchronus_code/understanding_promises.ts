// @ts-nocheck

function doAsyncWork(resolve, reject) {
    // perform async calls
    if (success) resolve(data);
    else reject(reason);
}

let p: Promise<string> = new Promise(doAsyncWork);

let p: Promise<string> = new Promise((resolve, reject) => {
    // perform async calls
    if (success) resolve(data);
    else reject(reason);
});

let p: Promise<string> = MethodThatReturnsPromise();
p.then(stringData => console.log(stringData))
    .catch(reason => console.log(reason));