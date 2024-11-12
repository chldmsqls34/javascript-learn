/**함수의 반환 및 종료
 * 
 */

function hello (){
    console.log("Hello, World!")
    /** return 키워드 이후에 작성된 코드는 동작하지 않습니다 */
};


function plusOne(num){
    /**방어코드 */
    if(typeof num === Number){
        
    }
    return num+1
};

console.log(plusOne(10)); //11
console.log(plusOne()); //NaN







