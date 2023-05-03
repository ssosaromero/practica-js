// const valid = (email) => {
//   const filter = /\S+@\S+\.\S{2,}/;
//   return filter.test(email);
// };


const valid = (email) => {
  let check = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;
  return check.test(email)

}

console.log (valid('borisp@gmail'))

module.exports = valid;  // Do not remove.

// TODO: return true if the `email` string has the right pattern!
