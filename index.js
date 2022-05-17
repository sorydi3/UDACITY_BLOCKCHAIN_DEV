const Blockclass = require('./block.js')


// const data1 = "Blockchain Rock!";
// const dataObject = {
//     id:1,
//     body: "with Objects works too",
//     time: new Date().getTime().toString().slice(0,-3)
// }

// function generateHash(obj) {
//     return sha256(JSON.stringify(obj));
// }

// console.log(`SHA256 Hash: ${generateHash(data1)}`);
// console.log(`SHA256 Hash: ${generateHash("HELLOW WORLD")}`);
// console.log(`SHA256 Hash: ${generateHash(dataObject)}`);
// console.log(`SHA256 Hash: ${generateHash("MY NAME IS IBRAHIMA SORY")}`);

//2fad68ec976395e50513979ed65fa27b4a959741838b1714e4ef910afa56d6b1
//creating the block
const block = new Blockclass.Block("Test Block");

//generating the block hash
block.generateHash().then((result)=>{
 console.log(`Block hash: ${result.hash}`)
 console.log(`Block hash: ${JSON.stringify(result)}`)
}).catch((error) => {console.log(error)});

