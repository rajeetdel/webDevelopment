function Person() {
    var self = this; // Some choose `that` instead of `self`. 
                     // Choose one and be consistent.
    self.age = 0;
  
    setInterval(function growUp() {
      // The callback refers to the `self` variable of which
      // the value is the expected object.
      self.age++;
    }, 1000);
  }
  
  var p = new Person();
  console.log(p);