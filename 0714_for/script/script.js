// ~하는 동안은 계속 반복한다.
// for(시작값 ; 조건식 ; 증감식){
//     // 반복할 내용
// }
// i 는 반복한 횟수를 의미

// text = "a";
// text = text + "b";

// for(i=0; i<5; i++){
//     document.getElementById("para1").innerHTML 
//     = document.getElementById("para1").innerHTML + i;
// }

// 0부터 100까지의 정수를 더하는 코드를 작성하시오. 
// 0+1+2+3+....+98+99+100
// var total=0;
// for(i=0; i<=100; i++){
//     total = total + i;
// }
// document.getElementById("para1").innerHTML = total;

// 100부터 0까지의 정수를 더하는 코드를 작성하시오.
// 100+99+98+97+...+4+3+2+1+0
// var total=0;
// // for(i=0; i<=100; i++){
// //     total = total + (100-i);
// // }
// for(i=100; i>=0; i--){
//     total = total + i;
// }

// 0+2+4+6+8+10+...+96+98+100
// var total=0;
// for(i=0; i<=100; i++){
//     if(i%2 == 0){
//         total = total + i;
//     }
// }
// document.getElementById("para1").innerHTML = total;

// 1+3+5+7+9+...+97+99
// var total=0;
// for(i=0; i<=100; i++){
//     if(i%2 == 1){
//         total = total + i;
//     }
// }
// document.getElementById("para1").innerHTML = total;

// 아이디가 para1인 태그 내부에 100개의 * 을 기입하는 코드를 작성하시오.
// var star = "";
// for(i=0; i<10; i++){
//     star = star + "<b>ㅎ</b>";
// }
// document.getElementById("para1").innerHTML = star;

// 아이디가 date인 태그의 내부에 <option></option>를 기입하는 행위를
// 31번 반복하되 옵션태그 내에는 1부터 31까지의 숫자가 들어가야 한다.
// 반복하자 31번
    // 아이디 date에 내용추가하자
        // <option>{반복한횟수+1}</option>
// var tag = "";
// for(i=0; i<31; i++){
//     tag = tag + "<option>" + (i+1) + "</option>";
// }
// document.getElementById("date").innerHTML = tag;

// 오감도 - 이상
// var fiveSense = "";
// var chinese = ["一","二","三","四","五","六","七","八","九","十","十一","十二","十三"];
// for(i=0; i<13; i++){
//     if(i==0 || i==10){
//         fiveSense = fiveSense + "第"+chinese[i]+"의兒孩가무섭다고그리오<br/>";
//     }else{
//         fiveSense = fiveSense + "第"+chinese[i]+"의兒孩도무섭다고그리오<br/>";
//     }
// }
// document.getElementById("para1").innerHTML = fiveSense;


