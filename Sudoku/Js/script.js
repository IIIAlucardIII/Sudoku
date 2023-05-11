
const arrayLength = 81;
const currentCount = 9;

const array = [
    [5, 3, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 1, 1, 9, 5, 3, 4, 8],
    [1, 9, 2, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 5, 5, 3, 7, 9, 1],
    [7, 1, 3, 1, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 5, 1, 9, 6, 3, 5],
    [3, 4, 5, 6, 8, 6, 1, 7, 9] ];

isSudokuSolved(array);

function isSudokuSolved(array){
    
    // validating the rows
    for (let i = 0; i < array.length; i++) {
        if(!areNumbersUnique(array[i])){
            return false;
        }
    }

    // validating the columns
    for (let i = 0; i < array.length; i++) {
        let column = [9];
        for (let j = 0; j < array.length; j++) {
            column[j] = array[j][i];
        }
        if(!areNumbersUnique(column)){
            return false;
        }
    }

    // validating the 3x3 squares
    for (let i = 0; i < array.length; i+=3) {
    
        for (let j = 0; j < array.length; j+=3) {
        
            let squeare = [];
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    squeare.push(array[k + i][l + j]);
                }
            }
            if(!areNumbersUnique(squeare))
            {
                return false;
            }
        }
    }

    return true;
}

function areNumbersUnique(array){
    let set = new Set(array);
    console.log(array);
    console.log(set.size);
    return set.size == 9; 
}