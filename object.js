console.log('Object');

// key: value
let obj = {
    name: 'minh chi', address: 'Gia lai',
    email: 'minhchi@gmail.com', gender: 'Nam'
};

let b = 'name';
obj[b] = 'Ala'

console.log('what your name ?',`my name's:`,obj['name'])
console.log(`where are your from ?`,`Im from: `,obj.address)