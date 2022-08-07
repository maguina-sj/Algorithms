// push front

function pushFront (arr, val) {
    for ( let i = arr.length; i>=0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = val;
    return arr;
}

console.log(pushFront([1,2,3,4,5], 0))

//pop front

function popFront (arr) {
    let temp = arr[0];
    for (let i = 0; i< arr.length; i++) {
        arr[i] = arr[i+1]
    }
    arr.length = arr.length-1;
    console.log(arr)
    return temp;
}

console.log(popFront([1,2,3,4,5]));

//insert at

function insertAt (arr,index, val) {
    for (let i = arr.length; i >= index; i--) {
        arr[i] = arr[i-1];
    }
    arr[index] =val;
    return arr;
}

console.log(insertAt([1,2,6,7], 3, 4))