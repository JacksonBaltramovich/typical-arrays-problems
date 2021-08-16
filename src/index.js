
exports.min = function min (array) {
    if(!Array.isArray(array)||array.length===0){
        return 0;
      }
    let minimum = array.sort((a,b) => a - b);
        return minimum[0];
}

exports.max = function max (array) {
    if(!Array.isArray(array)||array.length===0){
        return 0;
      }
      let maximum = array.sort((a,b) => b - a);
        return maximum[0];
}

exports.avg = function avg (array) {
    if(!Array.isArray(array)||array.length===0){
        return 0;
      }
      return array.reduce((a, b) => (a + b)) / array.length;
}
