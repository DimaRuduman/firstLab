const obj = { n: 5 };

function inc (num) {
    num.n = num.n+1
}

inc(obj);

console.dir(obj)