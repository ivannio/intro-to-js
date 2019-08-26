console.log('arrays');

const myDangArray = ['string', 69, true,];

//console.log(myDangArray[1]);

const printArrayValue = (arr, index) => {
    console.log(arr[index]);
}

printArrayValue(myDangArray, 1);

const names = ["Anna", "George", "John", "Paul", "Not Ringo", "Grag", "Grig", "Grag"];

// The following works but it tells me whether or not each index value is equal to greg
// const gregOrNot = (arr) => {
//     for (i = 0; i <= arr.length; i++) {
//         if (arr[i] === "Greg") {
//             console.log("Greg is here");
//         } else {
//             console.log("Greg ain't here");
//         }
//     }
// }

const gregOrNot = (arr) => {
    if (arr.includes("Greg")) {
        console.log("Greg is here");
    } else {
        console.log("Greg ain't here");
    }
}
gregOrNot(names);

const palindromeOrNot = (string) => {
    const stringArr = string.split('');
    const reversedArray = stringArr.reverse();
    const newString = reversedArray.join('');
    if (string === newString) {
        console.log("Congrats, you found a palindrome");
        } else {
            console.log("Nope!");
    }
}

palindromeOrNot("cat");
palindromeOrNot("dog");
palindromeOrNot("racecar");


