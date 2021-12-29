// 1. BÖLÜM
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
function changeCountires(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = [arr[i], arr[i].substring(0, 3).toUpperCase(), arr[i].length]
  }
  return arr;
}

console.log(changeCountires(countries));



// 2. BÖLÜM 
const numbers = "315469781318158";

const lastArray2 = (arr) => arr.split("").map(element => element % 2 === 0 ? element = element + "-" : "") 
console.log(lastArray2(numbers).join(""));

const arrNumbers= numbers.split("").map(addtire);
function addtire(ithem){
  if(ithem % 2 ===0 ) {
    
    ithem = ithem+"-"
    return ithem
  }else {
    return ""
  }
}
arrNumbers[arrNumbers.length-1]=8

console.log(arrNumbers.join(""));






// 3. BÖLÜM
 let arr = [5, 24, 122, 625, 3125, 15625];
 
 function isOdd(number) {
   return number % 2 == 1;
 }
 function divide(number) {
   return number / 25;
 }
 console.log(arr.filter(isOdd).map(divide));//tek sayılar ve 25 bolumu
  