// let arr = [1,2,3,4,5,6,7,8,9,10];

let arr =[
    { name: 'minh chi', age: 20 },
    { name: 'hoang phuc', age: 20 },
    { name: 'vu hoang', age: 21 },
    { name: 'thanh long', age: 17 }
]

// hàm filter dùng để tìm lọc các phần tử thỏa mãn điều kiện
// hàm find dùng để tìm lọc và trả về phần tử đầu tiên thỏa mãn điều kiện

let filter = arr.find((item, index) =>{
    // console.log()
    return item && item.age === 20;

});
console.log(filter);