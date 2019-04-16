// exports.updateTree = function(tree) {
//   if (tree.value && tree.value > 5) {
//     tree.value = 1
//   }

//   for (let node of this.nodes) {
//     updateTree(node)
//   }
// }

const tree = { a: 2, b: { c: 7, d: 9, e: { f: 33, g: 12 }, f: 44 } }

const updateTree = (aTree) => {
  const treeString = JSON.stringify(aTree)
  console.log('1', typeof treeString)
  console.log('2', treeString)
  console.log('3', treeString.match(/[5-9]|\d{2,}/g))
  const treeString2 = treeString.replace(/[5-9]|\d{2,}/g, '1')
  const newTree = JSON.parse(treeString2)

  console.log('4', newTree)
  console.log('5', typeof newTree)
  return newTree
}

updateTree(tree)
