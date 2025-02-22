/** 데이터 타입 확인 */

const num = 100;
console.log(typeof num); //number
console.log(typeof "Hello"); //string

console.log(typeof "Hello" === "string"); //true
console.log(typeof false === "boolean"); //true
console.log(typeof undefined === "undefined"); //true
console.log(typeof null === "null"); //false
console.log(typeof null === "object"); //true

console.log(typeof null); //object
console.log(typeof []); //object
console.log(typeof {}); //object

console.log([].constructor);
console.log([].constructor === Array); //true
console.log({}.constructor === Object); //true

/** constructor : 생성자
 */

/** null 데이터 어떻게 타입을 확인할 수 있을까? */
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(null).slice(8, -1)); //Null

/**코드 재사용 */
function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(checkType("abcd"));
console.log(checkType(12));
console.log(checkType([]));
console.log(checkType(null));
console.log(checkType({}));
console.log(checkType(function () {})); //Function
console.log(checkType(true)); //Boolean
console.log(checkType(undefined)); //Undefined
