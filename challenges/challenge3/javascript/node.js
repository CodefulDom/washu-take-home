exports.Node = function(value, nodes) {
  this.value = value
  this.nodes = nodes || []
  console.log(this.nodes)
}
Node()
