function reverseArray(arr) {
    var l = 0;
    var r = arr.length - 1;
    while (l < r) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var rev = reverseArray(arr);
console.log(rev);
