
const valid = (email) => {
  let check = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;
  return check.test(email)

}



console.log (valid('borisp@gmail'))

module.exports = valid;
