let datas = ["hello", "my", "name", "is", "dima", true, false, true , true , false , 5, 6, 4, 4, 3, 6, 7, 8, 9, 9, null, null, null, undefined ,undefined, undefined, undefined];

let types = [
    { type: "string", number: 0 },
    { type: "number", number: 0 },
    { type: "boolean", number: 0 },
    { type: "null", number: 0 },
    { type: "undefined", number: 0 }];

for (let item of datas) {

    if (typeof item == "string") {
        types[0].number++;
    }

    if (typeof item == "number") {
        types[1].number++;
    }

    if (typeof item == "boolean") {
        types[2].number++;
    }

    if (item === null) {
        types[3].number++;
    }

    if (typeof item == "undefined") {
        types[4].number++;
    }
}

console.log(types);