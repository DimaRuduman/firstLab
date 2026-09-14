let datas = ["hello", "my", "name", "is", "dima", true, false, true , true , false , 5, 6, 4, 4, 3, 6, 7, 8, 9, 9, null, null, null, undefined ,undefined, undefined, undefined];
let type;


let objDatas = {};

for (let item of datas){
    if (item === null){
        type = "null"
    }    else {
        type = typeof item;
    }


if (objDatas[type] == undefined){
    objDatas[type] = 0;
}

objDatas[type]++
}

console.log (objDatas)
