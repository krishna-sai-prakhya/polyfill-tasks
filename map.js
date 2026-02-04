
Array.prototype.map = function(callback) {


  const result = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
      const value = this[i];
      result[i] = callback.call("", value);
  }
  return result;
};

