// Function using callbacks
function squareNumberCallback(number, callback) {
    setTimeout(() => {
      if (isNaN(number)) {
        callback(new Error('Input is not a number'));
      } else {
        const result = number * number;
        callback(null, result);
      }
    }, 1000);
  }
  
  // Function using promises
  function squareNumberPromise(number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isNaN(number)) {
          reject(new Error('Input is not a number'));
        } else {
          const result = number * number;
          resolve(result);
        }
      }, 1000);
    });
  }
  
  module.exports = {
    squareNumberCallback,
    squareNumberPromise
  };
  