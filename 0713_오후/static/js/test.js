
// var redCup=10;
// var blueCup=20;
// var whiteCup=0;

// document.write("변경전 빨간컵 : "+redCup+"  파란컵 : "+blueCup+"<br>");

// whiteCup = redCup;
// redCup=blueCup;
// blueCup=whiteCup;

// document.write("변경후 빨간컵 : "+redCup+"  파란컵 : "+blueCup);
// //위 물음표 세줄에 들어갈 알맞은 코드를 작성하시오
// // 화면에 출력 되는 내용은 다음과 같습니다.
// // 변경전 빨간컵 : 10 파란컵 : 20
// // 변경후 빨간컵 : 20 파란컵 :10

// //  redCup=20 이렇게 하는건 금지 



// var jin =0;
// var red="빨강";
// var blue="파랑";
// var yellow="노랑";
// var green='녹색';

// jin = red;
// document.write("변경전 : " + jin +"<br>");

// jin = green;
// document.write("변경후 : "+jin);
// //  jin(청바지) 에  빨간색으로 물들였다.
// //  청바지를 녹색으로 물들이고  청바지의 색이 무엇인지 출력하시오
// // 실제 색의 출력은 그냥 숫자만 나오면 된다.(1-빨강,  2- 파랑)


// 데이터를 저장 하는 가장 기본적인 방법은  변수입니다.
// 변수를 모르면  할 수 있는게 없어요.....
//  변수에 저장되는 데이터는 오직 하나 !
//  변수에 다른 데이터를 저장하면 이전데이터위에  덮어쓰기 합니다.
//  스크립트에서 변수는  숫자를 가질수도 문자를 가질수도 있어요
//  숫자를 저장했다고  문자 저장 못하는거 아니에요.


// 제어문 -  조건문,  반복문
//  조건문 - if문,  switch문
//  반복문 - for, while, do~while

// if문 -  조건식이 참이냐 거짓이냐에 따라서 코드가 실행된다.(분기문)
// 조건식 - 결과가 참과 거짓이 나오는 식
//          비교 - >  , <  , >=  ,<=  , == , != 

// 140<= 키  ,  4<= 수업시간,   심부름 == 심부름결과(고추장)
//  내위치 ==  주문위치

// var tall = 150;
// if( tall >= 140)
// {// 조건식이 참일경우 실행되는곳
//     document.write("바이킹 탑승");
// }
// else
// { // 조거식이 거짓일때만 실행되는 곳
// document.write("바이킹 탑승 불가");
// }

// // 점수가 60점이상 이라면 합격, 60점미만 이라면 불합격
// var score= 59;
// if(score >= 60){
//     document.write("합격");
// }
// else{
//     document.write("불합격");
// }

// document.write("<br><br>");

// // 국도 8-10길에서  시속 70km 제한이 있다.
// // 과속인지 아닌지  자동차의 속도를 입력받아서 출력하시오.

// var v= Number(prompt("자동차 속도"));
// if( v > 70){
//     document.write("과속");
// }else{
//     document.write("정상 속도입니다.");
// }

// // 내 점수의 등급을 출력하고 싶다.
// //  90점이상이면 A,  80점 이상이면 B,  70점이상이면 C, 나머지는 F 
// var score = Number(prompt("나의 점수"));
// if(score >= 90){
//     document.write("<br> A등급 ");
// }else if(score >= 80){
//     document.write("<br> B 등급");
// }else if(score >= 70){
//     document.write("<br> C 등급");
// }else{
//     document.write("<br> F 등급");
// }


// 음식을 배달 주문을 하였다.
//  음식점의 위치는  중구 대흥동이다.
//  같은 구에서 주문하면 배달료 0원,  서구에서 주문하면 배달료 1000원
//  동구에서 주문하면 배달료 2000원 이라면
//  현재 나의 위치는 어디인지 입력하여  배달료 얼마인가 출력하시오
//  (중구, 서구, 동구 중 하나만 입력 합니다.)

// var my_location = prompt("나의 위치는 " );
// var tip=0; //배달료 변수

// if(my_location == "서구"){
//     tip=1000;
// }else if(my_location== "동구"){
//     tip=2000;
// }
// document.write(my_location+"에서 주문 배달료는 : "+tip+"원 <br>");


// if(my_location == "중구" ){
//     document.write("배달료 0원");
// }else if( my_location == "서구"){
//     document.write("배달료 1000원");
// }else if( my_location == "동구"){
//     document.write("배달료 2000원");
// }

// var num = Math.floor(Math.random()*44 ) + 23;

// document.write( num );

//  동전 맞추기 ,  1- 앞면 , 2- 뒷면

// var coin = Math.floor(Math.random()*2 )+1 ;

// var user = prompt("1.앞면  2.뒷면");
// if( isNaN(user) ){  // isNaN 함수는  숫자로 변환이 가능한경우 거짓,
//                     //  숫자로 변환이 불가능한경우  참 이다.
//     alert(" 숫자만 입력하세요 ");
//     user = prompt("1.앞면  2.뒷면");
// }
// user = Number(user);//문자열을  숫자로 변환

// if( coin == user ){
//     document.write( (user==1 ? '앞면' : '뒷면') +"정답 <br>");
// }else{
//     document.write(" 틀렸어... ");
// }

// 주사위 게임
//  주사위는 던져 졌다.   주사위의 숫자 무엇인지 맞추시오.
//  내가 입력한 숫자가 주사위의 숫자와 같다면  정답,  같지않다면  손목 이라고 출력

// var dice = Math.floor(Math.random()*6  )+1  ;

// var user = inputNum("1~6중에 하나만입력");

// if( user == dice ){
//     document.write(" 정답 "+ dice);
// }else {
//     document.write("손목");
// }


// function inputNum(str){
//     var a= prompt(str);
//     while( isNaN(a) ){
//         alert("숫자만 입력 가능합니다.");
//         a=prompt(str);
//     }
//     a=Number(a);
//     return a;
// }

/*
    주차장 요금 계산
    주차장 기본요금 1000원 ( 30분 )
    10분 초과시 100원 추가

    2시간 이상 주차시  기본요금 1500원
    4시간 이상 주차시 기본요금 2500원
    8시간 이상 주차시 무조건 5000원

    주차한 시간이 총몇분인가 입력하여  요금 출력하기
*/

var time = Number(prompt(" 주차 시간 "));
var cost=1000;

if( time >= 480){
    cost=5000;
    time = 0;
}else if( time >= 240){
    cost=2500;
    time = time -240;
}else if(time >= 120 ){
    cost=1500;
    time = time - 120;
}else{
    time= time<40 ? 0 : time-30;
}

var price = cost + ( parseInt(time/10) * 100);
document.write("주차요금 : " +price);