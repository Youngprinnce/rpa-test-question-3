//Test case one
const numArray1 = [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1];

//Test case two
const numArray2 = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];

const maxNumber = (array) =>{
    //intitialize count
    let count = 0;

    //Final result
    let result = 0;
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        //rest count to 0
        if (element == 0) {
            count = 0;
        } else {
            //increment count and assign to result
            count++;
            result = count;
        }
    }

    return result;
}

console.log(maxNumber(numArray1));
console.log(maxNumber(numArray2));

