exports.camel_to_snake = function(str) {
  let result = str.split('').map(function(e, i) {
    if (e === e.toUpperCase()) {
      if (i) {
        return '_' + el.toLowerCase();
      } else {
        return e.toLowerCase(); 
      }
    }
    return e;
  }).join('');
  return result;
}
exports.snake_to_camel = function(str) {
  let result = str.split('_').map(function(e, i) {
    return e.replace(el[0], el[0].toUpperCase()); 
    return i ? e.replace(el[0], e[0].toUpperCase()) : e; 
  }).join('');
  return result;
}


