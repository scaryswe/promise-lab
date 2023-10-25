// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("--- Oops ---");
    resolve('>>> Success! <<<');
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// We get the error message that we set to get on error
// **2)** What happens when you call both `resolve` and `reject`? Test this.
// It goes chronologically so whichever came first
// **3)** Does the order matter you call resolve and reject matter? Test this. 
// Yes we get the first one
// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// Just one is run