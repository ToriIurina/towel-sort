
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  } else {
    let newArr = [];
    matrix.forEach(function (item, index) {
      if(index % 2 !== 0) {
        item.reverse();
      }
      newArr = newArr.concat(item);
    });
    return newArr;
  }
}
