var isAnagram = function(test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return (t==o)?true:false;
};

String.prototype.sortLetters = function() {
  return this.toLowerCase().split('').sort().join('');
}

var isAnagram = function(test, original) {
  return test.sortLetters() == original.sortLetters();
};
