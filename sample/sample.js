const arr = [1,2,3];
const arr1 = [3,8,1,5,2,7];
// const totalValue = arr.reduce((total, currentValue)=>{ return total * currentValue}, 1);
// console.log(totalValue);
// console.log(arr);

// const mappedArr = arr.map((num)=> { return num+1});
// console.log(mappedArr);


// const filteredArr = arr.filter((num) => { return num % 2 ===0});
// console.log(filteredArr);


// function filterRange(arr, a, b){
//     return filterArr = arr
//     .filter((num)=> num >= a && num <= b);
// }
// console.log(filterRange(arr, 3 , 6));


// function filterRangeInPlace(arr, a, b){
//    for (i=0; i < arr.length; i++){
//     if (arr[i] < a || arr[i] > b){
//         arr.splice(i,1);
//         i--; }
        
//     }
//     return arr;
// }
// console.log(filterRangeInPlace(arr, 2, 5));
// console.log(arr);

// function sumOfTripledEvens(){ 
//     return arr
// .filter((n) => { return n % 2 ===0})
// .map((n)=> { return n*3})
// .reduce((total, currentValue) => total + currentValue);
// }
// console.log(sumOfTripledEvens());



// function camelize(str){
//     return str
//     .split("-")
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join(""); 
// }
// console.log(camelize("my-long-word"));


// console.log(arr1.sort((a,b)=> b-a)) ;


// function copySorted(arr){
//     return arr.
//     slice().sort((a,b)=> b-a);

// }
// console.log(copySorted(arr));
// console.log(arr);



// function shuffle(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return  arr;
// } 
//     let count = {
//         "123": 0,
//         "132": 0,
//         "213": 0,
//         "231": 0,
//         "321": 0,
//         "312": 0
//     }
//     for (let i = 0; i < 1000000; i++){
//         let arr = [1,2,3];
//         shuffle(arr);
//         count [arr.join("")]++;
//     }
//     for (let key in count){
//         console.log(`${key}: ${count[key]}`);
//     }    
//     console.log(shuffle(arr));



//   let strArr = ["omer","amra","omer","amra","amuri","ome","amuri","1995","1995"];
    //   function unique(arr){
//         let result = [];
//         for (let str of arr){
//             if (!result.includes(str)){
//                 result.push(str);
//             }
//         }
//         return result;
//       }
//       console.log(unique(strArr));

    // shorter way to get unique values from an array using Set data structure
    // let uniqueArr = [...new Set(strArr)];
    // console.log(uniqueArr); 


    // function repeatString(str, times){
    //     if (times < 0) {
    //         return "ERROR";
    //     } else {
    //     return str.repeat(times);
    //     }
    // }
    // console.log(repeatString("nura ", 5));

    // function reverseString(str){
    //         return str
    //         .split("").reverse().join("");
    // }
    // console.log(reverseString("nura is the best"));

    // function removeFromArray(arr,num){
    //     return arr
    //     .filter(n => n !== num);
    // }
    // console.log(removeFromArray(arr1, 3));

    // function sumAll(min, max){
    //     if ( !Number.isInteger(min) || !Number.isInteger(max))
    //         return "ERROR";
    //     if (min < 0 || max < 0)
    //         return "ERROR";
        
    //     if (min > max)
    //         [min , max] = [max , min];
        
        
    
    //     let sum = 0;
    // for (i=0; i <= max; i++){
    //     sum += i;
    // } 
    // return sum;
    // }
    // console.log(sumAll(5, -2));

    // function leapYear(year){
    //     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    //         return `${year} is a leap year.`;
    //     } else {
    //         return `${year} is not a leap year.`;
    //     }
    // }
    // console.log(leapYear(2000))

    // function convertToFahrenheit(celsius){
    //     const FahrenheitScale =(celsius * 9/5) + 32;
    //     const roundedFar = Math.round(FahrenheitScale * 10) / 10;
    //     return roundedFar;
    // }
    // function convertToCelsius(fahrenheit){
    //     const CelsiusScale = (fahrenheit - 32) * 5/9;
    //     const roundedCel = Math.round(CelsiusScale * 10) / 10;
    //     return roundedCel;
    // }
    // console.log(convertToFahrenheit(0));
    // console.log(convertToCelsius(32));

    
    const container = document.querySelector(".container");

    const content = document.createElement("p");
    content.classList.add("content");
    content.textContent = "Hey I'm red!";   
    content.style.color = "red";
    container.appendChild(content);

    const heading = document.createElement("h3");
    heading.classList.add("heading");
    heading.textContent = "I'm a blue h3!";
    heading.style.color = "blue";;
    container.appendChild(heading);

    const div = document.createElement("div");
    div.classList.add("contain");
    div.setAttribute("style", "border: solid;border-color:black; background-color :pink;");
        
    const divHeading = document.createElement("h1");
    divHeading.classList.add("div-heading");
    divHeading.textContent = "I'm in a div";
    div.appendChild(divHeading);

    const divParagraph = document.createElement("p");
    divParagraph.classList.add("div-paragraph");
    divParagraph.textContent = "Me too!";
    div.appendChild(divParagraph);

    container.appendChild(div);

  
  
    function alertFunction(){
        alert("Hello World!");
    }
    const button = document.querySelector("#btn");
    button.style.padding = "10px 20px";
    button.style.marginTop = "20px";
    button.addEventListener("click", function(e){
        console.log(e);
        console.log(e.target);
       e.target.style.background = "yellow";
       alertFunction();
    });

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            alert(button.id);
        })
    });