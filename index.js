var sha256 =  require("crypto-js/sha256");
const data1 = "Bllochaicn 1";
const dataObject = {
    id:1,
    body: "with Objects works too",
    time: new Date().getTime().toString().slice(0,-3)
}

function generateHash(obj) {
    return sha256(JSON.stringify(obj));
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log(`SHA256 Hash: ${generateHash("HELLOW WORLD")}`);
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);
console.log(`SHA256 Hash: ${generateHash("MY NAME IS IBRAHIMA SORY")}`);