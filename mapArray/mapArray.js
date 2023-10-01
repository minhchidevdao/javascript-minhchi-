let arr = [1,2,3,4,5,6,7,8,9,10]

let mapArr = arr.map((item, index) =>{
    return (
        `<td>${item} -${index}</td>`
    )
})

console.log('check value arr:', arr);
console.log('check value arr:', mapArr);

// Array map() dùng để cover lại một mảng ban đầu thành một mảng mới
// mà không làm thay đổi giá trị của mảng cũ