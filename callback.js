


// // p1 = x  = 10
// // p2 = c = () => {console.log('hello world')}
// function display(p1,p2){ // parameter
//     console.log(p1,p2)
//     // p2()
// }

// let x = 10
// // let y = true
// // let z = 'hello'
// // let a = [1,2,3]
// // let b = {a: 1, b: 2, c: 3}

// let c = () => {
//     console.log('hello world')
//     return 100
//  }

// display(x, c) // argument    

// b = (x) => x * x
// function b(x){
//     return x * x
// }

// inbilt
// let a = 10
// let b = () =>{ console.log("I am executed")
 //              square(100)}

// function b(){ 
//     console.log("I am executed")
//    return square(100)
// }


function hello(a,b){

    console.log(a)
    console.log(b())
}


let z = 10
let square = (x) => {
    return(x * x)
}

// function square(x){
//     return x * x
// }


hello(10,   () =>{ console.log("I am executed")
                    return square(100)} 
     )
























