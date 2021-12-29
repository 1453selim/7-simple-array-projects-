const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "22.5%", "18.8%", "19.5%", "20.2%", "31.6%"];



function firstSafeLevel(arr) {
    for (i=0 ; i < arr.length; i++) {
      if(arr[i] > "19.5%" && arr[i] < "23.5%") {  
        return arr[i];     
      }
    }
  }
  
  
  function allSafeLevels(arr) {
    let result = [];           
    for (i=0 ; i < arr.length; i++) {
      if(parseInt(arr[i]) > 19.5 && parseInt(arr[i]) < 23.5) { 
        result.push(arr[i]);     
      }
    }
    return result;
  }
  
  console.log(firstSafeLevel(oxygenLevels1));
  console.log(allSafeLevels(oxygenLevels2));





