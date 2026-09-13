let datas = ["hello", "my", "name", "is", "dima", true, false, true , true , false , 5, 6, 4, 4, 3, 6, 7, 8, 9, 9, null, null, null, undefined ,undefined, undefined, undefined];

let objDatas = {
    Number: 0,
    String: 0,
    Boolean: 0,
    Biglnt: 0,
    NULL: 0,
    undefined: 0
};

for (let data of datas) {   
    
if ( typeof (data) == "number"){
    objDatas.Number++
}

if ( typeof (data) == "string"){
    objDatas.String++
}

if ( typeof (data) == "boolean"){
    objDatas.Boolean++
}

if ( typeof (data) == "bigint"){
    objDatas.Biglnt++
}   

if (data == null) {
    objDatas.NULL++
}

if ( typeof (data) == "undefined"){
    objDatas.undefined++
}
}

console.log (objDatas);
