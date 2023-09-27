let sum = (a,b, callback) =>{
    let tong = a+b;
    // setTimeout(() =>{
    //     callback(tong);

    // }, 5000)
    let i =0;
    let timer = setInterval(() => {
        callback(tong),
        i++;
        if(i === 5){
            clearInterval(timer);
        }
    }, 1000);

}
let printSum = (message) =>{
    console.log('check sum a+b = ',message);  
}
let = function  hello(x,y) {
    console.log(x,y)
}
sum(12, 14, printSum)
// console.log('check sum a+b = ',sum(10,11));