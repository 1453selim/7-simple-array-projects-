const londonLocations = [
  ["Angel", "tube", "bus"],
  ["Greenwich", "bus", "river boat", "dlr", "air line", "tube"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
]


function getTransport(arr, val) {

  let = newArr = []

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].includes(val)) {
      newArr.push(arr[i][0])
    }
  }
  return `${val} aracı ile ${newArr}'e gidebilirsiniz`
}


console.log(getTransport(londonLocations, "bus")) 
function getTransport2(arr, value) {
  let result = [];
  arr.forEach(element => {
    let found = element.includes(value) ? element[0] : ""; //includes returns true
    result.push(found);
  }
  )
  return `${value} aracı ile ${result}'e gidebilirsiniz`
}
console.log(getTransport2(londonLocations, "river boat"))

