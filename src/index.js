module.exports = function longestConsecutiveLength(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  let seq = 0; 
  let maxSeq = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      continue;
    } 
    seq++;
    if (array[i] + 1 !== array[i + 1]) {
      if (seq > maxSeq) maxSeq = seq;
    seq = 0;
    }
    
  }
  return array.length > 1 ? maxSeq : array.length;
}
