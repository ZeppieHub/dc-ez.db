ezdb = module.exports;
const fs = require('fs');

ezdb.set = (dbName, dbValue) => {
    if(!dbName) return console.error("Write a database name!");
    if(dbValue !== 0 && !dbValue) return console.error("Write a value for database!");
    var print = { "name":dbName, "value":dbValue };
    var data = require('./data.json');
    data[dbName] = print;
    fs.writeFileSync('./node_modules/dc-ez.db/data.json', JSON.stringify(data));
    return true;
}

ezdb.get = dbName => {
    if(!dbName) return console.error("Write a database name!");
    var data = require('./data.json');
    var print = data[dbName];
    if(!print) return false;
    return print["value"];
}

ezdb.add = (dbName, dbValue) => {
    if(!dbName) return console.error("Write a database name!");
    if(!dbValue) return console.error("Write a value for database!");
    var data = require('./data.json');
    data[dbName]["value"] = data[dbName]["value"] + dbValue;
    fs.writeFileSync('./node_modules/dc-ez.db/data.json', JSON.stringify(data));
    return true;
}

ezdb.remove = dbName => {
    if(!dbName) return console.error("Write a database name!");
    var data = require('./data.json');
    data[dbName] = {  };
    fs.writeFileSync('./node_modules/dc-ez.db/data.json', JSON.stringify(data));
    return true;
}

ezdb.push = (dbName, dbValue) => {
    if(!dbName) return console.error("Write a database name!");
    if(dbValue !== 0 && !dbValue) return console.error("Write a value for database!");
    var data = require('./data.json');
    if(typeof data[dbName]["value"] !== 'object') return console.error("This database's value is not a array/list!");
    try{
        data[dbName]["value"].push(dbValue);
        fs.writeFileSync('./node_modules/dc-ez.db/data.json', JSON.stringify(data));
    } catch (err) {
        return console.error(err);
    }
    return true;
}
