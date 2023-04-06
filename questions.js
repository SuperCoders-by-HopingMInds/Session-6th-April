

// a = () => 10 
// b = ()=>{return n2(10)}
function sum(a, b) {
    return a() + b()
}


let n1 = () => 10
let n2 = (x) => x + x


console.log(sum(n1, ()=>{return n2(10)}))


