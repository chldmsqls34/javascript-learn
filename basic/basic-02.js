/**
 * 원시형 데이터 타입
 */

/** 문자열, String */
const str1 = "Hello, World!";
const str2 = "World!";
const str3 = `Hello, ${str2}`; //백틱
console.log(str3);


/**
 * 숫자, Number
 * 주의할 점
 * 숫자 데이터와 다른 타입의 값을 연산할 경우 오류가난다 -> 2-1로 가기
 */

const num1 = 123;
const num2 = -123; //음수
const num3 = -123.5678;
const pi = 3.14; //부동소수점
console.log(num3+ undefined); //2-1: 출력 값이 NaN으로 나옴
console.log(typeof (num3 + undefined)); //출력 값: number
console.log(typeof pi) //출력 값: number

/**
 * NaN이라는 Not a Number 라는 데이터는 타입 자체는 숫자 데이터인데
 * 특정한 숫자 값으로 표현할 수 없기 때문에 nan으로 표시하여 출력, 변환환다.
 * 그래서 nan값이 나왔다는 것은 숫자 연산에 숫자가 아닌 다른 값이 포함되어 있을 가능성이 있다는 것을 의미한다.
 */


const a = 0.1;
const b = 0.2;

console.log(a+b); //0.30000000000000004
console.log(typeof(a+b).toFixed(1)) //string
console.log(typeof Number((a+b).toFixed(1))); //number -> 타입 형변환
console.log(Number(a+b).toFixed(1)) //0.3

/** Boolean(불린, 불리언)
 * true와 false라는 두 가지 값만 사용하는 논리 데이터
 */

const truthy = true;
const falsy = false;

if (typeof truthy === "string"){
    console.log("조건식이 참입니다.")
} else {
    console.log("조건식이 거짓입니다.")
}


/** null과 undefined
 * null: 존재하지 않는다. 값이 비어있다. 값을 알 수 없다. 명시적으로 표현한 것이다.
 * 의도적으로 변수를 비우거나, 특정 상황에서 값이 없음을 나타내기 위해 사용된다.
 * 
 * undefined: 변수가 선언되었지만, 값이 할당되지 않았음을 의미한다.
 * 함수가 값을 반환하지 않거나, 객체에서 존재하지 않는 속성에 접근했을 때도 undefined를 반환합니다.
 */


let value1 = null; //개발자의 의도가 보인다. 있다 라는 코드
console.log(value1); //출력값:null
console.log(typeof value1); //출력값: object

setTimeout(()=>{
    value1 = 30;
    console.log(value1); //30
},1000);

let value2;
console.log(value2); //undefined

/**
 * typeof null이 object인 이유는 null이 원래 이곳에 객체 참조가 있어야 하는데 참조가 없음을 나타내는 값으로 만들어졌기 때문이다.
 */


const user = {
    name: "9diin",
    age: 32,
};
console.log(user.name);
console.log(user.age);
console.log(user.email); //undefined







