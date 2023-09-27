let sum = (a,b) => {
    return a+b;
}
let obj = {
    name: "minh chi",
    age: "21",
    getName: function(){
        return this.name;
    }
}

console.log('get name obj => ', obj.getName())

// console.log('tính tổng a + b = ',sum(15,20));