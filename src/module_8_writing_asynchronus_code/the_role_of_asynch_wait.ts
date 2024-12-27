// @ts-nocheck

async function doAsyncWork() {
    let results = await GetDataFromServer();
    console.log(results);
}

console.log('Calling server to retrieve data ...');
doAsyncWork();
console.log('Results will be displayed when ready ...');