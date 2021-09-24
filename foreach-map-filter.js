/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    const newArray = [];

    arr.forEach(function(value){
        newArray.push(value * 2);
    })

    // for (let value of arr){
    //     newArray.push(value * 2);
    // }
    return newArray;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    const newArray = [];

    arr.forEach(function(value){
        if (value % 2 === 0){
            newArray.push(value);
        }
    })
    // return arr.filter(function(value){
    //     return value % 2 === 0;
    // });
    return newArray;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    const newArray = [];

    arr.forEach(function(value){
        let firstLetter = value[0];
        let lastLetter = value[value.length-1];
        newArray.push(firstLetter.concat(lastLetter));

    })

    return newArray;

    // From Solution

    // arr.forEach(function(val) {
    //     newArr.push(val[0] + val[val.length - 1]);
    // });
    // return newArr;
    
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){

    // Creating a new array to store values is not required...

    const newArray = [];

    arr.forEach(function(obj){
        obj[key] = value; 
        newArray.push(obj);     
    })
    return newArray;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    // From solution 
    let lowercaseString = str.toLowerCase().split("");

    const vowelLibrary = {};
    const vowels = 'aeiou';


    // I don't understand this part!
    lowercaseString.forEach(function(letter){
        if (vowels.indexOf(letter) !== -1){
            if (vowelLibrary[letter]){
                vowelLibrary[letter]++;
            } else {
                vowelLibrary[letter] = 1;
            }
        }
    });

    // I don't understand the above part!!!

    return vowelLibrary;
    // // let lowercaseString = new Array(str.toLowerCase());
    // // let lowercaseString = str.toLowerCase();
    // let letterCountA = 0;
    // let letterCountE = 0;
    // let letterCountI = 0;
    // let letterCountO = 0;
    // let letterCountU = 0;
    // const vowelLibrary = {};

    // lowercaseString.forEach(function(value){

    //     for (let i = 0; i < value.length; i ++){

    //         if (value.charAt(i) === 'a'){
    //             letterCountA ++;
    //         }
    //         else if (value.charAt(i) === 'e'){
    //             letterCountE ++;
    //         }
    //         else if (value.charAt(i) === 'i'){
    //             letterCountI ++;
    //         }
    //         else if (value.charAt(i) === 'o'){
    //             letterCountO ++;
    //         }
    //         else if (value.charAt(i) === 'u'){
    //             letterCountU ++;
    //         }  

    //     }
      
    // })

    // // for (let i = 0; i < str.length; i++){
    // //     if (lowercaseString.charAt(i) === 'a'){
    // //         letterCountA ++;
    // //     }
    // //     else if (lowercaseString.charAt(i) === 'e'){
    // //         letterCountE ++;
    // //     }
    // //     else if (lowercaseString.charAt(i) === 'i'){
    // //         letterCountI ++;
    // //     }
    // //     else if (lowercaseString.charAt(i) === 'o'){
    // //         letterCountO ++;
    // //     }
    // //     else if (lowercaseString.charAt(i) === 'u'){
    // //         letterCountU ++;
    // //     }
    // // }

    // if (letterCountA !== 0){
    //     vowelLibrary.a = letterCountA;          
    // }
    // if (letterCountE !== 0){
    //     vowelLibrary.e = letterCountE;
    // }
    // if (letterCountI !== 0){
    //     vowelLibrary.i = letterCountI;
    // }
    // if (letterCountO !== 0){
    //     vowelLibrary.o = letterCountO;
    // }
    // if (letterCountU !== 0){
    //     vowelLibrary.u = letterCountU;
    // }

    // return vowelLibrary;
}



/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map(function(value){
        return value * 2;
    });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(value, index){
        return value * index;
    })
    
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){

    return arr.map(function(value){
        return value[key];
    })

}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){

    return arr.map(function(value){
        let firstName = value.first;
        let lastName = value.last;
        let fullName = (firstName.concat(' ')).concat(lastName);
        return fullName;
    })

}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    // const filterByKey = [];
    return arr.filter(function(obj){
        if (obj.hasOwnProperty(key)){
            return obj;
        }
    })
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    return arr.filter(function(value){
        return value === searchValue;
    }) [0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

// How do you return only the first one??
function findInObj(arr, key, searchValue) {
    return arr.filter(function(value){
        return value[key] === searchValue;
    }) [0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/


function removeVowels(str) {
    const vowels = 'aeiou';
    let lowercaseArray = str.toLowerCase().split("");
    // let lowercaseString = new Array(str.toLowerCase());
    return lowercaseArray
    .filter(function(word){
        return vowels.indexOf(word) === -1;
        // for (let letter of word){
        //     return 'aeiou'.indexOf(letter) === -1;
        // }
    })
    .join("");
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {

    const notDivisibleByTwo = arr.filter(function(value){
        return value % 2 !== 0;
    })

    return notDivisibleByTwo.map(function(value){
        return value * 2;
    })
}
