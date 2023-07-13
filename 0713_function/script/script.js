// 함수 function
// 레시피
// 공장
// 마법
// 수학
// 기능
// 함수를 선언하다
// function hello(name, lang){
//     if(lang == "ko"){
//         alert(name+"님 안녕하세요.");
//     }else if(lang == "ge"){
//         alert(name+" Guten tag.");
//     }else if(lang == "ch"){
//         alert(name+" Ni hao.");
//     }else{

//     }
// }
// hello("홍길동", "ch");

// var cel = "유재석";

// function bbb(){
//     var cel = "한지호";
//     alert(cel);
// }

// function ccc(){
//     alert(cel);
// }

// bbb(); ccc();

// function aaa(){
//     var cel = "한지호";
//     alert("가장유명한사람:"+cel);
// }
// // aaa();
// alert(cel);

// var name = prompt("이름을 입력하세요.");
// alert(name+"님 안녕하세요.");

// var a = prompt("첫 번째 수");
// var b = prompt("두 번째 수");
// alert(a+b);

// var adult = confirm("만 18세 이상입니까?");
// if(adult){
//     alert("어서오세요.");
// }else{
//     alert("애들은 가라.");
// }

// var del = confirm("정말로 데이터를 삭제하시겠습니까?");
// if(del){
//     alert("데이터가 삭제되었습니다.");
// }

// function plus(a,b){
//     var result = a + b;
//     return result;
// }

// console.log( plus(3,5) );


// document.getElementById("aaa").onclick = function(){
//     alert("누르지마");
// }
// 문서에서 아이디가 "aaa"인 녀석을 눌렀을때 이런일이 벌어질 것이다.

// function sing(){
//     alert("빨간맛 궁금해 허니~");
// }
// document.getElementById("aaa").onclick = function(){
//     sing();
// }

// document.onmousemove = function(event){
//     var x = event.clientX;
//     var y = event.clientY;
//     console.log( x + "," + y );
// }

// 변수 s에 0을 넣어둔다.
// 문서에서 아이디가 aaa인 녀석을 클릭했을때 이런일이 벌어질 것이다.
    // s를 1증가시키자
    // 문서에서 아이디가 score인 녀석의 안쪽에 s를 넣자.
// var s = 1;
// document.getElementById("aaa").onclick = function(){
//     s = s * 2;
//     s *= 2;
//     document.getElementById("score").innerHTML = s;
// }

// alert(5>9 && 6>9);
// 조건     A       B     결과
// &&     true    true    true
// &&     true    false   false
// &&     false   true    false
// &&     false   false   false

// 조건     A       B     결과
// ||     true    true    true
// ||     true    false   true
// ||     false   true    true
// ||     false   false   false

// var age = 15;
// var height = 132;
// var ticket = false;
// if((age>=15 || height>=150) && ticket){
//     alert("입장 가능");
// }else{
//     alert("입장 불가능");
// }

// var deposit = 100000;
// var monthly = 700;
// var distance = 15;
// var top = true;
// var direction = "south";
// if((deposit <= 100000 && monthly <= 500 && distance <= 15 && top) && direction){
//     alert("입주");
// }else{
//     alert("입주 안함");
// }

$(".main").mouseover(function(){
    $(this).children(".sub").stop().slideDown();
});
$(".main").mouseout(function(){
    $(this).children(".sub").stop().slideUp();
});


var now = 0;
function next(){
    now++;
    if(now >= 3){
        now = 0;
    }
    $("#bus").stop().animate({
        marginLeft: -100*now+"%"
    });
}

setTimeout(() => {
   next() 
}, 1000);