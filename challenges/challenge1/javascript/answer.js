// exports.transformData = function(array_of_foos) { };

Foo = function(x, y) {
  this.x = x
  this.y = y
}
Foo.prototype.getX = function() {
  return this.x
}
Foo.prototype.getY = function() {
  return this.y
}

let array_of_foos = [new Foo('x1', 'y1'), new Foo('x2', 'y2')]

const transformData = (arr) => {
  const transformedObject = {}
  for (const item in arr) {
    let newKey = arr[item].getX()
    transformedObject[newKey] = { value: arr[item].getY() }
  }
  return transformedObject
}

let transformed = transformData(array_of_foos)
console.log(transformed)
