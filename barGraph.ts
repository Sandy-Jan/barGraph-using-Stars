function maxEle(arr:number[]){
    let maxi = -Infinity; //taking maximum element
    let idx = -1; // taking the index of the maximum element

    for(let i=0; i<=arr.length; i++){
        //done to check the elements till the last value
        if(arr[i] > maxi){
            //checking if the maxi's value is more than index value of the array
            //if the index's value is more then the maxi then we will assign the array value to
            // the maxi
            maxi = arr[i];
            //after doing this we will assign the value of index
            idx = i
        }
    }
    return maxi; // returning maxi's value
    
}
// now we are going to print bar graph
function barGraph(arr:number[]){
    let maxi = maxEle(arr) // giving the maxi a value of maximum element of array
    let n = arr.length // deciding how long the graph is going to be printed

    for(let floor=maxi; floor >=1; floor--){
        // checking if the value of array is max by giving the name of floor
        let s:string = ' '; //assigning the s string to put value later on

        for(let i=0; i<=n; i++){
            // now we will traverse the array and then print its value line by line;
            if(arr[i] >= floor){
                s += "*\t";
            } // here we are checking if index of array is equal or higher than floor length
            else{
                s += " \t";
            }
        }
        console.log(s) ; //printing the got output of each line.
        
    }
    //now we are assigning the value of each number to the star
    let s:string = '';
    for(let i=0; i<n; i++){
        s += arr[i]+ "\t" //it is done to get our output in spacious manner
    }
    // here we are printing our desired outcome
    console.log(s);
    
}
barGraph([1,2,3,4,5,4,3,2,1])