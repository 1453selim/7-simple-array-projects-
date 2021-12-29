const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, ,"75"];

 function handleFilter(arr) {
    let result = [];

    for(i=0; i<arr.length; i++) {          
      if (typeof arr[i] === 'number') {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(handleFilter(arrCase1));
  console.log(handleFilter(arrCase2));
 



//solution 2
  function checkedNumber (item) {
    if (typeof item === 'number') {
      return item;
    }
  }
  let Numbers1 = arrCase1.filter(checkedNumber)
  let Numbers2 = arrCase2.filter(checkedNumber)
  console.log(Numbers1)
  console.log(Numbers2)
  