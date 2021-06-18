// let firstname ="saimoon"
// let lastname = "ahmed"

// console.log(`My name is ${firstname} ${lastname}`)

// var student1 = ["saimoon","nabeel"]
// var student2 = ["ahmed","ahmed"]
// var merge = student1.concat(student2)
// console.log(merge)

// var student1 = ["saimoon","nabeel"]
// var student2 = [...student1,"ahmed","ahmed"]
// console.log(merge)

// var student1 = {name:"nabeel"}
// var student2 = {...student1,school:"saylani"}
// console.log(student2)



// var student = {
//     name : "saimoon",
//     school : "saylani",
//     roll : 123,
// }
// let {name,school,roll} = student;

// console.log(name)
// console.log(school)
// console.log(roll)


// var age = 20
// var check = age > 30 ? "30 sa bara ha" : "30 sa chota hai"
// console.log(check)


// var age = 20
// var check = age > 30 || age < 50 ? "30 sa bara ha" : "30 sa chota hai"
// console.log(check)


// var age = 20
// var check = age > 30 && age < 50 ? "30 sa bara ha" : "30 sa chota hai"
// console.log(check)



// var promise = new Promise(function(resolve,reject){
//     var zinger = "available";

//     if (zinger === "available"){
//         resolve("ok")
//     }else{
//         reject("not ok")
//     }
// })

// promise.then(function(data){
//    console.log("Resolve===>",data)
// })
// .catch(function(error){
//    console.log("reject===>",error)
// })   





var promise = new Promise(function(resolve,reject){
 firebase.Database().ref().on(Child_added,function(data){
     if (data.val()){
        resolve(data.val())
     }else{
         reject("something went wrong")
     }

 })

})

promise.then(function(data){
   console.log("Resolve===>",data)
})
.catch(function(error){
   console.log("reject===>",error)
})   