const streetNames = [
    "Carnaby Street",
    "Abchurch Lane",
    "Adam's Court",
    "Piccadilly Street",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk",
    "Brick Lane"
]

//solution 1
function filterStreet(arr) {
  
    let result = [];
    for (i=0 ; i < arr.length ; i++) {
      if(arr[i].includes("Lane")){
        result.push(arr[i]);
      }
    }
  
    return result; 
  }
  
  console.log(filterStreet(streetNames));
  //solution 2

  function findLanes3(arr) {
    let result = arr.filter(element => element.includes('Lane'));
    return result;
  }
  console.log(findLanes3(streetNames))
