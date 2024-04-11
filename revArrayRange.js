function revRange(arr, l, r) {
    while (l < r) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var rev = revRange(arr, 2, 7);
console.log(rev);
