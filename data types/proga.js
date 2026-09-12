let datas = ["hello", "my", "name", "is", "dima", true, false, true , true , false , 5, 6, 4, 4, 3, 6, 7, 8, 9, 9, null, null, null]  ;

let objDatas = {
    Number: 0,
    String: 0,
    Boolean: 0,
    Biglnt: 0,
    NULL: 0,
    undefined: 0
};

for (let i = 0; i < datas.length; i++){



if ( typeof (datas[i]) == "number"){
    objDatas.Number++
}

if ( typeof (datas[i]) == "string"){
    objDatas.String++
}

if ( typeof (datas[i]) == "boolean"){
    objDatas.Boolean++
}

if ( typeof (datas[i]) == "bigint"){
    objDatas.Biglnt++
}

if (datas[i] == null) {
    objDatas.NULL++
}

if ( typeof (datas[i]) == "undefined"){
    objDatas.undefined++
}

}

console.log (objDatas);
