function MinToFront(arr) {
    let min = arr[0];
    let idx = 0;
    for (let i =1; i< arr.length; i++) {
        if(arr[i] < min) {
            min=arr[i]; 
            idx=i;
        }
    }
    for ( let x =idx; x>0; x--) {
        let temp = arr[x];
        arr[x] =arr[x-1];
        arr[x-1] = temp;
    } 
    return arr;
    }




console.log(MinToFront([9,5,8,2,3]))