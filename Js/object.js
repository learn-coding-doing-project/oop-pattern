// Object creation
let Aqurds = {
    name: "Aqurds",
    moto: "Win with Tech!",
    address: "Mirpur, Dhaka, Bangladesh",
    getName: function() {
        console.log(this.name);
        return this;
    },
    getAddress: function() {
        console.log(this.address);
        return this;
    }
};

// Make Object's property readonly, can't be changed
// let newAqurds = Aqurds.getName().getAddress();
// console.log(newAqurds)
// Object.defineProperty(Aqurds, "name", {writable:false});
// Aqurds.getName().getAddress();
// Aqurds.name = "Aquams";

// Iterate object
// for (const property in Aqurds) {
//     console.log(property)
//     // console.log(`${property}: ${Aqurds[property]}`);
// }

// // Object destructuring

    // destructure with existing variables
// let {name, address} = Aqurds;
// console.log(name);

    // destructure with new variables
// let {name:companyName, address:companyAddress} = Aqurds;
// console.log(companyName);

    // destructure with new variables
// let {name:companyNameWithDefaultValue="Aqurds New", companyWebsite="Aqurds.com"} = Aqurds;
// // Is equivalent to
// // let company_website = Aqurds.hasOwnProperty('company_website') ? person.company_website : 'Aqurds.com';
// console.log(companyWebsite);

//     // Nested Object Destructuring
// var obj = {
//     a: {
//         c: 1,
//         d: 3
//     },
//     b: 2
// };
// var {
//     a: {
//         c: x,
//         d: y
//     },
//     b: z
// } = obj;
// console.log(x, y, z); // 1,3,2

//     // Arrays Within Object
// var obj = {
//     a: 1,
//     b: [2, 3]
// };
// var {
//     a: x1,
//     b: [x2, x3]
// } = obj;
// console.log(x1, x2, x3); // 1 2 3

//     // Objects Within Arrays
// var arr = [1, 2 , {a : 3}, 4];
// var [x1, x2 , {a : x3}, x4] = arr;
// console.log(x1, x2, x3, x4);

//     // Destructuring Arrays
// const myArr = ['one', 'two', 'three']
// const [ a, b, c ] = myArr
// // a = 'one', b = 'two, c = 'three





const createTable = {
    data: [],
    targetElem: "",
    state: false,
    createdTable: "",
    connect: function(data, selector, options) {
        console.log("get data and assign to corresponding variables.")
        this.dataValidate();
        return this;
    },
    dataValidate: function() {
        console.log("check and validate data")
        this.checkElementPassed();
        return this;
    },
    checkElementPassed: function(){
        console.log("check element passed and exist")
        this.createHeader();
        return this;
    },
    createHeader: function() {
        console.log("create header with data from object")
        this.createMainTable();
        return this;
    },
    createMainTable: function() {
        console.log("create main table and insert data")
        this.insertTable();
        return this;
    },
    insertTable: function() {
        console.log("insert created table in the targeted element")
        console.log("Table inserted successfully!");
        return this;
    }
}

let batch = createTable;

batch.connect({}, "table-wrapper", {background:"red"})

let sumon = $;

sumon("p").on("click", ()=>{console.log("clicked")})

