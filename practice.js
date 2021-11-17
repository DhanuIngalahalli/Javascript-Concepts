//synchronous
function myfun() {
    console.log("Inside Function")
}
console.log("Start")
myfun()
console.log("End")

//Asynchronous

console.log("Start")
setTimeout(() => {
    console.log("Inside SetTimeout")
},2000)
console.log("End")


console.log("Start")
const roll = [1,2,3,4,5]
roll.forEach(r => {
    console.log(r)  
})
c0onsole.log("End")



console.log("start")
function getname(name) {
    setTimeout(() => {
        console.log("Inside SetTimeout")
        return name;
    },2000)
}
const nm = getName('Dhanu')
console.log(nm)
console.log("End") 

//callback
console.log("start")
function getname(name,callback) {
    setTimeout(() => {
        console.log("Inside SetTimeout")
        callback(name);
    },2000)
}
const nm = getName('Dhanu', (nm) => { console.log(nm) })
console.log("End") 






//callback
console.log("start")
function getname(name, callback) {
    setTimeout(() => {
        console.log("Inside Name SetTimeout")
        callback(name);
    },2000);
}
function getHobbies(name, callback) {
    setTimeout(() => {
        console.log("Inside  Hobbies SetTimeout")
        callback(['Cricket','Reading','Dancing']);
    },2000);
}
const nm = getname('Dhanu', (nm) => { console.log(nm);
getHobbies(nm,(hobby)=>{console.log(hobby)})})
console.log("End")


//Promise
console.log("start")
function getname(name) {
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("Inside Name SetTimeout")
        resolve(name);
    },2000);
 })
}
function getHobbies(name, callback) {
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("Inside  Hobbies SetTimeout")
        resolve(['Cricket','Reading','Dancing']);
    },2000);
  })
}
//getname('Dhanu')
//.then(nm => getHobbies(nm))
//.then(hobby => console.log(hobby))

async function showHobby(){
    const nm = await getName('Dhanu')
    const hobby = await getHobbies(nm)
    console.log(hobby)
}
showHobby()

console.log("End")




