// Define the database as an object
const HomeInventoryDatabase = {}
const couch = {
    name:'couch',
    location:'garage',
    description:'black leather'
}
const pictures = {
    name:'high guy',
    location:'bedroom',
    description:'orange, red, blue'
}
const microwave = {
    name:'microwave',
    location:'kitchen',
    description:'white'
}
// PUSH objects into HomeInventory object above.
HomeInventoryDatabase.furniture = [couch]
HomeInventoryDatabase.crafts = [pictures]
HomeInventoryDatabase.electronics = [microwave]

// console.log('couch', couch)
// let stringifiedcouch = JSON.stringify(HomeInventoryDatabase)

// let stringifiedcouch = JSON.stringify(couch);

// localStorage.setItem('couch', stringifiedcouch);

// function setData(jsObject, nameTag){
//     let stringifiedObject = JSON.stringify(jsObject);
//     localStorage.setItem(nameTag, stringifiedObject);
// }

// Saves into localStorage.
const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
// Invokes function above. 
saveDatabase(HomeInventoryDatabase,'HomeInventory');

// CALL ME! Calls whats in localStorage...in browser.
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

// Invoking function and also printing in console.
console.log(loadDatabase('HomeInventory'))
// saveDatabase('couch', couch)