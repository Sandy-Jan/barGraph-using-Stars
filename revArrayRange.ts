function revRange(arr:number[], l:number, r:number):number[]{
    while( l < r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }
    return arr;
}
let arr = [1,2,3,4,5,6,7,8,9,10];
let rev = revRange(arr, 2,7);
console.log(rev);
