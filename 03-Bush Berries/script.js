let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]

function safeBush(arr) {
  let dangeriousItems = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != "pink") {
      dangeriousItems.push(arr[i]);
    }
  }

  if (dangeriousItems.length > 0) {//dangerous ithem varsa 
    return "dont eat this bush"
  }
  else {//dangerous ithem yok ise                                                                                                                                                 
    return "you can eat this bush "
  }

}
console.log(safeBush(bushBerryColours1));
console.log(safeBush(bushBerryColours2));

//solution 2
function bushChecker(arr) {
  
  let dangerious = arr.find(value => ( value !== "pink"));
  
  
  if (dangerious){
    
    console.log("dont eat this bush")
  } else {
    console.log("you can eat this bush")
  }
}

bushChecker(bushBerryColours1);
bushChecker(bushBerryColours2);

//solution 3
function bushCheck(arr) {
  
  let safeItems = arr.every(item => ( item === "pink")); // every returns "true" if condtion is true.
  //console.log(dangeriousItems)
  
  if (safeItems){
    console.log("you can eat this bush")
  } else {
    console.log("dont eat this bush")
  }
}

 bushCheck(bushBerryColours1);
 bushCheck(bushBerryColours2);