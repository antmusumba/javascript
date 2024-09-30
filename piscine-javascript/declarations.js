
const escapeStr = "`\\/,\"'";
const arr = [4, '2'];
const obj = {
  str: "This is a string",
  num: 42,
  bool: true,
  undef: undefined
}
const nested = Object.freeze({
  arr: Object.freeze([4, undefined, '2']),  
  obj: Object.freeze({                      
    str: "This is another string",
    num: 24,
    bool: false
  })
});
Object.freeze(nested);
/* const obj = {
  str : "hello",
  num : 56,
  bool : true,
  undef : undefined

}
*/