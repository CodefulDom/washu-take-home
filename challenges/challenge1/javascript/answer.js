exports.transformData = function(array_of_foos) {
  const transformedObject = {}
  for (const item in arr) {
    let newKey = arr[item].getX()
    transformedObject[newKey] = { value: arr[item].getY() }
  }
  return transformedObject
}

let transformed = transformData(array_of_foos)
console.log(transformed)

// Revert this to es2015!!!
