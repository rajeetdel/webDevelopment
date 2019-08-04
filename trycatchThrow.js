function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo]) {
      return months[mo];
    } else {
      throw 'InvalidMonthNo'; //throw keyword is used here
    }
  }
  
  try { // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
  }
  catch (e) {
    monthName = 'unknown';
    //logMyErrors(e); // pass exception object to error handler -> your own function
  }